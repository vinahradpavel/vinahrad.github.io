import React from "react";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  location?: string;
}

export function ExperienceCard({ title, company, period, description, location }: ExperienceCardProps) {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      padding: '1.5rem',
      marginBottom: '1.5rem',
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
        alignItems: 'flex-start',
        marginBottom: '1rem',
        flexWrap: 'wrap' as const
      }}>
        <div>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            color: '#2c3e50',
            margin: '0 0 0.25rem 0'
          }}>{title}</h3>
          <p style={{
            fontSize: '1.1rem',
            color: '#7f8c8d',
            margin: '0'
          }}>{company}</p>
          {location && (
            <p style={{
              fontSize: '0.9rem',
              color: '#95a5a6',
              margin: '0.25rem 0 0 0'
            }}>{location}</p>
          )}
        </div>
        <span style={{
          fontSize: '0.9rem',
          color: '#95a5a6',
          fontWeight: '500'
        }}>{period}</span>
      </div>
      <ul style={{
        listStyle: 'disc',
        paddingLeft: '1.25rem',
        color: '#34495e'
      }}>
        {description.map((item, index) => (
          <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
        ))}
      </ul>
    </div>
  );
}