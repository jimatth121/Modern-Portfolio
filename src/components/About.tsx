import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Mail, Download, Coffee, Heart, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { personalInfo } from '../data/portfolio';
import Image from "../assets/profile.jpg"
import MyResume from '../assets/MATTHEW_EGBEDOKUN_Resume1.pdf'; // Assuming you have a resume PDF in your assets


const About: React.FC = () => {
  const { ref, mainControls } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

const handleDownload = () => {
  const link = document.createElement('a');
  link.href = MyResume; // Use the imported PDF directly
  link.setAttribute('download', 'MyResume.pdf');
  document.body.appendChild(link); // Append the link, not the PDF
  link.click();
  document.body.removeChild(link);
};

  const personalValues = [
    {
      icon: Heart,
      title: 'User-Centric Design',
      description: 'Every line of code I write is with the end user in mind, creating experiences that truly matter.'
    },
    {
      icon: Zap,
      title: 'Performance First',
      description: 'I believe fast, responsive applications are not optional—they\'re essential for great user experiences.'
    },
    {
      icon: Coffee,
      title: 'Continuous Learning',
      description: 'The tech world evolves rapidly, and I stay ahead by constantly learning and adapting to new technologies.'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-white dark:bg-gray-800/50">
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
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Profile Image and Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="relative">
                <div className="w-80 h-80 mx-auto relative">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl transform rotate-3"
                    whileHover={{ rotate: 6 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.img
                    src={Image}
                    alt={personalInfo.name}
                    className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="bg-gray-50 dark:bg-gray-900/50 backdrop-blur-sm p-4 rounded-xl border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-purple-600 dark:text-purple-400" size={20} />
                    <div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Location</p>
                      <p className="text-gray-900 dark:text-white font-medium">{personalInfo.location}</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="bg-gray-50 dark:bg-gray-900/50 backdrop-blur-sm p-4 rounded-xl border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center space-x-3">
                    <Mail className="text-purple-600 dark:text-purple-400" size={20} />
                    <div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Email</p>
                      <p className="text-gray-900 dark:text-white font-medium text-sm">{personalInfo.email}</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Download CV Button */}
              <motion.button
                onClick={handleDownload}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(139, 92, 246, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                <Download size={20} />
                <span>Download My CV</span>
              </motion.button>
            </motion.div>

            {/* About Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center space-x-3">
                  <User className="text-purple-600 dark:text-purple-400" />
                  <span>My Story</span>
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  <p>
                    I'm a passionate frontend developer with over 5 years of experience turning complex problems 
                    into simple, beautiful, and intuitive solutions. My journey began with a curiosity about how 
                    the web works, and it has evolved into a deep love for crafting exceptional user experiences.
                  </p>
                  <p>
                    What drives me is the intersection of technology and human experience. I believe that great 
                    software doesn't just work—it delights, inspires, and empowers people to achieve their goals 
                    effortlessly.
                  </p>
                </div>
              </div>

              {/* Mission Statement */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-800">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">My Mission</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  To bridge the gap between complex technology and human needs by creating digital experiences 
                  that are not only functional but also meaningful, accessible, and delightful for every user.
                </p>
              </div>

              {/* Personal Values */}
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white">What I Value</h4>
                <div className="space-y-4">
                  {personalValues.map((value, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-900/30 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300"
                    >
                      <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                        <value.icon className="text-purple-600 dark:text-purple-400" size={20} />
                      </div>
                      <div>
                        <h5 className="text-gray-900 dark:text-white font-semibold mb-1">{value.title}</h5>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{value.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;