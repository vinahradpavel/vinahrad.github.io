import { EducationCard } from './components/EducationCard';
import { ExperienceCard } from './components/ExperienceCard';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { SkillsGrid } from './components/SkillsGrid';


const Index = () => {
  const personalInfo = {
    name: "Alex Johnson",
    title: "Full Stack Developer",
    email: "alex.johnson@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    linkedin: "https://linkedin.com/in/alexjohnson",
    github: "https://github.com/alexjohnson"
  };

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: [
        "Led development of microservices architecture serving 1M+ users",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored junior developers and conducted code reviews",
        "Collaborated with cross-functional teams to deliver high-quality products"
      ]
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      location: "Remote",
      description: [
        "Built responsive web applications using React and TypeScript",
        "Optimized application performance achieving 95+ Lighthouse scores",
        "Integrated third-party APIs and payment systems",
        "Participated in agile development processes and sprint planning"
      ]
    },
    {
      title: "Junior Web Developer",
      company: "Digital Agency Pro",
      period: "2019 - 2020",
      location: "New York, NY",
      description: [
        "Developed custom WordPress themes and plugins",
        "Created responsive email templates and landing pages",
        "Collaborated with designers to implement pixel-perfect UIs",
        "Maintained and updated client websites"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California, Berkeley",
      period: "2015 - 2019",
      gpa: "3.8/4.0",
      details: "Relevant Coursework: Data Structures, Algorithms, Software Engineering, Database Systems"
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      institution: "General Assembly",
      period: "2019",
      details: "Intensive 12-week program covering modern web development technologies"
    }
  ];

  const skills = [
    { name: "JavaScript/TypeScript", level: "Expert"},
    { name: "React/Next.js", level: "Expert"},
    { name: "Node.js/Express", level: "Advanced"},
    { name: "Python/Django", level: "Advanced"},
    { name: "SQL/PostgreSQL", level: "Advanced"},
    { name: "MongoDB", level: "Intermediate"},
    { name: "AWS/Cloud Services", level: "Intermediate"},
    { name: "Docker/Kubernetes", level: "Intermediate"},
    { name: "GraphQL", level: "Intermediate"},
    { name: "Machine Learning", level: "Beginner"}
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <Header {...personalInfo} />
      
      <main style={{
        maxWidth: '1024px',
        margin: '0 auto',
        padding: '3rem 1.5rem'
      }}>
        <Section title="Professional Summary">
          <div style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            padding: '1.5rem'
          }}>
            <p style={{
              color: '#34495e',
              lineHeight: '1.6',
              fontSize: '1.1rem',
              margin: '0'
            }}>
              Passionate Full Stack Developer with 5+ years of experience building scalable web applications 
              and leading development teams. Expertise in modern JavaScript frameworks, cloud technologies, 
              and agile methodologies. Committed to writing clean, maintainable code and delivering 
              exceptional user experiences. Always eager to learn new technologies and tackle challenging problems.
            </p>
          </div>
        </Section>

        <Section title="Professional Experience">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </Section>

        <Section title="Education">
          {education.map((edu, index) => (
            <EducationCard key={index} {...edu} />
          ))}
        </Section>

        <Section title="Technical Skills">
          <SkillsGrid skills={skills} />
        </Section>

        <Section title="Key Achievements">
          <div style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            padding: '1.5rem'
          }}>
            <ul style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1rem',
              color: '#34495e',
              listStyle: 'none',
              padding: '0',
              margin: '0'
            }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span style={{ color: '#27ae60', fontWeight: 'bold', fontSize: '1.2rem' }}>•</span>
                <span>Reduced application load time by 40% through optimization</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span style={{ color: '#27ae60', fontWeight: 'bold', fontSize: '1.2rem' }}>•</span>
                <span>Led team of 5 developers on critical product launch</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span style={{ color: '#27ae60', fontWeight: 'bold', fontSize: '1.2rem' }}>•</span>
                <span>Implemented automated testing increasing code coverage to 90%</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span style={{ color: '#27ae60', fontWeight: 'bold', fontSize: '1.2rem' }}>•</span>
                <span>Contributed to open-source projects with 1000+ GitHub stars</span>
              </li>
            </ul>
          </div>
        </Section>
      </main>

      <footer style={{
        backgroundColor: '#2c3e50',
        color: 'white',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <p style={{
          color: '#bdc3c7',
          margin: '0'
        }}>
          © 2024 {personalInfo.name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
