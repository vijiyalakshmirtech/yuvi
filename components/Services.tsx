import React from 'react';

const Services: React.FC = () => {
const services = [
{
title: 'Digital Marketing Strategy',
description:
'Helping businesses improve visibility, customer acquisition, brand awareness, and long-term growth through strategic digital marketing initiatives.',
icon: '📈'
},

```
{
  title: 'AI Content Creation',
  description:
    'Creating AI-powered advertisements, promotional videos, visual campaigns, reels, and content systems that communicate business value effectively.',
  icon: '🤖'
},

{
  title: 'Brand Development',
  description:
    'Building strong brand identities, positioning strategies, visual consistency, and messaging frameworks that create trust and recognition.',
  icon: '🎯'
},

{
  title: 'Website Development',
  description:
    'Designing professional websites, landing pages, and digital platforms that strengthen credibility and support business growth.',
  icon: '🌐'
},

{
  title: 'Google Business Profile',
  description:
    'Optimizing local business presence through Google Business Profile management, local SEO, and visibility enhancement strategies.',
  icon: '📍'
},

{
  title: 'Creative Direction',
  description:
    'Providing creative leadership for campaigns, branding projects, content production, and visual storytelling initiatives.',
  icon: '🎨'
},

{
  title: 'Business Growth Consulting',
  description:
    'Helping entrepreneurs identify opportunities, improve positioning, streamline marketing efforts, and accelerate business growth.',
  icon: '🚀'
},

{
  title: 'AI Marketing Systems',
  description:
    'Integrating artificial intelligence into marketing workflows to improve efficiency, creativity, scalability, and business performance.',
  icon: '⚡'
}
```

];

return ( <section
   id="services"
   className="py-24 md:py-32 px-6 bg-brand-surface/20 border-y border-brand-border/50"
 > <div className="max-w-7xl mx-auto">

```
    <div className="text-center mb-20">

      <div className="inline-block px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-[10px] font-bold tracking-[0.25em] uppercase mb-6 border border-brand-primary/20">
        Core Expertise
      </div>

      <h2 className="font-display font-bold text-5xl md:text-6xl text-white tracking-tight mb-6">
        What I Do.
      </h2>

      <p className="max-w-3xl mx-auto text-neutral-500 leading-relaxed">
        Helping businesses leverage technology, creativity, branding,
        digital marketing and artificial intelligence to create sustainable growth.
      </p>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      {services.map((service, index) => (
        <div
          key={index}
          className="group card-premium p-10 rounded-3xl border-brand-border hover:border-brand-primary/30 transition-all duration-500"
        >

          <div className="text-5xl mb-8 transform group-hover:scale-110 transition-transform duration-500 inline-block">
            {service.icon}
          </div>

          <h3 className="text-white font-display font-bold text-xl mb-4 group-hover:text-brand-primary transition-colors">
            {service.title}
          </h3>

          <p className="text-neutral-500 text-sm leading-relaxed">
            {service.description}
          </p>

        </div>
      ))}

    </div>

  </div>
</section>
```

);
};

export default Services;

