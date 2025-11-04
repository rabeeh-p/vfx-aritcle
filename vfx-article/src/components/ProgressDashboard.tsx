import React from 'react';
import { motion } from 'framer-motion';
import { progressData } from '../data/trackingData';

const ProgressDashboard = () => {
  return (
    <div className="space-y-8">

      {/* Project Overview Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {progressData.overview.map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-gray-800 rounded-xl border border-gray-700 p-6 hover:border-cyan-500/50 transition-all duration-200"
          >
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${metric.gradient} p-3 mb-4`}>
              <metric.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{metric.value}</h3>
            <p className="text-gray-400">{metric.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Department Progress */}
      <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-8">
        <h3 className="text-2xl font-bold text-white mb-8">Department Progress</h3>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {progressData.departments.map((dept, index) => (
            <motion.div
              key={dept.name}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl border border-gray-700 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-semibold text-white">{dept.name}</h4>
                <span className="text-2xl font-bold text-cyan-400">{dept.progress}%</span>
              </div>
              
              <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${dept.progress}%` }}
                  transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                  className={`bg-gradient-to-r ${dept.gradient} h-3 rounded-full relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </motion.div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-400">Completed:</span>
                  <span className="text-green-400 font-semibold ml-2">{dept.completed}</span>
                </div>
                <div>
                  <span className="text-gray-400">In Progress:</span>
                  <span className="text-yellow-400 font-semibold ml-2">{dept.inProgress}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-8">
        <h3 className="text-2xl font-bold text-white mb-8">Project Timeline</h3>
        
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500"></div>
          
          {progressData.timeline.map((milestone, index) => (
            <motion.div
              key={milestone.phase}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex items-center mb-8"
            >
              <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${milestone.completed ? 'from-green-400 to-green-600' : 'from-gray-500 to-gray-600'} z-10 mr-6`}></div>
              <div className="flex-1 bg-gray-800 rounded-xl border border-gray-700 p-6">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-semibold text-white">{milestone.phase}</h4>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${milestone.completed ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                    {milestone.completed ? 'Completed' : 'In Progress'}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-3">{milestone.description}</p>
                <p className="text-xs text-gray-500">{milestone.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressDashboard;
