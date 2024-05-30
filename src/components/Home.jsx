/* eslint-disable react/no-unescaped-entities */
import LinkedIn from "../assets/socials/linkedin.svg";
import Twitter from "../assets/socials/twitter.svg";
import Youtube from "../assets/socials/youtube.svg";
import GitHub from "../assets/socials/github.svg";
import Books from "../assets/socials/book.svg";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";


// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Home = () => {
  let Links = [
    // { name: "Home", link: "home" },
    // { name: "About me", link: "about" },
    { name: "Projects", link: "projects" },
    // { name: "Contact", link: "contact" },
  ];
  return (
    <div className="hero my-8 md:py-8 px-7 relative" id="home">
      {/* hero info */}
      <div className="h-screen flex items-center justify-center">
        <motion.div 
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-center md:w-1/2">
          <h1 className="text-primary text-5xl font-extrabold tracking-wider mb-8">
            HEY, I'M IBRAR AHMMED
          </h1>
          <TypeAnimation
            className="font-semibold text-transparent leading-10 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            sequence={[
              // Same substring at the start will only be typed once, initially
              "Developing for the Future, One Website at a Time.",
              1000,
              "Designing for the Online Presence.",
              1000,
              "Designing for the Pixel Perfect Experiences.",
              1000,
              "We Create, You Conquer.",
              1000,
            ]}
            speed={50}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
          {/* hero info */}
          <p className="text-light text-xl my-8">
          A Self-driven, quick learner, passionate programmer with a curious mind who aspiring web development with a strong passion for creating user-friendly and visually appealing websites.
          </p>
          <button className="btn py-4 px-16 text-light">

          {Links.map((link) => (
            // <li className="md:ml-8 md:my-0 mt-5 font-semibold text-xl border-b-2 md:border-b-0 text-right px-7 md:px-4 pb-4 md:pb-0 cursor-pointer" key={link.name}>
              <Link
                to={link.link}
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-100}
                className="text-light hover:text-secondary duration-500 uppercase"
              >
                {link.name}
              </Link>
            // </li>
          ))}
            
            
             </button>


        </motion.div>
      </div>
      {/* hero socials */}
      <div className="bg-white w-20 rounded py-1 px-2 absolute left-0 top-48 hidden md:block">
        <div className="my-1">
          <a
            href="https://www.linkedin.com/in/ibrar-ahmmed-b7b665299/"
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={LinkedIn} alt="" className="w-10 h-10" />
          </a>
        </div>
        {/* <div className="my-1">
          <a
            href="#"
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={Twitter} alt="" className="w-10 h-10" />
          </a>
        </div> */}
        {/* <div className="my-1">
          <a
            href="#"
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={Youtube} alt="" className="w-10 h-10" />
          </a>
        </div> */}
        <div className="my-1">
          <a
            href="https://github.com/ibrarahmmed"
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={GitHub} alt="" className="w-10 h-10" />
          </a>
        </div>
        <div className="my-1">
          <a
            href="#"
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={Books} alt="" className="w-10 h-10" />
          </a>
        </div>
      </div>

 
    </div>
  );
};

export default Home;
