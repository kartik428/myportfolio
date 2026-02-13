import { motion } from "framer-motion";
import MusicPlayer from "../assets/images/Musicplayer.png";
import FoodApp from "../assets/images/FoodApp.png";
import Blog from "../assets/images/Blog.png";
import MyPortfolio from "../assets/images/MyPortfolio.png";
import ClientGourvi from "../assets/images/ClientGourvi.png";
import { useState } from "react";
// import { FaArrowDownLong } from "react-icons/fa6";

const ProjectCard = ({
  title = "Project Title",
  description = "A brief description of your amazing project and what makes it special.",
  image = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
  tags = ["React", "Tailwind", "Framer"],
  link = "#",
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <motion.div
       
        target="_blank"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -8 }}
        onClick={() => setIsExpanded(!isExpanded)}
        /* Changed: added h-full to ensure cards in a row are equal height */
        className="group relative flex flex-col h-full rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300 border border-white/5"
      >
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden bg-zinc-900 shrink-0">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content Area - Changed: added flex flex-col and flex-grow */}
        <div className="p-6 bg-[#0f0f0f] flex flex-col flex-grow">
          <motion.h3
            className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {title}
          </motion.h3>

          <p 
          layout
          className={`text-zinc-400 text-sm mb-4 transition-all duration-300 ${
            isExpanded ? "line-clamp-none" : "line-clamp-2"
          }`}>
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Link - Changed: added mt-auto to push it to the bottom */}
          <motion.a
            whileHover={{ x: 5 }}
            className="mt-auto inline-flex items-center text-cyan-400 font-semibold text-sm group/link cursor-pointer"
            href={link}
            target="_blank"
        >
            View Project
            <motion.span
              className="ml-1"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </div>

        {/* Animated Border on Hover */}
        <motion.div
          className="absolute inset-0 border-2 border-cyan-500/50 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none"
          initial={false}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </>
  );
};


// Example usage with multiple cards
export default function ProjectSection() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    // {
    //   id: 1,
    //   title: "Blog Website(MERN Stack)",
    //   description:
    //     "A full-featured blogging platform with user authentication, post creation, and commenting functionality.",
    //   image: Blog,
    //   tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
    //   link: "#",
    // },
     {
      id: 2,
      title: "Portfolio website",
      description: "Welcome to My Portfolio website.",
      image: MyPortfolio,
      tags: ["React", "CSS3", "HTML5", "EmailJS", "Googleform"],
      link: "https://myportfolio-one-peach-98.vercel.app/",
    },
      {
      id: 3,
      title: "Food Recipe App(API Integration)",
      description:
        "An app that fetches and displays recipes from a public API, allowing users to search and filter by ingredients and cuisine.",
      image: FoodApp,
      tags: ["React", "API", "CSS", "HTML5"],
      link: "https://food-recipe-app-three-theta.vercel.app/",
    },
   
    {
      id: 4,
      title: "Music Player App(Pure JS)",
      description:
        "A sleek music player application with playlist management, audio visualization, and offline support.",
      image: MusicPlayer,
      tags: ["HTML5", "CSS", "JavaScript"],
      link: "https://musicplayer-wbm.vercel.app/",
    },
  
    {
      id: 5,
      title: "Client Website- Linkedupp",
      description:
        "Developed a modern and responsive portfolio website for a client, focused on clean UI design and smooth user experience.",
      image: ClientGourvi,
      tags: ["React","TailwindCSS", "EmailJS", "Googleform"],
      link: "https://www.linkedupp.in/",
    },
    // {
    //   id: 6,
    //   title: "Inventory Management System (IMS)",
    //   description:
    //     "An app that fetches and displays recipes from a public API, allowing users to search and filter by ingredients and cuisine.",
    //   image: Blog,
    //   tags: ["React", "API", "CSS3", "HTML5"],
    //   link: "https://food-recipe-app-three-theta.vercel.app/",
    // },
    // {
    //   id: 7,
    //   title: "Inventory Management System (IMS)",
    //   description:
    //     "An app that fetches and displays recipes from a public API, allowing users to search and filter by ingredients and cuisine.",
    //   image: Blog,
    //   tags: ["React", "API", "CSS3", "HTML5"],
    //   link: "https://food-recipe-app-three-theta.vercel.app/",
    // },
    // {
    //   id: 8,
    //   title: "Inventory Management System (IMS)",
    //   description:
    //     "An app that fetches and displays recipes from a public API, allowing users to search and filter by ingredients and cuisine.",
    //   image: Blog,
    //   tags: ["React", "API", "CSS3", "HTML5"],
    //   link: "https://food-recipe-app-three-theta.vercel.app/",
    // },
    // {
    //   id: 9,
    //   title: "Inventory Management System (IMS)",
    //   description:
    //     "An app that fetches and displays recipes from a public API, allowing users to search and filter by ingredients and cuisine.",
    //   image: Blog,
    //   tags: ["React", "API", "CSS3", "HTML5"],
    //   link: "https://food-recipe-app-three-theta.vercel.app/",
    // },
    // {
    //   id: 10,
    //   title: "Inventory Management System (IMS)",
    //   description:
    //     "An app that fetches and displays recipes from a public API, allowing users to search and filter by ingredients and cuisine.",
    //   image: Blog,
    //   tags: ["React", "API", "CSS3", "HTML5"],
    //   link: "https://food-recipe-app-three-theta.vercel.app/",
    // },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects">
      <div className="min-h-screen bg-black  p-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 text-white mb-12 text-center pt-14"
          >
            My <span className="text-cyan-500"> Projects</span>
            {/* Underline */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-20 h-1 bg-cyan-500 mt-5 mb-8 rounded-full mx-auto"
            />
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          {projects.length > 6 && (
            <div className="flex justify-center mt-8">
              <button
                className="px-6 py-2  text-blue-500 font-semibold rounded-lg hover:text-white transition"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "-View Less-" : "-View More-"} 
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
