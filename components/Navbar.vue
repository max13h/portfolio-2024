<template>
  <div class="fixed w-full pt-4 pe-8 flex justify-end">
    <NuxtLink to="#projects" class="me-4 text-dark transition-all duration-700" :class="{'text-light': turnWhite}">
      Projects
    </NuxtLink>
    <NuxtLink to="#contact" class="transition-all duration-700" :class="{'text-light': turnWhite}">
      Contact
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const turnWhite = ref(false)

onMounted(() => {
  const { lenis } = useLenisStore()

  lenis.on('scroll', (e) => {
    turnWhite.value = e.animatedScroll > (window.screen.height - 30)
  })
})
</script>

<style scoped>

</style>
