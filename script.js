// 1. CURSOR PERSONALIZADO
const cursor = document.querySelector('.custom-cursor');
const dot = document.querySelector('.custom-cursor-dot');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { x: e.clientX - 20, y: e.clientY - 20, duration: 0.3 });
    gsap.to(dot, { x: e.clientX - 3, y: e.clientY - 3, duration: 0.1 });
});

// 2. SECUENCIA DE BIENVENIDA (INTRO)
const introTl = gsap.timeline({
    onComplete: () => {
        document.getElementById('intro-overlay').style.display = 'none';
    }
});

introTl.to(".intro-line", {
    opacity: 1,
    y: -10,
    stagger: 0.4,
    duration: 0.8,
    ease: "power2.out"
})
.to(".intro-line", {
    opacity: 0,
    y: -20,
    stagger: 0.2,
    duration: 0.5,
    delay: 0.5
})
.to("#intro-overlay", {
    opacity: 0,
    duration: 1,
    ease: "power4.inOut"
});

// 3. ANIMACIONES AL HACER SCROLL (GSAP ScrollTrigger)
gsap.registerPlugin(ScrollTrigger);

// Revelación del Hero
gsap.from(".hero__content", {
    scrollTrigger: ".hero",
    opacity: 0,
    y: 50,
    duration: 1.5,
    delay: 2.5 // Espera a que termine la intro
});

// Contador de Métricas
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    ScrollTrigger.create({
        trigger: counter,
        onEnter: () => {
            let target = +counter.getAttribute('data-target');
            let count = 0;
            let updateCount = setInterval(() => {
                count++;
                counter.innerText = count + (target === 45 ? "%" : "+");
                if(count === target) clearInterval(updateCount);
            }, 30);
        }
    });
});

// Efecto en Tarjetas del Portafolio
gsap.from(".project-card", {
    scrollTrigger: {
        trigger: ".portfolio__grid",
        start: "top 80%"
    },
    opacity: 0,
    y: 100,
    stagger: 0.2,
    duration: 1,
    ease: "power3.out"
});

// Animación de Marca Registrada en el Footer
gsap.from(".footer__logo", {
    scrollTrigger: ".footer",
    opacity: 0,
    scale: 0.8,
    duration: 1
});
