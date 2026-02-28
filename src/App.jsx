import './App.css'

const skills = [
  { name: "Graphic Designing", desc: "Visual communication, branding, and print design with 4+ years of experience" },
  { name: "User Interface Design", desc: "Creating intuitive and visually appealing digital interfaces" },
  { name: "Product Packaging", desc: "End-to-end packaging design from concept to final production" },
  { name: "Logo & Brand Design", desc: "Building memorable brand identities that resonate with audiences" },
  { name: "Photo/Video Editing", desc: "Professional editing using Photoshop, Premiere Pro, After Effects" },
  { name: "Illustrations", desc: "Custom illustrations for marketing and brand materials" }
];

const tools = [
  "Figma", "Photoshop", "Illustrator", "Capcut", "Indesign", "Affinity", "After Effect", "Premier Pro"
];

const experience = [
  {
    role: "Freelance Graphic Designer",
    company: "Harm Reduction International",
    period: "2024 - Present",
    type: "Remote",
    details: [
      "Collaborated with research teams to design reports, case studies, and publications",
      "Integrated charts, tables, and diagrams to communicate complex data",
      "Maintained strict adherence to brand standards"
    ]
  },
  {
    role: "Creative Lead",
    company: "Urza Creatives",
    period: "June 2024 - Present",
    type: "Co-Founder",
    details: [
      "Developed complete brand identities from logo to full brand guidelines",
      "Shaped visual online presence and social media content strategy",
      "Designed website interfaces improving user experience",
      "Produced marketing assets: social media creatives, flyers, packaging"
    ]
  },
  {
    role: "UI Designer",
    company: "Deck of Designs",
    period: "Sept 2023 - May 2024",
    type: "Full-time",
    details: [
      "Designed and delivered multiple website interfaces and branding elements",
      "Leveraged AI tools (Firefly, MidJourney, Copilot) for branding and UI",
      "Mentored interns in design processes and best practices"
    ]
  },
  {
    role: "Graphic Designer",
    company: "Wood Basic",
    period: "March 2023 - May 2024",
    type: "Part-time",
    details: [
      "Developed social media content maintaining consistent brand visuals",
      "Designed product catalogs, websites, and brand collaterals"
    ]
  },
  {
    role: "Graphic Designer",
    company: "ACT360",
    period: "June 2021 - April 2023",
    type: "Full-time",
    details: [
      "Designed marketing materials and campaign collaterals",
      "Created motion graphics/2D animations for banks, KFC, Pizza Hut"
    ]
  }
];

const education = [
  { degree: "MBA Marketing & Advertising", school: "Islington College", period: "2025 - Present" },
  { degree: "BSc. Computing (Hons.)", school: "Islington College", period: "2019 - 2021" },
  { degree: "Graphic Designing Course", school: "IT Training Nepal", period: "2018" }
];

function App() {
  return (
    <div className="container">
      <section className="hero">
        <div className="hero-content">
          <h1>Hi, I'm <span>Sujena</span><br />Siddhi Bajracharya</h1>
          <p className="hero-subtitle">
            A designer by background with 4+ years of experience working closely with clients and cross-functional teams. 
            I specialize in structuring work, planning processes, and driving projects from concept to delivery.
          </p>
          <div className="hero-contact">
            <a href="mailto:sujenasb@gmail.com">✉ sujenasb@gmail.com</a>
            <span className="divider">|</span>
            <span>📍 Kathmandu, Nepal</span>
            <span className="divider">|</span>
            <a href="https://behance.net/sujena" target="_blank" rel="noopener noreferrer">
              behance.net/sujena ↗
            </a>
          </div>
        </div>
        <div className="scroll-indicator">Scroll</div>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="section-number">01</span>
          <h2 className="section-title">What I Do</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div key={i} className="skill-card">
              <h3>{skill.name}</h3>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="section-number">02</span>
          <h2 className="section-title">Tools</h2>
        </div>
        <div className="tools-grid">
          {tools.map((tool, i) => (
            <span key={i} className="tool-tag">{tool}</span>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="section-number">03</span>
          <h2 className="section-title">Experience</h2>
        </div>
        <div className="experience-timeline">
          {experience.map((exp, i) => (
            <div key={i} className="experience-item">
              <div className="experience-header">
                <h3 className="experience-role">{exp.role}</h3>
                <div className="experience-meta">
                  <span className="experience-company">{exp.company}</span>
                  <span>•</span>
                  <span>{exp.period}</span>
                  <span>•</span>
                  <span>{exp.type}</span>
                </div>
              </div>
              <ul className="experience-details">
                {exp.details.map((detail, j) => (
                  <li key={j}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="section-number">04</span>
          <h2 className="section-title">Education</h2>
        </div>
        <div className="education-grid">
          {education.map((edu, i) => (
            <div key={i} className="education-card">
              <h3>{edu.degree}</h3>
              <p>{edu.school}</p>
              <span className="education-period">{edu.period}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Let's create something together</h2>
          <p>I'm currently available for freelance work and full-time opportunities.</p>
          <a href="mailto:sujenasb@gmail.com" className="cta-button">
            Get in touch →
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <p>© 2025 Sujena Siddhi Bajracharya</p>
          <div className="social-links">
            <a href="mailto:sujenasb@gmail.com">Email</a>
            <a href="https://behance.net/sujena" target="_blank" rel="noopener noreferrer">Behance</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
