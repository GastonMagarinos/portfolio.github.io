const nav = document.querySelector('nav');
document.body.style.paddingTop = nav.offsetHeight + 'px';
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.7 });

document.querySelectorAll('.aparece').forEach(el => observer.observe(el));

const observer1 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 1 });

document.querySelectorAll('.aparecelento').forEach(el => observer.observe(el));

