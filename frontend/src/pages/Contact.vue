<template>
    <div class="text-white min-vh-100 py-5">
        <section class="contact-section py-5 hero-gradient text-white">
            <div class="container">
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

<script setup lang="ts">
// tidak ada logic saat ini
</script>

<style scoped>
.hero-gradient {
    background: linear-gradient(135deg, #00427c, #000428, #007c42);
    background-size: 300% 300%;
    animation: gradientBG 12s ease infinite;
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

@keyframes gradientBG {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}
</style>
