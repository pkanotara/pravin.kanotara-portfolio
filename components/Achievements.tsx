import React from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS } from '../constants';
import { Award, Trophy, Medal, Star, Zap } from 'lucide-react';

const Achievements: React.FC = () => {
  const getIcon = (index: number) => {
    switch(index % 5) {
        case 0: return <Award className="w-8 h-8" />;
        case 1: return <Trophy className="w-8 h-8" />;
        case 2: return <Zap className="w-8 h-8" />;
        case 3: return <Star className="w-8 h-8" />;
        case 4: return <Medal className="w-8 h-8" />;
        default: return <Award className="w-8 h-8" />;
    }
  };

  return (
    <section className="py-32 bg-white dark:bg-dark-bg border-t border-gray-100 dark:border-dark-border relative overflow-hidden">
      <div className="container mx-auto px-8 md:px-20 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
            <span className="text-accent font-mono text-sm tracking-widest uppercase mb-2">Recognition</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Achievements <span className="text-gray-400">&</span> Certifications
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACHIEVEMENTS.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 bg-gray-50 dark:bg-dark-card rounded-[2rem] border border-gray-100 dark:border-white/5 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl dark:hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] overflow-hidden"
            >
              {/* Subtle Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                  <div className="mb-6 inline-flex p-4 rounded-2xl bg-white dark:bg-white/5 text-accent shadow-sm ring-1 ring-gray-100 dark:ring-white/10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    {getIcon(index)}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                      {achievement.title}
                  </h3>
                  
                  <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-4">
                      {achievement.role}
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {achievement.description}
                  </p>
              </div>
              
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full -mr-12 -mt-12 transition-transform duration-500 group-hover:scale-150" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;