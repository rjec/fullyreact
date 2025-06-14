import {
    ChatBubbleLeftEllipsisIcon as ChatBubbleIcon,
    PhoneArrowUpRightIcon as PhoneOutgoingIcon,
    Bars3Icon as MenuIcon,
    QuestionMarkCircleIcon as HelpIcon,
    HomeIcon,
    BuildingOffice2Icon as BusinessIcon,
    UserIcon as PersonalIcon,
    ScaleIcon as LegalIcon
} from '@heroicons/react/24/outline';
import { TabId, NavItem, TabConfig } from './types';

export const HAMBURGER_MENU_ITEMS = (toggleHelpModal: () => void, handleOpenModal: (data: any) => void): NavItem[] => [
    { label: 'Help', onClick: toggleHelpModal, icon: <HelpIcon className="w-5 h-5 mr-2" /> },
    { label: 'About Us', onClick: () => handleOpenModal({ modalTitle: 'About Us', modalContent: 'We are a leading provider of lab testing solutions.' }), icon: <BusinessIcon className="w-5 h-5 mr-2" /> },
    { label: 'Contact', onClick: () => handleOpenModal({ modalTitle: 'Contact Us', modalContent: 'Contact us at contact@labtestingsolutions.com' }), icon: <PhoneOutgoingIcon className="w-5 h-5 mr-2" /> },
  ];

export const HELP_MODAL_TITLE = "Get Help";
export const AI_CHATBOT_PROMPT = "Chat with our AI assistant for instant help.";
export const HUMAN_CONTACT_PROMPT = "Speak with a human representative.";
export const PHONE_NUMBER = "+1-800-555-1234";
export const APP_TITLE = "Lab Testing Solutions";
export const COPYRIGHT_INFO_2011 = "© 2011 Lab Testing Solutions";
export const COPYRIGHT_INFO_2024 = "© 2024 Lab Testing Solutions";
export const COMPLEX_ISSUES_TEXT = "For complex issues, please visit labtestingsolutions.help for more information.";
export const COMPLEX_ISSUES_URL = "https://labtestingsolutions.help";


export { ChatBubbleIcon, PhoneOutgoingIcon, MenuIcon, HelpIcon };

export const TAB_CONFIG: TabConfig[] = [
    { id: TabId.Home, label: 'Home', path: '/', icon: (isActive) => <HomeIcon className={`w-6 h-6 ${isActive ? 'text-indigo-400' : 'text-gray-400'}`} /> },
    { id: TabId.Business, label: 'Business', path: '/business', icon: (isActive) => <BusinessIcon className={`w-6 h-6 ${isActive ? 'text-indigo-400' : 'text-gray-400'}`} /> },
    { id: TabId.Personal, label: 'Personal', path: '/personal', icon: (isActive) => <PersonalIcon className={`w-6 h-6 ${isActive ? 'text-indigo-400' : 'text-gray-400'}`} /> },
    { id: TabId.Legal, label: 'Legal', path: '/legal', icon: (isActive) => <LegalIcon className={`w-6 h-6 ${isActive ? 'text-indigo-400' : 'text-gray-400'}`} /> },
];
