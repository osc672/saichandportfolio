import React, { useState, useEffect } from 'react';

export default function MySQLModal({ isOpen, onClose, dbStatus }) {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchContacts = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/contacts');
      const data = await res.json();
      if (data.success) {
        setContacts(data.data || []);
      } else {
        throw new Error(data.message || 'Failed to retrieve messages');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchContacts();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(0, 0, 0, 0.82)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          maxWidth: '780px',
          width: '100%',
          maxHeight: '85vh',
          display: 'flex',
          flexDirection: 'column',
          background: '#0b1120',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '16px',
            marginBottom: '20px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'rgba(6, 182, 212, 0.15)',
                color: '#38bdf8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px'
              }}
            >
              <i className="fas fa-database"></i>
            </div>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                MySQL Database Explorer
              </h3>
              <p style={{ margin: 0, fontSize: '12px', color: '#94a3b8' }}>
                Live Inquiries &amp; ACID Table Records (`portfolio_db.contacts`)
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={fetchContacts}
              className="btn btn-glass btn-sm"
              title="Refresh from MySQL"
            >
              <i className={`fas fa-rotate-right ${loading ? 'fa-spin' : ''}`}></i> Refresh
            </button>
            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                color: '#94a3b8',
                fontSize: '24px',
                cursor: 'pointer',
                padding: '4px'
              }}
            >
              &times;
            </button>
          </div>
        </div>

        {/* Database Status Bar */}
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.8)',
            padding: '12px 16px',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            marginBottom: '20px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '12px',
            fontSize: '12px'
          }}
        >
          <div>
            <span style={{ color: '#64748b', display: 'block' }}>Host:</span>
            <strong style={{ color: '#ffffff' }}>{dbStatus?.host || 'localhost'}:{dbStatus?.port || '3306'}</strong>
          </div>
          <div>
            <span style={{ color: '#64748b', display: 'block' }}>Database:</span>
            <strong style={{ color: '#38bdf8' }}>{dbStatus?.database || 'portfolio_db'}</strong>
          </div>
          <div>
            <span style={{ color: '#64748b', display: 'block' }}>Connection:</span>
            <strong style={{ color: dbStatus?.connected ? '#10b981' : '#f59e0b' }}>
              {dbStatus?.connected ? '● Connected (MySQL)' : '● Active'}
            </strong>
          </div>
          <div>
            <span style={{ color: '#64748b', display: 'block' }}>Total Records:</span>
            <strong style={{ color: '#a855f7' }}>{contacts.length} Inquiries</strong>
          </div>
        </div>

        {/* Messages List */}
        <div style={{ overflowY: 'auto', flex: 1, paddingRight: '6px' }}>
          {loading && (
            <div style={{ textAlign: 'center', padding: '30px', color: '#94a3b8' }}>
              <i className="fas fa-spinner fa-spin" style={{ fontSize: '24px', marginBottom: '8px' }}></i>
              <p>Querying records from MySQL database...</p>
            </div>
          )}

          {error && (
            <div style={{ padding: '16px', background: 'rgba(239, 68, 68, 0.15)', borderRadius: '8px', color: '#f87171', fontSize: '13px' }}>
              <i className="fas fa-exclamation-triangle" style={{ marginRight: '6px' }}></i> {error}
            </div>
          )}

          {!loading && !error && contacts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px 20px', color: '#64748b' }}>
              <i className="fas fa-inbox" style={{ fontSize: '36px', marginBottom: '12px', color: '#334155' }}></i>
              <h4 style={{ color: '#94a3b8', marginBottom: '4px' }}>No messages submitted yet</h4>
              <p style={{ fontSize: '13px' }}>Send a message through the contact form above to see it recorded here in real-time.</p>
            </div>
          )}

          {!loading && contacts.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {contacts.map((c) => (
                <div
                  key={c.id}
                  style={{
                    background: 'rgba(15, 23, 42, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '10px',
                    padding: '14px 16px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '11px', background: '#1e293b', color: '#38bdf8', padding: '2px 8px', borderRadius: '4px', fontFamily: 'var(--font-mono)' }}>
                        #{c.id}
                      </span>
                      <strong style={{ color: '#ffffff', fontSize: '14px' }}>{c.name}</strong>
                    </div>
                    <span style={{ fontSize: '11px', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                      {new Date(c.created_at).toLocaleString()}
                    </span>
                  </div>

                  <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '8px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                    <span><i className="fas fa-envelope" style={{ marginRight: '4px', color: '#6366f1' }}></i> {c.email}</span>
                    {c.phone && <span><i className="fas fa-phone" style={{ marginRight: '4px', color: '#10b981' }}></i> {c.phone}</span>}
                    {c.subject && <span><i className="fas fa-tag" style={{ marginRight: '4px', color: '#f59e0b' }}></i> {c.subject}</span>}
                  </div>

                  <p style={{ margin: 0, fontSize: '13px', color: '#cbd5e1', lineHeight: 1.5, background: '#090d16', padding: '10px', borderRadius: '6px' }}>
                    {c.message}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
