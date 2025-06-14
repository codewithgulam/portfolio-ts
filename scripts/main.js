// ===== Dark Mode Toggle =====
const toggle = document.getElementById('dark-mode-toggle');
const icon = toggle.querySelector('i');

// Check for saved user preference
if (localStorage.getItem('theme') === 'dark') {
  document.body.setAttribute('data-theme', 'dark');
  icon.classList.replace('fa-moon', 'fa-sun');
}

toggle.addEventListener('click', () => {
  const isDark = document.body.getAttribute('data-theme') === 'dark';
  
  // Toggle theme
  document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
  icon.classList.toggle('fa-moon', isDark);
  icon.classList.toggle('fa-sun', !isDark);
  
  // Save preference
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
});

// ===== Particles.js =====
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { random: true, value: 0.5 },
    size: { random: true, value: 3 },
    line_linked: { 
      enable: true, 
      distance: 150, 
      color: "#ffffff", 
      opacity: 0.4, 
      width: 1 
    },
    move: { enable: true, speed: 2 }
  }
});

// ===== Vanilla Tilt =====
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
});