import React from 'react';

interface TopNavigationBarProps {
  title: string;
  onMenuClick: () => void;
  onHelpClick: () => void;
  MenuIcon: React.ReactNode;
  HelpIcon: React.ReactNode;
}

const TopNavigationBar: React.FC<TopNavigationBarProps> = ({ title, onMenuClick, onHelpClick, MenuIcon, HelpIcon }) => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
      <button onClick={onMenuClick} className="p-2 rounded-md hover:bg-gray-700">
        {MenuIcon}
      </button>
      <h1 className="text-xl font-bold">{title}</h1>
      <button onClick={onHelpClick} className="p-2 rounded-md hover:bg-gray-700">
        {HelpIcon}
      </button>
    </header>
  );
};

export default TopNavigationBar;
