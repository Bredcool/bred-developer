<template>
    <div class="text-white min-vh-100 py-5">
        <section>
            <div class="container py-5">
                <div class="row align-items-center">
                    <!-- Gambar Profil -->
                    <div class="col-md-4 text-center mb-4 mb-md-0">
                        <img src="../assets/profile.jpg" alt="Profile" class="img-fluid rounded-3 glowing-border"
                            style="max-width: 250px; height: auto; object-fit: cover;" />
                    </div>

                    <!-- Deskripsi -->
                    <div class="col-md-8 text-center text-md-start">
                        <h1 class="mb-2 fw-bold">Bred Developer</h1>
                        <h5 class="mb-3">Fullstack Developer</h5>
                        <p class="mb-4">
                            <strong>Rediawan Ibrahim</strong>, also known as <strong>Bred</strong>, is a developer
                            focused
                            on
                            building modern web applications using stacks like <strong>Vue JS</strong>,
                            <strong>Golang</strong>,
                            and <strong>PostgreSQL</strong>. I enjoy building
                            products that are not only functional, but also clean and easy to use.
                        </p>
                        <div>
                            <a href="https://www.linkedin.com/in/rediawan-ibrahim-760b0a232/" target="_blank"
                                class="button btn btn-outline-primary me-2 mb-2">
                                <i class="bi bi-linkedin me-1"></i> LinkedIn
                            </a>
                            <a href="https://github.com/Bredcool" target="_blank"
                                class="button btn btn-outline-primary me-2 mb-2">
                                <i class="bi bi-github me-1"></i> GitHub
                            </a>
                            <a href="/assets/CV Rediawan Ibrahim.pdf" download class="button btn btn-primary mb-2">
                                <i class="bi bi-download me-1"></i> Unduh CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
// No logic yet
</script>

<style scoped>
/* Tambahan styling jika diperlukan */
.glowing-border {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0, 255, 100, 0.4);
}

.button {
    transition: transform 0.3s ease;
}

.button:hover {
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
