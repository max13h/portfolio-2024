<template>
  <nav class="fixed w-full pt-4 pe-8 flex justify-end mix-blend-difference font-light text-light z-50">
    <NuxtLink class="transition-all duration-700" @click="lenisStore.lenis.scrollTo('#Contact')">
      Contact
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
const lenisStore = useLenisStore()
</script>

<style scoped>

</style>
