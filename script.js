// SECUENCIA DE LOADER
window.addEventListener('load', () => {
    const tl = gsap.timeline();

    // 1. Mostrar palabras en Negro sobre Blanco
    tl.to(".intro-word", {
        opacity: 1,
        y: -10,
        stagger: 0.4,
        duration: 0.8,
        ease: "power2.out"
    });

    tl.to(".intro-bar", { width: "100px", duration: 0.8 }, "-=0.4");

    // 2. Apagado y transición al negro
    tl.to("#loader-portal", {
        y: "-100%",
        duration: 1.2,
        ease: "expo.inOut",
        delay: 0.5
    });

    // 3. Revelar el Logo Oro y el Hero
    tl.from(".gold-logo", { opacity: 0, x: -50, duration: 1 }, "-=0.5");
    tl.from(".hero-title", { opacity: 0, scale: 0.8, duration: 1.5, ease: "power4.out" }, "-=0.8");
});

// Scroll suave para los proyectos
gsap.utils.toArray(".project-row").forEach(row => {
    gsap.from(row, {
        scrollTrigger: {
            trigger: row,
            start: "top 80%",
        },
        opacity: 0,
        y: 100,
        duration: 1
    });
});
// Asegúrate de añadir ScrollTrigger al inicio del JS
gsap.registerPlugin(ScrollTrigger);

// 1. RE-ESTRENO DE LA PÁGINA (Ajuste del loader existente)
window.addEventListener('load', () => {
    const tl = gsap.timeline();
    tl.to(".intro-word", { opacity: 1, y: -10, stagger: 0.4, duration: 0.8 })
      .to("#loader-portal", { y: "-100%", duration: 1.2, ease: "expo.inOut", delay: 0.5 });
    
    // Iniciar animaciones de scroll después del loader
    initScrollAnimations();
});

function initScrollAnimations() {
    // Animación para cada fila de proyecto
    gsap.utils.toArray(".project-row").forEach(row => {
        gsap.fromTo(row, 
            { opacity: 0, x: -50 }, 
            { 
                opacity: 1, 
                x: 0, 
                duration: 1.2,
                scrollTrigger: {
                    trigger: row,
                    start: "top 85%",
                    end: "top 20%",
                    toggleActions: "play reverse play reverse" // SE ANIMA AL SUBIR Y BAJAR
                }
            }
        );
    });

    // Animación de las reseñas (aparecen en cascada)
    gsap.from(".review-card", {
        scrollTrigger: {
            trigger: ".reviews",
            start: "top 80%"
        },
        scale: 0.8,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "back.out(1.7)"
    });

    // Movimiento sutil de las luces de fondo con el mouse
    document.addEventListener("mousemove", (e) => {
        const x = (e.clientX / window.innerWidth) * 30;
        const y = (e.clientY / window.innerHeight) * 30;
        gsap.to("body::before", { x: x, y: y, duration: 2 });
    });
}
