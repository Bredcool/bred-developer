<template>
    <div class="about-page text-white min-vh-100">

        <!-- ================= BACKGROUND ================= -->
        <div class="animated-bg">

            <!-- THREE CANVAS -->
            <canvas ref="bgCanvas" class="bg-canvas"></canvas>

            <!-- GRID -->
            <div class="grid-layer"></div>

            <!-- LIGHTS -->
            <div class="gradient-orb orb-1"></div>
            <div class="gradient-orb orb-2"></div>
            <div class="gradient-orb orb-3"></div>

            <!-- OVERLAY -->
            <div class="bg-overlay"></div>

        </div>

        <!-- ================= CONTENT ================= -->
        <section class="content-section">

            <div class="container py-5">

                <div class="glass-card">

                    <div class="row align-items-center g-5">

                        <!-- ================= LEFT ================= -->
                        <div class="col-lg-5 text-center">

                            <!-- PROFILE AREA -->
                            <div class="profile-scene">

                                <!-- RING -->
                                <div class="ring ring-1"></div>
                                <div class="ring ring-2"></div>

                                <!-- FLOAT CARD -->
                                <div class="profile-card">

                                    <!-- STATUS -->
                                    <div class="status-badge">
                                        <span></span>
                                        AVAILABLE FOR WORK
                                    </div>

                                    <!-- IMAGE -->
                                    <div class="profile-wrapper">

                                        <img
                                            src="../assets/profile.jpg"
                                            alt="Profile"
                                            class="profile-img"
                                        />

                                        <div class="profile-glow"></div>

                                    </div>

                                    <!-- NAME -->
                                    <h3 class="profile-name">
                                        Bred Developer
                                    </h3>

                                    <!-- ROLE -->
                                    <p class="profile-role">
                                        Fullstack Developer
                                    </p>

                                    <!-- STATS -->
                                    <div class="mini-stats">

                                        <div class="mini-stat">
                                            <h4>10+</h4>
                                            <span>Projects</span>
                                        </div>

                                        <div class="mini-stat">
                                            <h4>3D</h4>
                                            <span>Experience</span>
                                        </div>

                                        <div class="mini-stat">
                                            <h4>API</h4>
                                            <span>Architecture</span>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <!-- ================= RIGHT ================= -->
                        <div class="col-lg-7">

                            <div class="content-wrapper">

                                <span class="section-badge">
<<<<<<< HEAD
                                    FULLSTACK DEVELOPER
=======
                                    FULLSTACK ENGINEER
>>>>>>> fe7e7b5b1b27ee3eb1b53265cddd9e61e4a99951
                                </span>

                                <h1 class="main-title">
                                    Rediawan Ibrahim
                                </h1>

                                <h2 class="sub-title">
                                    Building Modern Digital Experiences
                                </h2>

                                <p class="description">
                                    I specialize in building modern and scalable
                                    web applications using
                                    <strong>Vue JS</strong>,
                                    <strong>Golang</strong>,
                                    and
                                    <strong>PostgreSQL</strong>.

                                    My focus is creating visually engaging
                                    interfaces, clean backend architecture,
                                    interactive 3D experiences,
                                    and high-performance applications
                                    ready for production.
                                </p>

                                <!-- TECH STACK -->
                                <div class="skill-list">

                                    <span>Vue JS</span>
                                    <span>Golang</span>
                                    <span>PostgreSQL</span>
                                    <span>Three JS</span>
                                    <span>Docker</span>
                                    <span>REST API</span>
                                    <span>Cloudflare</span>
                                    <span>Bootstrap</span>

                                </div>

                                <!-- BUTTONS -->
                                <div class="button-group">

                                    <a
                                        href="https://www.linkedin.com/in/rediawan-ibrahim-760b0a232/"
                                        target="_blank"
                                        class="button primary-btn"
                                    >
                                        <i class="bi bi-linkedin"></i>
                                        LinkedIn
                                    </a>

                                    <a
                                        href="https://github.com/Bredcool"
                                        target="_blank"
                                        class="button secondary-btn"
                                    >
                                        <i class="bi bi-github"></i>
                                        GitHub
                                    </a>

                                    <div class="dropdown d-inline-block">

                                        <button
                                            class="button cv-btn dropdown-toggle"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                        >
                                            <i class="bi bi-download"></i>
                                            Download CV
                                        </button>

                                        <ul class="dropdown-menu custom-dropdown">

                                            <li>
                                                <a
                                                    class="dropdown-item"
                                                    href="/assets/CV Rediawan Ibrahim.pdf"
                                                    download
                                                >
                                                    Indonesian Version
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    class="dropdown-item"
                                                    href="/assets/CV Rediawan Ibrahim (English).pdf"
                                                    download
                                                >
                                                    English Version
                                                </a>
                                            </li>

                                        </ul>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    </div>
</template>

<script setup lang="ts">
import * as THREE from "three"
import { onMounted, onBeforeUnmount, ref } from "vue"

const bgCanvas = ref<HTMLCanvasElement | null>(null)

onMounted(() => {

    if (!bgCanvas.value) return

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        2000
    )

    const renderer = new THREE.WebGLRenderer({
        canvas: bgCanvas.value,
        alpha: true,
        antialias: true,
    })

    renderer.setSize(window.innerWidth, window.innerHeight)

    camera.position.z = 6

    // PARTICLES
    const particlesGeometry = new THREE.BufferGeometry()

    const particleCount = 5000

    const positions = []

    for (let i = 0; i < particleCount; i++) {

        positions.push(
            (Math.random() - 0.5) * 2500,
            (Math.random() - 0.5) * 2500,
            (Math.random() - 0.5) * 2500
        )
    }

    particlesGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(positions, 3)
    )

    const particlesMaterial = new THREE.PointsMaterial({
        color: "#ffffff",
        size: 1.2,
    })

    const particles = new THREE.Points(
        particlesGeometry,
        particlesMaterial
    )

    scene.add(particles)

    // FLOATING OBJECT
    const geometry = new THREE.IcosahedronGeometry(1.8, 1)

    const material = new THREE.MeshBasicMaterial({
        color: "#00ff88",
        wireframe: true,
    })

    const shape = new THREE.Mesh(geometry, material)

    shape.position.x = 4
    shape.position.y = 0

    scene.add(shape)

    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e: MouseEvent) => {

        mouseX = (e.clientX / window.innerWidth) * 2 - 1
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener("mousemove", handleMouseMove)

    const animate = () => {

        requestAnimationFrame(animate)

        particles.rotation.y += 0.0004
        particles.rotation.x += 0.0001

        shape.rotation.x += 0.004
        shape.rotation.y += 0.006

        shape.position.y =
            Math.sin(Date.now() * 0.0015) * 0.3

        camera.position.x +=
            (mouseX * 1.5 - camera.position.x) * 0.03

        camera.position.y +=
            (mouseY * 1.5 - camera.position.y) * 0.03

        renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {

        camera.aspect =
            window.innerWidth / window.innerHeight

        camera.updateProjectionMatrix()

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        )
    }

    window.addEventListener("resize", handleResize)

    onBeforeUnmount(() => {
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
   PAGE
========================= */

.about-page {
    position: relative;
    overflow: hidden;
    background:
        radial-gradient(circle at top,
            #101828 0%,
            #050816 60%);
}

/* =========================
   BACKGROUND
========================= */

.animated-bg {
    position: fixed;
    inset: 0;
    z-index: 0;
}

.bg-canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
}

.grid-layer {
    position: absolute;
    inset: 0;

    background-image:
        linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
        linear-gradient(90deg,
            rgba(255, 255, 255, 0.03) 1px,
            transparent 1px);

    background-size: 40px 40px;

    mask-image:
        radial-gradient(circle at center,
            rgba(0, 0, 0, 1),
            transparent 85%);
}

.bg-overlay {
    position: absolute;
    inset: 0;

    background:
        linear-gradient(to bottom,
            rgba(5, 8, 22, 0.2),
            rgba(5, 8, 22, 0.92));
}

.gradient-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(120px);
    opacity: 0.22;
}

.orb-1 {
    width: 450px;
    height: 450px;
    background: #00ff88;

    top: -150px;
    left: -150px;
}

.orb-2 {
    width: 450px;
    height: 450px;
    background: #0099ff;

    bottom: -150px;
    right: -150px;
}

.orb-3 {
    width: 300px;
    height: 300px;
    background: #ff00aa;

    top: 50%;
    left: 50%;
}

/* =========================
   CONTENT
========================= */

.content-section {
    position: relative;
    z-index: 5;
}

.glass-card {
    position: relative;

    padding: 60px;

    border-radius: 36px;

    background:
        rgba(255, 255, 255, 0.05);

    border:
        1px solid rgba(255, 255, 255, 0.08);

    backdrop-filter: blur(22px);

    overflow: hidden;

    box-shadow:
        0 20px 80px rgba(0, 0, 0, 0.4);
}

.glass-card::before {
    content: "";

    position: absolute;
    inset: 0;

    background:
        linear-gradient(135deg,
            rgba(255, 255, 255, 0.08),
            transparent 40%);

    pointer-events: none;
}

/* =========================
   PROFILE
========================= */

.profile-scene {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.profile-card {
    position: relative;
    z-index: 2;

    width: 100%;
    max-width: 360px;

    padding: 40px 30px;

    border-radius: 30px;

    background:
        rgba(255, 255, 255, 0.05);

    border:
        1px solid rgba(255, 255, 255, 0.08);

    backdrop-filter: blur(18px);

    animation:
        floating 6s ease-in-out infinite;
}

.ring {
    position: absolute;
    border-radius: 50%;
    border:
        1px solid rgba(255, 255, 255, 0.08);
}

.ring-1 {
    width: 420px;
    height: 420px;

    animation:
        rotateRing 20s linear infinite;
}

.ring-2 {
    width: 320px;
    height: 320px;

    border-style: dashed;

    animation:
        rotateRingReverse 16s linear infinite;
}

.status-badge {
    display: inline-flex;
    align-items: center;
    gap: 10px;

    padding: 10px 18px;

    border-radius: 999px;

    background:
        rgba(0, 255, 136, 0.12);

    border:
        1px solid rgba(0, 255, 136, 0.2);

    color: #00ff88;

    font-size: 0.8rem;
    font-weight: 600;

    margin-bottom: 24px;
}

.status-badge span {
    width: 10px;
    height: 10px;

    border-radius: 50%;
    background: #00ff88;

    box-shadow:
        0 0 12px #00ff88;
}

.profile-wrapper {
    position: relative;
    width: fit-content;
    margin: auto;
}

.profile-img {
    width: 220px;
    height: 220px;

    object-fit: cover;

    border-radius: 28px;

    position: relative;
    z-index: 2;

    border:
        2px solid rgba(255, 255, 255, 0.12);

    box-shadow:
        0 0 50px rgba(0, 255, 136, 0.2);
}

.profile-glow {
    position: absolute;
    inset: -20px;

    border-radius: 40px;

    background:
        radial-gradient(circle,
            rgba(0, 255, 136, 0.35),
            transparent 70%);

    filter: blur(40px);
}

.profile-name {
    margin-top: 24px;

    font-size: 1.8rem;
    font-weight: 800;
}

.profile-role {
    color: rgba(255, 255, 255, 0.6);
}

.mini-stats {
    display: flex;
    justify-content: center;
    gap: 16px;

    margin-top: 28px;
}

.mini-stat {
    flex: 1;

    padding: 14px;

    border-radius: 18px;

    background:
        rgba(255, 255, 255, 0.05);

    border:
        1px solid rgba(255, 255, 255, 0.06);
}

.mini-stat h4 {
    font-weight: 800;
    color: #00ff88;
}

.mini-stat span {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.6);
}

/* =========================
   TEXT
========================= */

.content-wrapper {
    position: relative;
    z-index: 2;
}

.section-badge {
    display: inline-block;

    padding: 10px 18px;

    border-radius: 999px;

    background:
        rgba(0, 255, 136, 0.1);

    border:
        1px solid rgba(0, 255, 136, 0.18);

    color: #00ff88;

    font-size: 0.82rem;
    letter-spacing: 1px;

    margin-bottom: 22px;
}

.main-title {
    font-size: 4.5rem;
    font-weight: 900;

    line-height: 1;

    margin-bottom: 18px;

    background:
        linear-gradient(90deg,
            #ffffff,
            #00ff88,
            #00c3ff);

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.sub-title {
    font-size: 1.5rem;

    color: rgba(255, 255, 255, 0.75);

    margin-bottom: 24px;
}

.description {
    font-size: 1.05rem;
    line-height: 1.9;

    color: rgba(255, 255, 255, 0.72);

    margin-bottom: 34px;
}

/* =========================
   SKILLS
========================= */

.skill-list {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;

    margin-bottom: 40px;
}

.skill-list span {
    padding: 10px 18px;

    border-radius: 999px;

    background:
        rgba(255, 255, 255, 0.05);

    border:
        1px solid rgba(255, 255, 255, 0.08);

    transition: all 0.3s ease;
}

.skill-list span:hover {
    transform: translateY(-4px);

    background:
        rgba(0, 255, 136, 0.12);

    border-color:
        rgba(0, 255, 136, 0.25);

    color: #00ff88;
}

/* =========================
   BUTTONS
========================= */

.button-group {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
}

.button {
    padding: 15px 24px;

    border-radius: 16px;

    text-decoration: none;

    font-weight: 600;

    display: inline-flex;
    align-items: center;
    gap: 10px;

    transition: all 0.3s ease;
}

.primary-btn {
    background:
        linear-gradient(135deg,
            #00ff88,
            #00c3ff);

    color: #000;
}

.primary-btn:hover {
    transform: translateY(-5px);

    box-shadow:
        0 10px 30px rgba(0, 255, 136, 0.25);
}

.secondary-btn,
.cv-btn {
    color: white;

    background:
        rgba(255, 255, 255, 0.05);

    border:
        1px solid rgba(255, 255, 255, 0.08);
}

.secondary-btn:hover,
.cv-btn:hover {
    transform: translateY(-5px);

    background:
        rgba(255, 255, 255, 0.08);
}

/* =========================
   DROPDOWN
========================= */

.custom-dropdown {
    background: #0f172a;

    border-radius: 18px;

    padding: 10px;

    border:
        1px solid rgba(255, 255, 255, 0.08);

    backdrop-filter: blur(18px);
}

.custom-dropdown .dropdown-item {
    color: white;

    border-radius: 12px;

    padding: 12px 16px;

    transition: 0.3s ease;
}

.custom-dropdown .dropdown-item:hover {
    background:
        rgba(0, 255, 136, 0.12);

    color: #00ff88;

    transform: translateX(4px);
}

/* =========================
   ANIMATION
========================= */

@keyframes floating {
    0% {
        transform:
            translateY(0px);
    }

    50% {
        transform:
            translateY(-12px);
    }

    100% {
        transform:
            translateY(0px);
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

@keyframes matrixRain {

    from {
        background-position: 0 -50px;
    }

    to {
        background-position: 0 50px;
    }
}

@keyframes flicker {

    0% {
        opacity: 1;
    }

    50% {
        opacity: 0.2;
    }

    100% {
        opacity: 1;
    }
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 991px) {

    .glass-card {
        padding: 40px 28px;
    }

    .main-title {
        font-size: 3.2rem;
    }

    .profile-img {
        width: 190px;
        height: 190px;
    }

    .ring-1 {
        width: 340px;
        height: 340px;
    }

    .ring-2 {
        width: 260px;
        height: 260px;
    }
}

@media (max-width: 768px) {

    .glass-card {
        padding: 30px 20px;
        border-radius: 26px;
    }

    .main-title {
        font-size: 2.4rem;
    }

    .sub-title {
        font-size: 1.1rem;
    }

    .description {
        font-size: 0.95rem;
    }

    .button-group,
    .skill-list {
        justify-content: center;
    }

    .profile-card {
        max-width: 100%;
    }

    .profile-img {
        width: 160px;
        height: 160px;
    }

    .mini-stats {
        flex-direction: column;
    }

    .ring-1,
    .ring-2 {
        display: none;
    }
}
</style>