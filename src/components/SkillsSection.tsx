
import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const SkillBar = ({ skill, level, index }: { skill: string; level: number; index: number }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setAnimatedLevel(level);
      }, index * 100);
      return () => clearTimeout(timer);
    }
  }, [isInView, level, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium">{skill}</span>
        <span className="text-cyan-400 font-bold">{level}%</span>
      </div>
      
      <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${animatedLevel}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ title, skills, index }: { title: string; skills: Array<{name: string, level: number}>; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-cyan-500/20 rounded-xl p-6"
    >
      <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">{title}</h3>
      {skills.map((skill, skillIndex) => (
        <SkillBar
          key={skill.name}
          skill={skill.name}
          level={skill.level}
          index={skillIndex}
        />
      ))}
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Bootstrap 5", level: 85 },
        { name: "Tailwind CSS", level: 90 },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 82 },
        { name: "REST API", level: 80 },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 92 },
        { name: "Docker", level: 78 },
        { name: "AWS", level: 75 },
        { name: "Figma", level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across various technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
              index={index}
            />
          ))}
        </div>

        {/* Additional tech stack icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React', 'Next.js', 'TypeScript', 'Three.js', 'Node.js', 'Python', 
              'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Git', 'Figma'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-4 py-2 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
