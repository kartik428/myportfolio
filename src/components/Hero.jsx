import AnimatedUser from "../assets/images/animateduser.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-x-hidden w-full h-170 md:h-screen scroll-mt-18 flex flex-col overflow-hidden justify-center items-center px-6 md:px-45"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-screen object-cover -z-10"
      >
        <source src="/bgvideo2.mp4" type="video/mp4" />
      </video>

      {/* Enhanced Dark Overlay - deeper gradient for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black -z-10"></div>

      <div className="max-w-5xl text-center">
        {/* Intro Tag */}
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400 font-medium tracking-widest uppercase text-sm mb-3">
            👋 Welcome to my portfolio
          </p>
        </motion.div>

        
        {/* Professional Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-7xl font-bold text-cyan-400 mt-4 drop-shadow-lg">
          
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Frontend Developer
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
              <button className="px-8 py-3 bg-cyan-500 text-black font-bold rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                View Projects
              </button>
            </a>

            <a  href="/Kartik_Singh_resume_latest.pdf" download>
              <button className="px-8 py-3 border border-slate-500 text-slate-100 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
                Resume
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;