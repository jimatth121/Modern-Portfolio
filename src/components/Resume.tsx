import React from 'react';
import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { personalInfo } from '../data/portfolio';
import MyResume from '../assets/MATTHEW_EGBEDOKUN_Resume1.pdf'; // Assuming you have a resume PDF in your assets

const Resume: React.FC = () => {
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

  const experience = [
    {
      title: ' Frontend Engineer',
      company: 'Kunda kids',
      period: '2023 - Present',
      description: 'Leading frontend development for learning applications, mentoring junior developers, and implementing modern React architectures.',
      achievements: [
        'Improved application performance by 40%',
        'Led migration to TypeScript ',
        'Mentored 2 junior developers'
      ]
    },
     {
      title: 'Web Developer',
      company: 'Monitag Technologies',
      period: '2024 - present',
      description: 'Worked on various web projects, learning modern development practices and contributing to the frontend codebase.',
      achievements: [
        'Delivered 2 websites',
        'Improved SEO performance',
        
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Exolve Technologies',
      period: '2021 - 2023',
      description: 'Developed responsive web applications using React, and modern CSS frameworks.',
      achievements: [
        'Built 2 production applications',
        'Implemented responsive design system',
        'Reduced bundle size by 30%'
      ]
    },
    {
      title: 'Web Developer',
      company: 'Mira Technologies',
      period: '2019 - 2020',
      description: 'Worked on various web projects, learning modern development practices and contributing to the frontend codebase.',
      achievements: [
        'Collaborated on 3 major projects',
        'Improved SEO performance',
        
      ]
    },
   
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Geography',
      school: 'Osun State University',
      period: '2017 - 2022',
      description: 'Started  software engineering and web technologies in year 2'
    },
     {
      degree: 'Certificate of Completion ',
      school: 'Classic Infotech',
      period: '2020',
      description: 'Comprehensive certification in frontend development'
    },
    {
      degree: 'Frontend Developer Certification',
      school: 'FreeCodeCamp',
      period: '2021',
      description: 'Comprehensive certification in modern frontend development'
    },
       {
      degree: 'React Course',
      school: 'Udemy',
      period: '2021',
      description: 'Comprehensive certification in modern frontend development'
    }
     ,
       {
      degree: 'Javascript Course',
      school: 'Udemy',
      period: '2021',
      description: 'Comprehensive certification in modern frontend development'
    }
  ];

const handleDownload = () => {
  const link = document.createElement('a');
  link.href = MyResume; // Use the imported PDF directly
  link.setAttribute('download', 'MyResume.pdf');
  document.body.appendChild(link); // Append the link, not the PDF
  link.click();
  document.body.removeChild(link);
};

  return (
    <section id="resume" className="py-16 sm:py-20 bg-gray-900">
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Resume
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
            <p className="text-gray-400 mt-6 text-base sm:text-lg max-w-2xl mx-auto px-4">
              My professional journey and educational background
            </p>
            
            {/* Download Button */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(139, 92, 246, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className="mt-8 inline-flex items-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </motion.button>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Experience */}
            <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
              <div className="flex items-center space-x-3 mb-6 sm:mb-8">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
                  <Briefcase className="text-white" size={24} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Experience</h3>
              </div>

              <div className="space-y-6">
                {experience.map((job, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="relative pl-6 sm:pl-8 border-l-2 border-purple-500/30 hover:border-purple-500 transition-colors duration-300"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full" />
                    <div className="bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 space-y-2 sm:space-y-0">
                        <div>
                          <h4 className="text-lg sm:text-xl font-bold text-white">{job.title}</h4>
                          <p className="text-purple-400 font-medium">{job.company}</p>
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar size={16} className="mr-1" />
                          {job.period}
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4 text-sm sm:text-base">{job.description}</p>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-gray-400 text-sm sm:text-base">
                            <Award size={16} className="text-purple-400 mt-0.5 mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
              <div className="flex items-center space-x-3 mb-6 sm:mb-8">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="relative pl-6 sm:pl-8 border-l-2 border-blue-500/30 hover:border-blue-500 transition-colors duration-300"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full" />
                    <div className="bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 space-y-2 sm:space-y-0">
                        <div>
                          <h4 className="text-lg sm:text-xl font-bold text-white">{edu.degree}</h4>
                          <p className="text-blue-400 font-medium">{edu.school}</p>
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar size={16} className="mr-1" />
                          {edu.period}
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm sm:text-base">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Certifications */}
              <div className="mt-8 sm:mt-12">
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Certifications</h4>
                <div className="space-y-4">
                  {[
                    'AWS Certified Cloud Practitioner',
                    'Google Analytics Certified',
                    'React Developer Certification',
                    'TypeScript Advanced Certification'
                  ].map((cert, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-3 p-4 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
                    >
                      <Award className="text-purple-400" size={20} />
                      <span className="text-gray-300 text-sm sm:text-base">{cert}</span>
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

export default Resume;