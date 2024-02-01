<template>
  <div class="relative">
    <Navbar />
    <Welcome />
    <Background />
    <Projects />
  </div>
</template>

<script setup lang="ts">
import Lenis from '@studio-freight/lenis'

onMounted(() => {
  const lenis = new Lenis()

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
})
</script>

<style scoped>

</style>
