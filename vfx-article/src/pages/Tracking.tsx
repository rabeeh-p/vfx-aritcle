import React, { useState } from 'react';
import { motion } from 'framer-motion';
import KanbanBoard from '../components/KanbanBoard';
import ProgressDashboard from '../components/ProgressDashboard';
import VersionControl from '../components/VersionControl';

const Tracking = () => {
  const [activeTab, setActiveTab] = useState('kanban');

  const tabs = [
    { id: 'kanban', name: 'Kanban Board', description: 'Visual task management' },
    { id: 'progress', name: 'Progress Dashboard', description: 'Project metrics' },
    // { id: 'versions', name: 'Version Control', description: 'Asset versioning' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-6">
            VFX{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Tracking System
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Learn how production tracking systems like ftrack help manage complex
            VFX projects, coordinate teams, and maintain quality throughout the
            pipeline.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center mb-12"
        >
          <div className="inline-flex bg-gray-800 rounded-xl p-1 border border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                <div className="text-center">
                  <div className="font-semibold">{tab.name}</div>
                  <div className="text-xs opacity-75">{tab.description}</div>
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {activeTab === 'kanban' && <KanbanBoard />}
          {activeTab === 'progress' && <ProgressDashboard />}
          {activeTab === 'versions' && <VersionControl />}
        </motion.div>
      </div>
    </div>
  );
};

export default Tracking;
