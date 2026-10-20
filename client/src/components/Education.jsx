import React from 'react';

export default function Education() {
  const educationList = [
    {
      period: '2022 - 2024',
      grade: 'CGPA: 8.3 / 10',
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Kakaraparti Bhavanarayana College (Autonomous), Vijayawada',
      desc: 'Specialized in Advanced Software Engineering, Data Analysis, and Artificial Intelligence. Spearheaded the final year major project on CNN-based Deep Learning for counterfeit logo detection.',
      tags: ['Python', 'CNN Deep Learning', 'Google Colab', 'Data Structures', 'MySQL'],
      demoLink: 'https://drive.google.com/file/d/1digNCIdUvxiO6W2Nl5ByY2k747UqX1Fd/view?usp=sharing',
      demoText: 'Watch Project Demo'
    },
    {
      period: '2019 - 2022',
      grade: 'CGPA: 8.46 / 10',
      degree: 'Bachelor of Science (BSc - MPCs)',
      institution: 'AG & SG Siddhartha Degree College of Arts & Science (Autonomous), Vuyyuru',
      desc: 'Comprehensive study in Mathematics, Physics, and Computer Science with distinguished academic performance.',
      tags: ['Computer Science', 'Mathematics', 'Physics', 'Data Structures'],
      demoLink: null
    },
    {
      period: '2017 - 2019',
      grade: 'CGPA: 7.73 / 10',
      degree: 'Intermediate (MPC)',
      institution: 'AG & SGS Junior College, Vuyyuru',
      desc: 'Rigorous foundation in Mathematics, Physics, and Chemistry.',
      tags: ['Mathematics', 'Physics', 'Chemistry'],
      demoLink: null
    },
    {
      period: '2016 - 2017',
      grade: 'CGPA: 8.3 / 10',
      degree: 'Secondary School Certificate (SSC)',
      institution: 'JESUS EM & TM School, Veerankilaku',
      desc: 'Completed secondary schooling with exemplary marks across core subjects.',
      tags: ['Secondary Education', 'General Sciences', 'Mathematics'],
      demoLink: null
    }
  ];

  return (
    <section id="education" className="section" style={{ background: 'rgba(9, 13, 22, 0.4)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Academic Background</span>
          <h2 className="section-title">
            Education &amp; <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="section-subtitle">
            A timeline of my academic milestones, degrees, and accomplishments.
          </p>
        </div>

        {/* Normal, Clean Timeline Cards */}
        <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {educationList.map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '24px',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              {/* Header: Period & Grade */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '12px'
                }}
              >
                <span
                  style={{
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    background: 'rgba(99, 102, 241, 0.12)',
                    border: '1px solid rgba(99, 102, 241, 0.25)',
                    color: '#a5b4fc',
                    fontSize: '12px',
                    fontWeight: 700,
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  {item.period}
                </span>

                <span className="badge badge-grade">{item.grade}</span>
              </div>

              {/* Degree Title */}
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '4px',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                {item.degree}
              </h3>

              {/* Institution */}
              <h4
                style={{
                  fontSize: '14px',
                  color: '#94a3b8',
                  fontWeight: 500,
                  marginBottom: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <i className="fas fa-university" style={{ color: '#6366f1' }}></i>
                {item.institution}
              </h4>

              {/* Description / Matter Details */}
              <p
                style={{
                  fontSize: '14px',
                  color: '#cbd5e1',
                  lineHeight: 1.6,
                  marginBottom: '16px'
                }}
              >
                {item.desc}
              </p>

              {/* Tags */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: item.demoLink ? '16px' : '0'
                }}
              >
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: '3px 10px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '6px',
                      fontSize: '12px',
                      color: '#94a3b8'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Only Demo Button (No certificate buttons) */}
              {item.demoLink && (
                <div style={{ paddingTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <a
                    href={item.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-demo btn-sm"
                  >
                    <i className="fas fa-play"></i> {item.demoText}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
