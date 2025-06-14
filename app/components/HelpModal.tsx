import React from 'react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  aiPrompt: string;
  humanPrompt: string;
  phoneNumber: string;
  ChatIcon: React.ReactNode;
  PhoneIcon: React.ReactNode;
}

const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose, title, aiPrompt, humanPrompt, phoneNumber, ChatIcon, PhoneIcon }) => {
    if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">&times;</button>
        </div>
        <div className="space-y-4">
            <button className="w-full bg-indigo-500 text-white p-3 rounded-md flex items-center justify-center hover:bg-indigo-400">
                {ChatIcon}
                <span>{aiPrompt}</span>
            </button>
            <button className="w-full bg-gray-600 text-white p-3 rounded-md flex items-center justify-center hover:bg-gray-500">
                {PhoneIcon}
                <span>{humanPrompt} ({phoneNumber})</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default HelpModal;
