'use client';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '@/lib/styles';
import { git, github } from '@/assets';
import SectionWrapper from '@/components/SectionWrapper';
import { projects } from '../constants';
import { fadeIn, textVariant } from '@/lib/motion';
import Image, { StaticImageData } from 'next/image';

interface Props {
  index: number;
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: StaticImageData;
  sourceCodeLink: string;
}

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
}: Props) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="w-full rounded-2xl bg-tertiary p-5 sm:w-[360px]"
      >
        <div className="relative h-[230px] w-full">
          <Image
            src={image}
            alt={name}
            className="h-full w-full rounded-2xl object-cover"
          />
          <div className="card-img_hover absolute inset-0 m-3 flex justify-end gap-1">
            <div
              onClick={() => window.open(sourceCodeLink, 'blank')}
              className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
              aria-hidden="true"
            >
              <Image
                src={github}
                alt="github"
                className="h-1/2 w-1/2 object-contain"
              />
            </div>
            <div
              onClick={() => window.open(sourceCodeLink, 'blank')}
              className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
              aria-hidden="true"
            >
              <Image
                src={git}
                alt="git"
                className="h-1/2 w-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-[24px] font-bold text-white">{name}</h3>
          <p className="mt-2 text-[14px] text-secondary">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className="flex w-full">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 max-w-3xl text-[17px] leading-[30px] text-secondary"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, 'projects');
