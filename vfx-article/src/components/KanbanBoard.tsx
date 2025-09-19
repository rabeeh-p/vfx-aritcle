import React from 'react';
import { motion } from 'framer-motion';
import { kanbanData } from '../data/trackingData';

const KanbanBoard: React.FC = () => {
  return (
    <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-8">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Project Kanban Board
      </h2>
      
      <div className="grid lg:grid-cols-4 gap-6 overflow-x-auto">
        {kanbanData.columns.map((column, columnIndex) => (
          <motion.div
            key={column.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: columnIndex * 0.1 }}
            className="min-w-72"
          >
            <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
              <div className={`h-1 bg-gradient-to-r ${column.gradient}`}></div>
              
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-white">{column.name}</h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${column.bgColor} ${column.textColor}`}>
                    {column.tasks.length}
                  </span>
                </div>

                <div className="space-y-3">
                  {column.tasks.map((task, taskIndex) => (
                    <motion.div
                      key={task.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: (columnIndex * 0.1) + (taskIndex * 0.05) }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="bg-gray-700 rounded-lg p-4 border border-gray-600 hover:border-cyan-500/50 transition-all duration-200 cursor-pointer"
                    >
                      <h4 className="font-semibold text-white mb-2">{task.title}</h4>
                      <p className="text-sm text-gray-400 mb-3">{task.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${task.priority === 'High' ? 'bg-red-500/20 text-red-400' : task.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-green-500/20 text-green-400'}`}>
                          {task.priority}
                        </span>
                        <span className="text-xs text-gray-500">{task.assignee}</span>
                      </div>

                      {task.progress && (
                        <div className="mt-3">
                          <div className="flex justify-between text-xs text-gray-400 mb-1">
                            <span>Progress</span>
                            <span>{task.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-600 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${task.progress}%` }}
                              transition={{ duration: 1, delay: 1 }}
                              className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full"
                            ></motion.div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;