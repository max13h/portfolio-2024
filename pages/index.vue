<template>
  <div class="relative">
    <!-- <Entrance v-if="isEntrance" @completed="isEntrance = false" /> -->
    <!-- <Navbar /> -->
    <Welcome />
    <Projects />
    <!-- <Background /> -->
  </div>
</template>

<script setup lang="ts">
let isEntrance = ref(true)

onMounted(() => {
  const animeStore = useAnimeStore()
  const lenis = useLenisStore()

})
</script>

<style scoped>

</style>
