'use client';

import { FaUsers } from 'react-icons/fa';
import { IoIosPricetag } from 'react-icons/io';
import { FaDumbbell } from 'react-icons/fa';

import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import Achievements from './Achievements';

const featured = [
   {
      icon: <FaUsers />,
      title: 'award-winning trainers',
      subtitle:
         'Work with our best trainers and improve your physique. They are proven trainers to train according to your body structure and goals.',
   },
   {
      icon: <IoIosPricetag />,
      title: 'excellent prices',
      subtitle:
         'Get the best prices according to your goals to get the physique you want. You can enjoy bonus and discounts occaisionaly. and with free diet charts',
   },
   {
      icon: <FaDumbbell />,
      title: 'modern equipment',
      subtitle:
         'We have got the best and latest machines and equipments that you need to get the perfect body you need. All the instruments are easy to follow.',
   },
];

const About = () => {
   return (
      <section className='pt-8 pb-14 lg:pt-16 lg:pb-28' id='about'>
         <div className='container mx-auto'>
            <div className='flex flex-col items-center gap-2 mb-8'>
               <motion.h2
                  variants={fadeIn('up', 0.4)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.2 }}
                  className='h2 text-center'
               >
                  About Us
               </motion.h2>
               <motion.p
                  variants={fadeIn('up', 0.6)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.2 }}
                  className='max-w-[600px] mx-auto text-center mb-5 text-[20px]'
               >
                  We are the best of the best. Our trainers and machines &
                  instruments are world class. You can get the best price with
                  every possible facilites
               </motion.p>
               {/* featured items */}
               <motion.div
                  variants={fadeIn('up', 0.8)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.2 }}
                  className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16'
               >
                  {featured.map((feature, index) => {
                     return (
                        <div
                           className=' bg-accent flex flex-col justify-center items-center gap-8 border p-16 shadow-2xl'
                           key={index}
                        >
                           <div className='text-4xl bg-primary-300 text-white w-[80px] h-[80px] rounded-full flex justify-center items-center'>
                              {feature.icon}
                           </div>
                           <div className='flex flex-col justify-center items-center gap-2 text-center'>
                              <h4 className='h4 text-white'>{feature.title}</h4>
                              <p className='text-white/80'>
                                 {feature.subtitle}
                              </p>
                           </div>
                        </div>
                     );
                  })}
               </motion.div>
            </div>
            {/* achievements */}
            <motion.div
               variants={fadeIn('up', 1)}
               initial='hidden'
               whileInView={'show'}
               viewport={{ once: false, amount: 0.2 }}
            >
               <Achievements />
            </motion.div>
         </div>
      </section>
   );
};

export default About;
