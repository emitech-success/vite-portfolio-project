import { nanoid } from 'nanoid';
import { FaGithubSquare, FaHtml5, FaJs, FaLinkedin, FaReact, FaTwitterSquare } from 'react-icons/fa';
import AgroEaseImg from './assets/agroEase.png';
import TourImg from './assets/tour-pics.png';
import UnsplashedImg from './assets/unsplashed-images.png';
import EmitechStore from './assets/emitech-store.png';
import RobortoImg from './assets/robotofriend-pics.png';
import CocktailImg from './assets/cocktail-pics.png';


export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-blue-700' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-blue-700' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-blue-700' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: EmitechStore,
    url: 'https://emitech-success.netlify.app/',
    github: 'https://github.com/emitech-success/emitech-store',
    title: 'Emitech Store',
    text: 'Emitech store is an online store that enables the user to register as a new user, login as an existing user with email address and password. Search items and add to cart. The user can also see previous orders.',
  },
  {
    id: nanoid(),
    img: CocktailImg,
    url: 'https://cocktail-vite-project.netlify.app',
    github: 'https://github.com/emitech-success/cocktail-vite-project',
    title: 'Cocktail',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: AgroEaseImg,
    url: 'https://agritec-solution.vercel.app/',
    github: 'https://github.com/emitech-success/AgroEase-js',
    title: 'AgroEase',
    text: 'Agroease is an online agricultural market place. You can conveniently and safely shop high quality farm input, agricultural equipments, agro processed products etc.',
  },
  {
    id: nanoid(),
    img: TourImg,
    url: 'https://site-tour-project.netlify.app',
    github: 'https://github.com/emitech-success/tour-project',
    title: 'Site Tour',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: UnsplashedImg,
    url: 'https://image-unsplash-project.netlify.app',
    github: 'https://github.com/emitech-success/vite-unsplash-image-project',
    title: 'Unsplashed Images',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  // {
  //   id: nanoid(),
  //   img: VeechangeImg,
  //   url: 'https://react-projects.netlify.app/',
  //   github: 'https://github.com/john-smilga',
  //   title: 'VeeChange',
  //   text: 'VeeChange is a platform that allows the exchange of forex between users with ease and ensures that the transaction is completed and both parties are happy.',
  // },
  {
    id: nanoid(),
    img: RobortoImg,
    url: 'https://emyrobofriend.netlify.app/',
    github: 'https://github.com/emitech-success/roboFriends',
    title: 'Robot Friends',
    text: 'It collect real time robot data that includes names, username and picture. It uses mock API to fetch robot data',
  },
 
];

export const socials = [
  {
    id: nanoid(),
    href: 'https://github.com/emitech-success/',
    icon: <FaGithubSquare className='h-8 w-8 text-slate-800 hover:text-black duration-300'/>
  },
  {
    id: nanoid(),
    href: 'https://www.linkedin.com/in/augustine-odezulu-a41b0a138/',
    icon: <FaLinkedin className='h-8 w-8 text-slate-800 hover:text-black duration-300'/>
  },
  {
    id: nanoid(),
    href: 'https://x.com/ChukwuemekaOd?t=fOu5Y05_jKo3UXPvxZGtyg&s=09',
    icon: <FaTwitterSquare className='h-8 w-8 text-slate-800 hover:text-black duration-300'/>
  },
]
