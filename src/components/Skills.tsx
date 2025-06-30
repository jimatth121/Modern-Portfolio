import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Zap, 
  Layout, 
  Palette, 
  GitBranch, 
  Package, 
  Cloud, 
  Image,
  Code2,
  TrendingUp
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { skills } from '../data/portfolio';
  import type {  LucideProps } from 'lucide-react';


const Skills: React.FC = () => {
  const { ref, mainControls } = useScrollAnimation();


  const iconMap: { [key: string]: React.ComponentType<LucideProps> } = {
    react: Code,
    code: Code,
    zap: Zap,
    layout: Layout,
    palette: Palette,
    code2: Code2,
    'git-branch': GitBranch,
    package: Package,
    cloud: Cloud,
    figma: Layout,
    image: Image
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const categoryColors = {
    frontend: 'from-blue-500 to-purple-600',
    tools: 'from-orange-500 to-red-600',
    design: 'from-pink-500 to-rose-600'
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={mainControls}
          className="space-y-12 sm:space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
            <p className="text-gray-600 dark:text-gray-400 mt-6 text-base sm:text-lg max-w-2xl mx-auto px-4">
              The tools and technologies I use to bring ideas to life and create exceptional digital experiences
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="space-y-12">
            {Object.entries(groupedSkills).map(([category, categorySkills]) => (
              <motion.div key={category} variants={itemVariants} className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white capitalize flex items-center space-x-3 px-2">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]}`} />
                  <span>{category}</span>
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {categorySkills.map((skill, index) => {
                    const IconComponent = iconMap[skill.icon] || Code;
                    
                    return (
                      <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        className="bg-white dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className={`p-3 rounded-xl bg-gradient-to-r ${categoryColors[skill.category as keyof typeof categoryColors]} text-white `}>
                              <IconComponent size={24} className="text-white" />
                            </div>
                            <h4 className="text-gray-900 dark:text-white font-semibold text-lg">{skill.name}</h4>
                          </div>
                          <span className="text-purple-600 dark:text-purple-400 font-bold text-xl">{skill.level}%</span>
                        </div>
                        
                        {/* Enhanced Progress Bar */}
                        <div className="relative">
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                            <motion.div
                              className={`h-3 rounded-full bg-gradient-to-r ${categoryColors[skill.category as keyof typeof categoryColors]} relative overflow-hidden`}
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1.5, delay: index * 0.1 }}
                            >
                              <div className="absolute inset-0 bg-white/20 animate-pulse" />
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Professional Experience Stats */}
          <motion.div variants={itemVariants} className="pt-12 border-t border-gray-200 dark:border-gray-800">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <TrendingUp className="text-purple-600 dark:text-purple-400" size={28} />
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Professional Experience</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                Key metrics and achievements from my development journey
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Years Experience', value: '5+', icon: '🚀' },
                { label: 'Projects Completed', value: '50+', icon: '💼' },
                { label: 'Technologies Mastered', value: '15+', icon: '⚡' },
                { label: 'Happy Clients', value: '25+', icon: '😊' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="space-y-3"
                  >
                    <div className="text-3xl">{stat.icon}</div>
                    <div className="text-3xl sm:text-4xl font-bold text-purple-600 dark:text-purple-400">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;