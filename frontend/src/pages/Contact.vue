<template>
    <div class="text-white min-vh-100 py-5">
        <section class="contact-section py-5 hero-gradient text-white">
            <!-- Canvas untuk bintang -->
            <canvas id="stars-contact"></canvas>

            <div class="container position-relative">
                <h2 class="text-center fw-bold mb-5">Let's Connect</h2>
                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-6">
                        <div class="p-4 rounded-4 shadow-lg contact-card">
                            <!-- WhatsApp -->
                            <div class="d-flex align-items-center mb-4">
                                <i class="bi bi-telephone-fill fs-4 text-warning me-3"></i>
                                <div>
                                    <h6 class="mb-1 fw-semibold">WhatsApp</h6>
                                    <p class="mb-0 text-light">+62 896-9321-8083</p>
                                    <a :href="whatsappUrl" target="_blank" class="btn btn-outline-light btn-sm mb-2">
                                        Kirim Pesan
                                    </a>
                                </div>
                            </div>

                            <!-- Email -->
                            <div class="d-flex align-items-center mb-4">
                                <i class="bi bi-envelope-fill fs-4 text-warning me-3"></i>
                                <div>
                                    <h6 class="mb-1 fw-semibold">Email</h6>
                                    <p class="mb-0 text-light">rediawanibrahim15@gmail.com</p>
                                </div>
                            </div>

                            <!-- Socials -->
                            <div class="d-flex align-items-center mb-3">
                                <i class="bi bi-link-45deg fs-4 text-warning me-3"></i>
                                <h6 class="mb-0 fw-semibold">Socials</h6>
                            </div>
                            <div class="ms-4">
                                <a href="https://www.linkedin.com/in/rediawan-ibrahim-760b0a232/" target="_blank"
                                    class="btn btn-outline-light btn-sm me-2 mb-2">
                                    <i class="bi bi-linkedin me-1"></i> LinkedIn
                                </a>
                                <a href="https://github.com/Bredcool" target="_blank"
                                    class="btn btn-outline-light btn-sm me-2 mb-2">
                                    <i class="bi bi-github me-1"></i> GitHub
                                </a>
                                <a href="https://www.instagram.com/rediawanibrahim?igsh=MWxnOWI5enFsNWd1Zg=="
                                    target="_blank" class="btn btn-outline-light btn-sm mb-2">
                                    <i class="bi bi-instagram me-1"></i> Instagram
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
import { onMounted } from "vue"

// WhatsApp config
const phoneNumber = '6289693218083'
const message = 'Halo Bred Developer! Saya ingin membuat Website.'
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

onMounted(() => {
    const canvas = document.getElementById("stars-contact")
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)

    // Bintang
    const starGeometry = new THREE.BufferGeometry()
    const starCount = 1500
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

    function animate() {
        requestAnimationFrame(animate)
        stars.rotation.y += 0.0006
        stars.rotation.x += 0.0003
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
.hero-gradient {
    position: relative;
    overflow: hidden;
}

#stars-contact {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background: #000;
}

.container {
    position: relative;
    z-index: 1;
}

.contact-card {
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: transform 0.3s ease;
}

.contact-card:hover {
    transform: translateY(-5px);
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
