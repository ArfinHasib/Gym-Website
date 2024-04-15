'use client';

import Image from 'next/image';
import Link from 'next/link';

import {
   FaMapMarkerAlt,
   FaEnvelope,
   FaPhoneAlt,
   FaFacebook,
   FaTwitter,
   FaYoutube,
} from 'react-icons/fa';

import CustomButton from './CustomButton';
import { motion } from 'framer-motion';

const footerContainervariant = {
   hidden: {
      opacity: 0,
   },
   show: {
      opacity: 1,
      transition: {
         staggerChildren: 0.4,
         duration: 0.5,
         ease: 'linear',
      },
   },
};

const footerItem = {
   hidden: {
      y: 20,
      opacity: 0,
   },
   show: {
      opacity: 1,
      transition: {
         duration: 0.5,
         ease: [0.25, 0.6, 0.3, 0.8],
      },
   },
};

const Footer = () => {
   return (
      <footer className='bg-primary-300 pt-24'>
         <div className='container mx-auto pb-24'>
            <motion.div
               variants={footerContainervariant}
               initial='hidden'
               whileInView={'show'}
               viewport={{ once: false, amount: 0.3 }}
               className='text-white grid grid-cols-1 xl:grid-cols-4 gap-x-8 gap-y-12'
            >
               {/* info */}
               <motion.div
                  variants={footerItem}
                  className='flex flex-col gap-4'
               >
                  <Link href='#'>
                     <Image
                        src={'/assets/img/logo.png'}
                        width={117}
                        height={55}
                        alt=''
                     />
                  </Link>
                  <p className='max-w-sm'>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Reprehenderit, sapiente.
                  </p>
                  <ul className='flex flex-col gap-4'>
                     <li className='flex items-center gap-4'>
                        <FaMapMarkerAlt className='text-xl text-accent' />
                        <span>Lincoln Park Chicago, Illionis</span>
                     </li>
                     <li className='flex items-center gap-4'>
                        <FaPhoneAlt className='text-xl text-accent' />
                        <span>(510) 710-3464 | (510) 640-6326</span>
                     </li>
                     <li className='flex items-center gap-4'>
                        <Link href='#' className='flex items-center gap-4'>
                           <FaEnvelope className='text-xl text-accent' />
                        </Link>
                        <span>sayhello@gmail.com</span>
                     </li>
                  </ul>
               </motion.div>
               {/* blog */}
               <motion.div variants={footerItem} className=''>
                  <h4 className='h4 text-accent'>Recent Blog posts</h4>
                  {/* posts */}
                  <div className='border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4s'>
                     <Link
                        href='#'
                        className='hover:text-accent transition-all'
                     >
                        <h5 className='h5 leading-snug'>
                           How to stay motivated for all exercises
                        </h5>
                        <p className='text-gray-400 text-[12px] tracking-[3px] uppercase'>
                           May 22, 2024
                        </p>
                     </Link>
                  </div>

                  <div className='border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4s'>
                     <Link
                        href='#'
                        className='hover:text-accent transition-all'
                     >
                        <h5 className='h5 leading-snug'>
                           How to stay motivated for all exercises
                        </h5>
                        <p className='text-gray-400 text-[12px] tracking-[3px] uppercase'>
                           May 22, 2024
                        </p>
                     </Link>
                  </div>

                  <div className='flex flex-col gap-3 pb-3 mb-4s'>
                     <Link
                        href='#'
                        className='hover:text-accent transition-all'
                     >
                        <h5 className='h5 leading-snug'>
                           How to stay motivated for all exercises
                        </h5>
                        <p className='text-gray-400 text-[12px] tracking-[3px] uppercase'>
                           May 22, 2024
                        </p>
                     </Link>
                  </div>
               </motion.div>
               {/* gallery */}
               <motion.div variants={footerItem} className=''>
                  <h4 className='h4 text-accent mb-4'></h4>
                  {/* gallery imgs */}
                  <div className='flex flex-wrap gap-2'>
                     <Link href='#'>
                        <Image
                           src={'/assets/img/trainers/david.jpg'}
                           width={100}
                           height={100}
                           alt=''
                        />
                     </Link>
                     <Link href='#'>
                        <Image
                           src={'/assets/img/trainers/matt.jpg'}
                           width={100}
                           height={100}
                           alt=''
                        />
                     </Link>
                     <Link href='#'>
                        <Image
                           src={'/assets/img/trainers/rosy.jpg'}
                           width={100}
                           height={100}
                           alt=''
                        />
                     </Link>
                     <Link href='#'>
                        <Image
                           src={'/assets/img/trainers/sofia.jpg'}
                           width={100}
                           height={100}
                           alt=''
                        />
                     </Link>
                     <Link href='#'>
                        <Image
                           src={'/assets/img/trainers/david.jpg'}
                           width={100}
                           height={100}
                           alt=''
                        />
                     </Link>
                     <Link href='#'>
                        <Image
                           src={'/assets/img/trainers/matt.jpg'}
                           width={100}
                           height={100}
                           alt=''
                        />
                     </Link>
                     <Link href='#'>
                        <Image
                           src={'/assets/img/trainers/rosy.jpg'}
                           width={100}
                           height={100}
                           alt=''
                        />
                     </Link>
                     <Link href='#'>
                        <Image
                           src={'/assets/img/trainers/sofia.jpg'}
                           width={100}
                           height={100}
                           alt=''
                        />
                     </Link>
                  </div>
               </motion.div>
               {/* newsletter */}
               <motion.div variants={footerItem} className=''>
                  <h4 className='h4 text-accent mb-4'>Newsletter</h4>
                  <div className='flex flex-col gap-4'>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo possimus sed aut corrupti repellat sequi!
                     </p>
                     <form>
                        <input
                           type='text'
                           placeholder='Your email address'
                           className='h-[50px] outline-none px-4 text-primary-300'
                        />

                        <CustomButton
                           containerStyles='h-[50px] px-8'
                           text='Send'
                        />
                     </form>
                  </div>
               </motion.div>
            </motion.div>
         </div>

         {/* Copyright */}
         <div className='text-white border-t border-white/20 py-12'>
            <div className='container mx-auto h-full'>
               <div className='flex flex-col md:flex-row items-center justify-between h-full'>
                  <span>
                     &copy; Copyright 2024 FitPhysique. All rights reserved
                  </span>
                  <ul className='mt-5 md:mb-0 flex gap-4 text-xl'>
                     <li>
                        <Link
                           href='#'
                           className='text-white hover:text-accent transition-all'
                        >
                           <FaFacebook />
                        </Link>
                     </li>
                     <li>
                        <Link
                           href='#'
                           className='text-white hover:text-accent transition-all'
                        >
                           <FaTwitter />
                        </Link>
                     </li>
                     <li>
                        <Link
                           href='#'
                           className='text-white hover:text-accent transition-all'
                        >
                           <FaYoutube />
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
