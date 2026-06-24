import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import ProjectCard from './components/ProjectCard';
import ExperienceTimeline from './components/ExperienceTimeline';
import CertificationTimeline from './components/CertificationTimeline';
import ContactForm from './components/ContactForm';
import AIChatAssistant from './components/AIChatAssistant';
import { PROJECTS, SKILLS, Icons } from './constants';

const WelcomeLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setIsExiting(true), 2200);
    const completeTimer = setTimeout(onComplete, 3000);
    document.body.classList.add('no-scroll');
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
      document.body.classList.remove('no-scroll');
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[200] bg-brand-dark flex items-center justify-center transition-all duration-1000 ${isExiting ? 'loader-exit' : ''}`}>
      <div className="flex flex-col items-center">
        <div className="relative overflow-hidden mb-6">
          <div className="text-white font-display font-bold text-5xl md:text-7xl tracking-tighter opacity-0 animate-tracking-expand">
         Yuvaraj Ramalingam
          </div>
        </div>
        
        {/* Decorative Animated Line */}
        <div className="h-[1px] bg-brand-primary/50 opacity-0 animate-line-grow relative">
           <div className="absolute inset-0 bg-brand-primary shadow-[0_0_15px_rgba(79,70,229,0.8)]"></div>
        </div>

        <div className="mt-8 opacity-0 animate-slide-sub">
          <span className="text-white/60 text-[10px] font-bold uppercase tracking-[0.5em]">
         Founder • Digital Growth • AI
          </span>
        </div>
      </div>
      
      {/* Background Ambience during load */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] animate-pulse"></div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  const githubUrl = "https://github.com/muhammadibrahimshujasheikh12";
  const linkedinUrl = "https://www.linkedin.com/in/muhammad-ibrahim-73484a3a5/";
  if (isLoading) {
    return <WelcomeLoader onComplete={() => setIsLoading(false)} />;
  }

  const skillCategories = [
    { id: 'languages', title: '🌍 Languages' },
    { id: 'frontend', title: 'Web Development' },
    { id: 'backend', title: 'Backend & APIs' },
    { id: 'database', title: '🗄️ Databases' },
    { id: 'ai', title: '🤖 AI & Programming' },
    { id: 'marketing', title: '📈 Digital Marketing' },
    { id: 'creative', title: '🎨 Creative Skills' },
    { id: 'tools', title: '⚙️ Tools & Practices' },
    { id: 'personal', title: '🧠 Professional Mindset' },
  ];

  return (
    <div className="min-h-screen relative w-full overflow-x-hidden">
      {/* Wrapper with animation to avoid breaking fixed elements like AIChatAssistant */}
      <div className="animate-premium">
        <Navbar />
        
        <main className="w-full">
          <Hero />

          <AboutMe />

          <Services />

          {/* PROJECTS / AGENCY SECTION */}
          <section id="projects" className="py-24 md:py-32 px-6 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div className="max-w-xl">
                <div className="inline-block px-3 py-1 rounded bg-brand-primary/10 text-brand-primary text-[10px] font-bold tracking-widest uppercase mb-6">Featured Work</div>
                <h2 className="font-display font-bold text-5xl md:text-6xl text-white tracking-tight">Case Studies & Projects.</h2>
              </div>
              <a href={githubUrl} target="_blank" className="text-sm font-bold text-neutral-500 hover:text-white transition-all flex items-center gap-2">
                View all on GitHub <Icons.Github />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {PROJECTS.map(project => <ProjectCard key={project.id} project={project} />)}
            </div>
          </section>

          {/* HIRE ME / FREELANCE PLATFORMS */}
          <section className="py-24 md:py-32 px-6 bg-brand-surface/30 border-y border-brand-border">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <div className="inline-block px-3 py-1 rounded bg-brand-primary/10 text-brand-primary text-[10px] font-bold tracking-widest uppercase mb-6">Hire Me</div>
                <h2 className="font-display font-bold text-5xl md:text-6xl text-white tracking-tight">Freelance Platforms.</h2>
                <p className="mt-6 text-neutral-500 max-w-2xl mx-auto">Available for immediate hire on the world's leading freelance marketplaces. High-quality work, guaranteed through my personal boutique agency services.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <a href={fiverrUrl} target="_blank" className="group card-premium p-10 rounded-3xl flex flex-col items-center text-center transition-all hover:border-emerald-500/50">
                  <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 flex items-center justify-center rounded-2xl mb-8 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <Icons.Fiverr />
                  </div>
                  <h3 className="text-white font-display font-bold text-2xl mb-4">Fiverr</h3>
                  <p className="text-neutral-500 text-sm mb-10">Hire me for fixed-price projects, UI designs, and full-stack web solutions with fast delivery.</p>
                  <div className="mt-auto px-8 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-bold text-xs uppercase tracking-widest group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all">
                    Hire on Fiverr
                  </div>
                </a>

                <a href={upworkUrl} target="_blank" className="group card-premium p-10 rounded-3xl flex flex-col items-center text-center transition-all hover:border-emerald-400/50">
                  <div className="w-20 h-20 bg-emerald-400/10 text-emerald-400 flex items-center justify-center rounded-2xl mb-8 group-hover:bg-emerald-400 group-hover:text-white transition-all">
                    <Icons.Upwork />
                  </div>
                  <h3 className="text-white font-display font-bold text-2xl mb-4">Upwork</h3>
                  <p className="text-neutral-500 text-sm mb-10">Looking for long-term collaboration? Hire me on Upwork for hourly or milestone-based projects.</p>
                  <div className="mt-auto px-8 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-bold text-xs uppercase tracking-widest group-hover:bg-emerald-400 group-hover:border-emerald-400 transition-all">
                    Hire on Upwork
                  </div>
                </a>
              </div>
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills" className="py-24 md:py-32 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="mb-20">
                <div className="inline-block px-3 py-1 rounded bg-brand-primary/10 text-brand-primary text-[10px] font-bold tracking-widest uppercase mb-6">Expertise</div>
                <h2 className="font-display font-bold text-5xl md:text-6xl text-white tracking-tight">Technology & Expertise.</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                {skillCategories.map(cat => (
                  <div key={cat.id} className="space-y-6">
                    <h4 className="text-white font-display font-bold text-xl flex items-center gap-3">
                      <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                      {cat.title}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {SKILLS.filter(s => s.category === cat.id).map(skill => (
                        <div 
                          key={skill.name} 
                          className="px-4 py-2 bg-neutral-900/50 border border-brand-border rounded-lg text-[11px] font-bold text-neutral-400 hover:text-brand-primary hover:border-brand-primary/50 transition-all cursor-default"
                        >
                          {skill.name}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* EXPERIENCE & CERTIFICATIONS */}
          <section id="experience" className="py-24 md:py-32 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
              {/* Experience Column */}
              <div>
                <div className="mb-16">
                  <div className="inline-block px-3 py-1 rounded bg-brand-primary/10 text-brand-primary text-[10px] font-bold tracking-widest uppercase mb-6">Timeline</div>
                  <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight">Career Journey.</h2>
                </div>
                <ExperienceTimeline />
              </div>

              {/* Certifications Column */}
              <div>
                <div className="mb-16">
                  <div className="inline-block px-3 py-1 rounded bg-emerald-500/10 text-emerald-500 text-[10px] font-bold tracking-widest uppercase mb-6">Credentials</div>
                  <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight">Certifications.</h2>
                </div>
                <CertificationTimeline />
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="py-24 md:py-32 px-6 max-w-5xl mx-auto">
            <div className="card-premium p-12 md:p-20 rounded-[2rem] text-center overflow-hidden relative border-brand-primary/20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-brand-primary"></div>
              <h2 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">Let's Build Something Meaningful.</h2>
              <p className="text-neutral-500 text-lg mb-16">Available for agency-scale solutions or direct freelance collaboration.</p>
              <ContactForm />
            </div>
          </section>
        </main>

        <footer className="py-20 border-t border-brand-border px-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex flex-col items-center md:items-start">
               <span className="font-display font-bold text-white text-2xl mb-2">Yuvaraj Ramalingam.</span>
               <p className="text-neutral-600 text-sm max-w-md text-center md:text-left leading-relaxed">
                Founder of <span className="text-brand-primary font-bold">SEYONIX</span> Entrepreneur | Digital Growth Strategist | AI Creative Specialist
               </p>
            </div>
            <div className="flex flex-wrap gap-6 justify-center md:justify-end">
              <a href={githubUrl} target="_blank" className="text-neutral-700 hover:text-white transition-all" aria-label="GitHub"><Icons.Github /></a>
              <a href={linkedinUrl} target="_blank" className="text-neutral-700 hover:text-white transition-all" aria-label="LinkedIn"><Icons.Linkedin /></a>
                           <a href="mailto:mailto:hello@seyonix.in" className="text-neutral-700 hover:text-white transition-all" aria-label="Email"><Icons.Mail /></a>
            </div>
          </div>
          <div className="mt-20 text-center text-[10px] font-bold text-neutral-800 uppercase tracking-[0.4em]">
            &copy; {new Date().getFullYear()} YUVARAJ RAMALINGAM. ALL RIGHTS RESERVED.
          </div>
        </footer>
      </div>

      {/* Outside the animated wrapper to ensure standard 'fixed' behavior relative to the window */}
      <AIChatAssistant />
    </div>
  );
};

export default App;
