const skills = [
  "Graphic Designing",
  "User Interface Design",
  "Product Packaging",
  "Logo & Brand Design",
  "Photo/Video Editing",
  "Illustrations"
];

const tools = [
  "Figma",
  "Photoshop",
  "Illustrator",
  "Capcut",
  "Indesign",
  "Affinity",
  "After Effect",
  "Premier Pro"
];

const experience = [
  {
    role: "Freelance Graphic Designer",
    company: "Harm Reduction International",
    period: "2024 - Present",
    type: "Remote",
    details: [
      "Collaborated with research teams to design & format reports, case studies, and publications for drug-related initiatives",
      "Integrated charts, tables, and diagrams to communicate complex data while maintaining brand standards"
    ]
  },
  {
    role: "Creative Lead",
    company: "Urza Creatives",
    period: "June 2024 - December 2025",
    type: "Co-Founder | Remote",
    details: [
      "Developed complete brand identities from logo design to full brand guidelines",
      "Shaped brand's visual online presence, built social media content pillars, and messaging strategy",
      "Designed website interfaces that matched brand's look and feel",
      "Produced marketing & brand assets such as social media creatives, reel contents, flyers & banners"
    ]
  },
  {
    role: "UI Designer",
    company: "Deck of Designs",
    period: "September 2023 - May 2024",
    type: "Full-time | Onsite",
    details: [
      "Designed and delivered multiple website interfaces and branding elements",
      "Leveraged AI tools like Firefly, MidJourney and Copilot to produce branding and UI assets",
      "Assisted in guiding interns, providing support in design processes"
    ]
  },
  {
    role: "Graphic Designer",
    company: "Wood Basic",
    period: "March 2023 - May 2024",
    type: "Part-time | Remote",
    details: [
      "Collaborated with marketing team & developed social media content",
      "Designed product catalogs, website & other brand collaterals"
    ]
  },
  {
    role: "Graphic Designer",
    company: "ACT360",
    period: "June 2021 - April 2023",
    type: "Full-time | Onsite",
    details: [
      "Designed and delivered marketing materials, social media content, campaign collaterals",
      "Created simple motion graphics/2D animations for clients including banks, KFC and Pizza Hut"
    ]
  }
];

const education = [
  {
    degree: "MBA Marketing & Advertising",
    school: "Islington College",
    period: "2025 - Present"
  },
  {
    degree: "BSc. Computing (Hons.)",
    school: "Islington College",
    period: "2019 - 2021"
  },
  {
    degree: "Graphic Designing Course",
    school: "IT Training Nepal",
    period: "2018"
  }
];

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Sujena Siddhi Bajracharya</h1>
        <p className="tagline">
          Designer by background with 4+ years of experience working closely with clients, 
          cross-functional teams, and timelines. I've found my strongest skill isn't just 
          design execution, but structuring work, planning processes, and driving projects forward.
        </p>
        <p className="tagline">
          This interest in strategy, coordination, and problem-solving is what's led me to 
          pursue an Assistant Project Manager role, where I can combine my creative understanding 
          with strong organisational and communication skills to support projects end-to-end.
        </p>
        <div className="contact-info">
          <a href="mailto:sujenasb@gmail.com">sujenasb@gmail.com</a>
          <span>•</span>
          <span>+977-9860125366</span>
          <span>•</span>
          <span>Kathmandu, Nepal</span>
        </div>
        <a href="https://behance.net/sujena" target="_blank" rel="noopener noreferrer" className="portfolio-link">
          behance.net/sujena
        </a>
      </header>

      <section className="section">
        <h2>Industry Knowledge</h2>
        <div className="tags">
          {skills.map(skill => (
            <span key={skill} className="tag">{skill}</span>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Tools & Technologies</h2>
        <div className="tags">
          {tools.map(tool => (
            <span key={tool} className="tag">{tool}</span>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Experience</h2>
        {experience.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <h3>{exp.role}</h3>
              <span className="period">{exp.period}</span>
            </div>
            <p className="company">{exp.company} | {exp.type}</p>
            <ul>
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="section">
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.degree}</h3>
            <p>{edu.school} | {edu.period}</p>
          </div>
        ))}
      </section>

      <footer className="footer">
        <a href="mailto:sujenasb@gmail.com">Get in touch</a>
      </footer>
    </div>
  )
}

export default App
