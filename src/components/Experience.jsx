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
            className="EXPERIENCE mt-1 flex gap-20 max-sm:gap-10 max-sm:grid-cols-1 grid-cols-3 "
            data-aos="zoom-in-up"
          >
            <Exp_prop
              img={soul}
              title="SOUL LIMITED"
              subtitle="Software Engineer"
              date="January 2024 - present"
              para={
                <>
                  <h3 className="text-lg font-semibold mt-2">
                    Health Information Management System
                  </h3>
                  <ul className="list-disc list-inside mt-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>
                    Developed an EMR dashboard using HTML, CSS, Tailwind CSS, and React.js,
                     Improved patient management workflows, boosting efficiency by 20%,
                    Optimized billing systems, reducing errors by 15%,
                    Integrated appointment scheduling functionality, enhancing user experience by 10%.
                    </li>
                  </ul>
                  <h3 className="text-lg font-semibold mt-2">
                  Campus Management System
                  </h3>
                  <ul className="list-disc list-inside mt-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>
                    Developed key modules using ERPNext, React.js, SQL, Python, and REST API, improving system functionality
                    by 30%, Enhanced backend performance, reducing data retrieval times by 15% and improving overall user experience.
                    </li>
                    
                  </ul>
                </>
                
              }
            />
            <Exp_prop
              img={free}
              title="Freelancing"
              subtitle="Freelancer"
              date=" 2023 - present"
              para={<>
                      <h3 className="text-lg font-semibold mt-2">
                      Consulting Company Website
                      </h3>
                  <ul className="list-disc list-inside mt-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>
                    Developed a professional consulting website for a client, achieving a satisfaction rate of 73%.
                    </li>
                    <li>
                    Utilized React for the front-end and Node.js for the backend, resulting in a successful integration rate of 66%.
                    </li>
                    <li>
                    Integrated Web3 forms for secure and decentralized form submissions, increasing user security by 35%.
                    </li>
                    <li>
                    Managed version control using Git, improving collaboration efficiency by 45%.
                    </li>
                    <li>
                    Deployed the website using Hostinger, ensuring optimal performance, scalability, and accessibility, boosting speed
                   by 30%.
                    </li>
                  </ul>

              </>}
            />
            
          </div>
        </div>
        
      </section>
      <Skills></Skills>
    </>
  );
};
export default Experience;
