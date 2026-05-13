import { motion } from "framer-motion";

import profileImage from "../assets/images/profile/profile.jpeg";

export default function About() {


  return (
    <section
      id="about"
      className="
      relative
      py-32
      md:py-40
      px-6
      md:px-10
      lg:px-16
      overflow-hidden
      "
    >

      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-20">

        <p className="uppercase tracking-[0.3em] text-xs text-neutral-400 mb-6">
          ABOUT
        </p>

        <h2 className="heading-font text-5xl md:text-7xl leading-[0.95]">
          Building systems
          <br />
          that scale.
        </h2>

      </div>

      {/* TOP SECTION */}
      <div
        className="
        max-w-[1500px]
        mx-auto
        grid
        lg:grid-cols-[1fr_460px_1fr]
        gap-12
        items-start
        "
      >

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
          liquid-glass
          rounded-[0.5rem]
          border
          border-white/10
          px-20
          py-20
          max-w-[730px]
          ml-auto
          "
        >

          <p className="uppercase tracking-[0.25em] text-xs text-neutral-400 mb-6">
            ABOUT ME
          </p>

          <div className="space-y-6 text-neutral-300 leading-relaxed text-lg pr-4">

            <p>
              I’m a Computer Science Engineering student focused on building scalable web applications and data-driven systems.
            </p>

            <p>
              I enjoy blending clean UI with efficient backend logic while crafting modern and intuitive digital experiences.
            </p>

            <p>
              My work spans full-stack development, analytics dashboards, and AI-driven workflows.
            </p>

          </div>

        </motion.div>

        {/* CENTER IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
          flex
          justify-center
          relative
          lg:left-6
          pb-28
          "
        >

          <div
            className="
            liquid-glass
            rounded-[2.5rem]
            overflow-hidden
            border
            border-white/10
            w-[400px]
            "
          >

            <img
              src={profileImage}
              alt="Profile"
              className="
              w-full
              h-[500px]
              object-cover
              "
            />

          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
          liquid-glass
          rounded-[0.5rem]
          border
          border-white/10
          px-20
          py-20
          max-w-[730px]
          "
        >

          <p className="uppercase tracking-[0.25em] text-xs text-neutral-400 mb-6">
            SYSTEM PROFILE
          </p>

          <div className="space-y-6 text-neutral-300 leading-relaxed text-lg pl-4">

            {[
              ["ROLE", "Full Stack Engineer"],
              ["FOCUS", "AI + System Design"],
              ["STACK", "MERN + FastAPI"],
              ["LOCATION", "Vadodara, India"],
            ].map(([label, value]) => (

              <div
                key={label}
                className="
                flex
                items-center
                justify-between
                gap-10
                border-b
                border-white/10
                pb-4
                "
              >

                <span className="text-neutral-500 tracking-wide">
                  {label}
                </span>

                <span className="text-white font-medium text-right">
                  {value}
                </span>

              </div>

            ))}

          </div>

          <div className="mt-10">

            <p className="uppercase tracking-[0.25em] text-xs text-neutral-400 mb-4">
              CURRENTLY WORKING ON
            </p>

            <p className="text-white leading-relaxed text-lg pr-4">
              Building scalable full-stack applications, improving UI/UX interactions, and exploring AI-powered analytics systems.
            </p>

          </div>

        </motion.div>
 
        {/* SKILLS (INSIDE GRID) */}
        <div className="lg:col-span-3 w-full mt-32 md:mt-44">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="
            liquid-glass
            !overflow-visible
            rounded-[0.5rem]
            border
            border-white/10
            px-8
            py-16
            md:px-12
            w-full
            "
          >

            <p className="uppercase tracking-[0.4em] text-xs text-neutral-400 text-center mb-5">
              SKILLS
            </p>

            <h3 className="heading-font text-5xl md:text-6xl text-center mb-16 [word-spacing:0.2em]">
              Technical expertise.
            </h3>

            {/* CATEGORIZED SKILLS GRID */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10">

              {[
                { 
                  category: "Programming", 
                  overallLevel: 92,
                  skills: ["Python", "JavaScript", "Java"] 
                },
                { 
                  category: "Web & Backend", 
                  overallLevel: 88,
                  skills: ["FastAPI", "REST APIs", "MERN"] 
                },
                { 
                  category: "Databases", 
                  overallLevel: 85,
                  skills: ["MySQL", "MongoDB"] 
                },
                { 
                  category: "Cloud & Deployment", 
                  overallLevel: 90,
                  skills: ["AWS", "Vercel", "Netlify"] 
                },
                { 
                  category: "Data Analysis", 
                  overallLevel: 82,
                  skills: ["Pandas", "PowerBI", "Tableau"] 
                },
                { 
                  category: "Software Development", 
                  overallLevel: 85,
                  skills: ["SDLC", "Agile", "Scrum"] 
                },
                { 
                  category: "AI & Automation", 
                  overallLevel: 95,
                  skills: ["AI Automation", "Prompting"] 
                },
              ].map((group, i) => (

                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover="hover"
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="
                  relative
                  p-8
                  rounded-xl
                  border
                  border-white/5
                  bg-white/[0.02]
                  hover:bg-white/[0.05]
                  hover:border-purple-500/30
                  transition-all
                  duration-500
                  group
                  cursor-default
                  flex
                  flex-col
                  "
                >

                  <h4 className="text-purple-400 text-xs font-bold uppercase tracking-[0.2em] mb-6 group-hover:text-purple-300 transition-colors">
                    {group.category}
                  </h4>
                  
                  <div className="flex flex-wrap gap-2 mb-8 flex-grow">
                    {group.skills.map((skill, si) => (
                      <span
                        key={si}
                        className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-sm text-neutral-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* BAR GRAPH - APPEARS ON HOVER */}
                  <div className="mt-auto pt-8 border-t border-white/5 relative">
                    
                    <div className="flex justify-between items-end mb-3">
                      <span className="text-[10px] uppercase tracking-widest text-neutral-500">Expertise Level</span>
                      
                      {/* DYNAMIC PERCENTAGE ON THE RIGHT */}
                      <motion.span
                        variants={{
                          hover: { opacity: 1, x: 0 },
                          initial: { opacity: 0, x: 10 }
                        }}
                        className="text-xs font-bold text-purple-400"
                      >
                        {group.overallLevel}%
                      </motion.span>
                    </div>

                    <div className="h-1.5 w-full bg-white/10 rounded-full relative overflow-hidden border border-white/5">
                      <motion.div
                        variants={{
                          hover: { width: `${group.overallLevel}%` },
                          initial: { width: "0%" }
                        }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                        className="
                        h-full
                        rounded-full
                        bg-gradient-to-r
                        from-purple-600
                        via-indigo-500
                        to-blue-400
                        "
                      />
                    </div>
                  </div>

                </motion.div>

              ))}

            </div>


          </motion.div>

        </div>

      </div>



    </section>
  );
}