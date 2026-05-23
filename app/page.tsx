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
  { name: 'MongoDB / FireBase', pct: 80, color: '#D85A30' },
]

const PROJECTS = [
  {
    name: 'Daraz Clone',
    desc: 'An e-commerce website clone of Daraz.',
    tags: ['React.JS', 'TailwindCss', 'FireBase'],
    accent: '#1D9E75',
    bg: '#0a1a12',
    label: 'E Commerce Store',
    src : "/images/daraz-image.jpeg" ,
    featured: true,
    stats: [
      {
        label: 'Live Demo',
        value: 'Live Demo',
        icon: HiOutlineExternalLink,
        link: 'https://darazcloone.netlify.app/',
      },
      {
        label: 'Github',
        value: 'Github',
        icon: AiFillGithub,
        link: 'https://github.com/Zain-The-Coder/React.JS_Projects/tree/main/Daraz%20App',
      },
    ],
  },
  {
    name: 'World Messanger',
    desc: "A global public square messaging app where anyone can drop messages for everyone to see." ,
    tags: ['HTML' , "JavaScript" , "TailwindCss" , "FireBase"],
    accent: '#1D9E75',
    bg: '#0a1a12',
    label: 'Chat application',
    src : "/images/messanfer-app.jpeg" ,
    featured: true,
    stats: [
      {
        label: 'Live Demo',
        value: 'Live Demo',
        icon: HiOutlineExternalLink,
        link: 'https://worldmesanger.netlify.app/',
      },
      {
        label: 'Github',
        value: 'Github',
        icon: AiFillGithub,
        link: 'https://github.com/Zain-The-Coder/FireBase-Projects/tree/main/Project%205%20.%20World%20Messanger',
      },
    ],
  },
  {
    name: 'Help Hub AI',
    desc: "A community help platform where users share their problems and active logged-in members provide instant solutions." ,
    tags: ['MongoDB' , "ReactJs" , "ExpressJs" , "NodeJs" , "TailwindCss"],
    accent: '#1D9E75',
    bg: '#0a1a12',
    label: 'Problem Solving Platform',
    src : "/images/help-hub-ai.png" ,
    featured: true,
    stats: [
      {
        label: 'Live Demo',
        value: 'Live Demo',
        icon: HiOutlineExternalLink,
        link: 'https://the-final-hackathon.vercel.app/',
      },
      {
        label: 'Github',
        value: 'Github',
        icon: AiFillGithub,
        link: 'https://github.com/Zain-The-Coder/The-Final_hackathon',
      },
    ],
  },
  {
    name: 'Med Connect',
desc: "A healthcare SaaS platform built as a collaborative group assignment to streamline hospital management."  ,
  tags: ['Next JS', 'TailwindCss', 'SupaBase' , "Next Auth" , "Prisma"],
    accent: '#1D9E75',
    label : "Hospital Management System" ,
    src : "/images/MED-CONNET=2.png" ,
    bg: '#0a1a12',
    featured: true,
    stats: [
      {
        label: 'Live Demo',
        value: 'Live Demo',
        icon: HiOutlineExternalLink,
        link: 'https://med-connect-zeta.vercel.app/',
      },
      {
        label: 'Github',
        value: 'Github',
        icon: AiFillGithub,
        link: 'https://github.com/Zain-The-Coder/MedConnect/tree/main/med-connect',
      },
    ],
  },
]

const STACK = ["JaaScript" , "TypeScript" ,
  "MongoDB" , "Node JS" , "React JS" , "Express JS" , "Next JS" , "Firebase" , "Supabase" , "Bootstrap" , "TailwindCss" , 
  "Next Auth" ]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
}

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
}as const

function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const zain = '< / Zain Ur Rehman >'

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
        <button
  onClick={() => window.open('https://wa.me/923182622266', '_blank')}
  className="bg-white text-black text-sm font-medium px-5 py-2 rounded-full hover:bg-white/90 transition-colors duration-200"
>
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
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full"
        style={{ background: 'radial-gradient(ellipse, #7F77DD18 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full"
        style={{ background: 'radial-gradient(ellipse, #1D9E7510 0%, transparent 70%)' }}
      />

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
<a 
  href="/zain-cv.pdf"
  download="Zain_Ur_Rehman_CV.pdf"
  className="text-sm text-white/40 hover:text-white/70 cursor-pointer transition-colors inline-flex items-center gap-2"
>
  Download CV
  {/* Sahi Download Icon SVG */}
  <svg 
    width="14" 
    height="14" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
</a>
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
                <div className="w-16 h-16 flex items-center justify-center">
                  {/* Fixed: ZR initials for Zain Ur Rehman */}
                  <img src="/Gemini_Generated_Image_a9jzyoa9jzyoa9jz.png" alt="Personal-profile-photo" className="font-display font-bold text-xl text-[#AFA9EC]"></img>
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

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-baseline justify-between mb-12"
        >
          <div className="flex items-center gap-3">
            <div className="w-5 h-px bg-[#7F77DD]" />
            <h2 className="font-display font-bold text-2xl text-white">Projects</h2>
          </div>
          <span className="text-white/20 text-sm">
            {PROJECTS.length} project{PROJECTS.length !== 1 ? 's' : ''}
          </span>
        </motion.div>

        {/* All Projects List (Har project bara box banega) */}
        <div className="flex flex-col gap-8">
          {PROJECTS.map((project, i) => {
            const mainLink = project.stats?.[0]?.link || '#'

            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="border border-white/8 rounded-2xl overflow-hidden bg-white/[0.01] hover:border-white/15 transition-colors duration-300 group relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  
                  {/* Left Side: Image / Visual */}
                  <Link
                    href={mainLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-64 lg:h-80 flex items-center justify-center relative overflow-hidden cursor-pointer"
                    style={{ background: project.bg }}
                  >
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `linear-gradient(${project.accent} 1px, transparent 1px), linear-gradient(90deg, ${project.accent} 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                      }}
                    />
                    
                    {/* Dynamic Tag Label */}
                    <div
                      className="absolute top-4 left-4 border rounded-lg px-3 py-1 text-xs z-20"
                      style={{ 
                        borderColor: `${project.accent}40`, 
                        color: project.accent, 
                        background: `${project.accent}10` 
                      }}
                    >
                      {project.label}
                    </div>

                    {/* Image Check */}
                      <img src={project.src}
                        alt={project.name}
                        className="w-full h-full object-cover opacity-30 relative z-10 group-hover:scale-105 transition-transform duration-500"
                      />
                  </Link>

                  {/* Right Side: Content */}
                  <div className="p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display font-bold text-2xl text-white mb-4 leading-tight">
                        {project.name}
                      </h3>
                      <p className="text-white/40 leading-relaxed mb-6 text-sm">
                        {project.desc}
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        {project.tags.map((t: string) => (
                          <span key={t} className="text-xs border border-white/10 text-white/40 px-3 py-1 rounded-full">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Links / Stats */}
                    <div className="flex gap-8 mt-8 pt-8 border-t border-white/5 relative z-20">
                      {project.stats && project.stats.map((s: any) => (
                        <a
                          key={s.label}
                          href={s.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link block cursor-pointer"
                        >
                          <p className="font-display font-bold text-lg text-white group-hover/link:text-[#7F77DD] flex items-center gap-1.5 transition-colors">
                            {s.icon && <s.icon className="text-xl text-white/60 group-hover/link:text-[#7F77DD]" />}
                            {s.value}
                          </p>
                          <p className="text-white/30 text-xs mt-0.5">{s.label}</p>
                        </a>
                      ))}
                    </div>

                  </div>
                </div>
              </motion.div>
            )
          })}
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
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7F77DD]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
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
                borderColor: 'rgba(127, 119, 221, 0.4)',
                color: '#fff',
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


function ContactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const socials = [
    { label: 'GitHub',   href: 'https://github.com/Zain-The-Coder' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hafiz-zain-022680354/' },
  ]

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
            <span className="text-xs text-[#1D9E75] font-medium tracking-widest uppercase">Available For Work</span>
            <div className="w-5 h-px bg-[#1D9E75]" />
          </div>

          <h2
            className="font-display font-bold text-white mb-6 leading-tight"
            style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}
          >
            {"Let's build"}<br />something great.
          </h2>

          <p className="text-white/35 text-lg max-w-md mx-auto mb-12">
            Open to backend and also frontend roles.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            {/* Fix: mailto: prefix added */}
            <a
              href="mailto:zain015976@gmail.com"
              className="bg-white text-black text-sm font-medium px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors duration-200"
            >
              Contact Me On Gmail
            </a>

            <div className="flex gap-3">
              {socials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/10 text-white/40 text-sm px-5 py-3.5 rounded-full hover:border-white/25 hover:text-white/60 transition-all duration-200"
                >
                  {label}
                </a>
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
      <ContactSection />
      <footer className="border-t border-white/5 py-6 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="font-display text-sm text-white/20">Zain Ur Rehman</span>
          <span className="text-white/15 text-xs">© 2026 · Built with Next JS & TailwindCss</span>
        </div>
      </footer>
    </main>
  )
}
