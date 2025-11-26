import React from 'react';
import { motion } from 'framer-motion';
import { versionData } from '../data/trackingData';


// version control
const VersionControl: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-8">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Asset Version CONTROL
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {versionData.assets.map((asset, index) => (
            <motion.div
              key={asset.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl border border-gray-700 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">{asset.name}</h3>
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  asset.status === 'approved' 
                    ? 'bg-green-500/20 text-green-400' 
                    : asset.status === 'review'
                    ? 'bg-yellow-500/20 text-yellow-400'
                    : 'bg-blue-500/20 text-blue-400'
                }`}>
                  {asset.status}
                </span>
              </div>

              <p className="text-gray-400 text-sm mb-4">{asset.description}</p>

              <div className="space-y-3">
                <div className="text-sm text-gray-400">
                  <span className="font-medium">Current Version:</span>
                  <span className="ml-2 text-cyan-400 font-mono">{asset.currentVersion}</span>
                </div>
                
                <div className="text-sm text-gray-400">
                  <span className="font-medium">Last Modified:</span>
                  <span className="ml-2">{asset.lastModified}</span>
                </div>

                <div className="text-sm text-gray-400">
                  <span className="font-medium">Modified By:</span>
                  <span className="ml-2">{asset.modifiedBy}</span>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-400 mb-3">Version History</h4>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {asset.versions.map((version, vIndex) => (
                    <div
                      key={version.number}
                      className={`flex items-center justify-between p-2 rounded-lg ${
                        version.number === asset.currentVersion 
                          ? 'bg-cyan-500/10 border border-cyan-500/30' 
                          : 'bg-gray-700 border border-gray-600'
                      }`}
                    >
                      <span className="text-sm font-mono text-gray-300">{version.number}</span>
                      <span className="text-xs text-gray-400">{version.comment}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-8">
        <h3 className="text-2xl font-bold text-white mb-6">Version Control Workflow</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Check Out',
              description: 'Artist downloads latest version of asset',
              icon: '📥',
              color: 'from-blue-400 to-blue-600'
            },
            {
              title: 'Work & Iterate',
              description: 'Artist makes changes and saves work in progress',
              icon: '🎨',
              color: 'from-purple-400 to-purple-600'
            },
            {
              title: 'Check In',
              description: 'Artist uploads new version with comments',
              icon: '📤',
              color: 'from-green-400 to-green-600'
            }
          ].map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-2xl`}>
                {step.icon}
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};





export default VersionControl;