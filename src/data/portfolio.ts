import { Project, Skill } from '../types';
import KundaKidsWebApp from '../assets/kundakidswebapp.png';
import WorkSpace from '../assets/989workspace.png';
import KundakidsAdmin from '../assets/kundakidsadmin.png';
import SummerChallenge from '../assets/summerchanllenge.png';
import Monitag from '../assets/monitag01.png';
import MyMonitag from '../assets/mymonitag.png';
import FurnitureComfy from '../assets/furniture.png';
import NetflxClone from '../assets/netflixclone.png';
import YoutubeClone from '../assets/youtubeclone.png';
import Exolve from '../assets/exolveinterviewproject.png';
import AmazonClone from '../assets/amazonclone.png';


export const projects: Project[] = [
  {
    id: '1',
    title: 'Kundakids Web App',
    description: `Kundakids web application is designed to enhance children's literacy by providing a rich collection of reading stories, audiobooks, and educational videos in various African languages.`,
    image: KundaKidsWebApp,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase','Zustand', "Moengage"],
    liveUrl: 'https://web.kundakidsapi.com/',
    githubUrl: 'https://github.com/jimatth121/web'
  },
  {
    id: '2',
    title: '989 workspace',
    description: '989 workspaces facilitates the rental and booking of meeting rooms and office spaces. Users can conveniently browse available locations, assess amenities, and verify real-time availability.',
    image: WorkSpace,
    technologies: ['React', 'Tailwind', 'Zustand', 'Material-UI', ],
    liveUrl: 'https://989workspace.vercel.app/',
    githubUrl: '/'
  },
  {
    id: '3',
    title: 'Kundakids Admin Dashboard',
    description: `The Kunda Kids Admin Dashboard is primarily an analytics tool that tracks how users engage with educational content—covering quiz scores, content views, and completion rates
It also includes features for uploading and organizing stories, quizzes, and media, making it easy for the internal team to manage what appears on the Kunda Kids platform.`,
    image: KundakidsAdmin,
    technologies: ['React',  'chart.js', 'Tailwind CSS',  'Zustand'],
    liveUrl: 'https://main.kundakidsapi.com/',
    githubUrl: 'https://github.com/jimatth121/admin'
  },
  {
    id: '4',
    title: 'Summer Chanllenge',
    description: 'Kunda Kids 21-Day Summer Reading Challenge, The website highlights the benefits of joining the challenge, including boosting brainpower, participating in a leaderboard race, and sparking creativity.',
    image: SummerChallenge,
    technologies: ['React', 'Typescript', 'TailwindCSS'],
    liveUrl: 'https://web.kundakidsapi.com/summer-challenge',
  githubUrl: 'https://github.com/jimatth121/web'
  },
    {
    id: '5',
    title: 'Monitag Technologies',
    description: 'Monitag Technologies is a digital finance platform that offers a secure, all-in-one wallet for managing savings, payments, and multi-currency transactions. It empowers users with real-time analytics and tools for smart, convenient financial planning.',
    image: Monitag,
    technologies: ['React', 'Typescript', 'TailwindCSS'],
    liveUrl: 'https://www.monitagtechnologies.com/',
  githubUrl: 'https://github.com/jimatth121/Monitag-Technologies'
  },
  {
    id: '6',
    title: 'MyMonitag ',
    description: 'Monitag Technologies is a digital finance platform that offers a secure, all-in-one wallet for managing savings, payments, and multi-currency transactions. It empowers users with real-time analytics and tools for smart, convenient financial planning.',
    image: MyMonitag,
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://monitag-dev.vercel.app/',
    githubUrl: 'https://github.com/jimatth121/Monitag'
    }
,
      {
    id: '7',
    title: 'Furniture comfy',
    description: 'Furniture Comfy is an E-commerce web app that is designed to meet the expectation of the buyer and seller and ensure smooth transaction between them',
    image:FurnitureComfy,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', "Reducer", "useContext"],
    liveUrl: 'https://monitag-dev.vercel.app/',
    githubUrl: 'https://github.com/jimatth121/Comfy-Furniture'
    }
,
           {
    id: '8',
    title: 'Exolve Interview project',
    description: 'The Exolve Interview Project is a frontend web app created to showcase your UI development skills. It features a clean, responsive layout built with modern technologies. The project highlights strong use of state management, component structuring, and API integration. ',
    image:Exolve,
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://mat-exolve-project-bjq8az5wh-jimatth121.vercel.app/',
    githubUrl: 'https://github.com/jimatth121/Exolve-Project'
    }
,
         {
    id: '9',
    title: 'Netflix Clone',
    description: 'A simple NetFlix-Clone built with React, tdbm movie api, movie trailer and youtube framer',
    image:NetflxClone,
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://mat-netflixclone.vercel.app/',
    githubUrl: 'https://github.com/jimatth121/Netflix-clone'
    },

         {
    id: '10',
    title: 'Youtube Clone',
    description: 'A Youtube clone built to replicate youtube interface without the functionality and built with React and tailwind and hosted on vercel',
    image:YoutubeClone,
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://mat-youtube-ui.vercel.app/',
    githubUrl: 'https://github.com/jimatth121/Youtube-Clone1'
    },
         {
    id: '11',
    title: 'Amazon Clone',
    description: 'Amazon UI Clone is a frontend project built with React and Tailwind CSS to replicate the visual layout of Amazon’s interface. It focuses purely on the user interface design, without implementing full e-commerce functionality. The goal is to demonstrate UI development skills, layout structuring, and responsive design techniques',
    image:AmazonClone,
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://mat-amazon-ui.vercel.app/',
    githubUrl: 'https://github.com/jimatth121/Amazon-Clone'
    }
    
];

export const skills: Skill[] = [
  { name: 'React', level: 95, icon: 'react', category: 'frontend' },
  { name: 'TypeScript', level: 90, icon: 'code', category: 'frontend' },
  { name: 'Next.js', level: 85, icon: 'zap', category: 'frontend' },
  { name: 'Vue.js', level: 80, icon: 'layout', category: 'frontend' },
  { name: 'Tailwind CSS', level: 95, icon: 'palette', category: 'frontend' },
  { name: 'JavaScript', level: 95, icon: 'code2', category: 'frontend' },
  { name: 'HTML/CSS', level: 98, icon: 'layout', category: 'frontend' },
  { name: 'Sass/SCSS', level: 85, icon: 'palette', category: 'frontend' },
  { name: 'Git', level: 90, icon: 'git-branch', category: 'tools' },
  { name: 'Docker', level: 70, icon: 'package', category: 'tools' },
  { name: 'AWS', level: 75, icon: 'cloud', category: 'tools' },
  { name: 'Webpack', level: 80, icon: 'package', category: 'tools' },
  { name: 'Figma', level: 85, icon: 'figma', category: 'design' },
  { name: 'Photoshop', level: 70, icon: 'image', category: 'design' }
];

export const personalInfo = {
  name: 'Matthew Egbedokun',
  title: 'Frontend Engineer',
  email: 'jimatth121@gmail.com',
  phone: '+234 9031 84 9620',
  location: 'Lagos, Nigeria',
  github: 'https://github.com/jimatth121',
  linkedin: 'https://www.linkedin.com/in/matthew-egbedokun-06400922b/',
  twitter: 'https://x.com/MEgbedokun',
  resumeUrl: '/resume.pdf'
};