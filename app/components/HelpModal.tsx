import React from 'react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  phoneNumber: string;
  ChatIcon: React.ReactNode;
  PhoneIcon: React.ReactNode;
}

const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose, title, phoneNumber, ChatIcon, PhoneIcon }) => {
    if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" aria-modal="true" role="dialog">
      <div className="bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 id="help-modal-title" className="text-xl font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white" aria-label="Close">&times;</button>
        </div>
        <div className="space-y-4">
            <button className="w-full bg-indigo-500 text-white p-3 rounded-md flex items-center justify-center hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                {React.cloneElement(ChatIcon as React.ReactElement, { "aria-label": "Chat with AI Assistant" })}
                <span className="ml-2">Chat with AI Assistant</span>
            </button>
            <a href={`tel:${phoneNumber}`} className="w-full bg-gray-600 text-white p-3 rounded-md flex items-center justify-center hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500">
                {React.cloneElement(PhoneIcon as React.ReactElement, { "aria-label": `Call Support at ${phoneNumber}` })}
                <span className="ml-2">Call Support at {phoneNumber}</span>
            </a>
        </div>
      </div>
    </div>
  );
};

export default HelpModal;
