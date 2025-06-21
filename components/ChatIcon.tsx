import React from 'react';

interface ChatIconProps {
  onClick: () => void;
  isOpen: boolean;
}

const ChatBubbleLeftRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3.68-3.091a4.501 4.501 0 0 0-3.408-.983l-5.604 1.256A4.5 4.5 0 0 1 2.25 13.5V9.214a4.5 4.5 0 0 1 2.742-4.085l5.604-1.256a4.5 4.5 0 0 1 3.407.983L17.55 7.56Zm-3.935-1.072a.501.501 0 0 0-.638.03L12.445 9.51l-3.033-1.01a.5.5 0 0 0-.638.03L5.742 11.072V13.5a2.5 2.5 0 0 0 2.5 2.5h8.5a2.5 2.5 0 0 0 2.5-2.5V9.51l-3.033-1.01a.5.5 0 0 0-.638-.03Z" />
  </svg>
);

const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ChatIcon: React.FC<ChatIconProps> = ({ onClick, isOpen }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-primary hover:bg-primary-dark text-background p-4 rounded-full shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-opacity-50 transition-all duration-300 transform hover:scale-110 z-[100]"
      aria-label={isOpen ? "Close chat" : "Open chat"}
      aria-expanded={isOpen}
    >
      {isOpen ? <CloseIcon className="w-7 h-7" /> : <ChatBubbleLeftRightIcon className="w-7 h-7" />}
    </button>
  );
};

export default ChatIcon;