import React from 'react';

interface TopNavigationBarProps {
  title: string;
  onMenuClick: () => void;
  onHelpClick: () => void;
  MenuIcon: React.ReactNode;
  HelpIcon: React.ReactNode;
  isHamburgerMenuOpen: boolean;
}

const TopNavigationBar: React.FC<TopNavigationBarProps> = ({ title, onMenuClick, onHelpClick, MenuIcon, HelpIcon, isHamburgerMenuOpen }) => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
      <button 
        onClick={onMenuClick} 
        className="p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        aria-expanded={isHamburgerMenuOpen}
        aria-controls="hamburger-menu"
        aria-label="Open navigation menu"
      >
        {MenuIcon}
      </button>
      <h1 className="text-xl font-bold">{title}</h1>
      <button 
        onClick={onHelpClick} 
        className="p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        aria-label="Open help modal"
      >
        {HelpIcon}
      </button>
    </header>
  );
};

export default TopNavigationBar;
