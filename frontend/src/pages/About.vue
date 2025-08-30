<template>
    <div class="text-white min-vh-100 py-5" :class="{ 'glitch-mode': isTriggered }">
        <!-- Overlay glitch -->
        <!-- <div v-if="isTriggered" class="matrix-overlay"></div> -->
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
                            <!-- Trigger GOD -->
                            <p class="god-label" @click="triggerGodEasterEgg">
                                GOD
                            </p>

                            <!-- Random ASCII floating -->
                            <!-- <div v-if="isTriggered" class="glitch-text" v-for="n in 20" :key="n" :style="randomStyle()">
                                {{ randomAscii() }}
                            </div> -->

                            <div v-for="ascii in asciiTexts" :key="ascii.id" class="ascii-char" :style="ascii.style">
                                {{ ascii.text }}
                            </div>

                            <!-- Suara -->
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
const asciiTexts = ref<{ id: number; text: string; style: CSSProperties }[]>([]);
let counter = 0;

const triggerGodEasterEgg = () => {
    isTriggered.value = true;

    // mainkan sound
    if (glitchSound.value) {
        glitchSound.value.volume = 0.5;
        glitchSound.value.currentTime = 0;
        glitchSound.value.play();
    }

    // generate ascii flood
    asciiTexts.value = [];
    for (let i = 0; i < 40; i++) {
        asciiTexts.value.push({
            id: counter++,
            text: randomAscii(),
            style: randomStyle(),
        });
    }

    // balik normal setelah 6 detik
    setTimeout(() => {
        isTriggered.value = false;
        asciiTexts.value = [];
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
    const top = Math.random() * 100 + "%";
    const left = Math.random() * 100 + "%";
    const color = ["#00ff64", "#ff004c", "#00c8ff"][Math.floor(Math.random() * 3)];
    const fontSize = Math.random() * 24 + 12 + "px";
    return {
        position: "fixed",
        top,
        left,
        color,
        fontSize,
        opacity: Math.random() * 0.8 + 0.2,
        textShadow: "0 0 10px " + color,
        animation: "flicker 0.2s infinite, fly 6s forwards",
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
}

.god-label {
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


/* --- Efek Glitch --- */
.glitch-mode {
    animation: screenShake 0.2s infinite;
    filter: contrast(1.5) brightness(1.1);
}

/* Glitch full background */
.glitch-mode * {
    position: relative;
}

.glitch-mode *::before,
.glitch-mode *::after {
    content: attr(data-text);
    position: absolute;
    left: 0;
    width: 100%;
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
}

.glitch-mode *::before {
    left: 2px;
    text-shadow: -2px 0 red;
    animation: glitchClip 1s infinite linear alternate-reverse;
}

.glitch-mode *::after {
    left: -2px;
    text-shadow: -2px 0 blue;
    animation: glitchClip 0.8s infinite linear alternate-reverse;
}

.glitch-text {
    font-family: monospace;
}

.glitch-trigger {
    cursor: pointer;
    color: yellow;
    text-shadow: 0 0 5px red, 0 0 10px cyan;
}

.ascii-char {
    position: fixed;
    font-weight: bold;
    user-select: none;
}

/* Overlay garis */
.matrix-overlay {
    position: fixed;
    inset: 0;
    background: repeating-linear-gradient(0deg,
            rgba(0, 255, 100, 0.15) 0,
            rgba(0, 255, 100, 0.15) 2px,
            transparent 2px,
            transparent 4px);
    animation: matrixRain 0.3s infinite linear;
    mix-blend-mode: difference;
    z-index: 9999;
    pointer-events: none;
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

/* Animasi */
@keyframes screenShake {
    0% {
        transform: translate(0, 0);
    }

    25% {
        transform: translate(-3px, 2px);
    }

    50% {
        transform: translate(3px, -2px);
    }

    75% {
        transform: translate(-2px, 1px);
    }

    100% {
        transform: translate(0, 0);
    }
}

@keyframes matrixRain {
    from {
        background-position: 0 -20px;
    }

    to {
        background-position: 0 20px;
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

@keyframes glitchClip {
    0% {
        clip: rect(0, 9999px, 0, 0);
    }

    50% {
        clip: rect(0, 9999px, 9999px, 0);
    }

    100% {
        clip: rect(0, 9999px, 0, 0);
    }
}

@keyframes fly {
    from {
        transform: translateY(0);
        opacity: 1;
    }

    to {
        transform: translateY(-300px);
        opacity: 0;
    }
}
</style>
