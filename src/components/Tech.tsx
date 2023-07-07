'use client';
import { motion } from 'framer-motion';
import { styles } from '@/lib/styles';
import { fadeIn, textVariant } from '@/lib/motion';
import { Tooltip } from 'react-tooltip';
import BallCanvas from '@/components/canvas/Ball';
import { technologies } from '@/constants';
import SectionWrapper from '@/components/SectionWrapper';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies I`m using</p>
        <h2 className={styles.sectionHeadText}>Tech Stack</h2>
      </motion.div>
      <div className="mt-20 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (
          <div className="h-28 w-28 hover:cursor-pointer" key={technology.name}>
            <BallCanvas icon={technology.icon} id={`tech-${index}`} />
            <Tooltip
              content={technology.name}
              anchorSelect={`#tech-${index}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, 'tech');
