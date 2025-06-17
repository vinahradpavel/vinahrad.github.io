import { EducationCard } from './components/EducationCard';
import { ExperienceCard } from './components/ExperienceCard';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { SkillsGrid } from './components/SkillsGrid';

function App() {
  const personalInfo = {
    name: "Vinahrad Pavel",
    title: "BACKEND NODE.JS DEVELOPER",
    email: "pavelvinahrad@gmail.com",
    phone: "+48516618449",
    location: "Warsaw, Poland",
    linkedin: "https://www.linkedin.com/in/pavelvinahrad",
    github: "https://github.com/vinahradpavel"
  };

  const experiences = [
    {
      title: "Back-End Developer",
      company: "NDA",
      period: "Dec 2024 - Present",
      description: [
        "Led development of microservices architecture serving 1M+ users",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored junior developers and conducted code reviews",
        "Collaborated with cross-functional teams to deliver high-quality products"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Baranovichi State University",
      period: "2013 - 2017",
      gpa: "8.4/10",
      details: "Computer/Information Technology Administration and Management"
    },
  ];

  const skills = [
    { name: "JavaScript/TypeScript", level: "Expert"},
    // { name: "React/Next.js", level: "Expert"},
    // { name: "Node.js/Express", level: "Advanced"},
    // { name: "Python/Django", level: "Advanced"},
    // { name: "SQL/PostgreSQL", level: "Advanced"},
    // { name: "MongoDB", level: "Intermediate"},
    // { name: "AWS/Cloud Services", level: "Intermediate"},
    // { name: "Docker/Kubernetes", level: "Intermediate"},
    // { name: "GraphQL", level: "Intermediate"},
    // { name: "Machine Learning", level: "Beginner"}
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
              More than 5 years of experience in software development, specializing in building
              reliable and scalable backend solutions. Focus on quality of code, delivering
              products on time, and accurately fulfilling client requirements. Ability to work both
              individually and as part of a team. Committed to continuous learning and staying
              updated on the latest industry trends and technologies.
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

        {/* <Section title="Key Achievements">
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
        </Section> */}
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
          © 2025 {personalInfo.name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
