import React, { useState, useEffect } from 'react';
import { Mail, ArrowUp, ArrowRight, MapPin, Github, Linkedin, Twitter, Instagram, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const hours = time.toLocaleTimeString('en-US', { hour: '2-digit', hour12: false, timeZone: 'Asia/Kolkata' });
  const minutes = time.toLocaleTimeString('en-US', { minute: '2-digit', timeZone: 'Asia/Kolkata' });
  const seconds = time.toLocaleTimeString('en-US', { second: '2-digit', timeZone: 'Asia/Kolkata' });

  return (
    <footer id="contact" className="bg-black text-white relative overflow-hidden pt-24 pb-12">
        
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-8 md:px-20 relative z-10">
            
            {/* Header / CTA */}
            <div className="mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-6xl"
                >
                     <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-accent text-xs font-mono mb-8 border border-white/5">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        OPEN FOR WORK
                     </span>
                     <h2 className="text-7xl md:text-9xl lg:text-[11rem] font-bold tracking-tighter leading-[0.85] mb-8">
                        Have an idea? <br />
                        <span className="relative inline-block mt-2">
                            <span className="absolute -inset-4 blur-3xl bg-accent/20 rounded-full" />
                            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-400 to-accent animate-gradient bg-[length:200%_auto]">
                                Let's build it.
                            </span>
                        </span>
                     </h2>
                </motion.div>
            </div>

            {/* Contact Grid - Smaller Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-24 max-w-5xl">
                
                {/* Email Box */}
                <motion.a 
                    href="mailto:pravinkanotara@gmail.com"
                    whileHover={{ scale: 1.02 }}
                    className="group relative overflow-hidden p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-accent/10 hover:border-accent/30 transition-all duration-300"
                >
                    <div className="mb-3 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                        <Mail className="w-4 h-4" />
                    </div>
                    <h3 className="text-gray-400 text-[10px] font-mono mb-1 uppercase tracking-widest">Email Me</h3>
                    <p className="text-base font-medium truncate">pravinkanotara@gmail.com</p>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                        <ArrowRight className="w-4 h-4 text-accent" />
                    </div>
                </motion.a>

                {/* Phone Box */}
                 <motion.a 
                    href="tel:+919876543210"
                    whileHover={{ scale: 1.02 }}
                    className="group relative overflow-hidden p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-green-500/10 hover:border-green-500/30 transition-all duration-300"
                >
                    <div className="mb-3 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors">
                        <Phone className="w-4 h-4" />
                    </div>
                    <h3 className="text-gray-400 text-[10px] font-mono mb-1 uppercase tracking-widest">Call Me</h3>
                    <p className="text-base font-medium">+91 63519 27357</p>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                        <ArrowRight className="w-4 h-4 text-green-500" />
                    </div>
                </motion.a>

                {/* Location / Availability */}
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col justify-between">
                    <div>
                        <div className="mb-3 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                            <MapPin className="w-4 h-4" />
                        </div>
                        <h3 className="text-gray-400 text-[10px] font-mono mb-1 uppercase tracking-widest">Based in</h3>
                        <p className="text-base font-medium">Ahmedabad, Gujarat</p>
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-[10px] text-green-400 font-mono bg-green-500/10 px-2.5 py-1 rounded-full w-fit">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                        </span>
                        Available for freelance
                    </div>
                </div>

            </div>

            {/* Separator */}
            <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent w-full mb-12" />

            {/* Redesigned Footer Bottom */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                
                {/* Left: Brand & Socials */}
                <div className="flex flex-col gap-8">
                    <div>
                        <h3 className="text-2xl font-bold tracking-tight mb-2">PRVN.DEV</h3>
                        <p className="text-gray-500 text-sm max-w-xs">
                            Crafting digital experiences with code and creativity.
                        </p>
                    </div>
                    
                    <div className="flex items-center gap-4">
                        {[
                            { icon: Github, href: "https://github.com/pkanotara", label: "GitHub" },
                            { icon: Linkedin, href: "https://linkedin.com/in/pravin-kanotara", label: "LinkedIn" },
                            { icon: Twitter, href: "#", label: "Twitter" },
                            { icon: Instagram, href: "#", label: "Instagram" }
                        ].map((social, idx) => (
                            <a 
                                key={idx} 
                                href={social.href}
                                aria-label={social.label}
                                className="p-3 bg-white/5 border border-white/5 rounded-full hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
                            >
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>

                     <div className="text-gray-600 text-xs">
                        &copy; {new Date().getFullYear()} Pravin Kanotara. All rights reserved.
                    </div>
                </div>

                {/* Right: Redesigned Live Clock & Back to Top */}
                <div className="flex flex-col gap-8 items-start md:items-end w-full md:w-auto">
                    
                    {/* Large Typography Clock */}
                    <div className="group cursor-default relative">
                        <div className="absolute -inset-4 bg-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        
                        <div className="relative flex items-baseline gap-1 font-mono leading-none select-none">
                            <div className="flex flex-col items-end">
                                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] mb-1">Local Time</span>
                                <div className="flex items-baseline text-6xl md:text-8xl font-bold tracking-tighter text-white">
                                    <span>{hours}</span>
                                    <span className="animate-pulse text-gray-600 mx-1">:</span>
                                    <span>{minutes}</span>
                                </div>
                            </div>
                            <span className="text-2xl md:text-3xl font-medium text-accent w-[1.5ch] tabular-nums">
                                {seconds}
                            </span>
                        </div>
                    </div>

                    <button 
                        onClick={scrollToTop}
                        className="group flex items-center gap-3 pl-6 pr-2 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">Back to Top</span>
                        <div className="p-2 rounded-full bg-white/10 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                            <ArrowUp className="w-4 h-4" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Contact;
