import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import Son from "../Assets/12.jpg";


const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-gray-400 font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-gray-400 tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-gray-400 font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div 
    style={{backgroundImage: `url(${Son})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
    className="w-screen pb-40"
    // className={`mt-12 bg-black-100 rounded-[20px]`}
    >
      <div
        className={`bg-tertiary text-gray-400 rounded-2xl px-20 p-10`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText} >What others say</p>
          {/* <h2 className={styles.sectionHeadText} */}
          <h1 className='font-bold text-8xl text-white m-0 pt-10'


          >Testimonials.</h1>
        </motion.div>
      </div>
      {/* <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}> */}
      <div className='px-20 flex justify-center items-center flex-col-3 gap-2'>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
