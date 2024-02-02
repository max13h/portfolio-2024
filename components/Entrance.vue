<template>
  <div class="absolute z-50 w-full h-screen overflow-hidden">
    <div class="w-full h-full flex">
      <div class="entrance-line w-[10%] h-full bg-dark"></div>
      <div class="entrance-line w-[10%] h-full bg-dark"></div>
      <div class="entrance-line w-[10%] h-full bg-dark"></div>
      <div class="entrance-line w-[10%] h-full bg-dark"></div>
      <div class="entrance-line w-[10%] h-full bg-dark"></div>
      <div class="entrance-line w-[10%] h-full bg-dark"></div>
      <div class="entrance-line w-[10%] h-full bg-dark"></div>
      <div class="entrance-line w-[10%] h-full bg-dark"></div>
      <div class="entrance-line w-[10%] h-full bg-dark"></div>
      <div class="entrance-line w-[10%] h-full bg-dark"></div>
    </div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h1 class="text-light text-xl font-light" :class="{'overflow-hidden': hiddenOverflow}">
        <span class="heading-pop-up inline-block translate-y-full text-center">Portfolio max13h 2024</span>
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
const hiddenOverflow = ref(true)

const emit = defineEmits(['completed'])

onMounted(() => {
  const animeStore = useAnimeStore()

  animeStore.timeline
    .add({
      targets: '.heading-pop-up',
      translateY: ['100%', 0],
      duration: 500,
      easing: 'easeOutQuad',
      complete: function(anim) {
        hiddenOverflow.value = false
      }
    })
    .add({
      targets: '.heading-pop-up',
      scale: {
        value: 500,
        delay: 1000,
        duration: 1500,
        easing: 'easeInQuint'
      },
      opacity: {
        value: [1, 0],
        delay: 2000,
        duration: 300,
        easing: 'linear'
      },
    }, 500)
    .add({
      targets: '.entrance-line',
      delay: useAnime.stagger(50),
      translateX: (el, i) => `-${200 * (i || 1)}%`,
      opacity: {
        value: [1, 0],
        delay: 1000,
        duration: 300
      },
      duration: 500,
      easing: 'easeInQuad',
      complete: () => {
        emit('completed')
        console.log('completed');
      }
    })
})
</script>

<style scoped>
</style>
