import React from 'react';
import { motion } from 'framer-motion';

interface PipelineStage {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  deliverables: string[];
  tools: string[];
  duration: string;
}

interface PipelineCardProps {
  stage: PipelineStage;
}

const PipelineCard: React.FC<PipelineCardProps> = ({ stage }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-800 rounded-2xl border border-gray-700 hover:border-cyan-500/50 overflow-hidden group"
    >
      <div className={`h-2 bg-gradient-to-r ${stage.gradient}`}></div>
      
      <div className="p-8">
        <div className="flex items-center mb-6">
          <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stage.gradient} p-4 mr-4 group-hover:scale-110 transition-transform duration-300`}>
            <stage.icon className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              {stage.name}
            </h3>
            <p className="text-sm text-gray-400">{stage.duration}</p>
          </div>
        </div>

        <p className="text-gray-300 mb-6 leading-relaxed">
          {stage.description}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-cyan-400 mb-3">Deliverables</h4>
            <ul className="space-y-2">
              {stage.deliverables.map((item, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mr-3"></div>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-purple-400 mb-3">Common Tools</h4>
            <div className="flex flex-wrap gap-2">
              {stage.tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium bg-gray-700 text-gray-300 rounded-full border border-gray-600 hover:border-purple-500/50 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PipelineCard;