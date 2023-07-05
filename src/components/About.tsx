'use client';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

import { styles } from '@/lib/styles';
import { services } from '@/constants';
import { fadeIn } from '@/lib/motion';
import SectionWrapper from '@/components/SectionWrapper';

interface Props {
  index: number;
  title: string;
  icon: StaticImageData;
}

const ServiceCard = ({ index, title, icon }: Props) => {
  return (
    <Tilt className="w-full xs:w-[250px]">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="green-pink-gradient w-full rounded-[20px] p-[1px] shadow-card"
      >
        <div className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-tertiary px-12 py-5">
          <Image src={icon} alt={title} className="h-16 w-16 object-contain" />
          <h3 className="text-center text-[20px] font-bold text-white">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary"
      >
        I&lsquo;m a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I&lsquo;m a quick learner and collaborate closely with clients
        to create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let&lsquo;s work together to bring your ideas to
        life!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          ></ServiceCard>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
