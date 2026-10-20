import React, { useState, useMemo } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  const { certifications } = portfolioData;
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Data Analytics', 'AI & Python', 'Web & Programming'];

  const filtered = useMemo(() => {
    return certifications.filter((cert) => {
      const matchCat = selectedCategory === 'All' || cert.category === selectedCategory;
      const matchSearch =
        cert.title.toLowerCase().includes(search.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [certifications, selectedCategory, search]);

  return (
    <section id="certifications" className="section" style={{ background: 'rgba(9, 13, 22, 0.4)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Continuous Learning</span>
          <h2 className="section-title">
            Industry <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Verified credentials from recognized platforms and industry programs.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto 40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          {/* Search Input */}
          <div style={{ position: 'relative' }}>
            <i
              className="fas fa-search"
              style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }}
            ></i>
            <input
              type="text"
              placeholder="Search by certification name or issuer (e.g. Python, SQL, Simplilearn)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 16px 14px 46px',
                borderRadius: '12px',
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                fontSize: '15px',
                outline: 'none',
                transition: 'border-color 0.2s ease'
              }}
              onFocus={(e) => (e.target.style.borderColor = '#6366f1')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                style={{
                  position: 'absolute',
                  right: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#94a3b8',
                  cursor: 'pointer'
                }}
              >
                &times;
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: selectedCategory === cat ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.08)',
                  background: selectedCategory === cat ? 'rgba(56, 189, 248, 0.15)' : 'rgba(15, 23, 42, 0.6)',
                  color: selectedCategory === cat ? '#ffffff' : '#94a3b8',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
          {filtered.map((cert, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(255, 255, 255, 0.06)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span className="badge badge-tech" style={{ fontSize: '11px' }}>
                    {cert.category}
                  </span>
                  <span style={{ fontSize: '12px', color: '#64748b', fontFamily: 'var(--font-mono)' }}>{cert.year}</span>
                </div>

                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>
                  {cert.title}
                </h4>

                <p style={{ fontSize: '13px', color: '#38bdf8', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <i className="fas fa-award"></i> {cert.issuer}
                </p>
              </div>

              <div style={{ marginTop: '14px', paddingTop: '10px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', fontSize: '12px', color: '#10b981', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <i className="fas fa-check-circle"></i> Verified Credential
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px 0', color: '#94a3b8' }}>
            <i className="fas fa-inbox" style={{ fontSize: '32px', marginBottom: '12px', color: '#475569' }}></i>
            <p>No certifications matching "{search}" in {selectedCategory}.</p>
          </div>
        )}
      </div>
    </section>
  );
}
