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
