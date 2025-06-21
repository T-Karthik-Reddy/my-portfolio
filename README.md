# Personal Portfolio Website

This is a personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Project Structure

The project follows a standard Vite React setup:

-   `index.html`: The main HTML entry point.
-   `index.tsx`: The main TypeScript file that renders the React application.
-   `App.tsx`: The root React component.
-   `components/`: Contains all the reusable React components.
-   `constants.tsx`: Stores constant values like navigation items, skill lists, project data, etc.
-   `types.ts`: Defines TypeScript interfaces and types used throughout the application.
-   `public/`: Contains static assets like images (in `public/logos/`) and the resume PDF.
-   `index.css`: Global styles and Tailwind CSS directives.
-   `tailwind.config.js`: Tailwind CSS configuration file.
-   `vite.config.ts`: Vite configuration file.

## Getting Started

### Prerequisites

-   Node.js (v18 or later recommended)
-   npm or yarn or pnpm

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd portfolio-website
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    # yarn install
    # or
    # pnpm install
    ```

### Development

To start the development server:

```bash
npm run dev
# or
# yarn dev
# or
# pnpm dev
```

This will typically start the server on `http://localhost:3000`.

### Building for Production

To build the application for production:

```bash
npm run build
# or
# yarn build
# or
# pnpm build
```

The production-ready files will be generated in the `dist` directory.

### Customization

1.  **Constants**: Update `constants.tsx` with your personal information:
    -   `YOUR_NAME`, `YOUR_EMAIL`, `YOUR_LINKEDIN_USERNAME`, `YOUR_GITHUB_USERNAME`, `YOUR_LEETCODE_USERNAME`.
    -   `YOUR_RESUME_PATH` (ensure the resume PDF is in `public/`).
    -   Review and update `ALL_SKILLS` and `PROJECTS_DATA`.
    -   Add your actual logo images to `public/logos/` and ensure paths in `constants.tsx` are correct.
2.  **Images**:
    -   Profile picture in `AboutSection.tsx` (currently uses Pravatar placeholder).
    -   Project images in `PROJECTS_DATA` in `constants.tsx`.
3.  **Styling**: Modify Tailwind classes in components or update `tailwind.config.js` and `index.css` for broader style changes.

## Available Scripts

-   `dev`: Runs the app in development mode.
-   `build`: Builds the app for production.
-   `lint`: Lints the TypeScript and TSX files.
-   `preview`: Serves the production build locally for preview.

## Notes

-   Ensure all image paths in `constants.tsx` (especially for skills and contact links) point to existing files in the `public/logos/` directory. Placeholder paths like `/logos/tailwind-logo.png` or `/logos/mongodb-logo.png` assume you will add these images.
-   The Chatbot (`components/Chatbot.tsx`) is currently rule-based.
-   The Hero Section (`components/HeroSection.tsx`) includes a binary rain animation.
-   The site is designed to be responsive and accessible.
```