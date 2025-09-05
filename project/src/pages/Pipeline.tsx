import React from 'react';
import { motion } from 'framer-motion';
import PipelineCard from '../components/PipelineCard';
import { pipelineStages } from '../data/pipelineData';

const Pipeline: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6">
            VFX Production <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Pipeline</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Understanding the complete workflow from concept to final delivery. 
            Each stage is crucial for successful VFX production.
          </p>
        </motion.div>

        {/* Pipeline Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 p-8 bg-gray-800/50 rounded-2xl border border-gray-700"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Production Flow</h3>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {pipelineStages.map((stage, index) => (
              <React.Fragment key={stage.id}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stage.gradient} p-3 shadow-lg`}>
                    <stage.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-300">{stage.name}</span>
                </motion.div>
                {index < pipelineStages.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Pipeline Stages Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {pipelineStages.map((stage, index) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              <PipelineCard stage={stage} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pipeline;