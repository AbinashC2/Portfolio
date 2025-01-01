import Lottie from "lottie-react";
import computer from "../assets/lottie/computer.json";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins']  max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12 flex max-sm:flex-col gap-5">
          <div className="INTRO text-[70px] leading-[80px] font-semibold max-sm:text-[50px] max-sm:leading-[70px] max-sm:font-semibold">
            <h3 className="text-[#00040f] dark:text-white">
              Hi, there! <br />I am
            </h3>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e66465] to-[#9198e5];">
              Abinash Mohapatra
            </span>

            <p className="ABOUT h-[100px] text-xl max-sm:text-[15px] bg-clip-text text-transparent  bg-gradient-to-r  from-[#00040f] to-slate-500 dark:from-slate-500 dark:to-slate-200 max-w-[470px] mt-5 pl-1">
            Freelance developer and software engineer creating scalable solutions to solve real-world problems.
            </p>
            <div className="flex gap-5 justify-center sm:justify-start">
              <a
                href="/resume.pdf"
                target="Resume.pdf"
                rel="noopener noreferrer"
                className="py-2 px-4 bg-gradient-to-t dark:from-cyan-500 dark:to-slate-300 from-blue-600 to-cyan-600 font-medium text-sm text-white dark:text-black outline-none mt-2 rounded hover:opacity-90 transition duration-200"
              >
                Resume
              </a>
            </div>
          </div>

          <Lottie
            animationData={computer}
            loop={true}
            className="max-w-[650px] shadow-xl rounded-xl border border-[#00040f]"
          />
        </div>
      </section>
    </>
  );
};
export default About;
