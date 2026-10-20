/**
 * Sai Chand Olupalli - Modern Portfolio Interactive Engine
 */

document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initMobileNav();
    initTypewriter();
    initParticleCanvas();
    initSkillTabs();
    initCertFilter();
    initModals();
    initContactForm();
    initScrollToTop();
    initCurrentYear();
});

/* -------------------------------------------------------------
 * 1. Header & Navigation Scroll Spy
 * ------------------------------------------------------------- */
function initHeaderScroll() {
    const header = document.getElementById('header');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;

        // Sticky header class
        if (scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Active link scroll spy
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 120;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

/* -------------------------------------------------------------
 * 2. Mobile Drawer Navigation
 * ------------------------------------------------------------- */
function initMobileNav() {
    const toggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!toggle || !navMenu) return;

    toggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        toggle.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            toggle.classList.remove('active');
        });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !toggle.contains(e.target) && navMenu.classList.contains('open')) {
            navMenu.classList.remove('open');
            toggle.classList.remove('active');
        }
    });
}

/* -------------------------------------------------------------
 * 3. Typewriter Effect
 * ------------------------------------------------------------- */
function initTypewriter() {
    const typingElement = document.getElementById('typing-text');
    if (!typingElement) return;

    const phrases = [
        'Data Analyst',
        'Machine Learning Enthusiast',
        'Frontend Developer',
        'MCA Post Graduate',
        'Problem Solver'
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 110;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            typingSpeed = 1800; // Pause at end of word
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 400; // Pause before new word
        }

        setTimeout(type, typingSpeed);
    }

    type();
}

/* -------------------------------------------------------------
 * 4. Interactive Particle Canvas Network
 * ------------------------------------------------------------- */
function initParticleCanvas() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    const maxParticles = window.innerWidth < 768 ? 35 : 75;
    const connectionDistance = 140;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.7;
            this.vy = (Math.random() - 0.5) * 0.7;
            this.radius = Math.random() * 2 + 1;
            this.color = Math.random() > 0.5 ? 'rgba(99, 102, 241,' : 'rgba(6, 182, 212,';
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color + ' 0.8)';
            ctx.shadowBlur = 8;
            ctx.shadowColor = this.color + ' 0.9)';
            ctx.fill();
        }
    }

    for (let i = 0; i < maxParticles; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < connectionDistance) {
                    const alpha = (1 - dist / connectionDistance) * 0.25;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    }

    animate();
}

/* -------------------------------------------------------------
 * 5. Skills Tab Switcher
 * ------------------------------------------------------------- */
function initSkillTabs() {
    const tabBtns = document.querySelectorAll('.skill-tab-btn');
    const tabPanels = document.querySelectorAll('.skills-tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-tab');

            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            const targetPanel = document.getElementById(`tab-${target}`);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
}

/* -------------------------------------------------------------
 * 6. Certifications Search & Filter
 * ------------------------------------------------------------- */
function initCertFilter() {
    const searchInput = document.getElementById('cert-search-input');
    const filterBtns = document.querySelectorAll('.cert-btn');
    const certCards = document.querySelectorAll('.cert-grid .cert-card');

    let currentFilter = 'all';
    let searchQuery = '';

    function filterCards() {
        certCards.forEach(card => {
            const category = card.getAttribute('data-category');
            const cardText = card.textContent.toLowerCase();

            const matchesCategory = (currentFilter === 'all' || category === currentFilter);
            const matchesSearch = (!searchQuery || cardText.includes(searchQuery));

            if (matchesCategory && matchesSearch) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            filterCards();
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            filterCards();
        });
    }
}

/* -------------------------------------------------------------
 * 7. Modals
 * ------------------------------------------------------------- */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function initModals() {
    // Expose openModal/closeModal globally for HTML onclick attributes
    window.openModal = openModal;
    window.closeModal = closeModal;

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.active').forEach(m => {
                m.classList.remove('active');
                document.body.style.overflow = '';
            });
        }
    });
}

/* -------------------------------------------------------------
 * 8. Copy to Clipboard
 * ------------------------------------------------------------- */
window.copyToClipboard = function(text, element) {
    navigator.clipboard.writeText(text).then(() => {
        const icon = element.querySelector('i');
        const originalClass = icon.className;
        icon.className = 'fas fa-check';
        showToast('Copied to Clipboard!', text);

        setTimeout(() => {
            icon.className = originalClass;
        }, 2000);
    }).catch(err => {
        console.error('Clipboard copy error:', err);
    });
};

/* -------------------------------------------------------------
 * 9. Toast Notification System
 * ------------------------------------------------------------- */
let toastTimeout;
window.showToast = function(title, message, isError = false) {
    const toast = document.getElementById('toast');
    const toastTitle = document.getElementById('toast-title');
    const toastMsg = document.getElementById('toast-message');

    if (!toast) return;

    clearTimeout(toastTimeout);

    toastTitle.textContent = title;
    toastMsg.textContent = message;

    if (isError) {
        toast.classList.add('toast-error');
    } else {
        toast.classList.remove('toast-error');
    }

    toast.classList.add('show');

    toastTimeout = setTimeout(() => {
        hideToast();
    }, 5500);
};

window.hideToast = function() {
    const toast = document.getElementById('toast');
    if (toast) toast.classList.remove('show');
};

/* -------------------------------------------------------------
 * 10. Contact Form with Live SMTP API
 * ------------------------------------------------------------- */
function initContactForm() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;
    const btnSpinner = submitBtn ? submitBtn.querySelector('.btn-spinner') : null;
    const formStatus = document.getElementById('form-status');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Clear previous errors
        document.querySelectorAll('.error-msg').forEach(el => {
            el.textContent = '';
            el.style.display = 'none';
        });
        if (formStatus) {
            formStatus.className = 'form-status';
            formStatus.textContent = '';
        }

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const phone = form.phone.value.trim();
        const subject = form.subject.value.trim();
        const message = form.message.value.trim();

        // Validation
        let isValid = true;

        if (!name) {
            showFieldError('name-error', 'Please enter your name.');
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            showFieldError('email-error', 'Please enter your email address.');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            showFieldError('email-error', 'Please provide a valid email address.');
            isValid = false;
        }

        if (!message) {
            showFieldError('message-error', 'Please enter your message.');
            isValid = false;
        }

        if (!isValid) return;

        // Button Loading State
        submitBtn.disabled = true;
        btnText.classList.add('hidden');
        btnSpinner.classList.remove('hidden');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, phone, subject, message })
            });

            const data = await response.json();

            if (response.ok && data.success) {
                // Success
                formStatus.className = 'form-status success';
                formStatus.innerHTML = `<strong>Success!</strong> Message sent successfully!`;
                showToast('Success', 'Message sent successfully!');
                form.reset();
            } else {
                // Server validation or error
                formStatus.className = 'form-status error';
                formStatus.textContent = data.message || 'Unable to deliver message. Please try again.';
                showToast('Error', data.message || 'Unable to send message.', true);
            }
        } catch (err) {
            console.error('Fetch error:', err);
            formStatus.className = 'form-status error';
            formStatus.textContent = 'Network or server error. Please ensure the server is running or contact directly at saichanduvlk@gmail.com.';
            showToast('Network Error', 'Could not reach portfolio server.', true);
        } finally {
            submitBtn.disabled = false;
            btnText.classList.remove('hidden');
            btnSpinner.classList.add('hidden');
        }
    });

    function showFieldError(id, msg) {
        const errorEl = document.getElementById(id);
        if (errorEl) {
            errorEl.textContent = msg;
            errorEl.style.display = 'block';
        }
    }
}

/* -------------------------------------------------------------
 * 11. Scroll To Top Button
 * ------------------------------------------------------------- */
function initScrollToTop() {
    const scrollBtn = document.getElementById('scrollToTopBtn');
    if (!scrollBtn) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 400) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* -------------------------------------------------------------
 * 12. Dynamic Year
 * ------------------------------------------------------------- */
function initCurrentYear() {
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}
