document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle
  const themeToggle = document.getElementById('theme-toggle');
  
  if (themeToggle) {
    themeToggle.addEventListener('click', (e) => {
      e.preventDefault();
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  // RTL Toggle
  const rtlToggle = document.getElementById('rtl-toggle-nav') || document.getElementById('rtl-toggle');
  
  if (rtlToggle) {
    rtlToggle.addEventListener('click', (e) => {
      e.preventDefault();
      const currentDir = document.documentElement.getAttribute('dir');
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      document.documentElement.setAttribute('dir', newDir);
      localStorage.setItem('dir', newDir);
    });
  }

  const savedDir = localStorage.getItem('dir');
  if (savedDir) {
    document.documentElement.setAttribute('dir', savedDir);
  }

  // Active Menu Highlighting
  let currentPath = window.location.pathname.split('/').pop();
  if (!currentPath || currentPath === '') currentPath = 'index.html';

  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
      // If it's inside a dropdown, highlight the parent too
      const dropdownParent = link.closest('.dropdown');
      if (dropdownParent) {
        const toggle = dropdownParent.querySelector('.dropdown-toggle');
        if (toggle) toggle.classList.add('active');
      }
    }
  });

  // Mobile Menu Toggle
  const hamburger = document.getElementById('hamburger');
  const navContainer = document.querySelector('.navbar');

  if (hamburger && navContainer) {
    hamburger.addEventListener('click', () => {
      navContainer.classList.toggle('active');
    });
  }

  // Scroll to Top Button
  const scrollTopBtn = document.getElementById('scrollTop');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
      } else {
        scrollTopBtn.classList.remove('show');
      }
    });

    scrollTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
