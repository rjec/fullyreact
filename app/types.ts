import React from 'react';

export enum TabId {
  Home = 'home',
  Business = 'business',
  Personal = 'personal',
  Legal = 'legal',
}

export interface FlashcardItem {
  title: string;
  description: string;
  modalTitle: string;
  modalContent: React.ReactNode;
}

export interface NavItem {
  label: string;
  onClick: () => void;
  icon: React.ReactNode;
}

export interface TabConfig {
    id: TabId;
    label: string;
    path: string;
    icon: (isActive: boolean) => React.ReactNode;
}
