import { motion } from "framer-motion";

import ProjectCarousel from "../components/projects/ProjectCarousel";
import ParallaxSection from "../components/effects/ParallaxSection";
import TiltCard from "../components/projects/TiltCard";

import {
  ExternalLink,
} from "lucide-react";

import projects from "../data/projects";

export default function Projects() {

  return (
    <ParallaxSection offset={120}>

      <section
        id="projects"
        className="relative py-36 md:py-44 px-6 md:px-10 lg:px-16"
      >

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >

          <p className="uppercase tracking-[0.3em] text-xs text-neutral-400 mb-6">
            PROJECTS
          </p>

          <h2 className="heading-font text-5xl md:text-7xl leading-none">
            Selected
            <br />
            work.
          </h2>

        </motion.div>

        {/* PROJECTS */}
        <div className="space-y-32">

          {projects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-14 items-center"
            >

              {/* IMAGE SIDE */}
              <div
                className={`${
                  index % 2 !== 0
                    ? "lg:order-2"
                    : ""
                }`}
              >

                <TiltCard>

                  <div className="liquid-glass rounded-[0.5rem] p-4">

                    <ProjectCarousel
                      images={project.images}
                    />

                  </div>

                </TiltCard>

              </div>

              {/* CONTENT SIDE */}
              <div
                className={`${
                  index % 2 !== 0
                    ? "lg:order-1"
                    : ""
                }`}
              >

                {/* CATEGORY */}
                <p className="uppercase tracking-[0.25em] text-xs text-neutral-400 mb-5">
                  {project.category}
                </p>

                {/* TITLE */}
                <h3 className="heading-font text-4xl md:text-6xl leading-none mb-8">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-neutral-300 leading-relaxed text-base md:text-lg mb-8">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-3 mb-10">

                  {project.tech.map((tech) => (

                    <div
                      key={tech}
                      className="liquid-glass rounded-[0.5rem] px-5 py-2 text-sm"
                    >
                      {tech}
                    </div>

                  ))}

                </div>

                {/* BUTTONS */}
                <div className="flex flex-wrap gap-4">

                  {/* GITHUB */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="liquid-glass rounded-[0.5rem] px-6 py-3 flex items-center gap-3 hover:bg-white hover:text-black transition duration-500"
                  >

                    <span className="text-lg">⌘</span>

                    Github

                  </a>

                  {/* LIVE */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black rounded-[0.5rem] px-6 py-3 flex items-center gap-3 hover:bg-neutral-200 transition"
                  >

                    <ExternalLink size={18} />

                    Live Demo

                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

    </ParallaxSection>
  );
}