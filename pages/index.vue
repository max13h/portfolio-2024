<template>
  <div class="relative">
    <!-- <Entrance v-if="gsapStore.isEntrance" /> -->
    <Navbar />
    <Welcome />
    <!-- <Projects /> -->
    <!-- <Background /> -->
  </div>
</template>

<script setup lang="ts">
const gsapStore = useGsapStore()

onMounted(() => {
  useLenis()

  const gsap = useGsap()

  // if(!gsapStore.entranceTL || !gsapStore.welcomeTL) {
  //   throw new Error
  // }

  gsap.timeline()
    // .add(gsapStore.entranceTL())
    .add(gsapStore.welcomeTL(), '-=0.5')
})
</script>

<style scoped>

</style>
