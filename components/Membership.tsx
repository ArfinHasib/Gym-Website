'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import MembershipSlider from './MembershipSlider';

export const Membership = () => {
   return (
      <motion.section
         variants={fadeIn('up', 0.2)}
         initial='hidden'
         whileInView={'show'}
         viewport={{ once: false, amount: 0.2 }}
         className='py-8 xl:py-0 lg:h-[110vh] bg-membership bg-cover bg-center relative before:w-full before:h-full before:bg-black/70 before:absolute before:top-0 before:z-10'
         id='prices'
      >
         <div className='container mx-auto px-0 text-white h-full flex flex-col xl:pt-16 relative z-20'>
            <motion.h2
               variants={fadeIn('up', 0.4)}
               initial='hidden'
               whileInView={'show'}
               viewport={{ once: false, amount: 0.2 }}
               className='h2 text-center text-white mb-2'
            >
               Membership
            </motion.h2>
            <motion.p
               variants={fadeIn('up', 0.6)}
               initial='hidden'
               whileInView={'show'}
               viewport={{ once: false, amount: 0.2 }}
               className='text-center text-[16px] lg:text-[20px] mb-8'
            >
               Choose the best plan according to your goals and pricing.
            </motion.p>
            <motion.div
               variants={fadeIn('up', 0.8)}
               initial='hidden'
               whileInView={'show'}
               viewport={{ once: false, amount: 0.2 }}
            >
               <MembershipSlider />
            </motion.div>
         </div>
      </motion.section>
   );
};
