import { motion } from "framer-motion";

const timelineData = [
    {
        title: "Frontend Developer Intern",
        subtitle: "Beritrave Technologies",
        date: "Feb 2026 – Present",
        location: "Indore, MP · Remote",
        skills: ["React.js", "HTML5", "CSS3", "JavaScript", "Tailwind", "Typescript"],
        desc: "Working on real-world web applications and learning modern development practices.",
    },
    // {
    //     title: "Frontend Developer Intern",
    //     subtitle: "Beritrave Technologies",
    //     date: "Feb 2026 – Present",
    //     location: "Indore, MP · Remote",
    //     skills: ["React.js", "HTML5", "CSS3", "JavaScript", "Tailwind", "Typescript"],
    //     desc: "Working on real-world web applications and learning modern development practices.",
    // }
];

const hireCard = {
    title: "Open to Full-Time Roles",
    subtitle: "Frontend Developer",
    message:
        "Currently interning at Beritrave Technologies and actively looking for full-time Frontend Developer opportunities. Let's build something great together!",
    skills: ["React.js", "Tailwind CSS", "JavaScript", "HTML5", "Node.js", "Typescript"],
};

function ExperienceCard({ item, direction, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: direction === "left" ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
            whileHover={{ scale: 1.02 }}
            className="bg-[#1e2a3a] border border-white/10 rounded-xl p-5 max-w-[280px] w-full cursor-pointer hover:border-blue-500 transition-colors duration-200"
        >
            <p className="text-sm font-bold text-white">{item.title}</p>
            <p className="text-xs text-cyan-400 mt-0.5 font-medium">{item.subtitle}</p>
            <div className="flex flex-col gap-0.5 mt-2">
                <span className="text-xs text-slate-400">{item.date}</span>
                <span className="text-xs text-slate-500">{item.location}</span>
            </div>
            <p className="text-xs text-slate-300 mt-3 leading-relaxed">{item.desc}</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
                {item.skills.map((s) => (
                    <span
                        key={s}
                        className="text-[10px] bg-blue-900/50 text-blue-300 border border-blue-700/40 px-2 py-0.5 rounded-full"
                    >
                        {s}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}

export default function Timeline() {
    // last entry left thi toh hire card right pe, aur vice versa
    const lastIsLeft = (timelineData.length - 1) % 2 === 0;
    const hireIsLeft = !lastIsLeft;
    return (
        <section id="experience" className="bg-[#000000] py-16 px-4">

            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-center text-white mt-10 mb-12"
            >
                Experie<span className="text-cyan-500">nce</span>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "5rem" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-20 h-1 bg-cyan-500 mt-5 mb-8 rounded-full mx-auto"
                />
            </motion.h2>

            <div className="relative max-w-3xl mx-auto">

                {/* Center vertical line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

                {/* Top purple badge */}
                <div className="flex justify-center relative mb-1">
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="w-5 h-5 rounded-full bg-purple-500 z-10"
                    />
                </div>

                {/* Experience entries — ALTERNATE left/right */}
                {timelineData.map((item, i) => {
                    const isLeft = i % 2 === 0; // 0,2,4 → card left | 1,3,5 → card right

                    return (
                        <div key={i}>
                            <div className="flex items-center relative mb-10">

                                {/* LEFT side */}
                                <div className="flex-1 flex justify-end pr-10">
                                    {isLeft ? (
                                        <ExperienceCard item={item} direction="left" index={i} />
                                    ) : (
                                        <motion.span
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.2 }}
                                            className="text-sm text-slate-400 text-right"
                                        >
                                            {item.date}
                                        </motion.span>
                                    )}
                                </div>

                                {/* Dot */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                    className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 z-10 flex-shrink-0"
                                />

                                {/* RIGHT side */}
                                <div className="flex-1 pl-10">
                                    {!isLeft ? (
                                        <ExperienceCard item={item} direction="right" index={i} />
                                    ) : (
                                        <motion.span
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.2 }}
                                            className="text-sm text-slate-400"
                                        >
                                            {item.date}
                                        </motion.span>
                                    )}
                                </div>

                            </div>
                        </div>
                    );
                })}

                {/* Hire Me Flag */}
                <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="flex justify-center my-3 relative z-10"
                >
                    <span className="bg-cyan-600 text-white text-xs font-semibold px-5 py-1.5 rounded animate-pulse">
                        Actively Looking
                    </span>
                </motion.div>

                {/* Hire Me Row */}
                {/* Hire Me Row */}
                <div className="flex items-center relative mb-10">

                    {/* LEFT side */}
                    <div className="flex-1 flex justify-end pr-10">
                        {hireIsLeft ? (
                            // Hire card on LEFT
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
                                whileHover={{ scale: 1.02 }}
                                className="bg-[#0f2a1e] border border-green-500/30 rounded-xl p-5 max-w-[280px] w-full cursor-pointer hover:border-green-400 transition-all duration-200"
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                    <p className="text-sm font-bold text-white">{hireCard.title}</p>
                                </div>
                                <p className="text-xs text-green-400 font-medium mb-3">{hireCard.subtitle}</p>
                                <p className="text-xs text-slate-300 leading-relaxed">{hireCard.message}</p>
                                <div className="flex flex-wrap gap-1.5 mt-3">
                                    {hireCard.skills.map((s) => (
                                        <span key={s} className="text-[10px] bg-green-900/40 text-green-300 border border-green-700/40 px-2 py-0.5 rounded-full">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href="mailto:kartiksingh2003@gmail.com"
                                    className="mt-4 flex items-center justify-center gap-2 bg-green-500/20 hover:bg-green-500/30 border border-green-500/40 text-green-300 text-xs font-semibold py-2 rounded-lg transition-all duration-200"
                                >
                                    💼 Hire Me
                                </a>
                            </motion.div>
                        ) : (
                            // Date on LEFT
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                className="text-sm text-slate-400"
                            >
                                2026 – Future
                            </motion.span>
                        )}
                    </div>

                    {/* Glowing green dot */}
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-green-400 z-10 shadow-[0_0_8px_2px_rgba(74,222,128,0.6)]"
                    />

                    {/* RIGHT side */}
                    <div className="flex-1 pl-10">
                        {!hireIsLeft ? (
                            // Hire card on RIGHT
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
                                whileHover={{ scale: 1.02 }}
                                className="bg-[#0f2a1e] border border-green-500/30 rounded-xl p-5 max-w-[280px] w-full cursor-pointer hover:border-green-400 transition-all duration-200"
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                    <p className="text-sm font-bold text-white">{hireCard.title}</p>
                                </div>
                                <p className="text-xs text-green-400 font-medium mb-3">{hireCard.subtitle}</p>
                                <p className="text-xs text-slate-300 leading-relaxed">{hireCard.message}</p>
                                <div className="flex flex-wrap gap-1.5 mt-3">
                                    {hireCard.skills.map((s) => (
                                        <span key={s} className="text-[10px] bg-green-900/40 text-green-300 border border-green-700/40 px-2 py-0.5 rounded-full">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href="mailto:kartiksingh2003@gmail.com"
                                    className="mt-4 flex items-center justify-center gap-2 bg-green-500/20 hover:bg-green-500/30 border border-green-500/40 text-green-300 text-xs font-semibold py-2 rounded-lg transition-all duration-200"
                                >
                                    💼 Hire Me
                                </a>
                            </motion.div>
                        ) : (
                            // Date on RIGHT
                            <motion.span
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                className="text-sm text-slate-400"
                            >
                                2026 – Future
                            </motion.span>
                        )}
                    </div>

                </div>

            </div>
        </section >
    );
}