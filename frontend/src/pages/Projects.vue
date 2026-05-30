<template>
    <div class="projects-page text-white min-vh-100">

        <!-- =========================
            GLOBAL BACKGROUND
        ========================== -->
        <canvas id="space-canvas"></canvas>

        <div class="noise-overlay"></div>

        <div class="bg-orb orb1"></div>
        <div class="bg-orb orb2"></div>
        <div class="bg-orb orb3"></div>

        <!-- =========================
            HERO
        ========================== -->
        <section class="hero-section">

            <div class="container hero-content">

                <div class="hero-badge">
                    <span></span>
                    Selected Works & Experiments
                </div>

                <div class="row align-items-center g-5">

                    <!-- LEFT -->
                    <div class="col-lg-7">

                        <h1 class="hero-title">
                            Crafting Modern <br />
                            <span>Digital Experiences</span>
                        </h1>

                        <p class="hero-desc">
                            A collection of modern websites, dashboards,
                            AI tools, and immersive 3D experiences built
                            using Vue JS, Golang, PostgreSQL,
                            Three.js, and modern frontend technologies.
                        </p>

                        <div class="hero-buttons">
                            <router-link to="/contact" class="primary-btn">
                                Let's Build Together
                            </router-link>

                            <router-link to="/" class="secondary-btn">
                                Back To Home
                            </router-link>
                        </div>

                    </div>

                    <!-- RIGHT -->
                    <div class="col-lg-5">

                        <div class="hero-3d-wrapper">

                            <div class="ring ring-1"></div>
                            <div class="ring ring-2"></div>

                            <div class="floating-card card-1">
                                <i class="fab fa-vuejs"></i>
                            </div>

                            <div class="floating-card card-2">
                                <i class="fa-brands fa-golang"></i>
                            </div>

                            <div class="floating-card card-3">
                                <i class="fa-solid fa-cube"></i>
                            </div>

                            <div class="core-sphere"></div>

                        </div>

                    </div>

                </div>

            </div>
        </section>

        <!-- =========================
            PROJECTS
        ========================== -->
        <section class="projects-section">

            <div class="container">

                <div class="section-header text-center">

                    <span class="section-badge">
                        PORTFOLIO
                    </span>

                    <h2>
                        Featured Projects
                    </h2>

                    <p>
                        Modern interfaces, scalable architecture,
                        interactive visuals, and production-ready systems.
                    </p>

                </div>

                <div class="row g-4">

                    <div class="col-md-6 col-xl-4" v-for="project in projects" :key="project.id">

                        <div class="project-card">

                            <!-- TOP -->
                            <div class="project-image-wrapper">

                                <img :src="project.image" :alt="project.name" class="project-image" />

                                <div class="image-gradient"></div>

                                <div class="project-category">
                                    {{ project.category }}
                                </div>

                            </div>

                            <!-- CONTENT -->
                            <div class="project-content">

                                <div class="project-top">

                                    <h3 class="project-title">
                                        {{ project.name }}
                                    </h3>

                                    <p class="project-description">
                                        {{ project.description }}
                                    </p>

                                </div>

                                <!-- STACK -->
                                <div class="stack-wrapper">

                                    <span class="stack-badge" v-for="tech in project.stack" :key="tech">
                                        {{ tech }}
                                    </span>

                                </div>

                                <!-- BUTTONS -->
                                <div class="project-buttons">

                                    <a v-if="project.demo" :href="project.demo" target="_blank"
                                        class="btn-custom btn-demo">
                                        <i class="fa-solid fa-globe"></i>
                                        Live Demo
                                    </a>

                                    <a v-if="project.github" :href="project.github" target="_blank"
                                        class="btn-custom btn-github">
                                        <i class="fa-brands fa-github"></i>
                                        GitHub
                                    </a>

                                </div>

                            </div>

                            <!-- hover glow -->
                            <div class="card-glow"></div>

                        </div>

                    </div>

                </div>

            </div>
        </section>

    </div>
</template>

<script setup lang="ts">
import * as THREE from "three"
import { onMounted, onUnmounted } from "vue"

const projects = [
    {
        id: 1,
        name: 'BANANA GOD',
        category: 'Landing Page',
        description: 'Legendary banana chocolate website with futuristic branding and immersive modern UI experience.',
        image: '/assets/BANANA GOD.png',
        demo: 'https://banana-god.pages.dev/',
        github: 'https://github.com/Bredcool/Banana-GOD',
        stack: ['Vue', 'Bootstrap', 'Cloudflare']
    },
    {
        id: 2,
        name: 'Cireng RR',
        category: 'Product Landing',
        description: 'Modern landing page focused on branding, conversion, and responsive visual presentation.',
        image: '/assets/cireng_rr.jpg',
        demo: 'https://cireng-rr.pages.dev/',
        github: 'https://github.com/Bredcool/cireng-rr',
        stack: ['Vue', 'Bootstrap']
    },
    {
        id: 3,
        name: 'Karang Taruna RW.02',
        category: 'Company Profile',
        description: 'Professional organization website with informative structure and modern responsive layout.',
        image: '/assets/karang_taruna_rw02.jpg',
        demo: 'https://karang-taruna-rw02.pages.dev/',
        github: 'https://github.com/Bredcool/karang-taruna-rw02',
        stack: ['Vue', 'Responsive UI']
    },
    {
        id: 4,
        name: 'Mini 3D',
        category: '3D Experience',
        description: 'Interactive futuristic website featuring immersive 3D visuals and smooth animations.',
        image: '/assets/mini_3d.jpg',
        demo: 'https://mini-3d.pages.dev/',
        github: 'https://github.com/bredcool/mini-3d',
        stack: ['Spline', 'Vue', 'Three.js']
    },
    {
        id: 5,
        name: 'Mini Weather',
        category: 'Web App',
        description: 'Realtime weather application with modern dashboard UI and clean responsive experience.',
        image: '/assets/work_in_progress.jpg',
        demo: 'https://weather-app.pages.dev/',
        github: 'https://github.com/bredcool/mini-weather',
        stack: ['Vue', 'API']
    },
    {
        id: 6,
        name: 'Mini AI',
        category: 'AI Assistant',
        description: 'AI assistant inspired by conversational interfaces with modern interactive experience.',
        image: '/assets/work_in_progress.jpg',
        demo: 'https://mini-ai.pages.dev/',
        github: 'https://github.com/bredcool/mini-ai',
        stack: ['AI', 'Vue', 'API']
    },
    {
        id: 7,
        name: 'Dashboard Admin / CMS',
        category: 'Dashboard',
        description: 'Enterprise dashboard for products, analytics, transactions, reports, and management.',
        image: '/assets/work_in_progress.jpg',
        demo: 'https://dashboard-admin.pages.dev/',
        github: 'https://github.com/bredcool/dashboard-admin',
        stack: ['Vue', 'Golang', 'PostgreSQL']
    },
    {
        id: 8,
        name: 'Not Found Merch',
        category: 'E-Commerce',
        description: 'Modern online merchandise store with smooth UX and visually engaging storefront.',
        image: '/assets/work_in_progress.jpg',
        demo: 'https://not-found-merch.pages.dev/',
        github: 'https://github.com/Bredcool/not-found-merch',
        stack: ['Vue', 'Storefront']
    },
]

let renderer: THREE.WebGLRenderer
let animationFrameId = 0

onMounted(() => {

    const canvas = document.getElementById(
        "space-canvas"
    ) as HTMLCanvasElement

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        3000
    )

    camera.position.z = 5

    renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
    })

    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)

    // =========================
    // PARTICLES
    // =========================
    const particlesGeometry = new THREE.BufferGeometry()

    const particlesCount = 7000

    const positions = new Float32Array(
        particlesCount * 3
    )

    for (let i = 0; i < particlesCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 3000
    }

    particlesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
    )

    const particlesMaterial = new THREE.PointsMaterial({
        color: "#8effe0",
        size: 1.2,
        transparent: true,
        opacity: 0.9,
    })

    const particles = new THREE.Points(
        particlesGeometry,
        particlesMaterial
    )

    scene.add(particles)

    // =========================
    // MOUSE
    // =========================
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e: MouseEvent) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener(
        "mousemove",
        handleMouseMove
    )

    // =========================
    // ANIMATE
    // =========================
    const animate = () => {

        animationFrameId =
            requestAnimationFrame(animate)

        particles.rotation.y += 0.00035
        particles.rotation.x += 0.00008

        camera.position.x +=
            (mouseX * 1.5 - camera.position.x) * 0.03

        camera.position.y +=
            (mouseY * 1.5 - camera.position.y) * 0.03

        renderer.render(scene, camera)
    }

    animate()

    // =========================
    // RESIZE
    // =========================
    const handleResize = () => {

        camera.aspect =
            window.innerWidth / window.innerHeight

        camera.updateProjectionMatrix()

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        )
    }

    window.addEventListener(
        "resize",
        handleResize
    )

    onUnmounted(() => {

        cancelAnimationFrame(animationFrameId)

        window.removeEventListener(
            "mousemove",
            handleMouseMove
        )

        window.removeEventListener(
            "resize",
            handleResize
        )

        renderer.dispose()
    })
})
</script>

<style scoped>
/* =========================
   GLOBAL
========================= */
.projects-page {
    position: relative;
    overflow: hidden;
    background:
        radial-gradient(circle at top,
            #0f172a 0%,
            #050816 55%,
            #02040b 100%);
}

/* =========================
   THREE CANVAS
========================= */
#space-canvas {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
}

/* =========================
   NOISE
========================= */
.noise-overlay {
    position: fixed;
    inset: 0;
    z-index: 1;
    opacity: 0.04;
    pointer-events: none;

    background-image:
        url("https://www.transparenttextures.com/patterns/asfalt-dark.png");
}

/* =========================
   GLOW
========================= */
.bg-orb {
    position: fixed;
    border-radius: 50%;
    filter: blur(120px);
    z-index: 0;
    opacity: 0.18;
}

.orb1 {
    width: 500px;
    height: 500px;
    background: #00ffb3;
    top: -200px;
    left: -180px;
}

.orb2 {
    width: 500px;
    height: 500px;
    background: #0066ff;
    bottom: -200px;
    right: -180px;
}

.orb3 {
    width: 300px;
    height: 300px;
    background: #7c3aed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
}

/* =========================
   HERO
========================= */
.hero-section {
    position: relative;
    z-index: 2;

    margin-top: -50px;
    min-height: 100vh;

    display: flex;
    align-items: center;

    padding: 120px 0 80px;
}

.hero-content {
    position: relative;
    z-index: 2;
}

.hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 12px;

    padding: 12px 18px;

    border-radius: 999px;

    margin-bottom: 28px;

    background:
        rgba(255, 255, 255, 0.06);

    border:
        1px solid rgba(255, 255, 255, 0.08);

    backdrop-filter: blur(10px);
}

.hero-badge span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #00ff9d;

    box-shadow:
        0 0 15px #00ff9d;
}

.hero-title {
    font-size: clamp(3rem, 7vw, 6.5rem);
    font-weight: 900;
    line-height: 1.02;

    margin-bottom: 24px;
}

.hero-title span {
    background:
        linear-gradient(90deg,
            #00ffb3,
            #00c3ff,
            #7c3aed);

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.hero-desc {
    max-width: 680px;

    color: rgba(255, 255, 255, 0.7);

    line-height: 1.9;
    font-size: 1.1rem;

    margin-bottom: 40px;
}

.hero-buttons {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
}

/* =========================
   BUTTONS
========================= */
.primary-btn,
.secondary-btn {
    padding: 15px 28px;

    border-radius: 18px;

    text-decoration: none;

    font-weight: 700;

    transition: all 0.35s ease;
}

.primary-btn {
    color: #fff;

    background:
        linear-gradient(135deg,
            #00ffb3,
            #00c3ff);

    box-shadow:
        0 0 30px rgba(0, 255, 179, 0.2);
}

.primary-btn:hover {
    transform: translateY(-4px);
    color: white;
}

.secondary-btn {
    color: white;

    background:
        rgba(255, 255, 255, 0.05);

    border:
        1px solid rgba(255, 255, 255, 0.08);
}

.secondary-btn:hover {
    background:
        rgba(255, 255, 255, 0.09);

    color: white;

    transform: translateY(-4px);
}

/* =========================
   HERO 3D
========================= */
.hero-3d-wrapper {
    position: relative;

    width: 360px;
    height: 360px;

    margin: auto;
    margin-left: 100px;
}

.ring {
    position: absolute;
    inset: 0;

    border-radius: 50%;
    border:
        1px solid rgba(255, 255, 255, 0.08);
}

.ring-1 {
    animation:
        rotateRing 14s linear infinite;
}

.ring-2 {
    inset: 40px;

    border-color:
        rgba(0, 255, 179, 0.2);

    animation:
        rotateReverse 10s linear infinite;
}

.core-sphere {
    position: absolute;
    inset: 100px;

    border-radius: 50%;

    background:
        radial-gradient(circle at top left,
            #00ffb3,
            #00c3ff,
            #7c3aed);

    box-shadow:
        0 0 80px rgba(0, 255, 179, 0.45);

    animation:
        floatSphere 5s ease-in-out infinite;
}

.floating-card {
    position: absolute;

    width: 85px;
    height: 85px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 24px;

    background:
        rgba(255, 255, 255, 0.06);

    border:
        1px solid rgba(255, 255, 255, 0.08);

    backdrop-filter: blur(18px);

    font-size: 2rem;

    box-shadow:
        0 10px 30px rgba(0, 0, 0, 0.35);
}

.card-1 {
    top: 0;
    left: 30px;

    animation:
        floatCard 5s ease-in-out infinite;
}

.card-2 {
    right: 10px;
    top: 120px;

    animation:
        floatCard 6s ease-in-out infinite;
}

.card-3 {
    bottom: 0;
    left: 120px;

    animation:
        floatCard 4s ease-in-out infinite;
}

/* =========================
   SECTION
========================= */
.projects-section {
    position: relative;
    z-index: 2;

    padding-bottom: 120px;
}

.section-header {
    margin-bottom: 80px;
}

.section-badge {
    display: inline-block;

    padding: 8px 18px;

    border-radius: 999px;

    background:
        rgba(0, 255, 179, 0.08);

    border:
        1px solid rgba(0, 255, 179, 0.15);

    color: #00ffb3;

    margin-bottom: 20px;

    font-size: 0.9rem;
    letter-spacing: 1px;
}

.section-header h2 {
    font-size: 3.4rem;
    font-weight: 900;

    margin-bottom: 18px;
}

.section-header p {
    color: rgba(255, 255, 255, 0.65);

    max-width: 700px;
    margin: auto;

    line-height: 1.8;
}

/* =========================
   CARD
========================= */
.project-card {
    position: relative;

    overflow: hidden;

    height: 100%;

    border-radius: 30px;

    background:
        rgba(255, 255, 255, 0.05);

    border:
        1px solid rgba(255, 255, 255, 0.08);

    backdrop-filter: blur(20px);

    transition: all 0.45s ease;
}

.project-card:hover {
    transform:
        translateY(-12px);

    border-color:
        rgba(0, 255, 179, 0.3);

    box-shadow:
        0 20px 80px rgba(0, 0, 0, 0.4);
}

.project-card:hover .project-image {
    transform:
        scale(1.08);
}

.project-card:hover .card-glow {
    opacity: 1;
}

.project-image-wrapper {
    position: relative;
    overflow: hidden;
}

.project-image {
    width: 100%;
    height: 260px;

    object-fit: cover;

    transition: transform 0.5s ease;
}

.image-gradient {
    position: absolute;
    inset: 0;

    background:
        linear-gradient(to top,
            rgba(2, 4, 11, 1),
            transparent 50%);
}

.project-category {
    position: absolute;
    top: 18px;
    left: 18px;

    padding: 8px 14px;

    border-radius: 999px;

    background:
        rgba(0, 255, 179, 0.12);

    border:
        1px solid rgba(0, 255, 179, 0.18);

    color: #00ffb3;

    font-size: 0.8rem;
    font-weight: 700;

    backdrop-filter: blur(10px);
}

.project-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: calc(100% - 260px);

    padding: 28px;
}

.project-title {
    font-size: 1.5rem;
    font-weight: 800;

    margin-bottom: 14px;
}

.project-description {
    color: rgba(255, 255, 255, 0.68);

    line-height: 1.8;

    margin-bottom: 24px;
}

.stack-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    margin-bottom: 28px;
}

.stack-badge {
    padding: 7px 14px;

    border-radius: 999px;

    background:
        rgba(255, 255, 255, 0.05);

    border:
        1px solid rgba(255, 255, 255, 0.08);

    color: rgba(255, 255, 255, 0.75);

    font-size: 0.8rem;
}

.project-buttons {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}

.btn-custom {
    padding: 13px 18px;

    border-radius: 16px;

    display: inline-flex;
    align-items: center;
    gap: 10px;

    text-decoration: none;

    font-weight: 700;

    transition: all 0.35s ease;
}

.btn-demo {
    color: #fff;

    background:
        linear-gradient(135deg,
            #00ffb3,
            #00c3ff);
}

.btn-demo:hover {
    transform:
        translateY(-3px);

    color: white;

    box-shadow:
        0 12px 30px rgba(0, 255, 179, 0.3);
}

.btn-github {
    color: white;

    background:
        rgba(255, 255, 255, 0.05);

    border:
        1px solid rgba(255, 255, 255, 0.08);
}

.btn-github:hover {
    transform:
        translateY(-3px);

    background:
        rgba(255, 255, 255, 0.09);

    color: white;
}

.card-glow {
    position: absolute;

    width: 240px;
    height: 240px;

    border-radius: 50%;

    background:
        rgba(0, 255, 179, 0.2);

    filter: blur(90px);

    top: -80px;
    right: -80px;

    opacity: 0;

    transition: opacity 0.4s ease;
}

/* =========================
   ANIMATION
========================= */
@keyframes rotateRing {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

@keyframes rotateReverse {
    from {
        transform: rotate(360deg);
    }

    to {
        transform: rotate(0deg);
    }
}

@keyframes floatSphere {

    0%,
    100% {
        transform:
            translateY(0px);
    }

    50% {
        transform:
            translateY(-18px);
    }
}

@keyframes floatCard {

    0%,
    100% {
        transform:
            translateY(0px);
    }

    50% {
        transform:
            translateY(-12px);
    }
}

/* =========================
   MOBILE
========================= */
@media (max-width: 991px) {

    .hero-section {
        min-height: auto;
        padding: 140px 0 90px;
    }

    .hero-content {
        text-align: center;
    }

    .hero-desc {
        margin-inline: auto;
    }

    .hero-buttons {
        justify-content: center;
    }

    .hero-3d-wrapper {
        width: 280px;
        height: 280px;
        margin-top: 30px;
        margin-left: 10px;
    }

    .floating-card {
        width: 70px;
        height: 70px;
        font-size: 1.5rem;
    }

    .core-sphere {
        inset: 80px;
    }

    .section-header h2 {
        font-size: 2.4rem;
    }
}

@media (max-width: 576px) {

    .hero-title {
        font-size: 2.8rem;
    }

    .hero-buttons {
        flex-direction: column;
    }

    .primary-btn,
    .secondary-btn,
    .btn-custom {
        width: 100%;
        justify-content: center;
    }

    .project-content {
        padding: 22px;
    }

    .project-image {
        height: 220px;
    }

    .section-header h2 {
        font-size: 2rem;
    }
}
</style>