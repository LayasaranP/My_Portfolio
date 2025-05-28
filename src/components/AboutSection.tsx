
import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const CounterAnimation = ({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const startValue = 0;

      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        setCount(Math.floor(progress * (end - startValue) + startValue));
        
        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };
      
      requestAnimationFrame(updateCount);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-600/20 p-1">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1536148935331-408321065b18?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDg0MjUyNzV8&ixlib=rb-4.1.0&q=85"
                    alt="Profile"
                    className="w-72 h-72 rounded-full object-cover"
                  />
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/30"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Welcome to my portfolio! I'm Layasaran Prabhu, a creative Software Developer with an eye for design and innovation. I have expertise in React.js, Bootstrap 5, Node.js, Express.js, MySQL, PostgreSQL, and REST APIs, developing seamless, responsive, and high-performance applications. My ability lies in turning ideas into beautiful and functional digital experiences.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Having a solid background in front-end and back-end development, I enjoy creating easy-to-use user interfaces and robust server-side implementations. My process includes blending clean code, contemporary design, and a people-oriented approach to provide effective solutions.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-8">
              {[
                { label: 'Years Experience', value: 3, suffix: '+' },
                { label: 'Projects Completed', value: 10, suffix: '+' },
                { label: 'Technologies', value: 20, suffix: '+' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center p-4 rounded-lg bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border border-cyan-500/20"
                >
                  <div className="text-3xl font-bold text-cyan-400 mb-2">
                    <CounterAnimation end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
