'use client';
import { motion } from 'framer-motion';

import { styles } from '@/lib/styles';
import SectionWrapper from '@/components/SectionWrapper';
import { fadeIn, textVariant } from '@/lib/motion';
import { testimonials } from '@/constants';
import Image from 'next/image';

interface Props {
  index: number;
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}: Props) => {
  return (
    <motion.div
      variants={fadeIn('', 'spring', index * 0.5, 0.75)}
      className="w-full rounded-3xl bg-black-200 p-10 xs:w-[320px]"
    >
      <p className="text-[48px] font-black text-white">&quot;</p>
      <div className="mt-1">
        <p className="trakcing-wider text-[18px] text-white">{testimonial}</p>
        <div className="mt-7 flex items-center justify-between gap-1">
          <div className="flex flex-1 flex-col">
            <p className="text-[16px] font-medium text-white">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-[12px] text-secondary">
              {designation} of {company}
            </p>
          </div>
          <Image
            src={image}
            width={40}
            height={40}
            alt={`feedback-by-${name}`}
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

const OtherContact = () => {
  return (
    <div className="mt-12 rounded-[20px] bg-black-100">
      <div
        className={`${styles.padding} min-h-[300px] rounded-2xl bg-tertiary`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7 pb-14`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(OtherContact, 'other-contact');
