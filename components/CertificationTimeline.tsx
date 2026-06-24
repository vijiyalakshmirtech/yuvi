import React from 'react';

const founderJourney = [
  {
    id: 1,
    title: 'Information Technology Foundation',
    issuer: 'B.Tech - Information Technology',
    date: 'Beginning',
    status: 'completed',
    description:
      'Built a strong technical foundation through Information Technology studies and developed a passion for technology, systems, and digital innovation.',
  },
  {
    id: 2,
    title: 'Digital Marketing Exploration',
    issuer: 'Marketing & Branding',
    date: 'Growth Stage',
    status: 'completed',
    description:
      'Started exploring digital marketing, branding, content creation, customer psychology, and business growth strategies.',
  },
  {
    id: 3,
    title: 'AI Creative Specialization',
    issuer: 'Artificial Intelligence',
    date: 'Innovation Stage',
    status: 'completed',
    description:
      'Focused on AI-powered content creation, AI video production, AI image generation, prompt engineering, and creative automation.',
  },
  {
    id: 4,
    title: 'Founder & Digital Growth Strategist',
    issuer: 'Entrepreneurship',
    date: 'Present',
    status: 'in-progress',
    description:
      'Helping businesses improve visibility, branding, customer engagement, and growth through technology, creativity, and strategic execution.',
  },
  {
    id: 5,
    title: 'Digital Transformation Leadership',
    issuer: 'Future Vision',
    date: 'Future',
    status: 'upcoming',
    description:
      'Building AI-powered growth systems and digital transformation solutions that help businesses scale sustainably.',
  },
];

const CertificationTimeline: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6">

      {/* Section Header */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-6">
          <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
          <span className="text-brand-primary text-[10px] font-bold tracking-[0.25em] uppercase">
            Founder Journey
          </span>
        </div>

        <h2 className="text-5xl md:text-6xl font-display font-bold text-white tracking-tight">
          Professional Evolution
        </h2>

        <p className="mt-6 text-neutral-500 max-w-2xl mx-auto leading-relaxed">
          The journey of Yuvaraj Ramalingam from technology enthusiast
          to entrepreneur, digital growth strategist, and AI-powered
          creative specialist.
        </p>
      </div>

      {/* Timeline */}
      <div className="space-y-16">
        {founderJourney.map((item) => (
          <div
            key={item.id}
            className="relative pl-10 border-l border-brand-border group"
          >
            <div
              className={`absolute -left-[6px] top-0 w-3 h-3 rounded-full transition-all duration-300 ${
                item.status === 'completed'
                  ? 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.6)]'
                  : item.status === 'in-progress'
                  ? 'bg-brand-primary animate-pulse shadow-[0_0_15px_rgba(99,102,241,0.5)]'
                  : 'bg-neutral-700'
              }`}
            ></div>

            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4 flex-wrap">

                <span
                  className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border ${
                    item.status === 'completed'
                      ? 'text-emerald-500 border-emerald-500/20 bg-emerald-500/5'
                      : item.status === 'in-progress'
                      ? 'text-brand-primary border-brand-primary/20 bg-brand-primary/5'
                      : 'text-neutral-500 border-neutral-700 bg-neutral-900'
                  }`}
                >
                  {item.status === 'completed'
                    ? 'Completed'
                    : item.status === 'in-progress'
                    ? 'Current Focus'
                    : 'Future Vision'}
                </span>

                <span className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest">
                  {item.date}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-brand-primary transition-colors">
                  {item.title}
                </h3>

                <p className="text-brand-primary text-sm font-medium mt-2">
                  {item.issuer}
                </p>
              </div>

              <p className="text-neutral-400 leading-relaxed max-w-2xl">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Founder Quote */}
      <div className="mt-24">
        <div className="p-8 rounded-3xl border border-brand-border bg-brand-surface text-center">
          <p className="text-xl text-neutral-300 italic leading-relaxed">
            "Technology creates opportunities. Creativity attracts attention.
            Strategy creates direction. Execution creates results."
          </p>

          <div className="mt-6">
            <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">
              Yuvaraj Ramalingam
            </span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CertificationTimeline;
