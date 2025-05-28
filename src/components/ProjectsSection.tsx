
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
      className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-cyan-500/20 rounded-xl overflow-hidden"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center space-x-4"
        >
          <motion.a
            href={project.github}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-black/50 backdrop-blur-lg rounded-full text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            href={project.demo}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-black/50 backdrop-blur-lg rounded-full text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ExternalLink size={20} />
          </motion.a>
        </motion.div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs bg-purple-600/20 text-purple-300 rounded-full border border-purple-500/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-cyan-500/10 transition-all duration-500" />
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: "3D Portfolio Website",
      description: "An immersive portfolio experience built with Three.js and React, featuring interactive 3D elements and smooth animations.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      technologies: ["React", "Three.js", "WebGL", "Framer Motion"],
      github: "#",
      demo: "#"
    },
    {
      title: "AI Code Assistant",
      description: "A VS Code extension that provides intelligent code suggestions using machine learning and natural language processing.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      technologies: ["TypeScript", "Python", "TensorFlow", "VS Code API"],
      github: "#",
      demo: "#"
    },
    {
      title: "Real-time Collaboration Tool",
      description: "A web application for team collaboration with real-time editing, video calls, and project management features.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "Socket.io", "WebRTC"],
      github: "#",
      demo: "#"
    },
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, inventory management, and analytics dashboard.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my latest work, featuring innovative solutions and cutting-edge technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
