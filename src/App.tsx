import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Download,
  Mail,
  Phone,
  ArrowRight,
  ExternalLink,
  Award,
  CheckCircle2,
  Calendar,
  GraduationCap,
  MapPin,
  Menu,
  X,
  Eye,
  Check,
  Cpu,
  Palette,
  Layout,
  Code,
  Share2,
  Video,
  Camera,
  Coffee,
  FileSpreadsheet,
  Target
} from 'lucide-react';

interface Project {
  id: string;
  category: string;
  badge: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  details: string;
  tools: string[];
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [certModalOpen, setCertModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  
  // Contact Form State
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Active section tracking on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'certificate', 'goal', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects: Project[] = [
    {
      id: 'proj-1',
      category: 'AI Presentation',
      badge: 'AI Presentation',
      title: 'AI Presentation',
      description: 'AI in Workplace – Exploring practical generative AI frameworks for modern productivity.',
      icon: <Cpu className="w-7 h-7 text-[#7B4FD0]" />,
      tags: ['Generative AI', 'Workplace Efficiency', 'Prompting Frameworks'],
      details: 'A strategic presentation and workflow guide on integrating conversational AI and automated research in contemporary business environments. Demonstrates prompt orchestration, executive briefing preparation, and ethical considerations.',
      tools: ['ChatGPT', 'Claude 3.5', 'Canva Presentation', 'Google Slides']
    },
    {
      id: 'proj-2',
      category: 'Banner Design',
      badge: 'Banner Design',
      title: 'AI Course Banner',
      description: 'Creative promotional banner and visual assets designed for structured AI training modules.',
      icon: <Palette className="w-7 h-7 text-[#7B4FD0]" />,
      tags: ['Visual Identity', 'Typography', 'Promotional Campaign'],
      details: 'High-impact digital banners crafted for social marketing and learning portal headers. Designed with precise color theory, balanced typographic hierarchy, and engaging technology motifs.',
      tools: ['Canva Pro', 'Figma', 'Adobe Illustrator Assets']
    },
    {
      id: 'proj-3',
      category: 'Web App',
      badge: 'Web App',
      title: 'HTML App Project',
      description: 'Pet Care / Pet Selection App – Clean interactive front-end application built with semantic web standards.',
      icon: <Code className="w-7 h-7 text-[#7B4FD0]" />,
      tags: ['Semantic HTML5', 'Responsive CSS', 'Interactive UI'],
      details: 'An interactive web portal facilitating pet adoption and health tracking. Built using semantic HTML5, accessible design tokens, and dynamic component styling.',
      tools: ['HTML5', 'CSS3', 'Modern Vanilla JS']
    },
    {
      id: 'proj-4',
      category: 'Marketing',
      badge: 'Marketing',
      title: 'Marketing Project',
      description: 'Product Marketing & Promotional Ideas – Comprehensive strategy proposal tailored for market penetration.',
      icon: <Share2 className="w-7 h-7 text-[#7B4FD0]" />,
      tags: ['Market Research', 'Audience Segmentation', 'Funnel Strategy'],
      details: 'A data-informed product launch marketing proposal featuring customer persona profiling, multichannel promotion scheduling, and social acquisition funnels.',
      tools: ['Market Analysis', 'Canva Infographics', 'Excel Data Modeling']
    },
    {
      id: 'proj-5',
      category: 'Digital Art',
      badge: 'Digital Art',
      title: 'Creative Artwork',
      description: 'Digital Art & Creative Design – Explorations in digital compositions, color harmonics, and visual balance.',
      icon: <Layout className="w-7 h-7 text-[#7B4FD0]" />,
      tags: ['Digital Art', 'Color Palette Harmony', 'Creative Experimentation'],
      details: 'A series of minimalist graphic illustrations and layout studies combining organic shapes, warm lavender tints, and contemporary aesthetic balance.',
      tools: ['Canva Art', 'Procreate', 'Vector Graphics']
    },
    {
      id: 'proj-6',
      category: 'Canva Design',
      badge: 'Canva Design',
      title: 'Canva Design',
      description: 'Social Media & Promotional Designs – Modern visual content designed for high engagement across channels.',
      icon: <Sparkles className="w-7 h-7 text-[#7B4FD0]" />,
      tags: ['Social Content', 'Visual Branding', 'Instagram Carousels'],
      details: 'Multi-platform social media design templates, carousel cards, and digital posters tailored for high click-through engagement and brand recognition.',
      tools: ['Canva Pro', 'Design Systems', 'Social Media Sizing']
    }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Message from ${contactForm.name}`);
    const body = encodeURIComponent(
      `Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`
    );
    window.location.href = `mailto:yeaminjahansneha@gmail.com?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 6000);
  };

  const handleDownloadCV = () => {
    const cvText = `=====================================================
YEAMIN JAHAN - CURRICULUM VITAE
=====================================================
Email: yeaminjahansneha@gmail.com
Phone: 01614997197
Location: Sirajganj / Dhaka, Bangladesh
Profile: https://www.facebook.com/share/1JAgDxbDFh/

PROFESSIONAL SUMMARY
-----------------------------------------------------
Enthusiastic BBA Student with a specialized focus on Marketing,
Artificial Intelligence, Creative Design, and Digital Content Creation.
Passionate about leveraging modern AI workflows, data literacy, and visual
communication to solve real-world problems.

ACADEMIC QUALIFICATIONS
-----------------------------------------------------
- BBA (Major in Marketing) - Ongoing Higher Education
  Focus: Strategic Marketing Analysis, Consumer Behavior, Corporate Communication

- Higher Secondary Certificate (HSC) - 2023
  Sirajganj Government College | GPA: 5.00 / 5.00

- Secondary School Certificate (SSC) - 2021
  Sobuj Kanon School | GPA: 5.00 / 5.00

CERTIFICATIONS & TRAINING
-----------------------------------------------------
- Excel Essentials for Workplace Productivity (2026)
  Passport to Earning Bangladesh (UNICEF & Generation Unlimited)
  Verified Credentials in Workplace Spreadsheets, Formulas & Productivity

- AI (Artificial Intelligence) Training (AI 01 Batch)
  Comprehensive training on Generative AI architectures, prompting frameworks,
  and workflow automation.

CORE SKILLS & COMPETENCIES
-----------------------------------------------------
- AI & Tech: Prompt Engineering (ChatGPT, Claude, Gemini), Basic HTML/CSS
- Marketing: Digital Marketing Strategy, Social Media Growth, Content Creation
- Creative: Canva Graphic Design, Presentation Slides (PPT), Photography, Video Editing
- Productivity: Microsoft Excel, Microsoft Word, Google Workspace
=====================================================`;

    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Yeamin_Jahan_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-white text-[#1E1A2B] selection:bg-[#E6DBF9] selection:text-[#7B4FD0]">
      
      {/* HEADER NAVIGATION */}
      <header
        id="main-nav"
        className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#DDD0F7]/60 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 py-3 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            id="brand-logo-link"
            href="#home"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="w-10 h-10 rounded-full bg-[#7B4FD0] text-white font-serif font-bold text-lg flex items-center justify-center shadow-md shadow-[#7B4FD0]/20 group-hover:scale-105 transition-transform">
              YJ
            </span>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl leading-none text-[#1E1A2B] tracking-tight">
                Yeamin Jahan
              </span>
              <span className="text-[11px] font-semibold tracking-wider text-[#7B4FD0] uppercase">
                Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav
            id="desktop-nav-menu"
            className="hidden lg:flex items-center space-x-1 font-medium text-sm text-[#524B66]"
            aria-label="Main Navigation"
          >
            {[
              { label: 'Home', id: 'home' },
              { label: 'About', id: 'about' },
              { label: 'Skills', id: 'skills' },
              { label: 'Projects', id: 'projects' },
              { label: 'Education', id: 'education' },
              { label: 'Certificate', id: 'certificate' },
              { label: 'Goal', id: 'goal' },
              { label: 'Contact', id: 'contact' },
            ].map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={`#${link.id}`}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'text-[#7B4FD0] bg-[#FAF7FF] font-semibold'
                      : 'hover:text-[#7B4FD0] hover:bg-[#FAF7FF]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              id="header-facebook-btn"
              href="https://www.facebook.com/share/1JAgDxbDFh/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#FAF7FF] border border-[#DDD0F7] flex items-center justify-center text-[#7B4FD0] hover:bg-[#7B4FD0] hover:text-white transition-all shadow-sm"
              aria-label="Facebook Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              id="header-instagram-btn"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#FAF7FF] border border-[#DDD0F7] flex items-center justify-center text-[#7B4FD0] hover:bg-[#7B4FD0] hover:text-white transition-all shadow-sm"
              aria-label="Instagram Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <button
              id="header-cv-download-btn"
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#7B4FD0] hover:bg-[#683cb8] text-white text-xs sm:text-sm font-semibold shadow-md shadow-[#7B4FD0]/25 transition-all hover:shadow-lg active:scale-95 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#524B66] hover:text-[#7B4FD0] focus:outline-none focus:ring-2 focus:ring-[#7B4FD0]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-dropdown-panel"
            className="lg:hidden border-b border-[#DDD0F7] bg-white px-4 pt-2 pb-4 space-y-1 shadow-xl animate-in slide-in-from-top-2 duration-200"
          >
            {[
              { label: 'Home', id: 'home' },
              { label: 'About', id: 'about' },
              { label: 'Skills', id: 'skills' },
              { label: 'Projects', id: 'projects' },
              { label: 'Education', id: 'education' },
              { label: 'Certificate', id: 'certificate' },
              { label: 'Goal', id: 'goal' },
              { label: 'Contact', id: 'contact' },
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md font-medium text-sm transition-colors ${
                  activeSection === link.id
                    ? 'text-[#7B4FD0] bg-[#FAF7FF] font-semibold'
                    : 'text-[#524B66] hover:text-[#7B4FD0] hover:bg-[#FAF7FF]'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex items-center justify-between border-t border-[#DDD0F7] mt-2">
              <div className="flex gap-2">
                <a
                  href="https://www.facebook.com/share/1JAgDxbDFh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#FAF7FF] flex items-center justify-center text-[#7B4FD0]"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
              <button
                onClick={handleDownloadCV}
                className="px-4 py-2 rounded-full bg-[#7B4FD0] text-white text-xs font-semibold"
              >
                Download CV
              </button>
            </div>
          </div>
        )}
      </header>

      {/* MAIN BODY CONTENT */}
      <main>
        
        {/* HERO SECTION */}
        <section id="home" className="relative overflow-hidden pt-6 pb-12 sm:pb-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* LEFT COLUMN: Name, Title & Bio */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                
                {/* Mobile top two-column row (under lg) */}
                <div className="flex items-center justify-between gap-4 lg:block">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 text-[#7B4FD0] font-semibold tracking-wider text-xs sm:text-sm uppercase mb-2">
                      <span className="w-6 h-[2px] bg-[#7B4FD0]"></span>
                      HELLO, I'M
                    </div>
                    <h1 className="font-serif font-bold text-3xl sm:text-5xl lg:text-6xl text-[#1E1A2B] tracking-tight leading-[1.1]">
                      Yeamin Jahan
                    </h1>
                    <p className="mt-2 text-sm sm:text-lg font-semibold text-[#7B4FD0]">
                      BBA Student <span className="text-[#DDD0F7]">|</span> AI Learner <span className="text-[#DDD0F7]">|</span> Creative &amp; Marketing Enthusiast
                    </p>
                  </div>

                  {/* Mobile portrait arch card */}
                  <div className="lg:hidden shrink-0 w-28 h-36 relative">
                    <div className="absolute inset-0 bg-[#F2ECFD] rounded-2xl transform rotate-3"></div>
                    <div className="relative w-full h-full arch-frame overflow-hidden border-2 border-white shadow-md bg-white">
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5RHIJesMxGwct7mX_uxDDjV-N8wrn7vGj0S5WSPrMat-mcaoMC4nw9lyEVRbrdo3nckqExNHtS_lvj5ffWTc3zCY2k-c4pRFKZ8XRBOq2Liw-xvwzoMvVU48xeQz4B3tWaFWusYe7oIE8CkrQs9mZOm64qQ65EkTwtFoO8m1x2ByYw4EpI0A2N5QCFgq0qnFUHwUOe4-v5xwCX5ErBE5CAY51uPIG7puWY5tEcdivxAT73llsnM3LruSb8A81UpdKvuk"
                        alt="Yeamin Jahan Portrait"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>

                {/* Intro paragraph */}
                <p className="mt-5 sm:mt-6 text-[#524B66] text-base sm:text-lg leading-relaxed max-w-2xl">
                  I am a BBA student with an interest in Artificial Intelligence, Digital Marketing, Content Creation, Presentation Design and Creative Work. I enjoy learning new skills, exploring technology and turning ideas into meaningful projects.
                </p>

                {/* Action buttons */}
                <div className="mt-8 flex flex-wrap gap-4 items-center">
                  <a
                    id="hero-explore-work-btn"
                    href="#projects"
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#7B4FD0] hover:bg-[#683cb8] text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#7B4FD0]/25 hover:shadow-xl transition-all hover:-translate-y-0.5"
                  >
                    Explore My Work
                  </a>
                  <a
                    id="hero-lets-connect-btn"
                    href="#contact"
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white hover:bg-[#FAF7FF] text-[#7B4FD0] font-semibold text-sm sm:text-base border-2 border-[#7B4FD0]/30 hover:border-[#7B4FD0] transition-all"
                  >
                    Let's Connect
                  </a>
                </div>

                {/* Micro tags / status indicators */}
                <div className="mt-10 pt-6 border-t border-[#DDD0F7]/60 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-[#524B66] font-medium">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Available for Projects &amp; Collaborations</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#7B4FD0]">
                    <MapPin className="w-4 h-4" />
                    <span>Bangladesh</span>
                  </div>
                </div>

              </div>

              {/* DESKTOP RIGHT PANEL: Curved Lavender Container + Arch Frame + Orbiting AI Badges */}
              <div className="hidden lg:block lg:col-span-5 relative">
                <div className="hero-curved-panel bg-gradient-to-br from-[#F2ECFD] via-[#FAF7FF] to-[#E6DBF9] p-8 sm:p-12 relative flex items-center justify-center shadow-sm">
                  
                  {/* Subtle decorative geometry in background */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/60 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#E6DBF9]/40 rounded-full blur-2xl"></div>

                  {/* Orbit Stage */}
                  <div className="relative w-[340px] h-[430px] flex items-center justify-center">
                    
                    {/* Faint Dashed Orbit Ring */}
                    <div className="absolute w-[360px] h-[360px] rounded-full border border-dashed border-[#7B4FD0]/30 pointer-events-none"></div>

                    {/* Orbit badges container rotating */}
                    <div className="absolute inset-0 orbit-container pointer-events-none">
                      
                      {/* Badge 1: ChatGPT (Top) */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                        <div className="counter-rotate bg-white px-3.5 py-1.5 rounded-full shadow-md border border-[#DDD0F7] flex items-center gap-2 text-xs font-semibold text-[#1E1A2B]">
                          <span className="w-5 h-5 rounded-full bg-[#7B4FD0] text-white flex items-center justify-center text-[10px]">
                            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                              <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm1 15h-2v-6h2zm0-8h-2V7h2z" />
                            </svg>
                          </span>
                          <span>ChatGPT</span>
                        </div>
                      </div>

                      {/* Badge 2: Gemini (Bottom Right) */}
                      <div className="absolute bottom-8 right-0 translate-x-3 pointer-events-auto">
                        <div className="counter-rotate bg-white px-3.5 py-1.5 rounded-full shadow-md border border-[#DDD0F7] flex items-center gap-2 text-xs font-semibold text-[#1E1A2B]">
                          <span className="w-5 h-5 rounded-full bg-[#7B4FD0] text-white flex items-center justify-center text-[10px]">
                            <Sparkles className="w-3 h-3 fill-current" />
                          </span>
                          <span>Gemini</span>
                        </div>
                      </div>

                      {/* Badge 3: Claude (Bottom Left) */}
                      <div className="absolute bottom-8 left-0 -translate-x-3 pointer-events-auto">
                        <div className="counter-rotate bg-white px-3.5 py-1.5 rounded-full shadow-md border border-[#DDD0F7] flex items-center gap-2 text-xs font-semibold text-[#1E1A2B]">
                          <span className="w-5 h-5 rounded-full bg-[#7B4FD0] text-white flex items-center justify-center text-[10px]">
                            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="8" />
                            </svg>
                          </span>
                          <span>Claude</span>
                        </div>
                      </div>

                    </div>

                    {/* Arch Portrait Frame */}
                    <div className="relative z-10 w-64 h-88 arch-frame bg-white p-3 shadow-2xl shadow-[#7B4FD0]/15 border-4 border-white transition-transform duration-500 hover:scale-[1.02]">
                      <div className="w-full h-full arch-frame overflow-hidden bg-[#FAF7FF]">
                        <img
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVuAZKB5Tcr3P0jRF-4xTwXyIrdC4JyyZOKQtm5IyzG1XsFXQoBUeq5ACpUIsgsafp6Rrcu617Ydpob077c3nnUq5jb5ZWW7DNfXfO5r97YTWaNtXU61fBODDWX6agC4iJOKGMcCjrW8zQTG3_yULa_coHPK3d6y78f-BFfZ4d2d7WRuWlXg7Y7htKk9Ee7bBeYbvYX-DzF_MTnkiBgwOhl0q8LNq0DrJ8849J8rY7uD4UednS7767o6-WerkqkB_vqlk"
                          alt="Yeamin Jahan - Portrait"
                          className="w-full h-full object-cover object-top"
                          loading="eager"
                        />
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ABOUT ME SECTION */}
        <section id="about" className="py-16 sm:py-20 bg-[#FAF7FF]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-10">
              <span className="text-[#7B4FD0] text-xs sm:text-sm font-semibold tracking-wider uppercase">
                Discover My Journey
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E1A2B] mt-1">
                About Me
              </h2>
              <div className="w-12 h-1 bg-[#7B4FD0] rounded-full mx-auto mt-3"></div>
            </div>

            {/* Rounded Lavender Card */}
            <div className="bg-[#F2ECFD] rounded-3xl p-8 sm:p-12 border border-[#DDD0F7]/80 shadow-md text-center relative overflow-hidden">
              
              {/* Subtle chat/quote watermark */}
              <div className="absolute top-4 right-6 text-[#E6DBF9]/50 pointer-events-none select-none">
                <svg className="w-24 h-24 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>

              <div className="relative z-10 space-y-6 text-[#1E1A2B] max-w-2xl mx-auto">
                <p className="text-base sm:text-xl font-medium leading-relaxed">
                  &ldquo;Hello! I'm <strong className="text-[#7B4FD0] font-bold">Yeamin Jahan</strong>, a BBA student with an interest in Artificial Intelligence, Digital Marketing, Content Creation, Presentation Design and Creative Work.&rdquo;
                </p>
                <p className="text-sm sm:text-base text-[#524B66] leading-relaxed">
                  &ldquo;I enjoy learning new technologies, developing creative ideas and improving my practical skills. I am always interested in learning something new and turning my knowledge into useful projects.&rdquo;
                </p>

                {/* Handwritten-style quote in Caveat font */}
                <div className="pt-6 border-t border-[#DDD0F7]">
                  <p className="font-handwritten text-3xl sm:text-4xl text-[#7B4FD0] font-semibold tracking-wide">
                    &ldquo;Dream &bull; Learn &bull; Create &bull; Grow&rdquo;
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* HIGHLIGHTED SKILLS SECTION */}
        <section id="skills" className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-14">
              <span className="text-[#7B4FD0] text-xs sm:text-sm font-semibold tracking-wider uppercase">
                Capabilities &amp; Tools
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E1A2B] mt-1">
                Highlighted Skills
              </h2>
              <div className="w-12 h-1 bg-[#7B4FD0] rounded-full mx-auto mt-3"></div>
              <p className="text-[#524B66] text-sm sm:text-base mt-3 max-w-lg mx-auto">
                Practical proficiencies cultivated through academic study, specialized training, and hands-on creative experimentation.
              </p>
            </div>

            {/* 4 Cards (2x2 on desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              
              {/* Card 1: AI & Technology */}
              <div
                id="skills-card-ai"
                className="bg-white rounded-2xl p-6 sm:p-7 border-t-4 border-t-[#7B4FD0] border-x border-b border-[#DDD0F7]/70 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#F2ECFD] flex items-center justify-center text-[#7B4FD0]">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-[#1E1A2B]">
                    AI &amp; Technology
                  </h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF7FF] hover:bg-[#F2ECFD] hover:translate-x-1.5 transition-all duration-200">
                    <span className="w-8 h-8 rounded-lg bg-[#7B4FD0] text-white flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </span>
                    <span className="font-bold text-sm sm:text-base text-[#1E1A2B]">
                      Artificial Intelligence &amp; AI Tools
                    </span>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF7FF] hover:bg-[#F2ECFD] hover:translate-x-1.5 transition-all duration-200">
                    <span className="w-8 h-8 rounded-lg bg-[#7B4FD0] text-white flex items-center justify-center shrink-0">
                      <Code className="w-4 h-4" />
                    </span>
                    <span className="font-bold text-sm sm:text-base text-[#1E1A2B]">
                      AI Prompt Engineering
                    </span>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF7FF] hover:bg-[#F2ECFD] hover:translate-x-1.5 transition-all duration-200">
                    <span className="w-8 h-8 rounded-lg bg-[#7B4FD0] text-white flex items-center justify-center shrink-0">
                      <Layout className="w-4 h-4" />
                    </span>
                    <span className="font-bold text-sm sm:text-base text-[#1E1A2B]">
                      Basic HTML &amp; Web Design
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2: Marketing & Content */}
              <div
                id="skills-card-marketing"
                className="bg-white rounded-2xl p-6 sm:p-7 border-t-4 border-t-[#7B4FD0] border-x border-b border-[#DDD0F7]/70 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#F2ECFD] flex items-center justify-center text-[#7B4FD0]">
                    <Share2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-[#1E1A2B]">
                    Marketing &amp; Content
                  </h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF7FF] hover:bg-[#F2ECFD] hover:translate-x-1.5 transition-all duration-200">
                    <span className="w-8 h-8 rounded-lg bg-[#7B4FD0] text-white flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4" />
                    </span>
                    <span className="font-bold text-sm sm:text-base text-[#1E1A2B]">
                      Digital Marketing
                    </span>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF7FF] hover:bg-[#F2ECFD] hover:translate-x-1.5 transition-all duration-200">
                    <span className="w-8 h-8 rounded-lg bg-[#7B4FD0] text-white flex items-center justify-center shrink-0">
                      <Share2 className="w-4 h-4" />
                    </span>
                    <span className="font-bold text-sm sm:text-base text-[#1E1A2B]">
                      Social Media Marketing
                    </span>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF7FF] hover:bg-[#F2ECFD] hover:translate-x-1.5 transition-all duration-200">
                    <span className="w-8 h-8 rounded-lg bg-[#7B4FD0] text-white flex items-center justify-center shrink-0">
                      <Palette className="w-4 h-4" />
                    </span>
                    <span className="font-bold text-sm sm:text-base text-[#1E1A2B]">
                      Content Creation
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 3: Design & Presentation */}
              <div
                id="skills-card-design"
                className="bg-white rounded-2xl p-6 sm:p-7 border-t-4 border-t-[#7B4FD0] border-x border-b border-[#DDD0F7]/70 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#F2ECFD] flex items-center justify-center text-[#7B4FD0]">
                    <Palette className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-[#1E1A2B]">
                    Design &amp; Presentation
                  </h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF7FF] hover:bg-[#F2ECFD] hover:translate-x-1.5 transition-all duration-200">
                    <span className="w-8 h-8 rounded-lg bg-[#7B4FD0] text-white flex items-center justify-center shrink-0">
                      <Palette className="w-4 h-4" />
                    </span>
                    <span className="font-bold text-sm sm:text-base text-[#1E1A2B]">
                      Canva &amp; Graphic Design
                    </span>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF7FF] hover:bg-[#F2ECFD] hover:translate-x-1.5 transition-all duration-200">
                    <span className="w-8 h-8 rounded-lg bg-[#7B4FD0] text-white flex items-center justify-center shrink-0">
                      <Layout className="w-4 h-4" />
                    </span>
                    <span className="font-bold text-sm sm:text-base text-[#1E1A2B]">
                      Presentation Design
                    </span>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF7FF] hover:bg-[#F2ECFD] hover:translate-x-1.5 transition-all duration-200">
                    <span className="w-8 h-8 rounded-lg bg-[#7B4FD0] text-white flex items-center justify-center shrink-0">
                      <FileSpreadsheet className="w-4 h-4" />
                    </span>
                    <span className="font-bold text-sm sm:text-base text-[#1E1A2B]">
                      Microsoft Word &amp; PowerPoint
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 4: Creative Skills */}
              <div
                id="skills-card-creative"
                className="bg-white rounded-2xl p-6 sm:p-7 border-t-4 border-t-[#7B4FD0] border-x border-b border-[#DDD0F7]/70 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#F2ECFD] flex items-center justify-center text-[#7B4FD0]">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-[#1E1A2B]">
                    Creative Skills
                  </h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF7FF] hover:bg-[#F2ECFD] hover:translate-x-1.5 transition-all duration-200">
                    <span className="w-8 h-8 rounded-lg bg-[#7B4FD0] text-white flex items-center justify-center shrink-0">
                      <Camera className="w-4 h-4" />
                    </span>
                    <span className="font-bold text-sm sm:text-base text-[#1E1A2B]">
                      Photography
                    </span>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF7FF] hover:bg-[#F2ECFD] hover:translate-x-1.5 transition-all duration-200">
                    <span className="w-8 h-8 rounded-lg bg-[#7B4FD0] text-white flex items-center justify-center shrink-0">
                      <Video className="w-4 h-4" />
                    </span>
                    <span className="font-bold text-sm sm:text-base text-[#1E1A2B]">
                      Video Editing
                    </span>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF7FF] hover:bg-[#F2ECFD] hover:translate-x-1.5 transition-all duration-200">
                    <span className="w-8 h-8 rounded-lg bg-[#7B4FD0] text-white flex items-center justify-center shrink-0">
                      <Coffee className="w-4 h-4" />
                    </span>
                    <span className="font-bold text-sm sm:text-base text-[#1E1A2B]">
                      Cooking
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* MY PROJECTS SECTION */}
        <section id="projects" className="py-16 sm:py-24 bg-[#FAF7FF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-14">
              <span className="text-[#7B4FD0] text-xs sm:text-sm font-semibold tracking-wider uppercase">
                Portfolio Showcase
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E1A2B] mt-1">
                My Projects
              </h2>
              <div className="w-12 h-1 bg-[#7B4FD0] rounded-full mx-auto mt-3"></div>
              <p className="text-[#524B66] text-sm sm:text-base mt-3 max-w-lg mx-auto">
                Featured works across AI research, graphic design, application development, and marketing campaigns.
              </p>
            </div>

            {/* 6 Project Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  id={`project-card-${proj.id}`}
                  className="bg-white rounded-2xl overflow-hidden border border-[#DDD0F7]/70 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col group"
                >
                  <div className="h-44 bg-[#F2ECFD] flex flex-col items-center justify-center p-6 border-b border-[#DDD0F7]/60 relative">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#7B4FD0] mb-2 group-hover:scale-110 transition-transform">
                      {proj.icon}
                    </div>
                    <span className="text-xs font-semibold text-[#7B4FD0] bg-[#E6DBF9]/60 px-2.5 py-0.5 rounded-full">
                      {proj.badge}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif font-bold text-lg text-[#1E1A2B]">
                        {proj.title}
                      </h3>
                      <p className="mt-2 text-sm text-[#524B66] leading-relaxed">
                        {proj.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-[#FAF7FF]">
                      <button
                        id={`view-project-btn-${proj.id}`}
                        onClick={() => setSelectedProject(proj)}
                        className="w-full py-2.5 rounded-xl bg-[#FAF7FF] hover:bg-[#7B4FD0] text-[#7B4FD0] hover:text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>View Project</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="py-16 sm:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-14">
              <span className="text-[#7B4FD0] text-xs sm:text-sm font-semibold tracking-wider uppercase">
                Academic Background
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E1A2B] mt-1">
                Education
              </h2>
              <div className="w-12 h-1 bg-[#7B4FD0] rounded-full mx-auto mt-3"></div>
            </div>

            {/* Vertical Timeline with Cards */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-[#DDD0F7] space-y-8 ml-2 sm:ml-4">
              
              {/* Item 1: BBA */}
              <div id="education-item-bba" className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-[#7B4FD0] flex items-center justify-center shadow-sm"></div>
                <div className="bg-[#FAF7FF] p-6 rounded-2xl border border-[#DDD0F7]/70 group-hover:border-[#7B4FD0] transition-colors shadow-sm">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#F2ECFD] text-[#7B4FD0] font-semibold text-xs mb-2">
                    Ongoing Higher Education
                  </span>
                  <h3 className="font-serif font-bold text-xl text-[#1E1A2B]">
                    BBA &ndash; Major: Marketing
                  </h3>
                  <p className="text-[#524B66] text-sm mt-1">
                    Bachelor of Business Administration &bull; Developing strategic marketing analysis and corporate communication skills.
                  </p>
                </div>
              </div>

              {/* Item 2: HSC */}
              <div id="education-item-hsc" className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-[#7B4FD0] flex items-center justify-center shadow-sm"></div>
                <div className="bg-[#FAF7FF] p-6 rounded-2xl border border-[#DDD0F7]/70 group-hover:border-[#7B4FD0] transition-colors shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <span className="font-semibold text-xs text-[#7B4FD0] bg-[#F2ECFD] px-2.5 py-0.5 rounded-full">
                      Year: 2023
                    </span>
                    <span className="inline-flex items-center gap-1 font-bold text-sm text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      <Check className="w-3.5 h-3.5 text-emerald-700" />
                      GPA: 5.00
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-xl text-[#1E1A2B]">
                    HSC &ndash; Sirajganj Government College
                  </h3>
                  <p className="text-[#524B66] text-sm mt-1">
                    Higher Secondary Certificate with outstanding academic excellence.
                  </p>
                </div>
              </div>

              {/* Item 3: SSC */}
              <div id="education-item-ssc" className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-[#7B4FD0] flex items-center justify-center shadow-sm"></div>
                <div className="bg-[#FAF7FF] p-6 rounded-2xl border border-[#DDD0F7]/70 group-hover:border-[#7B4FD0] transition-colors shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <span className="font-semibold text-xs text-[#7B4FD0] bg-[#F2ECFD] px-2.5 py-0.5 rounded-full">
                      Year: 2021
                    </span>
                    <span className="inline-flex items-center gap-1 font-bold text-sm text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      <Check className="w-3.5 h-3.5 text-emerald-700" />
                      GPA: 5.00
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-xl text-[#1E1A2B]">
                    SSC &ndash; Sobuj Kanon School
                  </h3>
                  <p className="text-[#524B66] text-sm mt-1">
                    Secondary School Certificate with perfect grade point average achievement.
                  </p>
                </div>
              </div>

              {/* Item 4: AI Training */}
              <div id="education-item-ai" className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-[#7B4FD0] flex items-center justify-center shadow-sm"></div>
                <div className="bg-[#FAF7FF] p-6 rounded-2xl border border-[#DDD0F7]/70 group-hover:border-[#7B4FD0] transition-colors shadow-sm">
                  <span className="font-semibold text-xs text-[#7B4FD0] bg-[#F2ECFD] px-2.5 py-0.5 rounded-full">
                    Specialized Cohort
                  </span>
                  <h3 className="font-serif font-bold text-xl text-[#1E1A2B] mt-1">
                    AI (Artificial Intelligence) Training
                  </h3>
                  <p className="text-[#524B66] text-sm mt-1">
                    AI 01 Batch &bull; Rigorous training on generative AI systems, prompting workflows, and business integration.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* PROFESSIONAL CERTIFICATE SECTION */}
        <section id="certificate" className="py-16 sm:py-24 bg-[#FAF7FF]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-12">
              <span className="text-[#7B4FD0] text-xs sm:text-sm font-semibold tracking-wider uppercase">
                Credentials
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E1A2B] mt-1">
                Professional Certificate
              </h2>
              <div className="w-12 h-1 bg-[#7B4FD0] rounded-full mx-auto mt-3"></div>
            </div>

            {/* Certificate Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#DDD0F7]/80 shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left: Certificate Image */}
                <div className="lg:col-span-7">
                  <div
                    id="certificate-thumbnail-card"
                    onClick={() => setCertModalOpen(true)}
                    className="relative group cursor-pointer overflow-hidden rounded-2xl border-2 border-[#DDD0F7] shadow-md bg-slate-900"
                  >
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGTAxRKUcVFjTx3HOfmoDxssKJ2G5FZP-avdRQVcUMQ2i53w2jF_3QMQuy1yv6sH4u5wXX4xPevwCUiWHwxeHLrp_jHbjyFYNwTaqwP523aWtA6HDY-wka9AkBg1OhXsRiHqbn7cOs0RjdNpmOIzDKGtTSwps5V55gj05WWmeUp5MtJ_juQ5tM1TheG9um6xSt5N2StxmRFqBmlC31-zgsVevvRCBJ8dpNJxdms7d3T5TqGdiIeqN-JcD5bKRyj88gy7w"
                      alt="Excel Essentials for Workplace Productivity - Certificate of Completion"
                      className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-[#1E1A2B]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-semibold text-sm backdrop-blur-[2px]">
                      <Eye className="w-5 h-5" />
                      <span>Click to view large</span>
                    </div>
                  </div>
                </div>

                {/* Right: Certificate Details */}
                <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
                  
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2ECFD] text-[#7B4FD0] text-xs font-semibold w-max">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Verified Certification</span>
                  </div>

                  <h3 className="font-serif font-bold text-2xl text-[#1E1A2B]">
                    Excel Essentials for Workplace Productivity
                  </h3>

                  <div className="space-y-2.5 pt-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-[#524B66] w-28 shrink-0">Name:</span>
                      <span className="font-semibold text-[#1E1A2B]">Yeamin Jahan</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-[#524B66] w-28 shrink-0">Course:</span>
                      <span className="text-[#1E1A2B]">Excel Essentials for Workplace Productivity</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-[#524B66] w-28 shrink-0">Organization:</span>
                      <span className="text-[#1E1A2B]">Passport to Earning Bangladesh (UNICEF &amp; Generation Unlimited)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-[#524B66] w-28 shrink-0">Date:</span>
                      <span className="text-[#1E1A2B]">September 15, 2026</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      id="view-certificate-modal-btn"
                      onClick={() => setCertModalOpen(true)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#7B4FD0] hover:bg-[#683cb8] text-white font-semibold text-sm shadow-md shadow-[#7B4FD0]/20 hover:shadow-lg transition-all cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Certificate</span>
                    </button>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </section>

        {/* MY GOAL SECTION */}
        <section id="goal" className="py-16 sm:py-24 bg-gradient-to-b from-[#FAF7FF] via-[#F2ECFD] to-[#FAF7FF] relative overflow-hidden">
          
          {/* Soft Decorative Ambient Circles */}
          <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-[#E6DBF9]/40 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-[#7B4FD0]/10 blur-3xl pointer-events-none"></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            
            {/* Bullseye Icon */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-white shadow-xl shadow-[#7B4FD0]/10 border-4 border-[#E6DBF9] flex items-center justify-center text-[#7B4FD0] mb-8">
              <Target className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>

            <span className="text-[#7B4FD0] text-xs sm:text-sm font-semibold tracking-wider uppercase">
              Future Vision &amp; Aspirations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E1A2B] mt-1">
              My Goal
            </h2>
            <div className="w-12 h-1 bg-[#7B4FD0] rounded-full mx-auto mt-3 mb-8"></div>

            <div className="space-y-6 text-[#1E1A2B] max-w-2xl mx-auto">
              <p className="font-serif text-xl sm:text-2xl font-medium leading-snug">
                &ldquo;My goal is to build a successful career by combining Business, Marketing, Creativity and Artificial Intelligence.&rdquo;
              </p>
              <p className="text-base sm:text-lg text-[#524B66] leading-relaxed">
                &ldquo;I want to continuously improve my skills, work on meaningful projects and use technology creatively to grow both personally and professionally.&rdquo;
              </p>
            </div>

          </div>
        </section>

        {/* LET'S CONNECT / CONTACT SECTION */}
        <section id="contact" className="py-16 sm:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-14">
              <span className="text-[#7B4FD0] text-xs sm:text-sm font-semibold tracking-wider uppercase">
                Get In Touch
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E1A2B] mt-1">
                Let's Connect
              </h2>
              <div className="w-12 h-1 bg-[#7B4FD0] rounded-full mx-auto mt-3"></div>
              <p className="text-[#524B66] text-sm sm:text-base mt-3 max-w-md mx-auto">
                Feel free to reach out for inquiries, collaborative opportunities, or just a friendly exchange.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Card: Direct Contact Details */}
              <div className="lg:col-span-5 bg-[#FAF7FF] p-6 sm:p-8 rounded-3xl border border-[#DDD0F7]/80 shadow-sm space-y-6">
                <div>
                  <h3 className="font-serif font-bold text-2xl text-[#1E1A2B]">
                    Yeamin Jahan
                  </h3>
                  <p className="text-[#7B4FD0] text-sm font-medium mt-0.5">
                    BBA Student &amp; Creative Professional
                  </p>
                </div>

                <p className="text-[#524B66] text-sm leading-relaxed">
                  I am always excited to discuss innovative digital ideas, creative projects, or workplace synergies.
                </p>

                <div className="space-y-4 pt-2">
                  
                  {/* Email */}
                  <a
                    id="contact-email-link"
                    href="mailto:yeaminjahansneha@gmail.com"
                    className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white hover:bg-[#F2ECFD] border border-[#DDD0F7]/60 transition-colors group"
                  >
                    <span className="w-10 h-10 rounded-xl bg-[#FAF7FF] group-hover:bg-[#7B4FD0] text-[#7B4FD0] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                      <Mail className="w-5 h-5" />
                    </span>
                    <div className="overflow-hidden">
                      <span className="text-xs text-[#524B66] block font-medium">Email</span>
                      <span className="font-semibold text-[#1E1A2B] text-sm sm:text-base truncate block">
                        yeaminjahansneha@gmail.com
                      </span>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    id="contact-phone-link"
                    href="tel:01614997197"
                    className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white hover:bg-[#F2ECFD] border border-[#DDD0F7]/60 transition-colors group"
                  >
                    <span className="w-10 h-10 rounded-xl bg-[#FAF7FF] group-hover:bg-[#7B4FD0] text-[#7B4FD0] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                      <Phone className="w-5 h-5" />
                    </span>
                    <div>
                      <span className="text-xs text-[#524B66] block font-medium">Phone</span>
                      <span className="font-semibold text-[#1E1A2B] text-sm sm:text-base">
                        01614997197
                      </span>
                    </div>
                  </a>

                  {/* Facebook */}
                  <a
                    id="contact-facebook-link"
                    href="https://www.facebook.com/share/1JAgDxbDFh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white hover:bg-[#F2ECFD] border border-[#DDD0F7]/60 transition-colors group"
                  >
                    <span className="w-10 h-10 rounded-xl bg-[#FAF7FF] group-hover:bg-[#7B4FD0] text-[#7B4FD0] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </span>
                    <div>
                      <span className="text-xs text-[#524B66] block font-medium">Facebook</span>
                      <span className="font-semibold text-[#1E1A2B] text-sm sm:text-base flex items-center gap-1">
                        Yeamin Jahan Profile &rarr;
                      </span>
                    </div>
                  </a>

                  {/* Instagram */}
                  <a
                    id="contact-instagram-link"
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white hover:bg-[#F2ECFD] border border-[#DDD0F7]/60 transition-colors group"
                  >
                    <span className="w-10 h-10 rounded-xl bg-[#FAF7FF] group-hover:bg-[#7B4FD0] text-[#7B4FD0] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </span>
                    <div>
                      <span className="text-xs text-[#524B66] block font-medium">Instagram</span>
                      <span className="font-semibold text-[#1E1A2B] text-sm sm:text-base flex items-center gap-1">
                        Connect on Instagram &rarr;
                      </span>
                    </div>
                  </a>

                </div>
              </div>

              {/* Right Card: Message Form */}
              <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#DDD0F7]/80 shadow-md">
                <h3 className="font-serif font-bold text-2xl text-[#1E1A2B] mb-2">
                  Send a Message
                </h3>
                <p className="text-[#524B66] text-sm mb-6">
                  Submitting will open your default email app directly addressed to Yeamin Jahan.
                </p>

                {formSubmitted && (
                  <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-2 animate-in fade-in">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Opening your mail client now... Thank you for reaching out!</span>
                  </div>
                )}

                <form id="contact-form" onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="contact-name-input"
                      className="block text-xs font-semibold text-[#1E1A2B] uppercase tracking-wider mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="contact-name-input"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-[#DDD0F7] focus:border-[#7B4FD0] focus:ring-2 focus:ring-[#7B4FD0]/20 bg-[#FAF7FF]/50 outline-none text-[#1E1A2B] text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email-input"
                      className="block text-xs font-semibold text-[#1E1A2B] uppercase tracking-wider mb-1.5"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="contact-email-input"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#DDD0F7] focus:border-[#7B4FD0] focus:ring-2 focus:ring-[#7B4FD0]/20 bg-[#FAF7FF]/50 outline-none text-[#1E1A2B] text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message-input"
                      className="block text-xs font-semibold text-[#1E1A2B] uppercase tracking-wider mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message-input"
                      rows={4}
                      required
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="Write your message or project requirements here..."
                      className="w-full px-4 py-3 rounded-xl border border-[#DDD0F7] focus:border-[#7B4FD0] focus:ring-2 focus:ring-[#7B4FD0]/20 bg-[#FAF7FF]/50 outline-none text-[#1E1A2B] text-sm transition-all"
                    ></textarea>
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#7B4FD0] hover:bg-[#683cb8] text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#7B4FD0]/25 hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </form>
              </div>

            </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer id="main-footer" className="bg-[#FAF7FF] border-t border-[#DDD0F7] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-[#524B66] text-center sm:text-left">
            &copy; 2026 <span className="font-semibold text-[#1E1A2B]">Yeamin Jahan</span>. All Rights Reserved.
          </p>

          <div className="flex items-center gap-3">
            <a
              id="footer-facebook-btn"
              href="https://www.facebook.com/share/1JAgDxbDFh/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white border border-[#DDD0F7] flex items-center justify-center text-[#7B4FD0] hover:bg-[#7B4FD0] hover:text-white transition-colors"
              aria-label="Facebook Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              id="footer-instagram-btn"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white border border-[#DDD0F7] flex items-center justify-center text-[#7B4FD0] hover:bg-[#7B4FD0] hover:text-white transition-colors"
              aria-label="Instagram Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>

      {/* CERTIFICATE LIGHTBOX MODAL */}
      {certModalOpen && (
        <div
          id="certificate-modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E1A2B]/75 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setCertModalOpen(false)}
        >
          <div
            id="certificate-modal-container"
            className="relative bg-white rounded-2xl max-w-4xl w-full p-4 sm:p-6 shadow-2xl border border-[#DDD0F7] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#DDD0F7]">
              <div>
                <h4 className="font-serif font-bold text-lg text-[#1E1A2B]">
                  Certificate of Completion
                </h4>
                <p className="text-xs text-[#524B66]">
                  Passport to Earning Bangladesh (UNICEF &amp; Generation Unlimited)
                </p>
              </div>
              <button
                id="close-cert-modal-btn"
                onClick={() => setCertModalOpen(false)}
                className="p-2 rounded-full hover:bg-[#FAF7FF] text-[#524B66] hover:text-[#1E1A2B] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 flex items-center justify-center bg-[#FAF7FF] rounded-xl p-2 sm:p-4">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa4MNybioafJLMyzWGyBO3ltbes7OJR7hlebUFWi1mQMAciMwU1QozRlUnxu4MeXye5ibB3iJmHn4fwfR6dQGCprIYcRD5V7AT32ZNzC6y6sZWK143PeDeMamsGYHL0rpNPFFwKkDM-ZPnjjJTno3J33GLMWBYoh5c0J4c6nOXWkYM3GayevEkuel2ujrx57IWhevJdt7u3J6aUYmGfFS0-w2YVy_IO3-wRl89GoT4-US_QCP6IhGrVaVMM7OEA_pvTwY"
                alt="Excel Essentials for Workplace Productivity - Full Resolution Certificate"
                className="max-h-[72vh] w-auto object-contain rounded-lg shadow-sm"
              />
            </div>

            <div className="mt-4 flex items-center justify-between pt-2">
              <span className="text-xs text-[#524B66]">
                Issued to: <strong className="text-[#1E1A2B]">Yeamin Jahan</strong> &bull; Completed September 15, 2026
              </span>
              <button
                onClick={() => setCertModalOpen(false)}
                className="px-4 py-1.5 rounded-full bg-[#7B4FD0] text-white text-xs font-semibold hover:bg-[#683cb8] transition-colors"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PROJECT DETAILS MODAL */}
      {selectedProject && (
        <div
          id="project-detail-modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E1A2B]/75 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            id="project-detail-modal-card"
            className="relative bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#DDD0F7] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#F2ECFD] flex items-center justify-center text-[#7B4FD0]">
                  {selectedProject.icon}
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#7B4FD0] bg-[#E6DBF9]/60 px-2.5 py-0.5 rounded-full">
                    {selectedProject.category}
                  </span>
                  <h3 className="font-serif font-bold text-2xl text-[#1E1A2B] mt-1">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-full hover:bg-[#FAF7FF] text-[#524B66] hover:text-[#1E1A2B] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="mt-4 text-sm text-[#524B66] leading-relaxed">
              {selectedProject.details}
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E1A2B] mb-2">
                  Key Focus Areas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-[#FAF7FF] text-[#7B4FD0] border border-[#DDD0F7] text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E1A2B] mb-2">
                  Tools &amp; Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-[#F2ECFD] text-[#1E1A2B] text-xs font-semibold"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#DDD0F7] flex items-center justify-between">
              <a
                href="#contact"
                onClick={() => setSelectedProject(null)}
                className="text-xs font-semibold text-[#7B4FD0] hover:underline flex items-center gap-1"
              >
                Discuss this project &rarr;
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 rounded-full bg-[#7B4FD0] hover:bg-[#683cb8] text-white text-xs font-semibold transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
