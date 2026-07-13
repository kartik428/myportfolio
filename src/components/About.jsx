import Animatedimg from "../assets/images/aboutdp.jpeg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className=" overflow-x-hidden text-white px-6 z-10"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 py-20 gap-12 items-center ">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center">
            <img
              src={Animatedimg}
              loading="lazy"
              decoding="async"
              alt="About me"
              className="rounded-2xl border-b-4 border-cyan-500 shadow-lg w-75 md:w-100"
            />
          </div>
        </motion.div>
        {/* Right Side - Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl flex justify-center md:justify-start items-center ms:items-start font-bold mb-6">
              About <span className="text-cyan-500"> Me</span>
            </h2>
            {/* Underline */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-20 h-1 bg-cyan-500 mt-3 mb-8 rounded-full mx-auto md:mx-0"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 text-center md:text-left leading-relaxed mb-4  ">
              I’m a passionate Full Stack Developer who loves building beautiful,
              responsive, and user-friendly web experiences. I focus on writing
              clean code and creating interfaces that feel smooth and intuitive.
            </p>
            <p className="text-gray-300 text-center md:text-left  leading-relaxed mb-6">
              My goal is to blend creativity with technology and deliver
              products that not only look good but also perform flawlessly on
              every device.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          // viewport={{ once: true }}
          >
            {/* <div className="flex gap-4 justify-center md:justify-start items-center sm:items-start">
              <a href="#contact">
                <button className="border border-cyan-500 text-cyan-500 hover:bg-cyan-400 hover:text-black px-6 py-3 rounded-lg font-semibold transition">
                  Contact Me
                </button>
              </a>
          
            </div> */}
            <div className="w-full max-w-6xl mx-auto mt-10 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* Left */}
                <div className="space-y-8">
                  <div>
                    <p className="text-xs uppercase tracking-[4px] text-gray-500 mb-2">
                      Based In
                    </p>
                    <h3 className="text-white">
                      Gwalior, Madhya Pradesh, India
                    </h3>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[4px] text-gray-500 mb-2">
                      Availability
                    </p>
                    <h3 className="font-medium text-green-400">
                      Open to Full-time
                    </h3>
                  </div>
                </div>

                {/* Right */}
                <div className="space-y-8">
                  <div>
                    <p className="text-xs tracking-[4px] text-gray-500 mb-2">
                      Role
                    </p>
                    <h3 className="text-white">
                      Full Stack Developer
                    </h3>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[4px] text-gray-500 mb-2">
                      Experience
                    </p>
                    <h3 className=" text-white">
                      3 Months+
                    </h3>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
