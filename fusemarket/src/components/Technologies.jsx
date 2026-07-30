import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const TECH_TABS = [
  {
    id: 'frontend', label: 'Frontend',
    items: [
      { name: 'React', color: '#61DAFB', bg: '#61DAFB15' },
      { name: 'Next.js', color: '#ffffff', bg: '#ffffff10' },
      { name: 'Angular', color: '#DD0031', bg: '#DD003115' },
      { name: 'Vue.js', color: '#4FC08D', bg: '#4FC08D15' },
      { name: 'TypeScript', color: '#3178C6', bg: '#3178C615' },
      { name: 'JavaScript', color: '#F7DF1E', bg: '#F7DF1E15' },
      { name: 'HTML5', color: '#E34F26', bg: '#E34F2615' },
      { name: 'CSS3', color: '#1572B6', bg: '#1572B615' },
    ]
  },
  {
    id: 'backend', label: 'Backend',
    items: [
      { name: 'Node.js', color: '#339933', bg: '#33993315' },
      { name: 'Django', color: '#0C4B33', bg: '#092d1f', textColor: '#44B78B' },
      { name: 'Laravel', color: '#FF2D20', bg: '#FF2D2015' },
      { name: '.NET', color: '#512BD4', bg: '#512BD415' },
      { name: 'Spring Boot', color: '#6DB33F', bg: '#6DB33F15' },
      { name: 'Python', color: '#3776AB', bg: '#3776AB15' },
      { name: 'PHP', color: '#777BB4', bg: '#777BB415' },
      { name: 'GraphQL', color: '#E10098', bg: '#E1009815' },
    ]
  },
  {
    id: 'mobile', label: 'Mobile',
    items: [
      { name: 'Flutter', color: '#02569B', bg: '#02569B15' },
      { name: 'React Native', color: '#61DAFB', bg: '#61DAFB15' },
      { name: 'Swift', color: '#FA7343', bg: '#FA734315' },
      { name: 'Kotlin', color: '#7F52FF', bg: '#7F52FF15' },
    ]
  },
  {
    id: 'database', label: 'Database',
    items: [
      { name: 'MongoDB', color: '#47A248', bg: '#47A24815' },
      { name: 'MySQL', color: '#4479A1', bg: '#4479A115' },
      { name: 'PostgreSQL', color: '#4169E1', bg: '#4169E115' },
      { name: 'Firebase', color: '#FFCA28', bg: '#FFCA2815' },
      { name: 'Redis', color: '#DC382D', bg: '#DC382D15' },
    ]
  },
  {
    id: 'cloud', label: 'Cloud',
    items: [
      { name: 'AWS', color: '#FF9900', bg: '#FF990015' },
      { name: 'Azure', color: '#0078D4', bg: '#0078D415' },
      { name: 'Google Cloud', color: '#4285F4', bg: '#4285F415' },
      { name: 'DigitalOcean', color: '#0080FF', bg: '#0080FF15' },
      { name: 'Cloudflare', color: '#F48120', bg: '#F4812015' },
      { name: 'Docker', color: '#2496ED', bg: '#2496ED15' },
      { name: 'Kubernetes', color: '#326CE5', bg: '#326CE515' },
    ]
  },
  {
    id: 'ai', label: 'AI & ML',
    items: [
      { name: 'OpenAI', color: '#10a37f', bg: '#10a37f15' },
      { name: 'Gemini', color: '#4285F4', bg: '#4285F415' },
      { name: 'Claude', color: '#D97706', bg: '#D9770615' },
      { name: 'LangChain', color: '#1C3C3C', bg: '#1C3C3C30', textColor: '#7DD3BC' },
      { name: 'Pinecone', color: '#1C4532', bg: '#1C453230', textColor: '#6EE7B7' },
      { name: 'Vector DB', color: '#8B2A4A', bg: '#8B2A4A15' },
    ]
  },
  {
    id: 'cms', label: 'CMS',
    items: [
      { name: 'WordPress', color: '#21759B', bg: '#21759B15' },
      { name: 'Shopify', color: '#95BF47', bg: '#95BF4715' },
      { name: 'Webflow', color: '#4353FF', bg: '#4353FF15' },
      { name: 'Strapi', color: '#4945FF', bg: '#4945FF15' },
      { name: 'Sanity', color: '#F03E2F', bg: '#F03E2F15' },
    ]
  },
  {
    id: 'marketing', label: 'Marketing Tools',
    items: [
      { name: 'GA4', color: '#F9AB00', bg: '#F9AB0015' },
      { name: 'Google Tag Manager', color: '#4285F4', bg: '#4285F415' },
      { name: 'SEMrush', color: '#FF642D', bg: '#FF642D15' },
      { name: 'Ahrefs', color: '#FF6600', bg: '#FF660015' },
      { name: 'HubSpot', color: '#FF7A59', bg: '#FF7A5915' },
      { name: 'Meta Ads Manager', color: '#1877F2', bg: '#1877F215' },
      { name: 'Hotjar', color: '#FD3A5C', bg: '#FD3A5C15' },
      { name: 'Looker Studio', color: '#4285F4', bg: '#4285F415' },
    ]
  },
];

export default function Technologies() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeTab, setActiveTab] = useState('frontend');
  const activeData = TECH_TABS.find(t => t.id === activeTab);

  return (
    <section id="technologies" className="section-soft py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#8B2A4A]">Tech Stack</span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mt-2">
            Technologies We <span className="text-gradient-maroon">Master</span>
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
            We choose the right tool for each project — no one-size-fits-all approach.
          </p>
        </motion.div>

        {/* Tab strip */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          {TECH_TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'tab-active text-white'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-[#8B2A4A]/40 hover:text-[#8B2A4A]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tech pills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeData?.items.map((tech, i) => (
              <motion.div
                key={tech.name}
                className="flex items-center gap-2.5 px-5 py-3 rounded-xl font-bold text-sm cursor-default hover:scale-105 transition-transform"
                style={{ background: tech.bg, border: `1px solid ${tech.color}30`, color: tech.textColor || tech.color }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04 }}
              >
                {/* Color dot */}
                <span className="w-2 h-2 rounded-full shrink-0" style={{ background: tech.color }} />
                {tech.name}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
