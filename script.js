/* ============================================
   MENU MOBILE
   ============================================ */
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const navLinks = document.querySelectorAll('.header__nav-link');

function toggleMenu() {
  const isActive = mainNav.classList.toggle('active');
  menuToggle.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', isActive);
  document.body.style.overflow = isActive ? 'hidden' : '';

  if (isActive) {
    createOverlay();
  } else {
    removeOverlay();
  }
}

function closeMenu() {
  mainNav.classList.remove('active');
  menuToggle.classList.remove('active');
  menuToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
  removeOverlay();
}

function createOverlay() {
  if (document.querySelector('.nav-overlay')) return;
  const overlay = document.createElement('div');
  overlay.className = 'nav-overlay active';
  overlay.addEventListener('click', closeMenu);
  document.body.appendChild(overlay);
}

function removeOverlay() {
  const overlay = document.querySelector('.nav-overlay');
  if (overlay) overlay.remove();
}

menuToggle.addEventListener('click', toggleMenu);
navLinks.forEach(link => link.addEventListener('click', closeMenu));

/* ============================================
   SCROLL SUAVE
   ============================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ============================================
   INTERSECTION OBSERVER - Scroll Reveal
   ============================================ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { rootMargin: '0px 0px -60px 0px', threshold: 0.1 });

function initScrollReveal() {
  document.querySelectorAll('.section').forEach(el => {
    el.classList.add('fade-in');
    revealObserver.observe(el);
  });

  document.querySelectorAll('.stagger-children').forEach(el => {
    revealObserver.observe(el);
  });

  document.querySelectorAll('.about__card').forEach(el => {
    el.classList.add('fade-in-up');
    revealObserver.observe(el);
  });
}

initScrollReveal();

/* ============================================
   NAVEGAÇÃO ATIVA - IntersectionObserver
   ============================================ */
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      document.querySelectorAll('.header__nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, { rootMargin: '-50% 0px -50% 0px', threshold: 0 });

document.querySelectorAll('.section').forEach(section => {
  navObserver.observe(section);
});

/* ============================================
   NAVBAR INTELIGENTE
   ============================================ */
function updateHeaderOnScroll() {
  const header = document.querySelector('.header');
  header.classList.toggle('header--scrolled', window.scrollY > 60);
}
window.addEventListener('scroll', updateHeaderOnScroll, { passive: true });
updateHeaderOnScroll();

/* ============================================
   PROGRESS BAR
   ============================================ */
function updateProgressBar() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  document.getElementById('progressBar').style.width = progress + '%';
}
window.addEventListener('scroll', updateProgressBar, { passive: true });

/* ============================================
   COUNTER ANIMATION
   ============================================ */
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'));
  const duration = 1500;
  const start = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('[data-target]').forEach(el => {
        el.textContent = '0';
        animateCounter(el);
      });
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const countersSection = document.getElementById('counters');
if (countersSection) {
  counterObserver.observe(countersSection);
}

/* ============================================
   SPOTLIGHT HOVER - Projetos
   ============================================ */
document.querySelectorAll('.projeto-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mouse-x', x + '%');
    card.style.setProperty('--mouse-y', y + '%');
  });
});

/* ============================================
   ATUALIZAR ANO NO FOOTER
   ============================================ */
const yearSpan = document.getElementById('currentYear');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
