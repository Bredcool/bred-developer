<template>
  <div class="app-wrapper">
    <!-- Background Glow -->
    <div class="bg-gradient"></div>

    <!-- Floating Orbs -->
    <div class="orb orb1"></div>
    <div class="orb orb2"></div>
    <div class="orb orb3"></div>

    <!-- Main Content -->
    <div class="content-layer">
      <Navbar />

      <main class="main-content">
        <router-view />
      </main>

      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
/* =========================
   GLOBAL
========================= */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#app {
  width: 100%;
  min-height: 100%;
  overflow-x: hidden;
  background: #050816;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
}

/* =========================
   MAIN WRAPPER
========================= */
.app-wrapper {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background:
    radial-gradient(circle at top left, rgba(0, 255, 170, 0.12), transparent 35%),
    radial-gradient(circle at bottom right, rgba(0, 140, 255, 0.12), transparent 35%),
    #050816;
}

/* =========================
   BACKGROUND
========================= */
.bg-gradient {
  position: fixed;
  inset: 0;
  background:
    linear-gradient(180deg,
      rgba(0, 255, 170, 0.03),
      rgba(0, 0, 0, 0));
  z-index: 0;
  pointer-events: none;
}

/* Floating blur orbs */
.orb {
  position: fixed;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.4;
  z-index: 0;
  animation: float 10s ease-in-out infinite;
}

.orb1 {
  width: 350px;
  height: 350px;
  background: #00ffae;
  top: -100px;
  left: -100px;
}

.orb2 {
  width: 300px;
  height: 300px;
  background: #0084ff;
  bottom: -100px;
  right: -50px;
  animation-delay: 2s;
}

.orb3 {
  width: 200px;
  height: 200px;
  background: #7b61ff;
  top: 50%;
  left: 60%;
  animation-delay: 4s;
}

/* =========================
   CONTENT
========================= */
.content-layer {
  position: relative;
  z-index: 5;
  backdrop-filter: blur(2px);
}

.main-content {
  min-height: calc(100vh - 140px);
  padding: 80px 20px;
}

/* =========================
   COMPONENTS
========================= */
.card {
  background: rgba(20, 20, 30, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  transition: 0.3s ease;
  box-shadow:
    0 0 20px rgba(0, 255, 170, 0.05),
    0 10px 40px rgba(0, 0, 0, 0.4);
}

.card:hover {
  transform: translateY(-6px);
  border-color: rgba(0, 255, 170, 0.25);
  box-shadow:
    0 0 25px rgba(0, 255, 170, 0.12),
    0 20px 60px rgba(0, 0, 0, 0.45);
}

button,
.btn {
  border-radius: 14px;
  transition: all 0.3s ease;
}

button:hover,
.btn:hover {
  transform: translateY(-2px);
}

/* =========================
   TEXT
========================= */
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
  color: #ffffff;
}

p {
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.7;
}

/* =========================
   ANIMATION
========================= */
@keyframes float {
  0% {
    transform: translateY(0px) translateX(0px);
  }

  50% {
    transform: translateY(-20px) translateX(10px);
  }

  100% {
    transform: translateY(0px) translateX(0px);
  }
}

/* =========================
   MOBILE
========================= */
@media (max-width: 768px) {
  .main-content {
    padding: 50px 16px;
  }

  .orb1,
  .orb2,
  .orb3 {
    filter: blur(80px);
  }
}
</style>