'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import CustomButton from './CustomButton';

const classes = [
   {
      name: 'body building',
      img: '/assets/img/classes/bodybuilding.jpg',
      description:
         'Bodybuilding involves resistance training to build and sculpt muscles for strength and aesthetics.',
   },
   {
      name: 'cardio',
      img: '/assets/img/classes/cardio.jpg',
      description:
         'Cardio workouts focus on improving cardiovascular health and endurance through activities like running, cycling, or swimming.',
   },
   {
      name: 'crossfit',
      img: '/assets/img/classes/crossfit.jpg',
      description:
         'Crossfit combines elements of weightlifting, high-intensity interval training (HIIT), and functional movements for overall fitness.',
   },
   {
      name: 'calisthenics',
      img: '/assets/img/classes/fitness.jpg',
      description:
         'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum nostrum enim doloribus nobis.',
   },
];

const Classes = () => {
   return (
      <section className='' id='class'>
         <motion.div
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
            className='grid grid-cols-1 xl:grid-cols-2'
         >
            {classes.map((item, index) => {
               return (
                  <div
                     className='relative w-full h-[300px] lg:h-[485px] flex flex-col justify-center items-center'
                     key={index}
                  >
                     {/* Overlay */}
                     <div className='bg-black/50 absolute w-full h-full top-0 z-10'></div>
                     <Image
                        src={item.img}
                        fill
                        className='object-cover'
                        alt=''
                     />
                     {/* text & btn */}
                     <div className='z-30 max-w-[380px] text-center flex flex-col items-center justify-center gap-4'>
                        <motion.h3
                           variants={fadeIn('up', 0.4)}
                           initial='hidden'
                           whileInView={'show'}
                           viewport={{ once: false, amount: 0.2 }}
                           className='h3 text-white'
                        >
                           {item.name}
                        </motion.h3>
                        <motion.p
                           variants={fadeIn('up', 0.6)}
                           initial='hidden'
                           whileInView={'show'}
                           viewport={{ once: false, amount: 0.2 }}
                           className='text-white'
                        >
                           {item.description}
                        </motion.p>
                        <motion.div
                           variants={fadeIn('up', 0.8)}
                           initial='hidden'
                           whileInView={'show'}
                           viewport={{ once: false, amount: 0.2 }}
                        >
                           <CustomButton
                              containerStyles='w-[164px] h-[46px]'
                              text='Read more'
                           />
                        </motion.div>
                     </div>
                  </div>
               );
            })}
         </motion.div>
      </section>
   );
};

export default Classes;
