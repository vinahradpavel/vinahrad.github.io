import React from "react";

interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

interface SkillsGridProps {
  skills: Skill[];
}

export function SkillsGrid({ skills }: SkillsGridProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return '#27ae60';
      case 'Advanced': return '#3498db';
      case 'Intermediate': return '#f39c12';
      default: return '#95a5a6';
    }
  };

  const getLevelWidth = (level: string) => {
    switch (level) {
      case 'Expert': return '100%';
      case 'Advanced': return '75%';
      case 'Intermediate': return '50%';
      default: return '25%';
    }
  };

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1.5rem'
    }}>
      {skills.map((skill, index) => (
        <div key={index} style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          padding: '1rem',
          transition: 'box-shadow 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '0.5rem'
          }}>
            <h3 style={{
              fontWeight: '600',
              color: '#2c3e50',
              margin: '0'
            }}>{skill.name}</h3>
            <span style={{
              fontSize: '0.9rem',
              color: '#7f8c8d'
            }}>{skill.level}</span>
          </div>
          <div style={{
            width: '100%',
            backgroundColor: '#ecf0f1',
            borderRadius: '4px',
            height: '8px',
            overflow: 'hidden'
          }}>
            <div style={{
              height: '100%',
              backgroundColor: getLevelColor(skill.level),
              width: getLevelWidth(skill.level),
              borderRadius: '4px',
              transition: 'width 0.5s ease'
            }}></div>
          </div>
        </div>
      ))}
    </div>
  );
}
