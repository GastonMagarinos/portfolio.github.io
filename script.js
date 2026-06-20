
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0 });

document.querySelectorAll('.aparece').forEach(el => observer.observe(el));

e
