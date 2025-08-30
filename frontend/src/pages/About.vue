<template>
    <div class="text-white min-vh-100 py-5">
        <section>
            <div class="container py-5">
                <div class="row align-items-center">

                    <!-- Gambar Profil -->
                    <div class="col-md-4 text-center mb-4 mb-md-0">
                        <div class="crown-label">
                            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24"
                                fill="gold" class="crown-icon">
                                <path d="M5 20h14l-1-9-4 3-3-7-3 7-4-3-1 9zm14-15c-.552 0-1 .449-1 1s.448 1 1 1 
                                        1-.449 1-1-.448-1-1-1zm-7-2c-.552 0-1 .449-1 1s.448 1 
                                        1 1 1-.449 1-1-.448-1-1-1zm-7 2c-.552 0-1 
                                        .449-1 1s.448 1 1 1 1-.449 1-1-.448-1-1-1z" />
                            </svg>
                        </div>

                        <img src="../assets/profile.jpg" alt="Profile" class="img-fluid rounded-3 glowing-border"
                            style="max-width: 250px; height: auto; object-fit: cover;" />

                        <div class="star-label">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                fill="gold" class="star-icon">
                                <path d="M12 .587l3.668 7.429 8.2 1.193-5.934 
                                        5.782 1.402 8.174L12 18.896l-7.336 
                                        3.869 1.402-8.174L.132 9.209l8.2-1.193z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                fill="gold" class="star-icon">
                                <path d="M12 .587l3.668 7.429 8.2 1.193-5.934 
                                        5.782 1.402 8.174L12 18.896l-7.336 
                                        3.869 1.402-8.174L.132 9.209l8.2-1.193z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                fill="gold" class="star-icon">
                                <path d="M12 .587l3.668 7.429 8.2 1.193-5.934 
                                        5.782 1.402 8.174L12 18.896l-7.336 
                                        3.869 1.402-8.174L.132 9.209l8.2-1.193z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                fill="gold" class="star-icon">
                                <path d="M12 .587l3.668 7.429 8.2 1.193-5.934 
                                        5.782 1.402 8.174L12 18.896l-7.336 
                                        3.869 1.402-8.174L.132 9.209l8.2-1.193z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                fill="gold" class="star-icon">
                                <path d="M12 .587l3.668 7.429 8.2 1.193-5.934 
                                        5.782 1.402 8.174L12 18.896l-7.336 
                                        3.869 1.402-8.174L.132 9.209l8.2-1.193z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                fill="gold" class="star-icon">
                                <path d="M12 .587l3.668 7.429 8.2 1.193-5.934 
                                        5.782 1.402 8.174L12 18.896l-7.336 
                                        3.869 1.402-8.174L.132 9.209l8.2-1.193z" />
                            </svg>
                        </div>

                        <div class="about-wrapper" :class="{ 'glitch-mode': isTriggered }">
                            <p class="god-label" @click="triggerGodEasterEgg">
                                GOD
                            </p>

                            <div v-if="isTriggered" class="matrix-overlay"></div>

                            <div v-if="isTriggered" class="glitch-text" v-for="n in 10" :key="n" :style="randomStyle()">
                                {{ randomAscii() }}
                            </div>

                            <audio ref="glitchSound" src="/assets/glitch.wav"></audio>
                        </div>
                    </div>

                    <!-- Deskripsi -->
                    <div class="col-md-8 text-center text-md-start">
                        <h1 class="mb-2 fw-bold">Bred Developer</h1>
                        <h5 class="mb-3">Fullstack Developer</h5>
                        <p class="mb-4">
                            <strong>Rediawan Ibrahim</strong>, also known as <strong>Bred</strong>, is a developer
                            focused on building modern web applications using stacks like <strong>Vue JS</strong>,
                            <strong>Golang</strong>, and <strong>PostgreSQL</strong>. I enjoy building
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
                            <button class="button btn btn-primary mb-2 dropdown-toggle" type="button" id="cvDropdown"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="bi bi-download me-1"></i> Download CV
                            </button>
                            <ul class="dropdown-menu custom-dropdown shadow border-0" aria-labelledby="cvDropdown">
                                <li>
                                    <a class="dropdown-item d-flex align-items-center gap-2"
                                        href="/assets/CV Rediawan Ibrahim.pdf" download>
                                        <span>Indonesian version</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item d-flex align-items-center gap-2"
                                        href="/assets/CV Rediawan Ibrahim (English).pdf" download>
                                        <span>English version</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { CSSProperties } from "vue";

const isTriggered = ref(false);
const glitchSound = ref<HTMLAudioElement | null>(null);

const triggerGodEasterEgg = () => {
  isTriggered.value = true;

  // mainkan sound
  if (glitchSound.value) {
    glitchSound.value.volume = 0.5;
    glitchSound.value.currentTime = 0;
    glitchSound.value.play();
  }

  // balik normal setelah 6 detik
  setTimeout(() => {
    isTriggered.value = false;
    glitchSound.value?.pause();
    glitchSound.value!.currentTime = 0;
  }, 6000);
};

// generate teks random ASCII
const randomAscii = () => {
  const chars = "!@#$%^&*()_+{}|:<>?[];,.";
  return Array.from({ length: 5 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
};

// posisi random untuk glitch text
const randomStyle = (): CSSProperties => {
  const top = Math.random() * 90 + "%";
  const left = Math.random() * 90 + "%";
  const color = Math.random() > 0.5 ? "#00ff64" : "#e0e0e0";
  const fontSize = Math.random() * 20 + 12 + "px";
  return {
    position: "fixed",
    top,
    left,
    color,
    fontSize,
    textShadow: "0 0 10px rgba(0,255,100,0.8)",
    pointerEvents: "none",
    zIndex: 10000,
  };
};
</script>

<style scoped>
.glowing-border {
    border-radius: 12px;
    box-shadow: 0 0 20px rgba(0, 255, 100, 0.25);
}

.crown-label {
    margin-top: -70px;
    margin-bottom: 10px;
    margin-left: 5px;
    text-align: center;
}

.crown-icon {
    fill: #d4af37;
    filter: drop-shadow(0 0 2px rgba(212, 175, 55, 0.4));
}

.star-label {
    margin-top: 15px;
    text-align: center;
}

.star-icon {
    fill: #f1c40f;
    filter: drop-shadow(0 0 1px rgba(241, 196, 15, 0.4));
}.god-label {
  margin-top: 15px;
  font-size: 2.2rem;
  font-weight: 900;
  color: #d4af37;
  text-transform: uppercase;
  letter-spacing: 4px;
  padding: 6px 20px;
  border: 2px solid #555;
  border-radius: 6px;
  display: inline-block;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Cinzel Decorative', 'Trajan Pro', serif;
  text-shadow: 0 0 8px rgba(212, 175, 55, 0.25),
    0 0 20px rgba(212, 175, 55, 0.15),
    2px 2px 8px rgba(0, 0, 0, 0.8);
  background: rgba(10, 10, 10, 0.7);
  box-shadow: inset 0 0 10px rgba(212, 175, 55, 0.15),
    0 0 15px rgba(0, 0, 0, 0.9);
}

/* Glitch full background */
.glitch-mode {
  animation: screenShake 0.3s infinite;
  filter: invert(1) contrast(1.5);
}

.matrix-overlay {
  position: fixed;
  inset: 0;
  background: repeating-linear-gradient(
      0deg,
      rgba(0, 255, 100, 0.1) 0,
      rgba(0, 255, 100, 0.1) 2px,
      transparent 2px,
      transparent 4px
  );
  animation: matrixRain 0.7s linear infinite;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.9;
}

.glitch-text {
  font-family: monospace;
}

.button {
    transition: transform 0.3s ease;
}

.button:hover {
    transform: translateY(-5px);
}

.custom-dropdown {
    background-color: #1c1c1c;
    min-width: 230px;
    padding: 0.5rem;
    border-radius: 12px;
}

.custom-dropdown .dropdown-item {
    color: #e0e0e0;
    border-radius: 8px;
    padding: 0.6rem 1rem;
    transition: all 0.2s ease;
}

.custom-dropdown .dropdown-item:hover {
    background: rgba(0, 255, 100, 0.15);
    color: #00ff64;
    transform: translateX(5px);
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

@keyframes screenShake {
  0% { transform: translate(0, 0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(2px, -2px); }
  60% { transform: translate(-2px, -1px); }
  80% { transform: translate(1px, 2px); }
  100% { transform: translate(0, 0); }
}

@keyframes matrixRain {
  0% { background-position: 0 -50px; }
  100% { background-position: 0 50px; }
}
</style>
