'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { AiFillGithub } from 'react-icons/ai'
import Link from 'next/link'
import './globals.css'

const NAV_LINKS = ['Work', 'About', 'Process', 'Contact']

const SKILLS = [
  { name: 'React.js / Next.js', pct: 95, color: '#7F77DD' },
  { name: 'Node.js / APIs',     pct: 88, color: '#1D9E75' },
  { name: 'MongoDB / FireBase',      pct: 80, color: '#D85A30' },
]


const PROJECTS = [
{
    name: 'Daraz',
    desc: 'An e-commerce website clone of Daraz.',
    tags: ['React.JS', "TailwindCss", "FireBase"],
    accent: '#1D9E75',
    bg: '#0a1a12',
    label: 'https://i.ibb.co/F4Z22R3/daraz-nano-edit.png',
    featured: false,
    stats: [
        {
            label: "Live Demo",
            value: "Live Demo",
            icon: HiOutlineExternalLink,
            link: "https://darazcloone.netlify.app/",
        },
        {
            label: "Github",
            value: "Github",
            icon: AiFillGithub,
            link: "https://github.com/Zain-The-Coder/React.JS_Projects/tree/main/Daraz%20App",
        },
    ],
}
]

const STACK = [
  'TypeScript','React','Next.js','Node.js','Python','Tailwind CSS',
  'Postgres','Redis','Docker','AWS','Figma','Framer Motion',
]
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
}

// Animatie varianten voor elke individuele skill tag
const itemVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
}

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [zain , setZain] = useState("< / Zain Ur Rehman >")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl bg-[#080808]/80 border-b border-white/5' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <span className="font-display text-lg font-bold tracking-tight text-white">{zain}</span>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <span key={link} className="text-sm text-white/40 hover:text-white/80 cursor-pointer transition-colors duration-200">
              {link}
            </span>
          ))}
        </div>
        <button className="bg-white text-black text-sm font-medium px-5 py-2 rounded-full hover:bg-white/90 transition-colors duration-200">
          {"Let's talk"}
        </button>
      </div>
    </motion.nav>
  )
}

function HeroSection() {
  const words = ['products', 'systems', 'interfaces', 'experiences']
  const [wordIdx, setWordIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setWordIdx(i => (i + 1) % words.length), 2500)
    return () => clearInterval(t)
  }, [words.length])

  return (
    <section className="min-h-screen flex items-center pt-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full"
        style={{ background: 'radial-gradient(ellipse, #7F77DD18 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full"
        style={{ background: 'radial-gradient(ellipse, #1D9E7510 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
        <div className="lg:col-span-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-6 h-px bg-[#7F77DD]" />
            <span className="text-xs text-[#7F77DD] font-medium tracking-widest uppercase">MERN Stack / Developer</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-white mb-6 leading-[0.95]"
            style={{ fontSize: 'clamp(52px, 8vw, 88px)' }}
          >
            Building<br />
            <span className="relative inline-block text-[#AFA9EC]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIdx}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  {words[wordIdx]}
                </motion.span>
              </AnimatePresence>
            </span><br />
            that scale.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-white/40 text-lg leading-relaxed max-w-md mb-10"
          >
            I design and engineer digital products from concept to deployment. Currently open to senior roles and select freelance projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex items-center gap-5"
          >
<Link 
  href="https://github.com/Zain-The-Coder" 
  target="_blank"
  rel="noopener noreferrer"
  className="relative z-20 inline-block bg-[#7F77DD] text-white text-sm font-medium px-7 py-3.5 rounded-full hover:bg-[#6b63c9] transition-colors duration-200"
>
  View Github
</Link>
            <button className="text-sm text-white/40 hover:text-white/70 transition-colors flex items-center gap-2">
              Download CV
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-2"
        >
          <div className="border border-white/8 rounded-2xl p-6 bg-white/[0.02]">
            <div className="flex items-center gap-4 mb-8">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-[#1a1a2e] border-2 border-[#EEEDFE]/20 flex items-center justify-center">
                  <span className="font-display font-bold text-xl text-[#AFA9EC]">AK</span>
                </div>
                <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-[#1D9E75] border-2 border-[#0d0d0d]" />
              </div>
              <div>
                <p className="text-white font-medium">Zain Ur Rehman</p>
                <p className="text-white/40 text-sm">1.5 yrs exp.</p>
              </div>
              <div className="ml-auto bg-[#1D9E7515] border border-[#1D9E7530] rounded-full px-3 py-1 shrink-0">
                <span className="text-[#1D9E75] text-xs font-medium">Open to work</span>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-white/25 text-xs tracking-widest uppercase mb-4">Expertise</p>
              {SKILLS.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="space-y-1.5"
                >
                  <div className="flex justify-between text-xs">
                    <span className="text-white/50">{s.name}</span>
                    <span className="text-white/30">{s.pct}%</span>
                  </div>
                  <div className="h-[3px] rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${s.pct}%` }}
                      transition={{ delay: 0.8 + i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full rounded-full"
                      style={{ background: s.color }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function WorkSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const featured = PROJECTS[0]
  const rest = PROJECTS.slice(1)

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-baseline justify-between mb-12"
        >
          <div className="flex items-center gap-3">
            <div className="w-5 h-px bg-[#7F77DD]" />
            <h2 className="font-display font-bold text-2xl text-white">Selected work</h2>
          </div>
          <span className="text-white/20 text-sm">3 projects</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="border border-white/8 rounded-2xl overflow-hidden mb-4 cursor-pointer hover:border-white/15 transition-colors duration-300 group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-64 lg:h-80 flex items-center justify-center relative overflow-hidden"
              style={{ background: featured.bg }}>
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `linear-gradient(${featured.accent} 1px, transparent 1px), linear-gradient(90deg, ${featured.accent} 1px, transparent 1px)`,
                  backgroundSize: '40px 40px',
                }}
              />
              <div className="absolute top-4 left-4 border rounded-lg px-3 py-1 text-xs"
                style={{ borderColor: `${featured.accent}40`, color: featured.accent, background: `${featured.accent}10` }}>
                Case study
              </div>
              <span className="font-display font-bold text-6xl relative z-10" style={{ color: featured.accent }}>
                {featured.label}
              </span>
            </div>
            <div className="p-8 lg:p-10 flex flex-col justify-between bg-white/[0.01]">
              <div>
                <p className="text-xs font-medium mb-2" style={{ color: featured.accent }}>Featured · SaaS</p>
                <h3 className="font-display font-bold text-2xl text-white mb-4 leading-tight">{featured.name}</h3>
                <p className="text-white/40 leading-relaxed mb-6">{featured.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  {featured.tags.map(t => (
                    <span key={t} className="text-xs border border-white/10 text-white/40 px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
              <div className="flex gap-8 mt-8 pt-8 border-t border-white/5">
                {featured.stats.map(s => (
                  <div key={s.label}>
                    <p className="font-display font-bold text-2xl text-white">{s.num}</p>
                    <p className="text-white/30 text-xs mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rest.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="border border-white/8 rounded-2xl overflow-hidden cursor-pointer hover:border-white/15 transition-colors duration-300 group"
            >
              <div className="h-44 flex items-center justify-center relative overflow-hidden" style={{ background: p.bg }}>
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `linear-gradient(${p.accent} 1px, transparent 1px), linear-gradient(90deg, ${p.accent} 1px, transparent 1px)`,
                    backgroundSize: '30px 30px',
                  }}
                />
                <span className="font-display font-bold text-5xl" style={{ color: p.accent }}>{p.label}</span>
              </div>
              <div className="p-6 bg-white/[0.01]">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display font-semibold text-lg text-white">{p.name}</h3>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white/20 group-hover:text-white/50 transition-colors mt-1 shrink-0">
                    <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-white/35 text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs border border-white/8 text-white/30 px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
function StackSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 px-6 border-t border-white/5 bg-black relative overflow-hidden">
      {/* Subtiele achtergrond sfeerverlichting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7F77DD]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Titel met strakke fade-in */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-8 h-px bg-[#7F77DD]" />
          <h2 className="font-display font-medium text-sm tracking-[0.2em] uppercase text-white/60">
            Tech Stack
          </h2>
        </motion.div>

        {/* Flex grid met staggered animatie */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-wrap gap-3 max-w-4xl"
        >
          {STACK.map((s) => (
            <motion.span
              key={s}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: 'rgba(255,255,255,0.06)',
                borderColor: 'rgba(127, 119, 221, 0.4)', // Subtiele paarse glow op hover
                color: '#fff'
              }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2.5 rounded-xl border border-white/10 bg-white/[0.02] text-white/50 text-sm font-medium backdrop-blur-sm transition-colors duration-300 cursor-pointer select-none"
            >
              {s}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function TestimonialSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section ref={ref} className="py-20 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="border border-white/8 rounded-2xl p-10 lg:p-14 bg-white/[0.01] max-w-3xl"
        >
          <p className="font-display text-4xl text-white/10 leading-none mb-6 select-none">&ldquo;</p>
          <p className="text-white/70 text-lg leading-relaxed italic mb-10">
            Alex is the rarest kind of engineer — someone who thinks deeply about design and business impact, not just code quality. He shipped our entire platform in 8 months and it felt like a team of five.
          </p>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#EEEDFE]/10 border border-[#7F77DD]/20 flex items-center justify-center">
              <span className="text-xs font-medium text-[#AFA9EC]">SR</span>
            </div>
            <div>
              <p className="text-white font-medium text-sm">Sara Reza</p>
              <p className="text-white/30 text-xs">CEO, Nexus Technologies</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ContactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section ref={ref} className="py-28 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-5 h-px bg-[#1D9E75]" />
            <span className="text-xs text-[#1D9E75] font-medium tracking-widest uppercase">Available June 2026</span>
            <div className="w-5 h-px bg-[#1D9E75]" />
          </div>
          <h2 className="font-display font-bold text-white mb-6 leading-tight"
            style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}>
            {"Let's build"}<br />something great.
          </h2>
          <p className="text-white/35 text-lg max-w-md mx-auto mb-12">
            Open to senior engineering roles and select freelance projects starting mid-2026.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a href="mailto:alex@kim.dev"
              className="bg-white text-black text-sm font-medium px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors duration-200">
              alex@kim.dev
            </a>
            <div className="flex gap-3">
              {['GitHub', 'LinkedIn', 'Dribbble'].map(s => (
                <button key={s}
                  className="border border-white/10 text-white/40 text-sm px-5 py-3.5 rounded-full hover:border-white/25 hover:text-white/60 transition-all duration-200">
                  {s}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function Portfolio() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <WorkSection />
      <StackSection />
      <TestimonialSection />
      <ContactSection />
      <footer className="border-t border-white/5 py-6 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="font-display text-sm text-white/20">alex.kim</span>
          <span className="text-white/15 text-xs">© 2026 · Built with Next.js</span>
        </div>
      </footer>
    </main>
  )
}
