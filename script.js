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

  if (isActive) {
    document.body.style.overflow = 'hidden';
    createOverlay();
  } else {
    document.body.style.overflow = '';
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
  if (overlay) {
    overlay.remove();
  }
}

menuToggle.addEventListener('click', toggleMenu);

navLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

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
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

/* ============================================
   INTERSECTION OBSERVER - Animações Fade-in
   ============================================ */
function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll('.section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
  });

  // Observe stagger children containers (grids of cards)
  document.querySelectorAll('.stagger-children').forEach(el => {
    observer.observe(el);
  });

  // Observe individual cards (backup for non-stagger grids)
  document.querySelectorAll('.about__card').forEach(el => {
    el.classList.add('fade-in-up');
    observer.observe(el);
  });
}

initScrollAnimations();

/* ============================================
   NAVEGAÇÃO ATIVA - Highlight da seção atual
   ============================================ */
function updateActiveNavLink() {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.header__nav-link');
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionBottom = sectionTop + section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNavLink, { passive: true });

/* ============================================
   ATUALIZAR ANO NO FOOTER
   ============================================ */
const yearSpan = document.getElementById('currentYear');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
