
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/outline';

const Header = ({ onMenuClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-800 border-b border-gray-700 px-6 py-4"
    >
      <div className="flex items-center justify-between">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
          <Bars3Icon className="w-6 h-6 text-gray-400" />
        </button>
        <div className="flex-1 max-w-xl mx-auto lg:mx-0 lg:ml-8">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search pipeline stages, tools, or concepts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-200"
            />
            {searchQuery && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full mt-2 w-full bg-gray-700 border border-gray-600 rounded-lg shadow-xl z-50"
              >
                <div className="p-3 text-sm text-gray-400">
                  Search functionality coming soon...
                </div>
              </motion.div>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
            <span className="text-sm text-gray-400">Learning Mode</span>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
