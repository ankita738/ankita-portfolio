import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Download, 
  ExternalLink, 
  Code2, 
  Briefcase, 
  GraduationCap, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { personalInfo, skills, experience, projects, education } from './data';

// Native SVG Icons to avoid third-party brand icon deprecation
const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 1 0-.02-3.3 1.65 1.65 0 0 0 .02 3.3m1.4 9.74V9.97H5.06v8.53h2.8z" />
  </svg>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');

  const navLinks = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'];

  return (
    <div className="min-h-screen bg-[#111112] text-zinc-100 flex flex-col items-center px-4 sm:px-8 py-6">
      {/* Outer Shell Wrapper matching Template */}
      <div className="w-full max-w-7xl bg-[#161617] rounded-3xl border border-zinc-800/80 shadow-2xl overflow-hidden p-6 sm:p-12">
        
        {/* Navigation Bar */}
        <header className="flex items-center justify-between pb-8 border-b border-zinc-800/60">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-wider text-brandOrange">
              ANKITA<span className="text-white">.</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setActiveTab(item)}
                className={`transition-colors duration-200 hover:text-white ${
                  activeTab === item ? 'text-brandOrange font-semibold' : ''
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="bg-brandOrange hover:bg-brandOrangeHover text-white text-sm font-semibold px-6 py-2.5 rounded-lg shadow-lg shadow-brandOrange/20 transition-all hover:scale-105"
          >
            Hire Me
          </a>
        </header>

        {/* Hero Section */}
        <section id="home" className="pt-12 sm:pt-20 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/70 border border-zinc-700/50 text-xs font-medium text-zinc-300">
              <Sparkles className="w-3.5 h-3.5 text-brandOrange" /> Available for Roles & Internships
            </div>

            <div className="space-y-2">
              <p className="text-lg text-zinc-400 font-medium">Hi I am</p>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
                {personalInfo.name}
              </h1>
              <h2 className="text-3xl sm:text-5xl font-black text-brandOrange pt-1">
                Frontend & Software Engineer
              </h2>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-brandOrange hover:border-brandOrange transition-all"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-brandOrange hover:border-brandOrange transition-all"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-brandOrange hover:border-brandOrange transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Call To Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#contact"
                className="bg-brandOrange hover:bg-brandOrangeHover text-white font-medium px-8 py-3 rounded-lg shadow-lg shadow-brandOrange/25 transition-transform hover:scale-105"
              >
                Hire Me
              </a>
              <a
                href="/Ankita_Kumari_CSE.pdf"
                download
                className="border border-zinc-700 hover:border-zinc-500 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-200 font-medium px-6 py-3 rounded-lg flex items-center gap-2 transition-all"
              >
                <Download className="w-4 h-4" /> Download CV
              </a>
            </div>

            {/* Metric Banner from Template */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-zinc-800/80">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="bg-zinc-900/40 p-4 rounded-xl border border-zinc-800/60">
                  <p className="text-2xl sm:text-3xl font-extrabold text-brandOrange">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-zinc-400 font-medium mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual Circular Accent */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-zinc-800 via-zinc-900 to-brandOrange/20 p-2 border border-zinc-700/60 shadow-2xl flex items-center justify-center overflow-hidden">
              <div className="w-full h-full rounded-full bg-zinc-950 flex flex-col items-center justify-center p-6 text-center space-y-3">
                <Code2 className="w-16 h-16 text-brandOrange stroke-1 animate-pulse" />
                <h3 className="text-xl font-bold text-white tracking-wide">Clean Code & UI</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Crafting accessible web pages, responsive layouts, and robust software architectures.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-14 border-t border-zinc-800/60">
          <div className="max-w-3xl space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-brandOrange font-bold">About Me</h3>
            <h4 className="text-3xl font-bold">Passionate about building scalable digital solutions.</h4>
            <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
              {personalInfo.about}
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-14 border-t border-zinc-800/60">
          <div className="space-y-8">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-brandOrange font-bold">Work Experience</h3>
              <h4 className="text-3xl font-bold mt-1">Internship Journey</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experience.map((exp, idx) => (
                <div key={idx} className="bg-zinc-900/60 p-6 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brandOrange/10 text-brandOrange border border-brandOrange/20">
                        {exp.period}
                      </span>
                    </div>
                    <h5 className="text-lg font-bold text-white">{exp.role}</h5>
                    <p className="text-sm font-medium text-zinc-400 mb-4">{exp.company}</p>
                    <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
                      {exp.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-brandOrange shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-14 border-t border-zinc-800/60">
          <div className="space-y-8">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-brandOrange font-bold">Portfolio</h3>
              <h4 className="text-3xl font-bold mt-1">Featured Projects</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((proj, idx) => (
                <div key={idx} className="bg-zinc-900/60 p-6 rounded-2xl border border-zinc-800 hover:border-brandOrange/50 transition-all group">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-medium text-brandOrange">{proj.category}</span>
                    <a href={proj.link} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <h5 className="text-xl font-bold text-white mb-2 group-hover:text-brandOrange transition-colors">
                    {proj.title}
                  </h5>
                  <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills & Education */}
        <section id="skills" className="py-14 border-t border-zinc-800/60 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-brandOrange font-bold">Expertise</h3>
              <h4 className="text-3xl font-bold mt-1">Technical Skills</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
                  <div className="flex justify-between text-xs font-semibold mb-2">
                    <span className="text-zinc-200">{skill.name}</span>
                    <span className="text-brandOrange">{skill.level}</span>
                  </div>
                  <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-brandOrange rounded-full" style={{ width: skill.level }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-brandOrange font-bold">Background</h3>
              <h4 className="text-3xl font-bold mt-1">Education</h4>
            </div>
            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
                  <p className="text-xs text-brandOrange font-semibold">{edu.period}</p>
                  <h5 className="text-sm font-bold text-white mt-1">{edu.degree}</h5>
                  <p className="text-xs text-zinc-400 mt-0.5">{edu.school}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-14 border-t border-zinc-800/60">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h3 className="text-xs uppercase tracking-widest text-brandOrange font-bold">Get In Touch</h3>
            <h4 className="text-3xl sm:text-4xl font-extrabold text-white">Let’s Connect & Build</h4>
            <p className="text-sm text-zinc-400">
              Open for software engineering opportunities, web development roles, and project collaborations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brandOrange hover:bg-brandOrangeHover text-white px-8 py-3.5 rounded-lg font-semibold shadow-lg shadow-brandOrange/25 transition-transform hover:scale-105"
              >
                <Mail className="w-4 h-4" /> {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2 border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 px-8 py-3.5 rounded-lg font-semibold transition-all"
              >
                <Phone className="w-4 h-4" /> {personalInfo.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-zinc-300">GitHub</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-zinc-300">LinkedIn</a>
            <a href={`mailto:${personalInfo.email}`} className="hover:text-zinc-300">Email</a>
          </div>
        </footer>

      </div>
    </div>
  );
}