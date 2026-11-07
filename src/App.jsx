
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  ExternalLink,
  Download,
  ArrowRight,
  Code,
  Code2,
  Briefcase,
  GraduationCap,
  Award,
  Menu,
  X,
  MousePointer2,
  Hand,
  CheckCircle2,
} from "lucide-react";
import "./index.css";

// NAVIGATION
const navItems = [
  "Home",
  "About",
  "Education",
  "Skills",
  "Experience",
  "Projects",
  "Achievements",
  "Contact",
];

// SECTION ANIMATION
const sectionAnimation = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.15 },
  transition: {
    duration: 0.8,
    ease: "easeOut",
  },
};

// SKILLS
const skills = [
  { name: "Java", level: "Intermediate", icon: "☕" },
  { name: "Python", level: "Learning", icon: "🐍" },
  { name: "HTML & CSS", level: "Intermediate", icon: "🌐" },
  { name: "JavaScript", level: "Learning", icon: "⚡" },
  { name: "MySQL", level: "Intermediate", icon: "🗄️" },
  { name: "SQL", level: "Intermediate", icon: "📊" },
  { name: "OOPs", level: "Learning", icon: "🧩" },
  { name: "Git & GitHub", level: "Learning", icon: "🔧" },
];

// PROJECTS
const projects = [
  {
    number: "01",
    title: "CreditShield LOS",
    category: "AI / Machine Learning",
    period: "Current Academic Project",
    description:
      "An AI-powered Loan Origination System designed to support loan appraisal and financial risk prediction using XGBoost, Random Forest and bank statement analysis.",
    details:
      "CreditShield LOS is an AI-powered Loan Origination System designed to assist financial institutions in evaluating loan applications. It analyzes applicant financial information and supports credit risk assessment through machine learning models and financial behaviour analysis.",
    tags: [
      "Python",
      "XGBoost",
      "Random Forest",
      "AI",
      "AWS Bedrock",
      "RAG",
    ],
    features: [
      "AI-based borrower risk prediction.",
      "Bank statement analysis.",
      "Financial Behaviour Score (FBSI).",
      "Loan application and appraisal workflow.",
      "Credit assessment support for loan officers and underwriters.",
    ],
  },
  {
    number: "02",
    title: "Vaidya Aushadhi Setu",
    category: "Blockchain",
    period: "Academic Project",
    description:
      "A blockchain-based prescription verification platform connecting doctors, patients and pharmacists with QR-based prescription verification.",
    details:
      "Vaidya Aushadhi Setu is a blockchain-based prescription verification platform. It aims to improve prescription authenticity and make verification easier for doctors, patients and pharmacists. QR-based verification is used to access prescription information.",
    tags: [
      "Solidity",
      "Blockchain",
      "Flask",
      "MySQL",
      "IPFS",
      "Ganache",
    ],
    features: [
      "Separate access for doctors, patients and pharmacists.",
      "Blockchain-based prescription verification.",
      "QR-based prescription access.",
      "IPFS integration for storing prescription-related files.",
      "Web application for managing prescription information.",
    ],
  },
  {
    number: "03",
    title: "AI Dynamic Budgeting Tool",
    category: "Data Analytics",
    period: "Academic Project",
    description:
      "A dynamic budgeting tool that helps users organize expenses, analyze spending patterns and understand their financial habits.",
    details:
      "The AI Dynamic Budgeting Tool is designed to help users organize their expenses and understand their spending habits. It uses Python data analysis libraries and interactive widgets to present budgeting information dynamically.",
    tags: [
      "Python",
      "Pandas",
      "Google Colab",
      "Ipywidgets",
      "Data Analysis",
    ],
    features: [
      "Expense organization and tracking.",
      "Analysis of spending patterns.",
      "Interactive budgeting interface.",
      "Financial data visualization.",
      "Helps users understand their financial habits.",
    ],
  },
  {
    number: "04",
    title: "Footstep Power Generation",
    category: "Electrical & Hardware",
    period: "Diploma Project | 2021–2024",
    description:
      "An electrical and hardware project developed during my Diploma in Electrical Engineering, exploring the generation of electrical energy from footsteps.",
    details:
      "Footstep Power Generation was an electrical and hardware project developed during my Diploma in Electrical Engineering at VJTI, Mumbai. The project explored the concept of converting mechanical energy produced by footsteps into electrical energy. It introduced practical concepts related to energy conversion and electrical systems.",
    tags: [
      "Electrical Engineering",
      "Hardware",
      "Energy Conversion",
      "Diploma Project",
    ],
    features: [
      "Explores electricity generation through footsteps.",
      "Demonstrates mechanical-to-electrical energy conversion.",
      "Provides practical exposure to electrical hardware.",
      "Focuses on alternative energy generation concepts.",
    ],
  },
  {
    number: "05",
    title: "Solar Wireless Charging Vehicle",
    category: "Electrical & Hardware",
    period: "Diploma Project | 2021–2024",
    description:
      "An electrical and hardware prototype developed during my Diploma in Electrical Engineering, combining solar energy and wireless charging concepts.",
    details:
      "Solar Wireless Charging Vehicle was an electrical and hardware project developed during my Diploma in Electrical Engineering at VJTI, Mumbai. The project explored the use of solar energy and wireless charging concepts for a vehicle prototype, with a focus on renewable energy and innovative charging methods.",
    tags: [
      "Solar Energy",
      "Wireless Charging",
      "Electrical Engineering",
      "Hardware",
      "Diploma Project",
    ],
    features: [
      "Explores solar energy for vehicle applications.",
      "Demonstrates wireless charging concepts.",
      "Combines renewable energy and electrical systems.",
      "Provides practical hardware development experience.",
    ],
  },
];

// EDUCATION
const education = [
  {
    year: "2024 – 2027",
    degree: "B.Tech – Computer Science & Technology",
    institution:
      "Usha Mittal Institute of Technology, SNDT Women's University",
    score: "CGPA: 8.43",
  },
  {
    year: "2021 – 2024",
    degree: "Diploma – Electrical Engineering",
    institution: "Veermata Jijabai Technological Institute (VJTI), Mumbai",
    score: "Percentage: 87%",
  },
];

// ACHIEVEMENTS
const achievements = [
  "Department Head – Marathi Cultural Committee, VJTI",
  "Intercollege Kho-Kho participation and sports achievements",
  "Technical event coordination and team leadership",
  "MMRDA Technical Internship",
];

// SECTION TITLE
function SectionTitle({ number, title, subtitle }) {
  return (
    <div className="section-heading">
      <span className="section-number">{number} / PORTFOLIO</span>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <div className="heading-line" />
    </div>
  );
}

// CUSTOM ANIMATED CURSOR
function CustomCursor() {
  const cursorRef = React.useRef(null);
  const [cursorType, setCursorType] = React.useState("default");

  React.useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) return;
    if (window.matchMedia("(hover: none)").matches) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let animationFrame;

    const moveCursor = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const detectElement = (event) => {
      const target = event.target;

      if (!(target instanceof Element)) return;

      if (target.closest(".project-card, .skill-card")) {
        setCursorType("code");
      } else if (target.closest("a")) {
        setCursorType("link");
      } else if (target.closest("button")) {
        setCursorType("hand");
      } else {
        setCursorType("default");
      }
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.18;
      currentY += (mouseY - currentY) * 0.18;

      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", moveCursor);
    document.addEventListener("pointerover", detectElement);

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", moveCursor);
      document.removeEventListener("pointerover", detectElement);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor cursor-${cursorType}`}
      aria-hidden="true"
    >
      {cursorType === "default" && <MousePointer2 size={20} />}
      {cursorType === "hand" && <Hand size={20} />}
      {cursorType === "code" && <Code2 size={20} />}
      {cursorType === "link" && <ExternalLink size={19} />}
    </div>
  );
}

// INLINE PROJECT DETAILS
function ProjectDetails({ project, onClose }) {
  return (
    <motion.div
      className="inline-project-details"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="inline-details-inner">
        <div className="inline-details-header">
          <div>
            <span className="inline-details-label">
              PROJECT {project.number} / DETAILS
            </span>
            <p className="inline-details-period">{project.period}</p>
          </div>

          <button
            className="inline-details-close"
            onClick={(event) => {
              event.stopPropagation();
              onClose();
            }}
            aria-label="Close project details"
          >
            <X size={19} />
          </button>
        </div>

        <div className="inline-details-section">
          <h4>
            <Code2 size={18} />
            Project Overview
          </h4>
          <p>{project.details}</p>
        </div>

        <div className="inline-details-section">
          <h4>
            <Code size={18} />
            Technologies Used
          </h4>

          <div className="inline-details-tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="inline-details-section">
          <h4>
            <Award size={18} />
            Key Features & Highlights
          </h4>

          <ul className="inline-details-features">
            {project.features.map((feature, index) => (
              <li key={index}>
                <CheckCircle2 size={16} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {project.period.includes("Diploma") && (
          <div className="inline-diploma-note">
            <GraduationCap size={19} />
            <span>
              Developed during Diploma in Electrical Engineering at VJTI,
              Mumbai (2021–2024).
            </span>
          </div>
        )}

        <button
          className="inline-details-done"
          onClick={(event) => {
            event.stopPropagation();
            onClose();
          }}
        >
          Close Details <X size={16} />
        </button>
      </div>
    </motion.div>
  );
}

// MAIN APP
function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState(null);

  const toggleProject = (project) => {
    setSelectedProject((current) =>
      current?.number === project.number ? null : project
    );
  };

  // SMOOTH SCROLL FUNCTION
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  return (
    <div className="portfolio">
      <CustomCursor />

      {/* BACKGROUND EFFECTS */}
      <div className="grid-background" />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-inner">
          <a
            className="brand"
            href="#home"
            onClick={() => setMenuOpen(false)}
          >
            <div className="brand-logo">VS</div>
            <span>
              Vaishnavi<span className="brand-dot">.</span>
            </span>
          </a>

          <nav className={menuOpen ? "nav-links active" : "nav-links"}>
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>

          <a className="resume-nav" href="/resume.pdf" download>
            <Download size={17} />
            Resume
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero section-container" id="home">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="availability">
              <span className="pulse-dot" />
              OPEN TO OPPORTUNITIES
            </div>

            <p className="intro">Hi, I'm</p>

            <h1 className="hero-name">
              VAISHNAVI
              <span>SONAWANE</span>
            </h1>

            <p className="hero-role">
              Computer Science & Technology Student | Aspiring Software
              Developer
              <br />
              | Exploring AI & Innovative Technologies
            </p>

            <p className="hero-description">
              Passionate about technology, problem-solving and building
              meaningful digital solutions. I enjoy exploring software
              development, artificial intelligence, databases and emerging
              technologies.
            </p>

            <div className="hero-buttons">
              <button
                className="primary-button"
                onClick={() => scrollTo("projects")}
              >
                Explore My Work <ArrowRight size={19} />
              </button>

              <a className="secondary-button" href="/resume.pdf" download>
                <Download size={18} />
                Download Resume
              </a>
            </div>

            <div className="social-row">
              <a
                href="https://github.com/vaishu-112004"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <span>GH</span>
              </a>

              <a
                href="https://www.linkedin.com/in/vaishnavi-sonawane-96b633328/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <span>in</span>
              </a>

              <a href="mailto:vaishujsonawane@gmail.com" aria-label="Email">
                <Mail />
              </a>

              <div className="location">
                <MapPin size={15} />
                Mumbai, India
              </div>
            </div>
          </motion.div>

          {/* PROFILE CARD */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, y: 35, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.25 }}
          >
            <div className="floating-tag">
              <span>TAGLINE</span>
              <strong>Ideas → Intelligent Solutions</strong>
            </div>

            <div className="profile-card">
              <div className="profile-image">
                <img src="/profile.jpg" alt="Vaishnavi Sonawane" />
              </div>

              <div className="profile-caption">
                <h3>Vaishnavi Sonawane</h3>
                <p>ASPIRING SOFTWARE DEVELOPER</p>
              </div>
            </div>

            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
          </motion.div>

          <div className="scroll-indicator">
            <span>SCROLL</span>
            <div className="scroll-mouse">
              <div />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <motion.section
          className="section-container content-section"
          id="about"
          {...sectionAnimation}
        >
          <SectionTitle
            number="01"
            title="About Me"
            subtitle="A little introduction about who I am."
          />

          <div className="about-grid">
            <div className="about-main">
              <span className="mini-label">WHO AM I?</span>

              <h3>
                Building my future through
                <span className="gradient-text"> technology.</span>
              </h3>

              <p>
                I'm Vaishnavi Sonawane, a Computer Science & Technology
                student at Usha Mittal Institute of Technology, SNDT Women's
                University.
              </p>

              <p>
                With a background in Electrical Engineering, I enjoy
                combining analytical thinking with software development.
                I'm interested in Java, databases, AI and innovative
                technology solutions.
              </p>

              <p>
                My goal is to continuously learn, improve my technical
                abilities and contribute to meaningful real-world projects.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <Code2 />
                <strong>05+</strong>
                <span>Projects & Experiments</span>
              </div>

              <div className="stat-card">
                <GraduationCap />
                <strong>2027</strong>
                <span>Graduation Year</span>
              </div>

              <div className="stat-card">
                <Code />
                <strong>AI & Tech</strong>
                <span>Areas of Interest</span>
              </div>

              <div className="stat-card">
                <Briefcase />
                <strong>MMRDA</strong>
                <span>Technical Internship</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* EDUCATION */}
        <motion.section
          className="section-container content-section"
          id="education"
          {...sectionAnimation}
        >
          <SectionTitle
            number="02"
            title="Education"
            subtitle="My academic journey and learning."
          />

          <div className="timeline">
            {education.map((item, index) => (
              <motion.div
                className="timeline-card"
                key={item.degree}
                initial={{ opacity: 0, x: index % 2 ? 35 : -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <span className="timeline-year">{item.year}</span>
                <h3>{item.degree}</h3>
                <p>{item.institution}</p>
                <span className="score">{item.score}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* SKILLS */}
        <motion.section
          className="section-container content-section"
          id="skills"
          {...sectionAnimation}
        >
          <SectionTitle
            number="03"
            title="Technical Skills"
            subtitle="Technologies I use and continue to explore."
          />

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                className="skill-card"
                key={skill.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ y: -7 }}
              >
                <span className="skill-icon">{skill.icon}</span>
                <h3>{skill.name}</h3>
                <span className="skill-level">{skill.level}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* EXPERIENCE */}
        <motion.section
          className="section-container content-section"
          id="experience"
          {...sectionAnimation}
        >
          <SectionTitle
            number="04"
            title="Experience"
            subtitle="My professional exposure and practical learning."
          />

          <motion.div
            className="experience-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="experience-icon">
              <Briefcase />
            </div>

            <div>
              <span className="mini-label">JUNE 2023 – JULY 2023</span>
              <h3>Technical Intern</h3>
              <h4>MMRDA – Mumbai</h4>

              <p>
                Gained technical exposure to control systems, monorail
                monitoring, communication systems, troubleshooting and
                operational processes.
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section
          className="section-container content-section"
          id="projects"
          {...sectionAnimation}
        >
          <SectionTitle
            number="05"
            title="Featured Projects"
            subtitle="Ideas transformed into practical technology solutions."
          />

          <div className="projects-grid">
            {projects.map((project, index) => {
              const isSelected =
                selectedProject?.number === project.number;

              return (
                <motion.article
                  className={`project-card ${isSelected ? "project-card-expanded" : ""}`}
                  key={project.number}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isSelected}
                  aria-label={`View details for ${project.title}`}
                  onClick={() => toggleProject(project)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      toggleProject(project);
                    }
                  }}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  viewport={{ once: false, amount: 0.15 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="project-top">
                    <span>{project.number}</span>
                    {isSelected ? (
                      <X size={19} />
                    ) : (
                      <ExternalLink size={19} />
                    )}
                  </div>

                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  {project.period.includes("Diploma") && (
                    <span className="project-period">
                      <GraduationCap size={15} />
                      Diploma Project · 2021–2024
                    </span>
                  )}

                  <div className="project-view-more">
                    {isSelected ? "Hide Details" : "View Project Details"}
                    <ArrowRight
                      size={17}
                      className={isSelected ? "project-arrow-open" : ""}
                    />
                  </div>

                  {/* DETAILS OPEN INSIDE THE SAME CARD */}
                  <AnimatePresence initial={false}>
                    {isSelected && (
                      <ProjectDetails
                        project={project}
                        onClose={() => setSelectedProject(null)}
                      />
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>
        </motion.section>

        {/* ACHIEVEMENTS */}
        <motion.section
          className="section-container content-section"
          id="achievements"
          {...sectionAnimation}
        >
          <SectionTitle
            number="06"
            title="Achievements"
            subtitle="Experiences that helped me grow."
          />

          <div className="achievement-list">
            {achievements.map((item, index) => (
              <motion.div
                className="achievement-item"
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <Award size={21} />
                <span>{item}</span>
                <ArrowRight size={17} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section
          className="section-container content-section"
          id="contact"
          {...sectionAnimation}
        >
          <SectionTitle
            number="07"
            title="Let's Connect"
            subtitle="Have an opportunity or an interesting idea? Let's talk."
          />

          <motion.div
            className="contact-card"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <span className="mini-label">GET IN TOUCH</span>

            <h3>
              Let's build something
              <span className="gradient-text"> meaningful.</span>
            </h3>

            <p>
              I'm open to learning opportunities, internships,
              collaborations and exciting technology projects.
            </p>

            <a
              className="primary-button contact-button"
              href="mailto:vaishujsonawane@gmail.com"
            >
              <Mail size={18} />
              Say Hello
              <ArrowRight size={18} />
            </a>

            <div className="contact-details">
              <span>
                <MapPin size={16} /> Mumbai, India
              </span>
              <span>
                <Mail size={16} /> vaishujsonawane@gmail.com
              </span>
            </div>
          </motion.div>
        </motion.section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a className="brand" href="#home">
          <div className="brand-logo">VS</div>
          <span>
            Vaishnavi<span className="brand-dot">.</span>
          </span>
        </a>

        <p>Designed & built with passion by Vaishnavi Sonawane.</p>

        <span className="footer-copy">
          © {new Date().getFullYear()} All rights reserved.
        </span>
      </footer>
    </div>
  );
}

export default App;
