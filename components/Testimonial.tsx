'use client';

import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';

import { motion } from 'framer-motion';

// import swiper components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination } from 'swiper/modules';

// swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { fadeIn } from '@/lib/variants';

const testimonialData = [
   {
      img: '/assets/img/testimonial/lucy.jpg',
      message:
         'The atmosphere here is electric! Everyone, from the staff to fellow members, is so encouraging and friendly. Its truly a community that motivates you to give your best in every workout. The trainers personalize workouts to match my goals, ensuring I stay on track. If you are looking for a place that feels like a second home, this is it!',
      name: 'Lucy Anthony',
   },
   {
      img: '/assets/img/testimonial/michael.jpg',
      message:
         'I have been a member of gym borcelle for over a year, and the results speak for themselves. The trainers are dedicated to helping you achieve your desired results and are always available to provide guidance. Whether you are a beginner or seasoned athlete, the programs here are tailored to suit every fitness level. I have achieved milestones I never dreamed of reaching!',
      name: 'Michael Philips',
   },
   {
      img: '/assets/img/testimonial/maria.jpg',
      message:
         'Finding time for fitness as a parent can be challenging, but this gym makes it seamless. The childcare services are fantastic, allowing me to focus on my workouts worry-free. The range of classes means theres something for everyone in the family. Its great to see my kids excited about fitness too! This gym has truly become a part of our familys healthy lifestyle.',
      name: 'Maria Garcia',
   },
   {
      img: '/assets/img/testimonial/lucy.jpg',
      message:
         'I have had the pleasure of working with the personal trainers here, and they are exceptional. Each session is tailored to my specific goals and abilities, ensuring maximum effectiveness. The trainers are not just knowledgeable but also passionate about what they do, which makes all the difference. Thanks to their guidance, I have surpassed my fitness goals faster than I imagined!',
      name: 'Sarah Williams',
   },
   {
      img: '/assets/img/testimonial/michael.jpg',
      message:
         'Being part of this gym feels like being part of a family. Everyone is so friendly and encouraging, which makes working out enjoyable. The variety of classes keeps things exciting, and the facilities are top-notch. I have not only improved my fitness but also made great friends along the way. Highly recommend!',
      name: 'Morris Dave',
   },
   {
      img: '/assets/img/testimonial/maria.jpg',
      message:
         'Joining this gym was the best decision I made for my fitness journey. The trainers are incredibly knowledgeable and supportive, pushing me to achieve goals I never thought possible. The variety of classes and equipment keeps workouts exciting and challenging. Thanks to this gym, I have seen remarkable changes in my strength and overall health!',
      name: 'Linda Smith',
   },
];

const Testimonial = () => {
   return (
      <section className='py-12 xl:py-16 h-full bg-accent/20' id='testimonial'>
         <div className='container mx-auto'>
            <motion.h2
               variants={fadeIn('up', 0.4)}
               initial='hidden'
               whileInView={'show'}
               viewport={{ once: false, amount: 0.2 }}
               className='h2 text-center'
            >
               Our Testimonials
            </motion.h2>
            <motion.p
               variants={fadeIn('up', 0.6)}
               initial='hidden'
               whileInView={'show'}
               viewport={{ once: false, amount: 0.2 }}
               className='text-center text-[16px] lg:text-[20px]'
            >
               What our clients says about us and our gym facilities
            </motion.p>
            <motion.div
               variants={fadeIn('up', 0.8)}
               initial='hidden'
               whileInView={'show'}
               viewport={{ once: false, amount: 0.2 }}
            >
               <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  modules={[Pagination]}
                  pagination={{
                     clickable: true,
                  }}
                  breakpoints={{
                     768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                     },
                     1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                     },
                  }}
                  className='h-[460px]'
               >
                  {testimonialData.map((person, index) => {
                     return (
                        <SwiperSlide className='h-full' key={index}>
                           <div className='flex flex-col justify-center items-center gap-6 text-center  h-full'>
                              <Image
                                 src={person.img}
                                 width={90}
                                 height={90}
                                 alt=''
                                 className='rounded-full border-2 border-accent'
                              />
                              <div className='flex flex-col justify-center items-center'>
                                 <FaQuoteLeft className='text-2xl text-accent' />
                                 <p className='max-w-[380px] h-full mt-4'>
                                    {person.message}
                                 </p>
                                 <span className='text-2xl mt-4 text-accent'>
                                    {person.name}
                                 </span>
                              </div>
                           </div>
                        </SwiperSlide>
                     );
                  })}
               </Swiper>
            </motion.div>
         </div>
      </section>
   );
};

export default Testimonial;
