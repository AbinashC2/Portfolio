/* eslint-disable react/no-unescaped-entities */
import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiTwitter,
  // SiGmail,
} from "react-icons/si";

import founder from "../assets/founder.jpg";


const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="EXPERIENCE dark:bg-[#111827] p-5 mt-[5rem] font-['Poppins']  max-sm:p-2 "
      >
        <div className="bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#111827] dark:to-[#111827] dark:shadow-none rounded-2xl shadow-xl WRAPPER mx-2 flex justify-between p-7 mb-7 max-sm:flex-col-reverse max-sm:p-2">
          <div className="ABOUT p-7">
            <h2 className="text-[#00040f] font-semibold dark:text-slate-300 leading-7 text-xl tracking-wider max-sm:text-center">
            Abinash Mohapatra
            </h2>
            <p className="text-gray-600 dark:text-slate-400 leading-[30.8px] mt-7 max-w-[400px] max-sm:text-center">
            Software Engineer  | Full-Stack Dev
            </p>
            <div className="SOCIALS text-[#00040f] dark:text-white text-2xl flex gap-7 mt-5 max-sm:justify-evenly">
              <a
                href="https://github.com/AbinashC2"
                className=" hover:text-slate-500  dark:hover:text-sky-300"
              >
                <SiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/abinash-mohapatra83/"
                className=" hover:text-slate-500  dark:hover:text-sky-300"
              >
                <SiLinkedin />
              </a>
              <a
                href="https://www.instagram.com/_abinashmohapatra/"
                className=" hover:text-slate-500  dark:hover:text-sky-300"
              >
                <SiInstagram />
              </a>
              <a
                href="https://x.com/_69abinash"
                className=" hover:text-slate-500  dark:hover:text-sky-300"
              >
                <SiTwitter />
              </a>
              {/* <a
                href="abinashmohapatra889@gmail.com"
                className=" hover:text-slate-500  dark:hover:text-sky-300"
              >
                <SiGmail />
              </a> */}
            </div>
            
          </div>

          <div className="IMG p-0 max-sm:grid max-sm:place-content-center bg-auto">
            <img
              src={founder}
              alt="  Abinash Mohapatra"
              className="h-[200px] max-sm:h-[150px] border-[#00040fab] dark:border-slate-300 border-4 rounded-full mt-12"
            />
          </div>
        </div>

        <p className="text-[#00040f] dark:text-slate-300 mx-2 text-center capitalize tracking-widest max-sm:text-sm p-2">
          made with 💙 by Abinash Mohapatra & the Open Source Community
        </p>
      </section>
    </>
  );
};
export default Contact;
