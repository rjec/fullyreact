import React, { useState, useCallback } from 'react';
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import { TabId, FlashcardItem } from './types';
import { HAMBURGER_MENU_ITEMS, HELP_MODAL_TITLE, AI_CHATBOT_PROMPT, HUMAN_CONTACT_PROMPT, PHONE_NUMBER, APP_TITLE, TAB_CONFIG, COPYRIGHT_INFO_2011, COPYRIGHT_INFO_2024, COMPLEX_ISSUES_TEXT, COMPLEX_ISSUES_URL, ChatBubbleIcon, PhoneOutgoingIcon, MenuIcon, HelpIcon } from './constants.tsx';
import TopNavigationBar from './components/TopNavigationBar';
import BottomNavigationBar from './components/BottomNavigationBar';
import Modal from './components/Modal';
import HamburgerMenu from './components/HamburgerMenu';
import HelpModal from './components/HelpModal';
import type { Route } from "./+types/root";
import "./app.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-gray-900">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
    const [activeTab, setActiveTab] = useState<TabId>(TabId.Home);
    const [modalData, setModalData] = useState<FlashcardItem | null>(null);
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
    const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

    const handleOpenModal = useCallback((data: FlashcardItem) => {
        setModalData(data);
    }, []);

    const handleCloseModal = useCallback(() => {
        setModalData(null);
    }, []);

    const toggleHamburgerMenu = useCallback(() => {
        setIsHamburgerMenuOpen(prev => !prev);
    }, []);

    const toggleHelpModal = useCallback(() => {
        setIsHelpModalOpen(prev => !prev);
        if(isHamburgerMenuOpen) setIsHamburgerMenuOpen(false);
    }, [isHamburgerMenuOpen]);

    const hamburgerMenuItems = React.useMemo(() => HAMBURGER_MENU_ITEMS(toggleHelpModal, handleOpenModal), [toggleHelpModal, handleOpenModal]);

    return (
        <div className="flex flex-col h-screen bg-gray-900 text-gray-100">
          <TopNavigationBar
            title={APP_TITLE}
            onMenuClick={toggleHamburgerMenu}
            onHelpClick={toggleHelpModal}
            MenuIcon={<MenuIcon className="w-7 h-7 text-indigo-300 hover:text-indigo-200"/>}
            HelpIcon={<HelpIcon className="w-7 h-7 text-indigo-300 hover:text-indigo-200"/>}
            isHamburgerMenuOpen={isHamburgerMenuOpen}
          />
    
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            <Outlet context={{ handleOpenModal }} />
          </main>
    
          <div className="text-center text-xs text-gray-500 py-2 px-4 border-t border-gray-700">
              <p>{COPYRIGHT_INFO_2011} / {COPYRIGHT_INFO_2024}</p>
              <p>
                {COMPLEX_ISSUES_TEXT.split('labtestingsolutions.help')[0]}
                <a href={COMPLEX_ISSUES_URL} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline">
                  labtestingsolutions.help
                </a>
                {COMPLEX_ISSUES_TEXT.split('labtestingsolutions.help')[1]}
              </p>
          </div>
    
          <BottomNavigationBar
            activeTab={activeTab}
            onTabChange={setActiveTab}
            tabs={TAB_CONFIG}
          />
    
          {modalData && (
            <Modal title={modalData.modalTitle} onClose={handleCloseModal}>
              {modalData.modalContent}
            </Modal>
          )}
    
          {isHamburgerMenuOpen && (
            <HamburgerMenu
              isOpen={isHamburgerMenuOpen}
              onClose={toggleHamburgerMenu}
              navItems={hamburgerMenuItems}
              appTitle={APP_TITLE}
              id="hamburger-menu"
            />
          )}
    
          {isHelpModalOpen && (
            <HelpModal
              isOpen={isHelpModalOpen}
              onClose={toggleHelpModal}
              title={HELP_MODAL_TITLE}
              phoneNumber={PHONE_NUMBER}
              ChatIcon={<ChatBubbleIcon className="w-5 h-5" />}
              PhoneIcon={<PhoneOutgoingIcon className="w-5 h-5" />}
            />
          )}
        </div>
      );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto text-white">
      <h1 className="text-2xl font-bold">{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto bg-gray-800 mt-4 rounded">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
