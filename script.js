document.addEventListener('DOMContentLoaded', () => {
    // 1. Luxury Nav Scroll
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Editorial Parallax
    const heroBg = document.querySelector('.hero-bg');
    window.addEventListener('scroll', () => {
        const scroll = window.scrollY;
        if (scroll < window.innerHeight && heroBg) {
            // Slow, subtle movement for luxury feel
            heroBg.style.transform = `translateY(${scroll * 0.25}px) scale(1.05)`;
        }
    });

    // 3. Slow Reveal Animations (Intersection Observer)
    const revealElements = document.querySelectorAll('.fade-up, .fade-up-slow');
    
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    revealElements.forEach(el => {
        appearOnScroll.observe(el);
    });
    
    // Trigger hero animations on load
    setTimeout(() => {
        document.querySelectorAll('.hero-editorial .fade-up-slow').forEach(el => {
            el.classList.add('is-visible');
        });
    }, 100);
});
