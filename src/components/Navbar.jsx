import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose } from "react-icons/md";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  // const [scrolled, setScrolled] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 50) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const handleScroll2 = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <nav
        className={`navbar w-full flex justify-between md:justify-around items-center p-4 bg-black/30 backdrop-blur-md  text-white border border-white/20 shadow-lg fixed top-0 z-50`}
      >
        <h1 className="text-3xl text-cyan-400 font-bold ">
          {" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            PORTFOLIO
          </span>
        </h1>
        <ul className="  hidden nav-elem text-lg gap-8  sm:flex text-white cursor-pointer">
          <li
            className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            onClick={() => handleScroll2("home")}
          >
            Home
          </li>
          <li
            className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            onClick={() => handleScroll2("about")}
          >
            About
          </li>
          <li
            className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            onClick={() => handleScroll2("skills")}
          >
            Skills
          </li>
          <li
            className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            onClick={() => handleScroll2("projects")}
          >
            Projects
          </li>
          <li
            className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            onClick={() => handleScroll2("contact")}
          >
            Contact
          </li>
        </ul>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full text-white font-bold text-[20px] bg-black/90 backdrop-blur-md flex flex-col items-center gap-6 py-6 sm:hidden"
            >
              <a onClick={() => setOpen(false)} href="#home">
                Home
              </a>
              <a onClick={() => setOpen(false)} href="#about">
                About
              </a>
              <a onClick={() => setOpen(false)} href="#skills">
                Skills
              </a>
              <a onClick={() => setOpen(false)} href="#projects">
                Projects
              </a>
              <a onClick={() => setOpen(false)} href="#contact">
                Contact
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex gap-3 pr-3">
          <a
            href="../../public/Kartik_Singh_resume_latest.pdf"
            className="nav-btn bg-cyan-400 rounded-full px-3 py-1 font-bold text-black hover:bg-cyan-100 focus:outline-none transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.5)]"
            download
          >
            Resume
          </a>

          {/* Hamburger Button (Mobile) */}
          <button
            onClick={() => setOpen(!open)}
            className="sm:hidden text-white text-3xl"
          >
            {!open ? <RxHamburgerMenu /> : <MdClose />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
