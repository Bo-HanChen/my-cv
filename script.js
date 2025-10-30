// small helpers: year & hamburger & smooth scroll
document.getElementById('year').textContent = new Date().getFullYear();

const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn && menuBtn.addEventListener('click', () => {
  const open = navLinks.style.display === 'flex';
  navLinks.style.display = open ? 'none' : 'flex';
  menuBtn.setAttribute('aria-expanded', (!open).toString());
});

// smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      const el = document.querySelector(href);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
      if(window.innerWidth < 840) { navLinks.style.display='none'; menuBtn.setAttribute('aria-expanded','false'); }
    }
  });
});

// init bar fill widths from inline style --v
document.querySelectorAll('.bar-fill').forEach(el=>{
  const s = el.style.getPropertyValue('--v') || '';
  if(s) el.style.width = s.trim();
});
