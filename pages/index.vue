<template>
  <main class="relative overflow-x-hidden" :class="{ 'overflow-hidden': !gsapStore.isWelcomed }">
    <Entrance v-if="gsapStore.isEntrance" />
    <Navbar />
    <Welcome />
    <section>
      <AboutMeTextPart />
      <AboutMeStackPart />
    </section>
    <MyProjects />
    <Contact />
    <Footer />
  </main>
</template>

<script setup lang="ts">
const gsapStore = useGsapStore()
const lenisStore = useLenisStore()

onMounted(() => {
  watchEffect(() => {
    if(gsapStore.isWelcomed && window.screen.width > 640) {
      const lenis = useLenis()

      lenisStore.lenis = lenis
    }
  })
})
</script>

<style scoped>
</style>
