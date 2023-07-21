import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../Assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { FaGithub } from "react-icons/fa";
import Son from "../Assets/12.jpg";


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div 
    // variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[350px] w-auto'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <FaGithub
                // src={github}
                alt='source code'
                className='w-10 h-10 text-black object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-gray-100 font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-gray-400 text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
   </motion.div>
  );
};

const Works = () => {
  return (
    <div 
    style={{backgroundImage: `url(${Son})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
    className="w-screen pb-40"
    >
      <motion.div 
      // variants={textVariant()}
      >
      <h1 className='font-bold text-6xl text-white m-10 pt-20
        '>
      Jobs 
        </h1>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3  p-10 text-gray-400 text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases our skills and experience through
          real-world examples of our work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects our
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex justify-center items-center flex-col-3 gap-2'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Works;
