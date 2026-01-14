import React, { useState, useMemo, useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../App.jsx';
import transtutorsLogo from '../assets/company-logos/transtutors.svg';
import newtonLogo from '../assets/company-logos/newton.svg';
import opensourceLogo from '../assets/company-logos/opensource.svg';

const Experience = ({ id, data }) => {
  const [techFilter, setTechFilter] = useState(null);
  const [roleFilter, setRoleFilter] = useState('All');
  const [query, setQuery] = useState('');
  const [openCase, setOpenCase] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.18 } }
  };

  const { reduceMotion, setReduceMotion } = useContext(ThemeContext);

  const itemVariants = reduceMotion ? {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0 } }
  } : {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120, damping: 16 } }
  };

  // collect unique techs for chips
  const allTechs = useMemo(() => {
    const set = new Set();
    (data || []).forEach(d => (d.technologies || []).forEach(t => set.add(t)));
    return Array.from(set).sort();
  }, [data]);

  // filtered entries
  const filtered = useMemo(() => {
    if (!data) return [];
    return data.filter(entry => {
      // role filter
      if (roleFilter === 'Intern' && !/intern/i.test(entry.title)) return false;
      if (roleFilter === 'Freelance' && !/freelance|transtutors/i.test(`${entry.title} ${entry.company}`)) return false;
      if (roleFilter === 'OpenSource' && !/open source|open-source|open_source/i.test(`${entry.title} ${entry.company}`)) return false;

      // tech filter
      if (techFilter && !(entry.technologies || []).includes(techFilter)) return false;

      // search query
      if (query.trim()) {
        const q = query.toLowerCase();
        const hay = `${entry.title} ${entry.company} ${entry.duration} ${(entry.highlights || []).join(' ')} ${entry.caseStudy || ''}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }

      return true;
    });
  }, [data, techFilter, roleFilter, query]);

  // Structured data for SEO (Resume schema snippet)
  const jsonLd = useMemo(() => {
    const positions = (data || []).map(entry => ({
      "@type": "ListItem",
      position: entry.title,
      name: entry.company,
      startDate: entry.duration ? entry.duration.split('-')[0].trim() : undefined,
      endDate: entry.duration && entry.duration.includes('Present') ? undefined : entry.duration && entry.duration.split('-')[1] && entry.duration.split('-')[1].trim()
    }));
    return JSON.stringify({ "@context": "http://schema.org", "@type": "Person", name: "", hasOccupation: positions });
  }, [data]);

  return (
    <section id={id} className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Professional Experience</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A timeline of roles, impact, and select case studies.</p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3 flex-wrap">
              <label className="sr-only" htmlFor="exp-search">Search experience</label>
              <input id="exp-search" type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search roles, techs, problems..." className="px-3 py-2 border rounded-md w-64 text-sm" />

              <div className="flex items-center space-x-2">
                {['All', 'Intern', 'Freelance', 'OpenSource'].map(r => (
                  <button
                    key={r}
                    onClick={() => setRoleFilter(r)}
                    className={`text-sm px-3 py-1 rounded-full ${roleFilter === r ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                    aria-pressed={roleFilter === r}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto py-2">
              <span className="text-sm text-gray-500 mr-2">Filter by tech:</span>
              {allTechs.map(tech => (
                <button
                  key={tech}
                  onClick={() => setTechFilter(prev => prev === tech ? null : tech)}
                  onKeyDown={e => { if (e.key === 'Enter') setTechFilter(prev => prev === tech ? null : tech); }}
                  className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ${techFilter === tech ? 'bg-indigo-600 text-white' : 'bg-indigo-50 text-indigo-700'}`}
                  aria-pressed={techFilter === tech}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mt-2">
            <div className="text-sm text-gray-500">Display animations:</div>
            <div className="flex items-center gap-3">
              <button onClick={() => setReduceMotion(prev => !prev)} className="px-3 py-1 bg-gray-100 rounded-md text-sm">
                {reduceMotion ? 'Enable animations' : 'Reduce animations'}
              </button>
              <a href="/joseph-musembi-cv.pdf" download="Joseph-Musembi-CV.pdf" className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm inline-block">Download CV</a>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-indigo-200" aria-hidden="true" />

            {filtered.length === 0 ? (
              <p className="text-center text-gray-500 py-10">No matching experience entries.</p>
            ) : (
              <div className="space-y-12">
                {filtered.map((exp, idx) => {
                  const isLeft = idx % 2 === 0;
                  return (
                    <motion.div key={idx} variants={itemVariants} className={`relative flex items-start ${isLeft ? 'justify-start' : 'justify-end'}`}>
                      <div className="w-full md:w-5/12">
                        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                              <p className="text-indigo-600 font-medium mt-1">{exp.company} <span className="text-gray-500 text-sm">• {exp.location}</span></p>
                              <p className="text-gray-500 text-sm mt-2">{exp.duration}</p>
                            </div>
                            <div className="ml-4 text-right">
                              <div className="text-xs text-gray-500">Impact</div>
                              <div className="mt-1 flex flex-col items-end gap-1">
                                {(exp.impactMetrics || []).map((m,i) => (
                                  <span key={i} className="text-sm font-medium text-gray-700">{m.label}: <span className="text-indigo-600">{m.value}</span></span>
                                ))}
                              </div>
                            </div>
                          </div>

                          <ul className="mt-4 space-y-2">
                            {(exp.highlights || []).map((h, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-indigo-500 mr-3 mt-1">•</span>
                                <span className="text-gray-700">{h}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="mt-4 flex flex-wrap items-center gap-2">
                            {(exp.technologies || []).map((t, i) => (
                              <button key={i} onClick={() => setTechFilter(t)} className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-300">{t}</button>
                            ))}
                          </div>

                          {/* Company badge */}
                          <div className="mt-4 flex items-center gap-3">
                            <div className="company-badge" aria-hidden>
                              <img src={exp.company.toLowerCase().includes('transtutors') ? transtutorsLogo : exp.company.toLowerCase().includes('newton') ? newtonLogo : opensourceLogo} alt="" />
                            </div>
                            <div className="text-sm text-gray-500">Role type: <span className="text-gray-700">{/intern/i.test(exp.title) ? 'Intern' : /freelance/i.test(exp.title) || /transtutors/i.test(exp.company) ? 'Freelance' : 'Professional'}</span></div>
                          </div>

                          <div className="mt-4 flex items-center justify-between">
                            <div className="text-sm text-gray-500">{exp.whatILearned}</div>
                            <div>
                              {exp.caseStudy && (
                                <button onClick={() => setOpenCase(idx)} className="text-sm text-indigo-600 hover:underline">Read case study</button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Case study modal */}
          {openCase !== null && filtered[openCase] && (
            <div className="fixed inset-0 z-50 flex items-center justify-center" role="dialog" aria-modal="true">
              <div className="absolute inset-0 bg-black opacity-40" onClick={() => setOpenCase(null)} />
              <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative bg-white rounded-lg shadow-xl max-w-2xl mx-4 p-6 z-10">
                <h3 className="text-xl font-semibold">Case Study — {filtered[openCase].company}</h3>
                <p className="text-sm text-gray-500 mt-1">{filtered[openCase].title} • {filtered[openCase].duration}</p>
                <div className="mt-4 text-gray-700 whitespace-pre-line">{filtered[openCase].caseStudy}</div>
                <div className="mt-6 text-right">
                  <button onClick={() => setOpenCase(null)} className="px-4 py-2 bg-indigo-600 text-white rounded-md">Close</button>
                </div>
              </motion.div>
            </div>
          )}

          {/* JSON-LD for basic resume snippets */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;