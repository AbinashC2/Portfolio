import {
  HTML,
  CSS,
  Github,
  Git,
  Vite,
  TailwindCSS,
  react,
  Python,
  Javascript,
  postman,
  nodejs,
  monogodb,
  springboot,
  java,
  vscode,
} from "../constants/Constant";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "./Img_prop";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="skills-section p-10 mx-auto max-w-screen-xl">
      <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center max-sm:text-4xl mb-10 ">
          SKILLS
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* HTML Skill */}
          <div className="skill-item p-4 bg-gray-800 text-white rounded-lg shadow-lg hover:scale-110 transform transition duration-500">
            <img src={HTML} alt="HTML" className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-xl text-center">HTML</h2>
          </div>
          {/* CSS Skill */}
          <div className="skill-item p-4 bg-gray-800 text-white rounded-lg shadow-lg hover:scale-110 transform transition duration-500">
            <img src={CSS} alt="CSS" className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-xl text-center">CSS</h2>
          </div>
          {/* JavaScript Skill */}
          <div className="skill-item p-4 bg-gray-800 text-white rounded-lg shadow-lg hover:scale-110 transform transition duration-500">
            <img
              src={Javascript}
              alt="JavaScript"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h2 className="text-xl text-center">JavaScript</h2>
          </div>
          {/* React Skill */}
          <div className="skill-item p-4 bg-gray-800 text-white rounded-lg shadow-lg hover:scale-110 transform transition duration-500">
            <img src={react} alt="React" className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-xl text-center">React</h2>
          </div>
          
          {/* NodeJS Skill */}
          <div className="skill-item p-4 bg-gray-800 text-white rounded-lg shadow-lg hover:scale-110 transform transition duration-500">
            <img src={nodejs} alt="NodeJS" className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-xl text-center">NodeJS</h2>
          </div>
          {/* TailwindCSS Skill */}
          <div className="skill-item p-4 bg-gray-800 text-white rounded-lg shadow-lg hover:scale-110 transform transition duration-500">
            <img
              src={TailwindCSS}
              alt="TailwindCSS"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h2 className="text-xl text-center">TailwindCSS</h2>
          </div>
          {/* JavaSkill */}
          <div className="skill-item p-4 bg-gray-800 text-white rounded-lg shadow-lg hover:scale-110 transform transition duration-500">
            <img
              src={java}
              alt="Java"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h2 className="text-xl text-center">Java</h2>
          </div>
          {/* SpringBoot Skill */}
          <div className="skill-item p-4 bg-gray-800 text-white rounded-lg shadow-lg hover:scale-110 transform transition duration-500">
            <img
              src={springboot}
              alt="SpringBoot"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h2 className="text-xl text-center">SpringBoot</h2>
          </div>
          {/* MongoDB Skill */}
          <div className="skill-item p-4 bg-gray-800 text-white rounded-lg shadow-lg hover:scale-110 transform transition duration-500">
            <img
              src={monogodb}
              alt="MongoDB"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h2 className="text-xl text-center">MongoDB</h2>
          </div>
          {/* Python Skill */}
          <div className="skill-item p-4 bg-gray-800 text-white rounded-lg shadow-lg hover:scale-110 transform transition duration-500">
            <img src={Python} alt="Python" className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-xl text-center">Python</h2>
          </div>
          {/* sql Skill */}
          <div className="skill-item p-4 bg-gray-800 text-white rounded-lg shadow-lg hover:scale-110 transform transition duration-500">
            <img src={Vite} alt="Vite" className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-xl text-center">SQL</h2>
          </div>
          {/* Git Skill */}
          <div className="skill-item p-4 bg-gray-800 text-white rounded-lg shadow-lg hover:scale-110 transform transition duration-500">
            <img src={Git} alt="Git" className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-xl text-center">Git</h2>
          </div>
          {/* GitHub Skill */}
          <div className="skill-item p-4 bg-gray-800 text-white rounded-lg shadow-lg hover:scale-110 transform transition duration-500">
            <img src={Github} alt="GitHub" className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-xl text-center">GitHub</h2>
          </div>
          {/* Postman Skill */}
          <div className="skill-item p-4 bg-gray-800 text-white rounded-lg shadow-lg hover:scale-110 transform transition duration-500">
            <img
              src={postman}
              alt="Postman"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h2 className="text-xl text-center">Postman</h2>
          </div>
          {/* VSCode Skill */}
          <div className="skill-item p-4 bg-gray-800 text-white rounded-lg shadow-lg hover:scale-110 transform transition duration-500">
            <img src={vscode} alt="VSCode" className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-xl text-center">VSCode</h2>
          </div>
        </div>
      </section>
    </>
  );
};
export default Skills;
