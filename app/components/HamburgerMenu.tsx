import React from 'react';
import { NavItem } from '../types';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  appTitle: string;
  id: string;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, onClose, navItems, appTitle, id }) => {
  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={onClose}>
      <div id={id} className={`fixed top-0 left-0 h-full bg-gray-800 w-64 shadow-lg transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">{appTitle}</h2>
        </div>
        <nav>
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>
                <a href="#" onClick={(e) => { e.preventDefault(); item.onClick(); onClose(); }} className="flex items-center p-4 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  {item.icon}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HamburgerMenu;
