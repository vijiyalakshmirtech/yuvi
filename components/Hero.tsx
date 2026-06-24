import React, { useState, useEffect } from 'react';
import { Icons } from '../constants';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const cvUrl = "/Yuvaraj-Ramalingam-Profile.pdf";

  const roles = [
    "Founder",
    "Entrepreneur",
    "Digital Growth Strategist",
    "AI Creative Specialist",
    "Brand Builder",
    "Digital Marketing Strategist",
    "Business Growth Consultant",
    "AI Content Creator",
    "Website Developer",
    "Creative Director",
    "Local Business Growth Expert",
    "AI Video Producer",
    "Brand Positioning Specialist",
    "Technology & Marketing Strategist"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden w-full px-6">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-primary/10 blur-[180px] rounded-full"></div>

      <div className="w-full max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">

        {/* Badge */}
        <div className="flex items-center gap-2 px-5 py-2 rounded-full border border-brand-border bg-brand-surface/50 text-[11px] font-semibold tracking-wide text-brand-primary mb-10 animate-premium">
          <span className="w-2 h-2 bg-brand-primary rounded-full animate-pulse"></span>
          BUILDING BRANDS • BUSINESSES • DIGITAL GROWTH
        </div>

        {/* Founder Name */}
        <h2 className="text-neutral-500 text-sm md:text-base uppercase tracking-[0.4em] mb-4 animate-premium">
          Yuvaraj Ramalingam
        </h2>

        {/* Animated Title */}
        <div className="min-h-[140px] md:min-h-[180px] lg:min-h-[220px] flex flex-col items-center justify-center">

          <h1 className="font-display font-bold text-[clamp(3rem,10vw,7rem)] text-white tracking-tight leading-[1.05] animate-premium">

            <span className="accent-gradient inline-block min-h-[1.2em]">
              {text}
              <span className="inline-block w-[4px] h-[0.8em] bg-brand-primary ml-2 animate-pulse align-middle"></span>
            </span>

          </h1>

        </div>

        {/* Tagline */}
        <p className="max-w-3xl text-lg md:text-2xl text-neutral-400 font-medium mb-8 leading-relaxed animate-premium">
          Helping businesses leverage
          <span className="text-white"> Technology</span>,
          <span className="text-white"> Creativity</span> and
          <span className="text-white"> Strategic Execution</span>
          to build visibility, strengthen brands and accelerate growth.
        </p>

        {/* Founder Thesis */}
        <div className="max-w-2xl mb-12 p-5 rounded-2xl border border-brand-border bg-brand-surface/30 backdrop-blur-md">

          <p className="text-neutral-300 italic leading-relaxed">
            "Technology creates opportunities. Creativity attracts attention.
            Strategy creates direction. Execution creates results."
          </p>

        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-2xl animate-premium">

          <button
            onClick={() =>
              document
                .getElementById('projects')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="w-full py-4 bg-white text-black font-bold text-sm rounded-xl hover:bg-brand-primary hover:text-white transition-all shadow-xl active:scale-[0.98]"
          >
            Explore My Work
          </button>

          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 border border-brand-border text-white font-bold text-sm rounded-xl hover:bg-white/5 transition-all flex items-center justify-center gap-2"
          >
            Founder Profile
            <Icons.FileText />
          </a>

          <button
            onClick={() =>
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="w-full py-4 border border-brand-border text-white font-bold text-sm rounded-xl hover:bg-white/5 transition-all"
          >
            Get In Touch
          </button>

        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 w-full max-w-4xl">

          <div className="text-center">
            <h3 className="text-3xl font-bold text-white">AI</h3>
            <p className="text-neutral-500 text-xs uppercase tracking-widest mt-2">
              Creative Solutions
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-white">DM</h3>
            <p className="text-neutral-500 text-xs uppercase tracking-widest mt-2">
              Digital Marketing
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-white">WEB</h3>
            <p className="text-neutral-500 text-xs uppercase tracking-widest mt-2">
              Development
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-white">SEO</h3>
            <p className="text-neutral-500 text-xs uppercase tracking-widest mt-2">
              Local Growth
            </p>
          </div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-700 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>

    </section>
  );
};

export default Hero;
