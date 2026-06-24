import React from 'react';

const AboutMe: React.FC = () => {
  const profilePicUrl = "./yuvaraj.png";

  return (
    <section
      id="about"
      className="py-24 md:py-40 px-6 max-w-6xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

        {/* Left Content */}
        <div className="lg:col-span-8 space-y-10">

          <div className="flex flex-wrap gap-4">

            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse"></span>
              <span className="text-brand-primary text-[10px] font-bold tracking-widest uppercase">
                Founder & Entrepreneur
              </span>
            </div>

            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-emerald-500 text-[10px] font-bold tracking-widest uppercase">
                AI Growth Strategist
              </span>
            </div>

          </div>

          <h2 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tight leading-[1.1]">
            About Me.
            <br />
            <span className="text-neutral-500 text-4xl md:text-5xl">
              Building Business Growth.
            </span>
          </h2>

          {/* Mobile Image */}
          <div className="lg:hidden w-full mb-10">
            <div className="relative group mx-auto max-w-sm">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-emerald-500 rounded-[2.5rem] blur opacity-25"></div>

              <div className="relative aspect-square rounded-[2.5rem] overflow-hidden border border-brand-border bg-brand-surface">
                <img
                  src={profilePicUrl}
                  alt="Yuvaraj Ramalingam"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8 text-neutral-400 text-lg leading-relaxed max-w-3xl">

            <p>
              My name is
              <span className="text-white font-medium">
                {" "}Yuvaraj Ramalingam
              </span>.
              I am a Founder, Entrepreneur and Digital Growth Strategist
              from Salem, Tamil Nadu.
            </p>

            <p>
              With a Bachelor of Technology in Information Technology,
              I combine technology, branding, marketing and creativity
              to help businesses grow in the digital era.
            </p>

            <p>
              My work spans digital marketing, AI-powered content creation,
              branding, website development, local business growth and
              business consulting.
            </p>

            <p>
              Over the years I have worked with businesses across
              retail, jewellery, fashion, beauty, education,
              restaurants, startups and local service industries.
            </p>

            <p>
              I strongly believe that businesses that embrace
              technology and creativity together will always
              have a competitive advantage.
            </p>

            <div className="p-6 bg-brand-surface border border-brand-border rounded-2xl border-l-4 border-l-brand-primary">

              <p className="text-neutral-300 italic text-base">
                "Technology creates opportunities. Creativity attracts
                attention. Strategy creates direction. Execution creates
                results."
              </p>

            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="lg:col-span-4 space-y-10">

          {/* Profile Image */}
          <div className="hidden lg:block relative group">

            <div className="absolute -inset-4 bg-brand-primary/10 rounded-[3rem] blur-3xl"></div>

            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-brand-border bg-brand-surface shadow-2xl">

              <img
                src={profilePicUrl}
                alt="Yuvaraj Ramalingam"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60"></div>

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-brand-dark/40 backdrop-blur-md border border-white/10">

                <p className="text-white font-display font-bold text-lg">
                  Yuvaraj Ramalingam
                </p>

                <p className="text-brand-primary text-[10px] font-bold uppercase tracking-widest">
                  Founder • Entrepreneur • Digital Growth Strategist
                </p>

              </div>

            </div>

          </div>

          {/* Founder Card */}
          <div className="card-premium p-8 rounded-2xl border border-brand-primary/20">

            <h4 className="text-white font-bold text-xl mb-3">
              Founder Profile
            </h4>

            <p className="text-neutral-400 text-sm leading-relaxed">
              Helping businesses leverage digital marketing,
              AI-powered content creation, branding,
              websites and technology-driven growth systems.
            </p>

          </div>

          {/* AI Card */}
          <div className="card-premium p-6 rounded-2xl">

            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
              AI Creative Specialist
            </h4>

            <p className="text-neutral-500 text-sm leading-relaxed">
              Specialized in AI Video Production,
              AI Image Generation,
              Prompt Engineering,
              Creative Automation and AI Marketing Systems.
            </p>

          </div>

          {/* Expertise */}
          <div className="card-premium p-6 rounded-2xl">

            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
              Core Expertise
            </h4>

            <div className="flex flex-wrap gap-2">

              <span className="px-3 py-1 rounded-full bg-neutral-900 border border-brand-border text-xs">
                Digital Marketing
              </span>

              <span className="px-3 py-1 rounded-full bg-neutral-900 border border-brand-border text-xs">
                AI Content Creation
              </span>

              <span className="px-3 py-1 rounded-full bg-neutral-900 border border-brand-border text-xs">
                Branding
              </span>

              <span className="px-3 py-1 rounded-full bg-neutral-900 border border-brand-border text-xs">
                Website Development
              </span>

              <span className="px-3 py-1 rounded-full bg-neutral-900 border border-brand-border text-xs">
                Business Consulting
              </span>

              <span className="px-3 py-1 rounded-full bg-neutral-900 border border-brand-border text-xs">
                Local SEO
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutMe;
