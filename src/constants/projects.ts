import { tello } from '@/assets';

const REACT = {
  name: 'react',
  color: 'blue-text-gradient',
};

const NEXTJS = {
  name: 'nextjs',
  color: 'white-text-gradient',
};

const TPYESCRIPT = {
  name: 'typescript',
  color: 'text-[#2F74C0]',
};
const ZUSTAND = {
  name: 'zustand',
  color: 'text-[#1E4CC9]',
};
const TAILWIND = {
  name: 'tailwind',
  color: 'text-[#36B7F0]',
};

const CHAT_GPT = {
  name: 'chatgpt',
  color: 'text-[#009A74]',
};

const APPWRITE_CLOUD = {
  name: 'appwrite',
  color: 'text-[#E82D62]',
};
const projects = [
  {
    name: 'Trello Clone',
    description:
      'Web-based project management and collaboration tool for streamlined task organization and tracking.',
    tags: [
      REACT,
      NEXTJS,
      TPYESCRIPT,
      ZUSTAND,
      CHAT_GPT,
      TAILWIND,
      APPWRITE_CLOUD,
    ],
    image: tello,
    sourceCodeLink: 'https://github.com/DonaldIvan/trello-clone',
    liveDemoLink: 'https://trello-clone.donaldivan.dev/',
  },
];

export default projects;
