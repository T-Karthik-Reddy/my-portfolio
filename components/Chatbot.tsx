import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage } from '../types'; // Ensure ChatMessage is defined in types.ts
import { HERO_NAME, YOUR_EMAIL, YOUR_LINKEDIN_USERNAME, YOUR_GITHUB_USERNAME, PROJECTS_DATA, ALL_SKILLS, YOUR_RESUME_PATH } from '../constants';

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

// Simple rule-based response generation
const getRuleBasedResponse = (userInput: string): string => {
  const lowerInput = userInput.toLowerCase();

  if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
    return `Hi there! How can I help you learn more about ${HERO_NAME}?`;
  }
  if (lowerInput.includes('your name') || lowerInput.includes('who are you')) {
    return `I'm a portfolio assistant for ${HERO_NAME}.`;
  }
  // Allow querying by first name if HERO_NAME contains spaces
  const heroFirstName = HERO_NAME.split(' ')[0].toLowerCase();
  if (lowerInput.includes(heroFirstName) || lowerInput.includes(HERO_NAME.toLowerCase())) {
    return `${HERO_NAME} is a passionate CSE student interested in AI and Web Development. You can find more in the 'About' section!`;
  }
  if (lowerInput.includes('skills') || lowerInput.includes('tech stack') || lowerInput.includes('technologies')) {
    const skillsList = ALL_SKILLS.map(s => s.name).join(', ');
    return `${HERO_NAME}'s key skills include: ${skillsList}. Check out the 'Skills' section for more details!`;
  }
  if (lowerInput.includes('projects')) {
    const projectTitles = PROJECTS_DATA.map(p => p.title).join(', ');
    return `${HERO_NAME} has worked on several projects like: ${projectTitles}. You can see them in the 'Projects' section.`;
  }
  if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('reach out')) {
    return `You can contact ${HERO_NAME} via email at ${YOUR_EMAIL} or through LinkedIn (username: ${YOUR_LINKEDIN_USERNAME}) and GitHub (username: ${YOUR_GITHUB_USERNAME}). See the 'Contact' section for direct links!`;
  }
  if (lowerInput.includes('linkedin')) {
    return `You can find ${HERO_NAME}'s LinkedIn profile here: https://linkedin.com/in/${YOUR_LINKEDIN_USERNAME}`;
  }
  if (lowerInput.includes('github')) {
    return `You can find ${HERO_NAME}'s GitHub profile here: https://github.com/${YOUR_GITHUB_USERNAME}`;
  }
  if (lowerInput.includes('resume') || lowerInput.includes('cv')) {
    return `${HERO_NAME}'s resume can be downloaded from the 'About' section or directly here: ${YOUR_RESUME_PATH}`;
  }
  if (lowerInput.includes('experience')) {
    return `${HERO_NAME} has experience in building web applications and AI models. For specific project experiences, please check out the 'Projects' section or ask about a particular project!`;
  }
  if (lowerInput.includes('what can you do') || lowerInput.includes('help')) {
    return `I can tell you about ${HERO_NAME}'s skills, projects, how to contact him, or about his experience. What would you like to know?`;
  }
  if (lowerInput.includes('thank you') || lowerInput.includes('thanks')) {
    return "You're welcome! Let me know if there's anything else.";
  }
  if (lowerInput.includes('bye') || lowerInput.includes('goodbye')) {
    return "Goodbye! Have a great day.";
  }

  // Default response
  return "Thanks for your message! I'm a simple assistant. For detailed questions, please explore the portfolio sections or use the contact links.";
};


const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        { id: 'initial-bot', text: `Hi! I'm ${HERO_NAME}'s portfolio assistant. Ask me about skills, projects, or how to get in touch!`, sender: 'bot', timestamp: new Date() }
      ]);
    }
    if (isOpen) {
        inputRef.current?.focus();
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isBotTyping]);

  const handleSendMessage = (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    if (!input.trim() || isBotTyping) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      text: input.trim(),
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    
    const currentInput = input.trim();
    setInput('');
    setIsBotTyping(true);

    // Simulate bot thinking and then respond
    setTimeout(() => {
      const botResponseText = getRuleBasedResponse(currentInput);
      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        text: botResponseText,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsBotTyping(false);
      inputRef.current?.focus();
    }, 700 + Math.random() * 500); // Simulate typing delay
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed bottom-20 right-6 sm:bottom-6 sm:right-24 w-[calc(100%-3rem)] max-w-md bg-neutral rounded-xl shadow-2xl flex flex-col transition-all duration-300 ease-out animate-chat-bubble-pop z-[90]"
      style={{ height: 'min(70vh, 500px)'}}
      role="dialog"
      aria-modal="true"
      aria-labelledby="chatbot-title"
    >
      <header className="p-4 border-b border-neutral-darker flex justify-between items-center">
        <h2 id="chatbot-title" className="text-lg font-semibold text-primary">Quick Chat</h2>
        <button
          onClick={onClose}
          className="text-textBase hover:text-red-500 transition-colors"
          aria-label="Close chat"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </header>

      <div className="flex-grow p-4 overflow-y-auto chat-messages space-y-3">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[80%] p-3 rounded-xl text-sm
                ${msg.sender === 'user' ? 'bg-primary text-background' : ''}
                ${msg.sender === 'bot' ? 'bg-background text-textBase shadow' : ''}
                ${msg.sender === 'system' ? 'bg-systemError-bg text-systemError-text text-xs w-full text-center' : ''}
              `}
            >
              {/* Basic multiline support for responses */}
              {msg.text.split('\n').map((line, index) => <p key={index}>{line}</p>)}
              <div className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-background/70' : 'text-textBase/70'}`}>
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        {isBotTyping && (
          <div className="flex justify-start">
            <div className="max-w-[80%] p-3 rounded-xl bg-background text-textBase text-sm shadow">
              <span className="italic">Assistant is typing...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className="p-4 border-t border-neutral-darker flex items-center gap-2">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          className="flex-grow p-2 border border-primary/50 bg-background text-textBase rounded-lg focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-textBase/50 outline-none text-sm"
          disabled={isBotTyping}
          aria-label="Chat input"
        />
        <button
          type="submit"
          disabled={isBotTyping || !input.trim()}
          className="bg-primary text-background p-2 rounded-lg hover:bg-primary-dark disabled:bg-primary/50 disabled:cursor-not-allowed transition-colors"
          aria-label="Send message"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.126A59.768 59.768 0 0 1 21.485 12 59.77 59.77 0 0 1 3.27 20.876L5.999 12Zm0 0h7.5" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Chatbot;