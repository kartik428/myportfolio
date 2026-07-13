// import AnimatedUser from "../assets/images/animateduser.png";
import { motion, number } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import { SlEnvolope, SlEnvolopeLetter } from "react-icons/sl";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {

  const CardsData = [
    { number: "3+", title: "Months of Experience" },
    { number: "5+", title: "Projects Completed" },
    { number: "8+", title: "Tech Stack Expertise " },
  ];


  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-x-hidden flex flex-col justify-center items-center px-6 md:px-45 py-46"
    >
      {/* Background Video */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-screen object-cover -z-10"
      >
        <source src="/bgvideo2.mp4" type="video/mp4" />
      </video> */}

      {/* Enhanced Dark Overlay - deeper gradient for text contrast */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black -z-10"></div> */}

      <div className="max-w-5xl text-center">
        {/* Intro Tag */}
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400 font-medium tracking-widest uppercase text-sm mb-3">
            {"<"} Welcome to my portfolio   {"/>"}
          </p>
        </motion.div>


        {/* Professional Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mt-4 drop-shadow-lg">_
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              <Typewriter
                words={[
                  "React Expert",
                  "MERN Stack Engineer",
                  "Full Stack Developer",
                ]}
                loop={0}
                // cursor
                // cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
        </motion.div>

        {/* Main Name */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Kartik <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">Singh</span>
          </h1>
        </motion.div>


        {/* Description */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.9 }}
          viewport={{ once: true }}
        >
          <p className="max-w-lg mt-6 mx-auto text-slate-300 text-lg leading-relaxed italic">
            "Crafting modern, responsive, and user-focused interfaces that turn
            complex ideas into seamless digital experiences."
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-5 justify-center items-center mt-10">
            <a href="#projects">
              <button className="px-4 py-3 bg-cyan-500 text-black font-bold rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                View Projects <ArrowRightIcon className="inline-block ml-2" />
              </button>
            </a>

            <a href="#contact">
              <div className="relative inline-flex rounded-full p-[1px] overflow-hidden">
                <div className="absolute inset-0 rounded-full">
                  <div className="absolute -inset-[250%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_340deg,#22d3ee_350deg,#67e8f9_355deg,transparent_360deg)]" />
                </div>

                <button className="relative z-10 flex items-center gap-2 rounded-full bg-[#09090b] px-8 py-3 text-white">
                  Get in Touch
                  <SlEnvolope />
                </button>
              </div>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Cards Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-6 mt-22"
      >
        {CardsData.map((card, index) => (
          <div key={index} className="bg-[#0f0f0f] p-6 rounded-xl shadow-lg w-60 text-center">
            <h3 className="text-3xl font-bold text-cyan-400 mb-2">{card.number}</h3>
            <p className="text-gray-300">{card.title}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;