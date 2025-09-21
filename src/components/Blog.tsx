import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import javascriptCover1 from "../assets/javascripthandbook.png"; 
import javascriptCover2 from "../assets/javascricheatbook.png"; 
import TailwindCover from "../assets/tailwindcheatsheet.png";
import ReactCover from "../assets/reactcheatsheet.png"
import ReactCheatSheet from "../assets/React 19 Cheatsheet.pdf"
import JavascriptHandBook from "../assets/JavaScript Handbook.pdf"
import JavascriptCheatt from "../assets/JavaScript Handbook.pdf"
import Tailwind from "../assets/Tailwind Cheatsheet.pdf";


interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
  url:string;
  fileName: string;

}

const handleDownload = (fileUrl:string, fileName:string) => {
  const link = document.createElement('a');
  link.href = fileUrl;
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'React Cheat sheet: Building Performant React Applications',
    excerpt: 'Discover the latest techniques and patterns for optimizing React applications, from code splitting to state management strategies.',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'React',
    image:ReactCover,
    slug: 'building-performant-react-applications',
    url: ReactCheatSheet,
    fileName: 'React Cheatsheet'

  },
  {
    id: '2',
    title: 'JavaScript Handbook: Mastering Modern JavaScript Features',
    excerpt: ` This JavaScript Handbook will help you quickly learn JavaScript and several of it’s important functions 
and how to use them in certain use cases.`,
    date: '2024-01-08',
    readTime: '6 min read',
    category: 'JavaScript',
    image: javascriptCover1,
    slug: 'future-of-css-container-queries',
    url:JavascriptHandBook,
    fileName: 'JavaScript Handbook'
  },
  {
    id: '3',
    title: 'Javascript Tips: Advanced Patterns for Better Developer Experience',
    excerpt: 'Level up your TypeScript skills with advanced patterns, utility types, and techniques that will make your code more maintainable and type-safe.',
    date: '2024-01-01',
    readTime: '10 min read',
    category: 'JavaScript',
    image: javascriptCover2,
    slug: 'javascript-tips-advanced-patterns',
    url: JavascriptCheatt,
    fileName: 'JavaScript Tips'
  },
    {
    id: '4',
    title: 'Tailwind: Advanced Patterns for styling  Applications',
    excerpt: 'This Tailwind CSS Cheatsheet is your ultimate guide to mastering Tailwind CSS',
    date: '2024-01-01',
    readTime: '10 min read',
    category: 'Tailwind CSS',
    image: TailwindCover,
    slug: 'javascript-tips-advanced-patterns',
    url: Tailwind,
    fileName: 'JavaScript Tips'
  }
];

const Blog: React.FC = () => {
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-gray-800/50">
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
            Some Pragramming hack books
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
            <p className="text-gray-600 dark:text-gray-400 mt-6 text-base sm:text-lg max-w-2xl mx-auto">
              Books that make programming easier and more efficient.
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
              onClick={() => handleDownload(post.url, post.fileName)}
                key={post.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                {/* Post Image */}
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-purple-600 text-white text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200 leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm line-clamp-3">
                    {post.excerpt}
                  </p>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 font-medium text-sm pt-2"
                  >
                    <span>Read More</span>
                    <ArrowRight size={16} />
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* View All Posts Button */}
       
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;