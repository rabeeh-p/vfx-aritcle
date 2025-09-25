import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PlayIcon, CogIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';

const Home: React.FC = () => {
  const features = [
    {
      title: 'Pipeline Stages',
      description: 'Learn the complete VFX production workflow from pre-production to delivery',
      icon: CogIcon,
      link: '/pipeline',
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'Tracking Systems',
      description: 'Understand project management tools like ftrack for VFX production',
      icon: ClipboardDocumentListIcon,
      link: '/tracking',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Learning Resources',
      description: 'Access curated articles, guides, and FAQs for VFX freshers',
      icon: PlayIcon,
      link: '/resources',
      gradient: 'from-green-400 to-cyan-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-400/20 via-transparent to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                VFX Pipeline
              </span>
              <br />
              <span className="text-white">Mastery</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Master the complete VFX production pipeline and tracking systems. 
              From pre-production to delivery, learn industry-standard workflows designed for freshers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/pipeline"
                className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                <PlayIcon className="w-5 h-5 mr-2" />
                Start Learning
              </Link>
              <Link
                to="/tracking"
                className="inline-flex items-center px-8 py-4 rounded-xl border-2 border-cyan-500 text-cyan-400 font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200 transform hover:scale-105"
              >
                <ClipboardDocumentListIcon className="w-5 h-5 mr-2" />
                Explore Tracking
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Everything You Need to Know
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive learning modules designed specifically for VFX industry newcomers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Link
                  to={feature.link}
                  className="block p-8 rounded-2xl bg-gray-800 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>




      {/* Stats Section */}
      <section className="py-24 px-6 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '8', label: 'Pipeline Stages' },
              { number: '50+', label: 'Learning Topics' },
              { number: '15+', label: 'Industry Tools' },
              { number: '100%', label: 'Fresher Friendly' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="group"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;