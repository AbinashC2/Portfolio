"use client";

import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// import IIIT_KOTA from "../assets/IIIT_Kota.png";
import soul from "../assets/soul_logo.png";
import free from "../assets/freelance.png"

import {
  // Hackthechain,
  // Sports,
  // KDE,
  // Oppia,
} from "../constants/Constant";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        id="experience"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12 ">
          <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center">
            EXPERIENCE
          </h1>

          <div
            className="EXPERIENCE mt-16 flex gap-20 max-sm:gap-10 max-sm:grid-cols-1 grid-cols-3 "
            data-aos="zoom-in-up"
          >
            <Exp_prop
              img={soul}
              title="SOUL LIMITED"
              subtitle="Software Engineer"
              date="January 2024 - present"
              para="Developed full-stack web applications using Python, React.js, Node.js, and MongoDB, focusing on performance and scalability. Integrated ERPNext and RESTful APIs for seamless communication. Optimized database performance and collaborated in an agile environment. Conducted testing, debugging, and documentation for production-ready solutions."
            />
            <Exp_prop
              img={free}
              title="Freelancing"
              subtitle="Freelancer"
              date=" 2023 - present"
              para="Offered freelance web development services, creating responsive, 
              user-friendly websites with React.js, Node.js, and MongoDB, ensuring timely delivery and client satisfaction. 
              Provided end-to-end solutions, from design to deployment, focusing on high-quality, efficient 
              web applications tailored to client needs."
            />
            
          </div>
        </div>
        
      </section>
      <Skills></Skills>
    </>
  );
};
export default Experience;
