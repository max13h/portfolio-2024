<template>
  <div class="relative overflow-x-hidden">
    <Entrance v-if="gsapStore.isEntrance" />
    <Navbar />
    <Welcome />
    <AboutMe id="AboutMe" />
    <MyProjects />
  </div>
</template>

<script setup lang="ts">
const gsapStore = useGsapStore()
const lenisStore = useLenisStore()

onMounted(() => {
  watchEffect(() => {
    if(gsapStore.isWelcomed) {
      const lenis = useLenis()

      lenisStore.lenis = lenis
    }
  })
})
</script>

<style scoped>
</style>
