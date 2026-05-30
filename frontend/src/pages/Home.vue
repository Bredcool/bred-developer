<template>
    <div class="home-page text-white">

        <!-- ================= HERO ================= -->
        <section class="hero-section">

            <!-- Animated Grid -->
            <div class="grid-background"></div>

            <!-- Aurora -->
            <div class="aurora aurora-1"></div>
            <div class="aurora aurora-2"></div>
            <div class="aurora aurora-3"></div>

            <!-- Particles -->
            <div class="particles">
                <span v-for="n in 35" :key="n"></span>
            </div>

            <!-- THREE JS -->
            <canvas id="stars-canvas"></canvas>

            <!-- Floating Rings -->
            <div class="ring ring-1"></div>
            <div class="ring ring-2"></div>

            <!-- HERO CONTENT -->
            <div class="container hero-content">

                <div class="hero-badge">
                    <span></span>
                    Available for Freelance Projects
                </div>

                <h1 class="hero-title">
                    Building Modern <br />
                    <span>Fullstack Experiences</span>
                </h1>

                <p class="hero-description">
                    Hi, I'm <strong>Bred</strong> 👋
                    A Fullstack Developer focused on building modern,
                    scalable, and visually engaging applications
                    using Vue JS, Golang, and PostgreSQL.
                </p>

                <div class="hero-buttons">
                    <router-link to="/projects" class="primary-btn">
                        🚀 Explore Projects
                    </router-link>

                    <router-link to="/contact" class="secondary-btn">
                        Contact Me
                    </router-link>
                </div>

                <!-- Stats -->
                <div class="hero-stats">

                    <div class="stat-card">
                        <h3>10+</h3>
                        <p>Projects Built</p>
                    </div>

                    <div class="stat-card">
                        <h3>Fullstack</h3>
                        <p>Development</p>
                    </div>

                    <div class="stat-card">
                        <h3>Fast</h3>
                        <p>Learner</p>
                    </div>

                </div>

            </div>

            <!-- RIGHT SIDE 3D -->
            <div class="hero-visual">

                <div class="orbital-wrapper">

                    <div class="orbital-ring orbital-ring-1"></div>
                    <div class="orbital-ring orbital-ring-2"></div>

                    <!-- 3D Cube -->
                    <div class="cube-scene">

                        <div class="floating-cube">
                            <div class="cube-face front"></div>
                            <div class="cube-face back"></div>
                            <div class="cube-face left"></div>
                            <div class="cube-face right"></div>
                            <div class="cube-face top"></div>
                            <div class="cube-face bottom"></div>
                        </div>

                    </div>

                </div>

            </div>

        </section>

        <!-- ================= SKILLS ================= -->
        <section class="skills-section">

            <div class="container">

                <div class="section-header text-center">

                    <span class="section-badge">
                        TECHNOLOGIES
                    </span>

                    <h2>
                        Tech Stack & Skills
                    </h2>

                    <p>
                        Technologies and tools I use to build modern applications
                    </p>

                </div>

                <div class="skills-grid">

                    <div class="skill-card" v-for="skill in allSkills" :key="skill.name">

                        <div class="skill-icon">
                            <i :class="skill.icon"></i>
                        </div>

                        <h5>{{ skill.name }}</h5>

                        <p>{{ skill.category }}</p>

                        <div class="skill-line"></div>

                    </div>

                </div>

            </div>

        </section>

        <!-- ================= FEATURED ================= -->
        <section class="featured-section">

            <div class="container">

                <div class="featured-card">

                    <div class="featured-content">

                        <span class="section-badge">
                            FEATURED
                        </span>

                        <h2>
                            Clean Architecture <br />
                            Meets Modern Design
                        </h2>

                        <p>
                            I create applications that are not only visually engaging,
                            but also scalable, maintainable, and production-ready.
                        </p>

                        <router-link to="/projects" class="primary-btn">
                            View Projects
                        </router-link>

                    </div>

                    <!-- Floating Sphere -->
                    <div class="sphere-wrapper">

                        <div class="sphere-glow"></div>

                        <div class="glass-sphere">
                            <div class="sphere-core"></div>
                        </div>

                    </div>

                </div>

            </div>

        </section>

        <!-- ================= CTA ================= -->
        <section class="cta-section">

            <div class="container text-center">

                <div class="cta-box">

                    <span class="section-badge">
                        LET'S BUILD
                    </span>

                    <h2>
                        Have an idea to build?
                    </h2>

                    <p>
                        Let's create something modern, fast, and impactful together.
                    </p>

                    <router-link to="/contact" class="primary-btn">
                        Let's Talk
                    </router-link>

                </div>

            </div>

        </section>

    </div>
</template>

<script setup>
import * as THREE from "three"
import { onMounted } from "vue"

const frontendSkills = [
    { name: 'Vue JS', icon: 'fab fa-vuejs', category: 'Frontend' },
    { name: 'React JS', icon: 'fab fa-react', category: 'Frontend' },
    { name: 'Angular', icon: 'fab fa-angular', category: 'Frontend' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap', category: 'Frontend' },
    { name: 'HTML5', icon: 'fab fa-html5', category: 'Frontend' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', category: 'Frontend' },
]

const backendSkills = [
    { name: 'Golang', icon: 'fa-brands fa-golang', category: 'Backend' },
    { name: 'Express JS', icon: 'fab fa-node-js', category: 'Backend' },
    { name: 'C#', icon: 'fa-solid fa-laptop-code', category: 'Backend' },
]

const databaseSkills = [
    { name: 'PostgreSQL', icon: 'fa fa-database', category: 'Database' },
    { name: 'MySQL', icon: 'fa fa-database', category: 'Database' },
    { name: 'MSSQL', icon: 'fa fa-database', category: 'Database' },
]

const toolsSkills = [
    { name: 'Docker', icon: 'fab fa-docker', category: 'Tools' },
    { name: 'GitHub', icon: 'fab fa-github', category: 'Tools' },
    { name: 'Arduino', icon: 'fa-solid fa-microchip', category: 'Hardware' },
]

const allSkills = [
    ...frontendSkills,
    ...backendSkills,
    ...databaseSkills,
    ...toolsSkills,
]

onMounted(() => {

    const canvas = document.getElementById("stars-canvas")

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    )

    const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
    })

    renderer.setSize(window.innerWidth, window.innerHeight)

    const geometry = new THREE.BufferGeometry()

    const vertices = []

    for (let i = 0; i < 4500; i++) {

        vertices.push(
            (Math.random() - 0.5) * 3000,
            (Math.random() - 0.5) * 3000,
            -Math.random() * 2500
        )

    }

    geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(vertices, 3)
    )

    const material = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 1,
    })

    const stars = new THREE.Points(geometry, material)

    scene.add(stars)

    camera.position.z = 5

    let mouseX = 0
    let mouseY = 0

    window.addEventListener("mousemove", (e) => {

        mouseX = (e.clientX / window.innerWidth) * 2 - 1
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1

    })

    function animate() {

        requestAnimationFrame(animate)

        stars.rotation.y += 0.0002
        stars.rotation.x += 0.0001

        camera.position.x += (mouseX * 1.5 - camera.position.x) * 0.02
        camera.position.y += (mouseY * 1.5 - camera.position.y) * 0.02

        renderer.render(scene, camera)

    }

    animate()

    window.addEventListener("resize", () => {

        camera.aspect = window.innerWidth / window.innerHeight

        camera.updateProjectionMatrix()

        renderer.setSize(window.innerWidth, window.innerHeight)

    })

})
</script>

<style scoped>
/* =========================
GLOBAL
========================= */

.home-page {
    background:
        radial-gradient(circle at top,
            #111827 0%,
            #070b12 45%,
            #020409 100%);

    overflow: hidden;
}

/* =========================
HERO
========================= */

.hero-section {
    position: relative;

    min-height: 100vh;

    display: flex;
    align-items: center;

    overflow: hidden;

    padding-top: 120px;
    padding-bottom: 120px;
}

.hero-content {
    position: relative;
    z-index: 5;

    margin-top: -50px;
    max-width: 760px;
}

.hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 10px;

    padding: 10px 20px;

    border-radius: 999px;

    background:
        rgba(255, 255, 255, 0.05);

    border:
        1px solid rgba(255, 255, 255, 0.08);

    backdrop-filter: blur(12px);

    margin-bottom: 28px;

    animation: fadeUp 1s ease;
}

.hero-badge span {
    width: 10px;
    height: 10px;

    border-radius: 50%;

    background: #00ff9d;

    box-shadow:
        0 0 12px #00ff9d;
}

.hero-title {
    font-size: 5.5rem;
    font-weight: 900;

    line-height: 1.05;

    margin-bottom: 28px;

    animation: fadeUp 1s ease;
}

.hero-title span {
    background:
        linear-gradient(to right,
            #00ff9d,
            #00c3ff);

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.hero-description {
    max-width: 680px;

    font-size: 1.15rem;
    line-height: 1.9;

    color: rgba(255, 255, 255, 0.72);

    margin-bottom: 40px;

    animation: fadeUp 1.2s ease;
}

.hero-buttons {
    display: flex;
    gap: 18px;

    flex-wrap: wrap;

    margin-bottom: 60px;
}

/* =========================
BUTTONS
========================= */

.primary-btn,
.secondary-btn {
    position: relative;

    padding: 16px 30px;

    border-radius: 18px;

    text-decoration: none;

    font-weight: 700;

    transition: all 0.35s ease;

    overflow: hidden;
}

.primary-btn {
    color: white;

    background:
        linear-gradient(135deg,
            #00ff9d,
            #00c3ff);

    box-shadow:
        0 0 35px rgba(0, 255, 157, 0.2);
}

.primary-btn:hover {
    transform:
        translateY(-5px) scale(1.03);

    color: white;
}

.secondary-btn {
    color: white;

    background:
        rgba(255, 255, 255, 0.05);

    border:
        1px solid rgba(255, 255, 255, 0.08);

    backdrop-filter: blur(10px);
}

.secondary-btn:hover {
    color: white;

    background:
        rgba(255, 255, 255, 0.08);

    transform:
        translateY(-5px);
}

/* =========================
STATS
========================= */

.hero-stats {
    display: flex;
    gap: 20px;

    flex-wrap: wrap;
}

.stat-card {
    min-width: 170px;

    padding: 26px;

    border-radius: 26px;

    background:
        rgba(255, 255, 255, 0.05);

    border:
        1px solid rgba(255, 255, 255, 0.08);

    backdrop-filter: blur(16px);

    transition: all 0.35s ease;
}

.stat-card:hover {
    transform:
        translateY(-8px);

    border-color:
        rgba(0, 255, 157, 0.3);
}

.stat-card h3 {
    font-size: 2rem;
    font-weight: 800;

    margin-bottom: 8px;
}

.stat-card p {
    color: rgba(255, 255, 255, 0.65);
}

/* =========================
RIGHT VISUAL
========================= */

.hero-visual {
    position: absolute;

    right: 5%;
    top: 50%;

    transform: translateY(-50%);

    z-index: 2;
}

.orbital-wrapper {
    position: relative;

    width: 420px;
    height: 420px;

    display: flex;
    align-items: center;
    justify-content: center;
}

.orbital-ring {
    position: absolute;

    border-radius: 50%;

    border:
        1px solid rgba(255, 255, 255, 0.08);
}

.orbital-ring-1 {
    width: 380px;
    height: 380px;

    animation:
        rotateRing 18s linear infinite;
}

.orbital-ring-2 {
    width: 280px;
    height: 280px;

    animation:
        rotateRingReverse 14s linear infinite;
}

.ring {
    position: absolute;

    border-radius: 50%;

    border:
        1px solid rgba(0, 255, 157, 0.15);
}

.ring-1 {
    width: 700px;
    height: 700px;

    top: -250px;
    right: -250px;

    animation:
        rotateRing 30s linear infinite;
}

.ring-2 {
    width: 500px;
    height: 500px;

    bottom: -180px;
    left: -180px;

    animation:
        rotateRingReverse 24s linear infinite;
}

/* =========================
3D CUBE
========================= */

.cube-scene {
    width: 250px;
    height: 250px;

    perspective: 1200px;
}

.floating-cube {
    width: 180px;
    height: 180px;

    position: relative;

    transform-style: preserve-3d;

    animation:
        cubeRotate 10s linear infinite;
}

.cube-face {
    position: absolute;

    width: 180px;
    height: 180px;

    border:
        2px solid rgba(0, 255, 157, 0.35);

    background:
        rgba(255, 255, 255, 0.03);

    backdrop-filter: blur(8px);

    box-shadow:
        inset 0 0 30px rgba(0, 255, 157, 0.12),
        0 0 35px rgba(0, 255, 157, 0.12);
}

.front {
    transform: translateZ(90px);
}

.back {
    transform: rotateY(180deg) translateZ(90px);
}

.left {
    transform: rotateY(-90deg) translateZ(90px);
}

.right {
    transform: rotateY(90deg) translateZ(90px);
}

.top {
    transform: rotateX(90deg) translateZ(90px);
}

.bottom {
    transform: rotateX(-90deg) translateZ(90px);
}

/* =========================
CANVAS
========================= */

#stars-canvas {
    position: absolute;
    inset: 0;

    width: 100%;
    height: 100%;

    z-index: 0;
}

/* =========================
BACKGROUND
========================= */

.grid-background {
    position: absolute;
    inset: 0;

    background-image:
        linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);

    background-size: 80px 80px;

    mask-image:
        radial-gradient(circle at center,
            black 20%,
            transparent 90%);

    animation:
        gridMove 20s linear infinite;

    z-index: 0;
}

.aurora {
    position: absolute;

    border-radius: 50%;

    filter: blur(120px);

    opacity: 0.18;
}

.aurora-1 {
    width: 500px;
    height: 500px;

    background: #00ff9d;

    top: -100px;
    left: -100px;

    animation:
        floatAurora 10s ease-in-out infinite;
}

.aurora-2 {
    width: 450px;
    height: 450px;

    background: #00c3ff;

    bottom: -120px;
    right: -120px;

    animation:
        floatAurora 12s ease-in-out infinite;
}

.aurora-3 {
    width: 320px;
    height: 320px;

    background: #7c4dff;

    top: 40%;
    left: 45%;

    opacity: 0.1;

    animation:
        floatAurora 14s ease-in-out infinite;
}

/* =========================
PARTICLES
========================= */

.particles {
    position: absolute;
    inset: 0;

    z-index: 1;

    overflow: hidden;
}

.particles span {
    position: absolute;

    width: 4px;
    height: 4px;

    border-radius: 50%;

    background: rgba(255, 255, 255, 0.7);

    animation:
        particleFloat linear infinite;
}

.particles span:nth-child(odd) {
    background: rgba(0, 255, 157, 0.8);
}

.particles span:nth-child(1) {
    left: 10%;
    animation-duration: 18s;
    animation-delay: 0s;
}

.particles span:nth-child(2) {
    left: 20%;
    animation-duration: 22s;
    animation-delay: 2s;
}

.particles span:nth-child(3) {
    left: 30%;
    animation-duration: 16s;
    animation-delay: 1s;
}

.particles span:nth-child(4) {
    left: 40%;
    animation-duration: 25s;
    animation-delay: 5s;
}

.particles span:nth-child(5) {
    left: 50%;
    animation-duration: 20s;
    animation-delay: 3s;
}

.particles span:nth-child(6) {
    left: 60%;
    animation-duration: 14s;
    animation-delay: 2s;
}

.particles span:nth-child(7) {
    left: 70%;
    animation-duration: 19s;
    animation-delay: 4s;
}

.particles span:nth-child(8) {
    left: 80%;
    animation-duration: 26s;
    animation-delay: 1s;
}

.particles span:nth-child(9) {
    left: 90%;
    animation-duration: 18s;
    animation-delay: 3s;
}

.particles span:nth-child(n+10) {
    top: 100%;
    left: calc(var(--i) * 10%);
    animation-duration: 20s;
}

/* =========================
SECTIONS
========================= */

.skills-section,
.featured-section,
.cta-section {
    position: relative;

    padding: 120px 0;
}

.section-header {
    margin-bottom: 70px;
}

.section-badge {
    display: inline-block;

    padding: 8px 18px;

    border-radius: 999px;

    background:
        rgba(0, 255, 157, 0.08);

    border:
        1px solid rgba(0, 255, 157, 0.15);

    color: #00ff9d;

    margin-bottom: 20px;

    letter-spacing: 1px;
}

.section-header h2,
.featured-content h2,
.cta-section h2 {
    font-size: 3rem;
    font-weight: 900;

    margin-bottom: 18px;
}

.section-header p,
.featured-content p,
.cta-section p {
    color: rgba(255, 255, 255, 0.65);

    line-height: 1.8;
}

/* =========================
SKILLS
========================= */

.skills-grid {
    display: grid;

    grid-template-columns:
        repeat(auto-fit, minmax(220px, 1fr));

    gap: 24px;
}

.skill-card {
    position: relative;

    padding: 35px 24px;

    border-radius: 28px;

    background:
        rgba(255, 255, 255, 0.04);

    border:
        1px solid rgba(255, 255, 255, 0.06);

    overflow: hidden;

    transition: all 0.35s ease;
}

.skill-card:hover {
    transform:
        translateY(-10px);

    border-color:
        rgba(0, 255, 157, 0.25);
}

.skill-icon {
    width: 70px;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 20px;

    margin-bottom: 24px;

    font-size: 2rem;

    background:
        linear-gradient(135deg,
            rgba(0, 255, 157, 0.15),
            rgba(0, 195, 255, 0.15));
}

.skill-card h5 {
    font-size: 1.2rem;
    font-weight: 700;

    margin-bottom: 10px;
}

.skill-card p {
    color: rgba(255, 255, 255, 0.6);
}

.skill-line {
    position: absolute;

    width: 100%;
    height: 3px;

    left: 0;
    bottom: 0;

    background:
        linear-gradient(to right,
            #00ff9d,
            #00c3ff);
}

/* =========================
FEATURED
========================= */

.featured-card {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 40px;

    padding: 70px;

    border-radius: 40px;

    background:
        linear-gradient(135deg,
            rgba(255, 255, 255, 0.05),
            rgba(255, 255, 255, 0.02));

    border:
        1px solid rgba(255, 255, 255, 0.08);

    overflow: hidden;
}

.featured-content {
    flex: 1;
}

.sphere-wrapper {
    position: relative;

    width: 320px;
    height: 320px;

    display: flex;
    align-items: center;
    justify-content: center;
}

.glass-sphere {
    width: 220px;
    height: 220px;

    border-radius: 50%;

    background:
        rgba(255, 255, 255, 0.05);

    border:
        1px solid rgba(255, 255, 255, 0.08);

    backdrop-filter: blur(20px);

    display: flex;
    align-items: center;
    justify-content: center;

    animation:
        floatSphere 5s ease-in-out infinite;
}

.sphere-core {
    width: 120px;
    height: 120px;

    border-radius: 50%;

    background:
        linear-gradient(135deg,
            #00ff9d,
            #00c3ff);

    filter: blur(10px);
}

.sphere-glow {
    position: absolute;

    width: 260px;
    height: 260px;

    border-radius: 50%;

    background:
        rgba(0, 255, 157, 0.2);

    filter: blur(90px);
}

/* =========================
CTA
========================= */

.cta-box {
    padding: 80px 40px;

    border-radius: 40px;

    background:
        linear-gradient(135deg,
            rgba(255, 255, 255, 0.05),
            rgba(255, 255, 255, 0.02));

    border:
        1px solid rgba(255, 255, 255, 0.08);
}

/* =========================
ANIMATIONS
========================= */

@keyframes cubeRotate {
    from {
        transform:
            rotateX(0deg) rotateY(0deg);
    }

    to {
        transform:
            rotateX(360deg) rotateY(360deg);
    }
}

@keyframes rotateRing {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

@keyframes rotateRingReverse {
    from {
        transform: rotate(360deg);
    }

    to {
        transform: rotate(0deg);
    }
}

@keyframes particleFloat {
    from {
        transform:
            translateY(100vh);

        opacity: 0;
    }

    10% {
        opacity: 1;
    }

    90% {
        opacity: 1;
    }

    to {
        transform:
            translateY(-120vh);

        opacity: 0;
    }
}

@keyframes gridMove {
    from {
        transform:
            translateY(0);
    }

    to {
        transform:
            translateY(80px);
    }
}

@keyframes floatAurora {

    0%,
    100% {
        transform:
            translate(0, 0) scale(1);
    }

    50% {
        transform:
            translate(40px, -30px) scale(1.08);
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

@keyframes fadeUp {
    from {
        opacity: 0;

        transform:
            translateY(30px);
    }

    to {
        opacity: 1;

        transform:
            translateY(0);
    }
}

/* =========================
MOBILE
========================= */

@media (max-width: 1200px) {

    .hero-visual {
        opacity: 0.5;
        right: -40px;
    }

    .hero-title {
        font-size: 4.5rem;
    }
}

@media (max-width: 991px) {

    .hero-section {
        min-height: auto;

        padding-top: 140px;
        padding-bottom: 100px;
    }

    .hero-visual {
        display: none;
    }

    .hero-title {
        font-size: 3.5rem;
    }

    .featured-card {
        flex-direction: column;

        padding: 40px 30px;
    }

    .section-header h2,
    .featured-content h2,
    .cta-section h2 {
        font-size: 2.3rem;
    }
}

@media (max-width: 576px) {

    .hero-title {
        font-size: 2.5rem;
    }

    .hero-description {
        font-size: 1rem;
    }

    .hero-buttons {
        flex-direction: column;
    }

    .primary-btn,
    .secondary-btn {
        width: 100%;
        text-align: center;
    }

    .stat-card {
        width: 100%;
    }

    .skills-section,
    .featured-section,
    .cta-section {
        padding: 90px 0;
    }

    .cta-box {
        padding: 50px 24px;
    }
}
</style>