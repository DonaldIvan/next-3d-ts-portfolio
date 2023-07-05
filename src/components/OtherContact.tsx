'use client';
import { motion } from 'framer-motion';

import { styles } from '@/lib/styles';
import SectionWrapper from '@/components/SectionWrapper';
import { textVariant } from '@/lib/motion';

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
        test
      </div>
    </div>
  );
};

export default SectionWrapper(OtherContact, 'other-contact');
