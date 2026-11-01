import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import ScrollReveal from '../reactbits/ScrollReveal';
import GlowCard from '../reactbits/GlowCard';
import Magnet from '../reactbits/Magnet';

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, success: false, error: null });

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Server error.');

      setStatus({ submitting: false, success: true, error: null });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      setStatus({ submitting: false, success: false, error: err.message });
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '10px',
    background: 'rgba(15,23,42,0.9)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: '#ffffff',
    fontSize: '14px',
    outline: 'none',
    fontFamily: 'var(--font-body)',
    transition: 'border-color 0.2s ease',
  };

  const labelStyle = { display: 'block', fontSize: '13px', fontWeight: 600, color: '#cbd5e1', marginBottom: '6px' };

  return (
    <section id="contact" className="section">
      <div className="container">
        <ScrollReveal direction="up">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{ display: 'inline-block', padding: '6px 18px', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: '9999px', color: '#a5b4fc', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Direct Inquiries
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.5px', color: '#ffffff', marginBottom: '14px' }}>
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '16px', lineHeight: 1.7, maxWidth: '540px', margin: '0 auto' }}>
              Have a question or looking to collaborate? Send a message and I'll get back to you promptly.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '36px', maxWidth: '1020px', margin: '0 auto' }}>

          {/* Contact Info Card */}
          <ScrollReveal direction="left" delay={0.1}>
            <GlowCard glowColor="99,102,241" style={{ padding: '32px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>Let's discuss opportunities</h3>
                <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: 1.75, marginBottom: '30px' }}>
                  Looking for a dedicated Data Analyst or Web Developer? Reach out via the form, direct email, or phone.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '30px' }}>
                  {[
                    { icon: 'fa-envelope', color: '#6366f1', label: 'Direct Email', value: personal.email, href: `mailto:${personal.email}` },
                    { icon: 'fa-phone', color: '#38bdf8', label: 'Mobile & WhatsApp', value: personal.phone, href: `tel:${personal.phone}` },
                    { icon: 'fa-location-dot', color: '#10b981', label: 'Location', value: personal.location, href: null },
                  ].map(({ icon, color, label, value, href }) => (
                    <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                      <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: `${color}18`, border: `1px solid ${color}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', color, fontSize: '17px', flexShrink: 0 }}>
                        <i className={`fas ${icon}`} />
                      </div>
                      <div>
                        <span style={{ fontSize: '11px', color: '#475569', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.5px', display: 'block', marginBottom: '2px' }}>{label}</span>
                        {href ? (
                          <a href={href} style={{ color: '#ffffff', fontSize: '14.5px', fontWeight: 600, textDecoration: 'none' }}>{value}</a>
                        ) : (
                          <span style={{ color: '#ffffff', fontSize: '14.5px', fontWeight: 600 }}>{value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ padding: '14px 18px', borderRadius: '12px', background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <i className="fas fa-clock" style={{ color: '#10b981' }} />
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#e2e8f0' }}>Quick Response</span>
                </div>
                <p style={{ margin: 0, fontSize: '12.5px', color: '#94a3b8', lineHeight: 1.5 }}>
                  Inquiries reviewed within 24 hours and delivered directly to my inbox.
                </p>
              </div>
            </GlowCard>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right" delay={0.15}>
            <GlowCard glowColor="56,189,248" style={{ padding: '32px' }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={labelStyle}>Your Name *</label>
                    <input type="text" name="name" required placeholder="e.g. John Doe" value={formData.name} onChange={handleChange} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Your Email *</label>
                    <input type="email" name="email" required placeholder="john@example.com" value={formData.email} onChange={handleChange} style={inputStyle} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={labelStyle}>Phone Number</label>
                    <input type="tel" name="phone" placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Subject</label>
                    <input type="text" name="subject" placeholder="Project Inquiry / Job Opportunity" value={formData.subject} onChange={handleChange} style={inputStyle} />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Message *</label>
                  <textarea name="message" required rows={5} placeholder="Describe your project, role, or inquiry..." value={formData.message} onChange={handleChange} style={{ ...inputStyle, resize: 'vertical' }} />
                </div>

                {status.success && (
                  <div style={{ padding: '12px 16px', borderRadius: '10px', background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.35)', color: '#34d399', fontSize: '14px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-circle-check" /> Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {status.error && (
                  <div style={{ padding: '12px 16px', borderRadius: '10px', background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.35)', color: '#f87171', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-triangle-exclamation" /> {status.error}
                  </div>
                )}

                <Magnet strength={0.15}>
                  <button
                    type="submit"
                    disabled={status.submitting}
                    style={{ width: '100%', padding: '13px 24px', borderRadius: '12px', background: 'linear-gradient(135deg, #6366f1, #a855f7)', color: '#ffffff', fontSize: '15px', fontWeight: 700, border: 'none', cursor: status.submitting ? 'not-allowed' : 'pointer', boxShadow: '0 6px 24px rgba(99,102,241,0.35)', transition: 'all 0.2s ease', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', opacity: status.submitting ? 0.7 : 1 }}
                  >
                    {status.submitting ? (
                      <><i className="fas fa-spinner fa-spin" /> Sending...</>
                    ) : (
                      <><i className="fas fa-paper-plane" /> Send Message</>
                    )}
                  </button>
                </Magnet>
              </form>
            </GlowCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

