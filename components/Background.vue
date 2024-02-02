<template>
  <!-- <div class="w-full h-screen absolute top-0 left-0 -z-50 overflow-hidden bg-center bg-cover" :style="backgroundString"> -->
<!-- </div> -->
    <div>hello</div>
</template>

<script setup>
const random = ref({
  rotation: 200
})

onMounted(() => {
  useAnime({
    targets: random.value,
    rotation: [0, 720],
    direction: 'alternate',
    duration: 10000,
    loop: true,
    easing: 'steps(100)'
  });
})
</script>

<style scoped>

</style>
