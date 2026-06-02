// assets/js/script.js
// Simple helpers for the elite-website

// Smooth scroll for internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Portfolio lightbox (basic implementation)
document.querySelectorAll('.lightbox').forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const imgSrc = this.getAttribute('href');
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0; overlay.style.left = 0; overlay.style.right = 0; overlay.style.bottom = 0;
    overlay.style.background = 'rgba(0,0,0,0.8)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.cursor = 'pointer';
    const img = document.createElement('img');
    img.src = imgSrc;
    img.style.maxWidth = '90%';
    img.style.maxHeight = '90%';
    overlay.appendChild(img);
    overlay.addEventListener('click', function () { overlay.remove(); });
    document.body.appendChild(overlay);
  });
});

// Testimonials carousel
(function () {
  const container = document.getElementById('testimonialContainer');
  if (!container) return;
  const slides = container.children;
  let index = 0;
  const showSlide = (i) => {
    index = (i + slides.length) % slides.length;
    container.style.transform = `translateX(-${index * 100}%)`;
  };
  document.getElementById('prevBtn').addEventListener('click', () => showSlide(index - 1));
  document.getElementById('nextBtn').addEventListener('click', () => showSlide(index + 1));
  // Auto play every 5 seconds
  setInterval(() => showSlide(index + 1), 5000);
})();
