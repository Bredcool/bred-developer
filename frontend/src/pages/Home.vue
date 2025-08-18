<template>
    <div class="text-white min-vh-100 py-5">
        <section class="text-center py-5 text-light hero-gradient">
            <!-- Canvas untuk bintang -->
            <canvas id="stars-canvas"></canvas>

            <div class="container position-relative">
                <h1 class="display-4 fw-bold mb-4">
                    Hi, I'm <span class="text-warning">Bred</span> 👋
                </h1>
                <p class="lead mb-4">
                    A <strong>Fullstack Developer</strong> who builds clean, efficient, and scalable web applications
                </p>
                <p class="fs-5 text-white-50 fst-italic mb-4">
                    "Learning From The Past, Looking To The Future"
                </p>
                <router-link to="/projects" class="btn btn-lg btn-light text-dark px-4 py-2 shadow-sm">
                    🚀 View My Work
                </router-link>
            </div>
        </section>

        <!-- Skills Section -->
        <section class="py-5">
            <h2 class="text-center mb-3">Tech Stack & Skills</h2>

            <!-- Frontend -->
            <h4 class="text-center mb-3">Frontend</h4>
            <div class="row row-cols-2 row-cols-md-4 g-4 text-center mb-5">
                <div class="col" v-for="skill in frontendSkills" :key="skill.name">
                    <div class="card h-100 shadow-sm">
                        <div class="card-body glowing-border">
                            <i :class="skill.icon" style="font-size: 2rem;"></i>
                            <h5 class="card-title mt-2">{{ skill.name }}</h5>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Backend -->
            <h4 class="text-center mb-3">Backend</h4>
            <div class="row row-cols-2 row-cols-md-4 g-4 text-center mb-5">
                <div class="col" v-for="skill in backendSkills" :key="skill.name">
                    <div class="card h-100 shadow-sm">
                        <div class="card-body glowing-border">
                            <i :class="skill.icon" style="font-size: 2rem;"></i>
                            <h5 class="card-title mt-2">{{ skill.name }}</h5>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Database -->
            <h4 class="text-center mb-3">Database</h4>
            <div class="row row-cols-2 row-cols-md-4 g-4 text-center mb-5">
                <div class="col" v-for="skill in databaseSkills" :key="skill.name">
                    <div class="card h-100 shadow-sm">
                        <div class="card-body glowing-border">
                            <i :class="skill.icon" style="font-size: 2rem;"></i>
                            <h5 class="card-title mt-2">{{ skill.name }}</h5>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tools -->
            <h4 class="text-center mb-3">Tools</h4>
            <div class="row row-cols-2 row-cols-md-4 g-4 text-center mb-5">
                <div class="col" v-for="skill in toolsSkills" :key="skill.name">
                    <div class="card h-100 shadow-sm">
                        <div class="card-body glowing-border">
                            <i :class="skill.icon" style="font-size: 2rem;"></i>
                            <h5 class="card-title mt-2">{{ skill.name }}</h5>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Other -->
            <h4 class="text-center mb-3">Other</h4>
            <div class="row row-cols-2 row-cols-md-4 g-4 text-center mb-5">
                <div class="col" v-for="skill in otherSkills" :key="skill.name">
                    <div class="card h-100 shadow-sm">
                        <div class="card-body glowing-border">
                            <i :class="skill.icon" style="font-size: 2rem;"></i>
                            <h5 class="card-title mt-2">{{ skill.name }}</h5>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Soft -->
            <h4 class="text-center mb-3">Soft</h4>
            <div class="row row-cols-2 row-cols-md-4 g-4 text-center mb-5">
                <div class="col" v-for="skill in softSkills" :key="skill.name">
                    <div class="card h-100 shadow-sm">
                        <div class="card-body glowing-border">
                            <i :class="skill.icon" style="font-size: 2rem;"></i>
                            <h5 class="card-title mt-2">{{ skill.name }}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Projects Teaser -->
        <section class="py-5 bg-dark text-light rounded mt-4">
            <div class="text-center">
                <h2>Featured Projects</h2>
                <p>A sneak peek of what I've built</p>
                <router-link to="/projects" class="btn btn-outline-light mt-3">See All Projects</router-link>
            </div>
        </section>

        <!-- Contact CTA -->
        <section class="text-center py-5">
            <h3>Have a project or collaboration idea?</h3>
            <router-link to="/contact" class="btn btn-success mt-2">Contact Me</router-link>
        </section>
    </div>
</template>

<script setup>
const frontendSkills = [
    { name: 'Vue JS', icon: 'fab fa-vuejs' },
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: 'HTML', icon: 'fa-brands fa-html5' },
    { name: 'CSS', icon: 'fa-brands fa-css3-alt' },
]

const backendSkills = [
    { name: 'Golang (Fiber)', icon: 'fab fa-golang' },
    { name: 'JavaScript (Node JS)', icon: 'fab fa-js' },
    { name: 'C#', icon: 'fa-solid fa-code' },
]

const databaseSkills = [
    { name: 'PostgreSQL', icon: 'fa fa-database' },
    { name: 'Microsoft SQL', icon: 'fa fa-database' },
]

const toolsSkills = [
    { name: 'Docker', icon: 'fa-brands fa-docker' },
    { name: 'GitHub', icon: 'fa-brands fa-github' },
]

const otherSkills = [
    { name: 'Internet of Things', icon: 'fa-solid fa-network-wired' },
    { name: 'Arduino', icon: 'fa-solid fa-microchip' },
]

const softSkills = [
    { name: 'Communication Skills', icon: 'fa-solid fa-people-arrows' },
    { name: 'Fast and Eager Learner', icon: 'fa-solid fa-chalkboard-user' },
    { name: 'Teamwork', icon: 'fa-solid fa-people-group' },
    { name: 'Highly Motivated and Dedicated', icon: 'fa-regular fa-face-smile' },
]

import * as THREE from "three"
import { onMounted } from "vue"

onMounted(() => {
    const canvas = document.getElementById("stars-canvas")
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)

    // Bintang
    const starGeometry = new THREE.BufferGeometry()
    const starCount = 2000
    const starPositions = []
    for (let i = 0; i < starCount; i++) {
        const x = (Math.random() - 0.5) * 2000
        const y = (Math.random() - 0.5) * 2000
        const z = -Math.random() * 2000
        starPositions.push(x, y, z)
    }
    starGeometry.setAttribute("position", new THREE.Float32BufferAttribute(starPositions, 3))
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 1 })
    const stars = new THREE.Points(starGeometry, starMaterial)
    scene.add(stars)

    camera.position.z = 5

    // Variabel untuk interaksi mouse
    let mouseX = 0, mouseY = 0
    window.addEventListener("mousemove", (e) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1
    })

    function animate() {
        requestAnimationFrame(animate)

        // Rotasi dasar
        stars.rotation.y += 0.0005
        stars.rotation.x += 0.0002

        // Parallax efek: kamera sedikit geser sesuai mouse
        camera.position.x += (mouseX * 2 - camera.position.x) * 0.05
        camera.position.y += (mouseY * 2 - camera.position.y) * 0.05

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
.card {
    background-color: #1e1e1e;
    color: #e0e0e0;
    border: none;
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
}

.glowing-border {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0, 255, 100, 0.4);
}

.hero-gradient {
    position: relative;
    overflow: hidden;
    background: #000;
    /* fallback hitam */
}

#stars-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background: #000;
    /* biar tetap hitam meskipun scene gagal render */
}

.container {
    position: relative;
    z-index: 1;
    /* Supaya teks tetap di atas bintang */
}

section {
    animation: fadeInDown 1s ease-in-out;
}

@keyframes fadeInDown {
    0% {
        opacity: 0;
        transform: translateY(-10px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
