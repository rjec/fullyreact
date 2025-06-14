import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TabConfig, TabId } from '../types';

interface BottomNavigationBarProps {
  activeTab: TabId;
  onTabChange: (tabId: TabId) => void;
  tabs: TabConfig[];
}

const BottomNavigationBar: React.FC<BottomNavigationBarProps> = ({ activeTab, onTabChange, tabs }) => {
    const location = useLocation();

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-around shadow-md">
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.path;
        return (
            <Link to={tab.path} key={tab.id} className="flex flex-col items-center" onClick={() => onTabChange(tab.id)}>
                {tab.icon(isActive)}
                <span className={`text-xs ${isActive ? 'text-indigo-400' : 'text-gray-400'}`}>{tab.label}</span>
            </Link>
        )
      })}
    </nav>
  );
};

export default BottomNavigationBar;
