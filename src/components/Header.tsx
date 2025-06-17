import React from "react";

interface HeaderProps {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  github?: string;
}

export function Header({ name, title, email, phone, location, linkedin, github }: HeaderProps) {
  return (
    <header style={{
      background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
      color: 'white',
      padding: '3rem 2rem',
      textAlign: 'center' as const
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: 'bold',
        margin: '0 0 0.5rem 0'
      }}>{name}</h1>
      <p style={{
        fontSize: '1.25rem',
        color: '#bdc3c7',
        margin: '0 0 2rem 0'
      }}>{title}</p>
      
      <div style={{
        display: 'flex',
        flexWrap: 'wrap' as const,
        justifyContent: 'center',
        gap: '1.5rem',
        fontSize: '0.9rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>📧</span>
          <a href={`mailto:${email}`} style={{ color: 'white', textDecoration: 'none' }}>
            {email}
          </a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>📱</span>
          <span>{phone}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>📍</span>
          <span>{location}</span>
        </div>
        {linkedin && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>💼</span>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
              LinkedIn
            </a>
          </div>
        )}
        {github && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>🔗</span>
            <a href={github} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
              GitHub
            </a>
          </div>
        )}
      </div>
    </header>
  );
}