'use client';
import { Tooltip } from 'react-tooltip';
import BallCanvas from '@/components/canvas/Ball';
import { technologies } from '@/constants';
import SectionWrapper from '@/components/SectionWrapper';

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <div className="h-28 w-28 hover:cursor-pointer" key={technology.name}>
          <BallCanvas icon={technology.icon} id={`tech-${index}`} />
          <Tooltip content={technology.name} anchorSelect={`#tech-${index}`} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, 'tech');
