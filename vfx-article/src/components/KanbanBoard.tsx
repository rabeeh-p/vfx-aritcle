import React from 'react';
import { motion } from 'framer-motion';
import { kanbanData } from '../data/trackingData';

const KanbanBoard: React.FC = () => {
  return (
    <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-8">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Project Kanban Board
      </h2>
      
    
    </div>
  );
};

export default KanbanBoard;