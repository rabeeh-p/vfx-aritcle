import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  HomeIcon, 
  CogIcon, 
  ClipboardDocumentListIcon,
  BookOpenIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

interface SidebarProps {
  onClose?: () => void;
}

const navigationItems = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Pipeline Stages', href: '/pipeline', icon: CogIcon },
  { name: 'Tracking System', href: '/tracking', icon: ClipboardDocumentListIcon },
  { name: 'Resources', href: '/resources', icon: BookOpenIcon },
];

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  return (
    <div className="flex flex-col h-full bg-gray-800 border-r border-gray-700">
      <div className="flex items-center justify-between p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
            <CogIcon className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            VFX Pipeline
          </span>
        </motion.div>
        {onClose && (
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        )}
      </div>

      <nav className="flex-1 px-4 pb-4 space-y-2">
        {navigationItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <NavLink
              to={item.href}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 shadow-lg shadow-cyan-500/10'
                    : 'hover:bg-gray-700 hover:shadow-lg'
                }`
              }
            >
              <item.icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              <span className="font-medium group-hover:text-white transition-colors">
                {item.name}
              </span>
            </NavLink>
          </motion.div>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-700">
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-3 border border-cyan-500/20">
          <p className="text-sm text-gray-300">
            Learn VFX production pipeline step by step
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;