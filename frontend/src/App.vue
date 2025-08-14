<template>
  <div class="d-flex flex-column min-vh-100">
    <Navbar />
    <main class="flex-fill container py-5">
      <router-view />
    </main>
    <Footer />
  </div>
</template>


<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>
