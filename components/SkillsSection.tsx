import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import SectionWrapper from './SectionWrapper';
import { ALL_SKILLS } from '../constants';
import { Skill } from '../types';

type ShapeType = 'circle' | 'square' | 'rounded';

interface SkillCardProps {
  skill: Skill;
  index: number;
  domRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  shape: ShapeType;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index, domRefs, shape }) => {
  const borderRadius = shape === 'circle' ? '50%' : (shape === 'rounded' ? '20%' : '0%');

  return (
    <div
      ref={(el) => (domRefs.current[index] = el)}
      className="absolute top-0 left-0 p-2 shadow-lg bg-background flex items-center justify-center text-center cursor-pointer select-none hover:shadow-xl transition-shadow duration-300 border-none outline-none ring-0"
      style={{
        width: '115px', // Increased size (100 -> 115)
        height: '115px', // Increased size (100 -> 115)
        borderRadius: borderRadius,
        willChange: 'transform',
        visibility: 'hidden'
      }}
      title={skill.name}
    >
      <img
        src={skill.icon}
        alt={skill.name}
        className="w-16 h-16 object-contain pointer-events-none" // Increased icon size
      />
    </div>
  );
};

interface SkillsSectionProps {
  id: string;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ id }) => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  const domRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bodiesRef = useRef<Map<string, Matter.Body>>(new Map());

  // Generate random shapes once
  const shapesRef = useRef<ShapeType[]>(ALL_SKILLS.map(() => {
    const r = Math.random();
    if (r < 0.33) return 'circle';
    if (r < 0.66) return 'square';
    return 'rounded';
  }));

  useEffect(() => {
    if (!sceneRef.current) return;

    // Module aliases
    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint,
      Events = Matter.Events,
      Body = Matter.Body;

    // Create engine
    const engine = Engine.create();
    engineRef.current = engine;

    // Create renderer (optional, for debugging, but we use it to handle mouse interaction easily)
    // We can make it transparent so we only see our DOM elements
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: sceneRef.current.clientWidth,
        height: sceneRef.current.clientHeight,
        background: 'transparent',
        wireframes: false,
        showAngleIndicator: false
      }
    });
    renderRef.current = render;

    // Add bodies
    const width = sceneRef.current.clientWidth;
    const height = sceneRef.current.clientHeight;
    const wallThickness = 100; // Thicker walls

    // Widen ground significantly to prevent corner leaks
    const ground = Bodies.rectangle(width / 2, height + wallThickness / 2, width * 2, wallThickness, { isStatic: true, render: { visible: false } });
    const leftWall = Bodies.rectangle(0 - wallThickness / 2, height / 2, wallThickness, height * 5, { isStatic: true, render: { visible: false } });
    const rightWall = Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height * 5, { isStatic: true, render: { visible: false } });

    Composite.add(engine.world, [ground, leftWall, rightWall]);

    // Create skill bodies
    const skillBodies: Matter.Body[] = [];

    ALL_SKILLS.forEach((skill, index) => {
      const size = 115; // Increased by 15% (100 -> 115)
      const x = Math.random() * (width - 100) + 50;
      const y = -Math.random() * 1000 - 100; // Start higher up to spread out fall

      const shape = shapesRef.current[index];
      let body;

      const commonOptions = {
        restitution: 0.4 + Math.random() * 0.2, // Lower bounciness for snappier feel
        friction: 0.001,
        frictionAir: 0.05 + Math.random() * 0.05, // HIGH air resistance (0.05 - 0.1) for "snappy" stop
        label: skill.id,
        angle: Math.random() * Math.PI * 2, // Random initial rotation
        render: { visible: false } // Hide the physics body so it doesn't show as a border
      };

      if (shape === 'circle') {
        body = Bodies.circle(x, y, size / 2, commonOptions);
      } else {
        // Square or Rounded
        body = Bodies.rectangle(x, y, size, size, {
          ...commonOptions,
          chamfer: shape === 'rounded' ? { radius: 20 } : undefined
        });
      }

      skillBodies.push(body);
      bodiesRef.current.set(skill.id, body);
    });

    Composite.add(engine.world, skillBodies);

    // Add mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2, // Increased stiffness for snappy drag
        render: {
          visible: false
        }
      }
    });

    // Remove scroll capture so user can scroll the page
    const mouseElement = mouseConstraint.mouse.element;
    mouseElement.removeEventListener("mousewheel", (mouseConstraint.mouse as any).mousewheel);
    mouseElement.removeEventListener("DOMMouseScroll", (mouseConstraint.mouse as any).mousewheel);

    // Add STRONGER repulsion on mouse move
    Events.on(mouseConstraint, 'mousemove', function (event) {
      const mousePosition = event.mouse.position;
      skillBodies.forEach(body => {
        const dx = body.position.x - mousePosition.x;
        const dy = body.position.y - mousePosition.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const repelRange = 300;

        if (distance < repelRange) {
          const forceMagnitude = 0.5 * (1 - distance / repelRange); // VERY HIGH force (0.5) for instant reaction
          Body.applyForce(body, body.position, {
            x: (dx / distance) * forceMagnitude,
            y: (dy / distance) * forceMagnitude
          });
        }
      });
    });

    Composite.add(engine.world, mouseConstraint);

    // Run the engine
    const runner = Runner.create();
    runnerRef.current = runner;
    Runner.run(runner, engine);
    Render.run(render);

    // Sync DOM elements with physics bodies
    const updateLoop = () => {
      ALL_SKILLS.forEach((skill, index) => {
        const body = bodiesRef.current.get(skill.id);
        const domEl = domRefs.current[index];

        if (body && domEl) {
          const { x, y } = body.position;
          const angle = body.angle;

          domEl.style.visibility = 'visible';
          domEl.style.transform = `translate(${x - 57.5}px, ${y - 57.5}px) rotate(${angle}rad)`; // -57.5 for half of 115px
        }
      });

      if (engineRef.current) { // Continue loop only if engine exists
        requestAnimationFrame(updateLoop);
      }
    };

    requestAnimationFrame(updateLoop);

    // Handle resize
    const handleResize = () => {
      if (!sceneRef.current || !render.canvas) return;

      const newWidth = sceneRef.current.clientWidth;
      const newHeight = sceneRef.current.clientHeight;

      render.canvas.width = newWidth;
      render.canvas.height = newHeight;

      // Reposition walls
      Body.setPosition(ground, { x: newWidth / 2, y: newHeight + wallThickness / 2 });
      Body.setPosition(rightWall, { x: newWidth + wallThickness / 2, y: newHeight / 2 });

      // Update ground width to be super wide
      Body.set(ground, "bounds", {
        min: { x: -newWidth, y: newHeight },
        max: { x: newWidth * 2, y: newHeight + wallThickness }
      });
      // Note: Changing geometry of static body directly is tricky in Matter.js without recreating.
      // Easiest fix for resize is just to make sure the initial ground is HUGE.
      // But let's try to update vertices if needed or just rely on the initial huge width.
      // Actually, for a robust resize, we might need to recreate the ground or scale it.
      // For now, let's just reposition. The initial width * 2 should cover most resizes unless window grows 2x.

      // Keep bodies inside
      skillBodies.forEach(body => {
        if (body.position.x > newWidth) {
          Body.setPosition(body, { x: newWidth - 50, y: body.position.y });
        }
        if (body.position.y > newHeight) {
          Body.setPosition(body, { x: body.position.x, y: newHeight - 50 });
        }
      });
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      Render.stop(render);
      Runner.stop(runner);
      if (render.canvas) render.canvas.remove();
      Composite.clear(engine.world, false);
      Engine.clear(engine);
      engineRef.current = null;
    };
  }, []);

  return (
    <SectionWrapper
      id={id}
      title="Tech Stack"
      subtitle="My toolbox of languages, frameworks, and technologies I work with."
      className="bg-neutral"
      titleClassName="text-textBase"
    >
      <div
        ref={sceneRef}
        className="relative w-full h-[600px] overflow-hidden bg-background/50"
      >
        {ALL_SKILLS.map((skill, index) => (
          <SkillCard
            key={skill.id}
            skill={skill}
            index={index}
            domRefs={domRefs}
            shape={shapesRef.current[index]}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;