<template>
    <div class="contact-page text-white">

        <!-- ========================= -->
        <!-- FUTURISTIC BACKGROUND -->
        <!-- ========================= -->

        <div class="bg-noise"></div>

        <div class="bg-gradient gradient-1"></div>
        <div class="bg-gradient gradient-2"></div>
        <div class="bg-gradient gradient-3"></div>

        <!-- THREE JS -->
        <canvas ref="canvasRef" id="stars-contact"></canvas>

        <!-- GRID -->
        <div class="grid-overlay"></div>

        <!-- ========================= -->
        <!-- HERO -->
        <!-- ========================= -->

        <section class="contact-hero">

            <div class="container">

                <div class="hero-wrapper">

                    <!-- LEFT -->
                    <div class="hero-left">

                        <div class="hero-badge">
                            <span></span>
                            Available for Freelance & Collaboration
                        </div>

                        <h1 class="hero-title">
                            Let's Build <br />
                            <span>Something Incredible</span>
                        </h1>

                        <p class="hero-description">
                            Need a modern dashboard, scalable backend,
                            interactive landing page, or futuristic 3D website?
                            Let's create a fast, elegant, and production-ready experience together.
                        </p>

                        <!-- BUTTONS -->
                        <div class="hero-buttons">

                            <a :href="whatsappUrl" target="_blank" class="primary-btn">
                                <i class="bi bi-whatsapp"></i>
                                Start Project
                            </a>

                            <a href="mailto:rediawanibrahim15@gmail.com" class="secondary-btn">
                                <i class="bi bi-envelope-fill"></i>
                                Email Me
                            </a>

                        </div>

                        <!-- STATS -->
                        <div class="stats-grid">

                            <div class="stat-card">
                                <h3>10+</h3>
                                <p>Projects</p>
                            </div>

                            <div class="stat-card">
                                <h3>Fullstack</h3>
                                <p>Development</p>
                            </div>

                            <div class="stat-card">
                                <h3>Modern</h3>
                                <p>UI / UX</p>
                            </div>

                        </div>

                    </div>

                    <!-- RIGHT -->
                    <div class="hero-right">

                        <!-- FLOATING 3D CARD -->
                        <div class="floating-card">

                            <div class="card-glow"></div>

                            <div class="top-line"></div>

                            <div class="floating-header">

                                <div class="mini-avatar">
                                    B
                                </div>

                                <div>
                                    <h5>Bred Developer</h5>
                                    <p>Fullstack Developer</p>
                                </div>

                            </div>

                            <!-- CONTACT -->
                            <div class="contact-list">

                                <div class="contact-item">

                                    <div class="icon-box whatsapp">
                                        <i class="bi bi-whatsapp"></i>
                                    </div>

                                    <div>
                                        <span>WhatsApp</span>
                                        <h6>+62 896-9321-8083</h6>
                                    </div>

                                </div>

                                <div class="contact-item">

                                    <div class="icon-box email">
                                        <i class="bi bi-envelope-fill"></i>
                                    </div>

                                    <div>
                                        <span>Email</span>
                                        <h6 class="small-text">
                                            rediawanibrahim15@gmail.com
                                        </h6>
                                    </div>

                                </div>

                                <div class="contact-item">

                                    <div class="icon-box social">
                                        <i class="bi bi-github"></i>
                                    </div>

                                    <div>
                                        <span>GitHub</span>
                                        <h6>Bredcool</h6>
                                    </div>

                                </div>

                            </div>

                            <!-- SOCIAL -->
                            <div class="social-wrapper">

                                <a href="https://github.com/Bredcool" target="_blank" class="social-btn">
                                    <i class="bi bi-github"></i>
                                </a>

                                <a href="https://www.linkedin.com/in/rediawan-ibrahim-760b0a232/" target="_blank"
                                    class="social-btn">
                                    <i class="bi bi-linkedin"></i>
                                </a>

                                <a href="https://www.instagram.com/rediawanibrahim" target="_blank" class="social-btn">
                                    <i class="bi bi-instagram"></i>
                                </a>

                            </div>

                            <!-- FLOATING BALL -->
                            <div class="floating-ball ball-1"></div>
                            <div class="floating-ball ball-2"></div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

        <!-- ========================= -->
        <!-- CONTACT CARDS -->
        <!-- ========================= -->

        <section class="contact-section">

            <div class="container">

                <div class="section-header text-center">

                    <span class="section-badge">
                        CONTACT CHANNELS
                    </span>

                    <h2>
                        Connect With Me
                    </h2>

                    <p>
                        Choose your preferred communication platform.
                    </p>

                </div>

                <div class="row g-4">

                    <!-- WhatsApp -->
                    <div class="col-lg-4 col-md-6">

                        <div class="contact-card">

                            <div class="contact-icon whatsapp-gradient">
                                <i class="bi bi-whatsapp"></i>
                            </div>

                            <h4>WhatsApp</h4>

                            <p>
                                Quick response for freelance projects,
                                startup ideas, and collaboration.
                            </p>

                            <a :href="whatsappUrl" target="_blank" class="card-btn green-btn">
                                Chat Now
                            </a>

                        </div>

                    </div>

                    <!-- Email -->
                    <div class="col-lg-4 col-md-6">

                        <div class="contact-card">

                            <div class="contact-icon yellow-gradient">
                                <i class="bi bi-envelope-fill"></i>
                            </div>

                            <h4>Email</h4>

                            <p>
                                Send business inquiries,
                                proposals, and project discussions.
                            </p>

                            <a href="mailto:rediawanibrahim15@gmail.com" class="card-btn yellow-btn">
                                Send Email
                            </a>

                        </div>

                    </div>

                    <!-- Social -->
                    <div class="col-lg-4 col-md-6">

                        <div class="contact-card">

                            <div class="contact-icon blue-gradient">
                                <i class="bi bi-globe2"></i>
                            </div>

                            <h4>Social Media</h4>

                            <p>
                                Explore portfolio updates,
                                open source work, and tech content.
                            </p>

                            <div class="mini-socials">

                                <a href="https://github.com/Bredcool" target="_blank">
                                    <i class="bi bi-github"></i>
                                </a>

                                <a href="https://www.linkedin.com/in/rediawan-ibrahim-760b0a232/" target="_blank">
                                    <i class="bi bi-linkedin"></i>
                                </a>

                                <a href="https://www.instagram.com/rediawanibrahim" target="_blank">
                                    <i class="bi bi-instagram"></i>
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    </div>
</template>

<script setup>
import * as THREE from "three"
import { onMounted, onBeforeUnmount, ref } from "vue"

const canvasRef = ref(null)

const phoneNumber = '6289693218083'

const message =
    'Halo Bred Developer! Saya ingin membuat Website.'

const whatsappUrl =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

let renderer
let scene
let camera
let animationId

onMounted(() => {

    const canvas = canvasRef.value

    scene = new THREE.Scene()

    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        3000
    )

    renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true
    })

    renderer.setPixelRatio(window.devicePixelRatio)

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    )

    // =========================
    // STARS
    // =========================

    const starGeometry =
        new THREE.BufferGeometry()

    const starVertices = []

    for (let i = 0; i < 7000; i++) {

        const x =
            (Math.random() - 0.5) * 3000

        const y =
            (Math.random() - 0.5) * 3000

        const z =
            (Math.random() - 0.5) * 3000

        starVertices.push(x, y, z)
    }

    starGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(
            starVertices,
            3
        )
    )

    const starMaterial =
        new THREE.PointsMaterial({
            color: 0xffffff,
            size: 1,
            transparent: true,
            opacity: 0.9
        })

    const stars =
        new THREE.Points(
            starGeometry,
            starMaterial
        )

    scene.add(stars)

    // =========================
    // FLOATING GEOMETRIES
    // =========================

    const torusGeometry =
        new THREE.TorusGeometry(12, 3, 16, 100)

    const torusMaterial =
        new THREE.MeshBasicMaterial({
            color: 0x00ffcc,
            wireframe: true
        })

    const torus =
        new THREE.Mesh(
            torusGeometry,
            torusMaterial
        )

    torus.position.set(35, 0, -120)

    scene.add(torus)

    const sphereGeometry =
        new THREE.IcosahedronGeometry(8, 1)

    const sphereMaterial =
        new THREE.MeshBasicMaterial({
            color: 0x00aaff,
            wireframe: true
        })

    const sphere =
        new THREE.Mesh(
            sphereGeometry,
            sphereMaterial
        )

    sphere.position.set(-40, 10, -90)

    scene.add(sphere)

    camera.position.z = 80

    // =========================
    // PARALLAX
    // =========================

    let mouseX = 0
    let mouseY = 0

    const onMouseMove = (e) => {

        mouseX =
            (e.clientX / window.innerWidth) * 2 - 1

        mouseY =
            -(e.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener(
        "mousemove",
        onMouseMove
    )

    // =========================
    // ANIMATE
    // =========================

    const animate = () => {

        animationId =
            requestAnimationFrame(animate)

        stars.rotation.y += 0.00025
        stars.rotation.x += 0.00008

        torus.rotation.x += 0.003
        torus.rotation.y += 0.004

        sphere.rotation.x += 0.002
        sphere.rotation.y += 0.003

        camera.position.x +=
            (mouseX * 10 - camera.position.x) * 0.03

        camera.position.y +=
            (mouseY * 5 - camera.position.y) * 0.03

        renderer.render(scene, camera)
    }

    animate()

    // =========================
    // RESIZE
    // =========================

    const onResize = () => {

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
        onResize
    )

    onBeforeUnmount(() => {

        cancelAnimationFrame(animationId)

        window.removeEventListener(
            "mousemove",
            onMouseMove
        )

        window.removeEventListener(
            "resize",
            onResize
        )

        renderer.dispose()
    })
})
</script>

<style scoped>
/* =========================
GLOBAL
========================= */

.contact-page {
    position: relative;
    overflow: hidden;
    background:
        radial-gradient(circle at top,
            #0f172a 0%,
            #050816 45%,
            #020617 100%);
}

/* =========================
BACKGROUND
========================= */

.bg-noise {
    position: fixed;
    inset: 0;

    opacity: 0.04;

    background-image:
        url("https://grainy-gradients.vercel.app/noise.svg");

    pointer-events: none;

    z-index: 0;
}

.grid-overlay {
    position: fixed;
    inset: 0;

    background-image:
        linear-gradient(rgba(255, 255, 255, 0.03) 1px,
            transparent 1px),
        linear-gradient(90deg,
            rgba(255, 255, 255, 0.03) 1px,
            transparent 1px);

    background-size: 50px 50px;

    mask-image:
        radial-gradient(circle at center,
            black,
            transparent 80%);

    z-index: 0;
}

.bg-gradient {
    position: fixed;
    border-radius: 50%;
    filter: blur(140px);
    opacity: 0.16;
}

.gradient-1 {
    width: 500px;
    height: 500px;

    background: #00ffb3;

    top: -150px;
    left: -150px;
}

.gradient-2 {
    width: 500px;
    height: 500px;

    background: #0099ff;

    bottom: -180px;
    right: -180px;
}

.gradient-3 {
    width: 300px;
    height: 300px;

    background: #7c3aed;

    top: 40%;
    left: 50%;
}

/* =========================
THREE
========================= */

#stars-contact {
    position: fixed;
    inset: 0;

    width: 100%;
    height: 100%;

    z-index: 0;
}

/* =========================
HERO
========================= */

.contact-hero {
    position: relative;
    z-index: 2;

    margin-top: -50px;
    min-height: 100vh;

    display: flex;
    align-items: center;

    padding:
        120px 0 80px;
}

.hero-wrapper {
    display: grid;
    grid-template-columns:
        1.1fr 0.9fr;

    align-items: center;
    gap: 70px;
}

.hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 12px;

    padding: 12px 20px;

    border-radius: 999px;

    background:
        rgba(255, 255, 255, 0.06);

    border:
        1px solid rgba(255, 255, 255, 0.08);

    backdrop-filter: blur(12px);

    margin-bottom: 28px;
}

.hero-badge span {
    width: 10px;
    height: 10px;

    border-radius: 50%;

    background: #00ff88;

    box-shadow:
        0 0 12px #00ff88;
}

.hero-title {
    font-size: clamp(3.5rem, 7vw, 6.5rem);

    font-weight: 900;

    line-height: 1;

    margin-bottom: 28px;
}

.hero-title span {
    background:
        linear-gradient(90deg,
            #00ff88,
            #00c3ff);

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.hero-description {
    max-width: 700px;

    color: rgba(255, 255, 255, 0.7);

    font-size: 1.1rem;

    line-height: 1.9;

    margin-bottom: 40px;
}

/* =========================
BUTTONS
========================= */

.hero-buttons {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;

    margin-bottom: 60px;
}

.primary-btn,
.secondary-btn {
    padding: 15px 28px;

    border-radius: 18px;

    text-decoration: none;

    font-weight: 700;

    transition: 0.35s ease;

    display: inline-flex;
    align-items: center;
    gap: 12px;
}

.primary-btn {
    background:
        linear-gradient(135deg,
            #00ff88,
            #00c3ff);

    color: #000;

    box-shadow:
        0 0 35px rgba(0, 255, 136, 0.18);
}

.primary-btn:hover {
    transform:
        translateY(-5px);

    color: black;
}

.secondary-btn {
    color: white;

    border:
        1px solid rgba(255, 255, 255, 0.1);

    background:
        rgba(255, 255, 255, 0.05);

    backdrop-filter: blur(12px);
}

.secondary-btn:hover {
    transform:
        translateY(-5px);

    background:
        rgba(255, 255, 255, 0.08);

    color: white;
}

/* =========================
STATS
========================= */

.stats-grid {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.stat-card {
    min-width: 170px;

    padding: 24px;

    border-radius: 24px;

    background:
        rgba(255, 255, 255, 0.05);

    border:
        1px solid rgba(255, 255, 255, 0.08);

    backdrop-filter: blur(14px);

    transition: 0.35s ease;
}

.stat-card:hover {
    transform:
        translateY(-6px);

    border-color:
        rgba(0, 255, 136, 0.2);
}

.stat-card h3 {
    font-size: 2rem;
    font-weight: 800;

    margin-bottom: 4px;
}

.stat-card p {
    color: rgba(255, 255, 255, 0.6);
}

/* =========================
3D FLOATING CARD
========================= */

.hero-right {
    display: flex;
    justify-content: center;
}

.floating-card {
    position: relative;

    width: 100%;
    max-width: 430px;

    padding: 36px;

    border-radius: 36px;

    overflow: hidden;

    background:
        linear-gradient(135deg,
            rgba(255, 255, 255, 0.08),
            rgba(255, 255, 255, 0.03));

    border:
        1px solid rgba(255, 255, 255, 0.08);

    backdrop-filter: blur(24px);

    box-shadow:
        0 0 80px rgba(0, 255, 136, 0.08);

    animation:
        floatCard 6s ease-in-out infinite;
}

.card-glow {
    position: absolute;

    width: 260px;
    height: 260px;

    border-radius: 50%;

    background:
        rgba(0, 255, 136, 0.2);

    filter: blur(100px);

    top: -100px;
    right: -100px;
}

.top-line {
    width: 100%;
    height: 4px;

    border-radius: 999px;

    margin-bottom: 28px;

    background:
        linear-gradient(90deg,
            #00ff88,
            #00c3ff);
}

.floating-header {
    display: flex;
    align-items: center;
    gap: 16px;

    margin-bottom: 40px;
}

.mini-avatar {
    width: 70px;
    height: 70px;

    border-radius: 24px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 2rem;
    font-weight: 900;

    background:
        linear-gradient(135deg,
            #00ff88,
            #00c3ff);

    color: black;
}

.floating-header h5 {
    font-size: 1.3rem;
    font-weight: 700;
}

.floating-header p {
    color: rgba(255, 255, 255, 0.6);
}

.contact-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 18px;

    padding: 18px;

    border-radius: 20px;

    background:
        rgba(255, 255, 255, 0.04);

    border:
        1px solid rgba(255, 255, 255, 0.05);

    transition: 0.35s ease;
}

.contact-item:hover {
    transform:
        translateX(6px);

    border-color:
        rgba(0, 255, 136, 0.2);
}

.contact-item span {
    color: rgba(255, 255, 255, 0.55);

    font-size: 0.9rem;
}

.contact-item h6 {
    margin: 0;

    font-size: 1rem;
    font-weight: 700;
}

.small-text {
    font-size: 0.85rem !important;
    word-break: break-word;
}

.icon-box {
    width: 58px;
    height: 58px;

    border-radius: 18px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.4rem;
}

.whatsapp {
    background:
        rgba(0, 255, 136, 0.15);

    color: #00ff88;
}

.email {
    background:
        rgba(255, 204, 0, 0.15);

    color: #ffcc00;
}

.social {
    background:
        rgba(0, 170, 255, 0.15);

    color: #00aaff;
}

.social-wrapper {
    display: flex;
    gap: 14px;

    margin-top: 35px;
}

.social-btn {
    width: 52px;
    height: 52px;

    border-radius: 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;

    color: white;

    background:
        rgba(255, 255, 255, 0.05);

    border:
        1px solid rgba(255, 255, 255, 0.08);

    transition: 0.35s ease;
}

.social-btn:hover {
    transform:
        translateY(-5px);

    color: #00ff88;

    border-color:
        rgba(0, 255, 136, 0.2);
}

.floating-ball {
    position: absolute;

    border-radius: 50%;

    filter: blur(2px);
}

.ball-1 {
    width: 18px;
    height: 18px;

    background: #00ff88;

    top: 40px;
    right: 40px;

    animation:
        floatBall 4s ease-in-out infinite;
}

.ball-2 {
    width: 12px;
    height: 12px;

    background: #00aaff;

    bottom: 40px;
    left: 40px;

    animation:
        floatBall 5s ease-in-out infinite;
}

/* =========================
CONTACT SECTION
========================= */

.contact-section {
    position: relative;
    z-index: 2;

    padding-bottom: 120px;
}

.section-header {
    margin-bottom: 70px;
}

.section-badge {
    display: inline-block;

    padding: 10px 18px;

    border-radius: 999px;

    background:
        rgba(0, 255, 136, 0.08);

    border:
        1px solid rgba(0, 255, 136, 0.15);

    color: #00ff88;

    margin-bottom: 18px;

    font-size: 0.9rem;
}

.section-header h2 {
    font-size: 3rem;
    font-weight: 900;

    margin-bottom: 18px;
}

.section-header p {
    color: rgba(255, 255, 255, 0.6);
}

/* =========================
CARDS
========================= */

.contact-card {
    height: 100%;

    padding: 36px;

    border-radius: 30px;

    position: relative;

    overflow: hidden;

    background:
        rgba(255, 255, 255, 0.05);

    border:
        1px solid rgba(255, 255, 255, 0.08);

    backdrop-filter: blur(18px);

    transition: 0.4s ease;
}

.contact-card:hover {
    transform:
        translateY(-10px);

    border-color:
        rgba(0, 255, 136, 0.25);

    box-shadow:
        0 0 40px rgba(0, 255, 136, 0.08);
}

.contact-icon {
    width: 85px;
    height: 85px;

    border-radius: 26px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 2rem;

    margin-bottom: 24px;
}

.whatsapp-gradient {
    background:
        linear-gradient(135deg,
            rgba(0, 255, 136, 0.2),
            rgba(0, 255, 136, 0.08));

    color: #00ff88;
}

.yellow-gradient {
    background:
        linear-gradient(135deg,
            rgba(255, 204, 0, 0.2),
            rgba(255, 204, 0, 0.08));

    color: #ffcc00;
}

.blue-gradient {
    background:
        linear-gradient(135deg,
            rgba(0, 170, 255, 0.2),
            rgba(0, 170, 255, 0.08));

    color: #00aaff;
}

.contact-card h4 {
    font-size: 1.5rem;
    font-weight: 800;

    margin-bottom: 16px;
}

.contact-card p {
    color: rgba(255, 255, 255, 0.65);

    line-height: 1.8;

    margin-bottom: 28px;
}

.card-btn {
    padding: 14px 22px;

    border-radius: 16px;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;

    font-weight: 700;

    transition: 0.35s ease;
}

.green-btn {
    background:
        linear-gradient(135deg,
            #00ff88,
            #00c3ff);

    color: black;
}

.yellow-btn {
    background:
        linear-gradient(135deg,
            #ffcc00,
            #ff8a00);

    color: black;
}

.card-btn:hover {
    transform:
        translateY(-4px);
}

.mini-socials {
    display: flex;
    gap: 14px;
}

.mini-socials a {
    width: 50px;
    height: 50px;

    border-radius: 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;

    color: white;

    background:
        rgba(255, 255, 255, 0.05);

    border:
        1px solid rgba(255, 255, 255, 0.08);

    transition: 0.35s ease;
}

.mini-socials a:hover {
    transform:
        translateY(-5px);

    color: #00ff88;
}

/* =========================
ANIMATION
========================= */

@keyframes floatCard {

    0%,
    100% {
        transform:
            translateY(0px);
    }

    50% {
        transform:
            translateY(-14px);
    }
}

@keyframes floatBall {

    0%,
    100% {
        transform:
            translateY(0px);
    }

    50% {
        transform:
            translateY(-14px);
    }
}

/* =========================
RESPONSIVE
========================= */

@media (max-width: 991px) {

    .hero-wrapper {
        grid-template-columns: 1fr;
    }

    .hero-right {
        margin-top: 40px;
    }

    .hero-title {
        font-size: 4rem;
    }

    .section-header h2 {
        font-size: 2.4rem;
    }
}

@media (max-width: 768px) {

    .contact-hero {
        padding-top: 110px;
    }

    .hero-title {
        font-size: 2.8rem;
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
        justify-content: center;
    }

    .stats-grid {
        flex-direction: column;
    }

    .stat-card {
        width: 100%;
    }

    .floating-card {
        padding: 28px;
    }

    .contact-card {
        padding: 28px;
    }

    .section-header h2 {
        font-size: 2rem;
    }
}
</style>