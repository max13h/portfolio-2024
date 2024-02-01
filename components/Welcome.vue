<template>
  <div class="w-full h-screen overflow-hidden flex justify-center items-center">
    <h1 class="main-heading w-full text-center">
        <span ref="letters1" class="block me-64">Hello,</span>
        <span class="block"><span ref="letters2">I'm</span> <span ref="letters3">max13h</span></span>
    </h1>
  </div>
</template>

<script setup lang="ts">
const letters1 = ref()
const letters2 = ref()
const letters3 = ref()

onMounted(() => {
  letters1.value.focus()
  letters2.value.focus()
  letters3.value.focus()

  letters1.value.innerHTML = letters1.value.textContent.replace(/\S/g, "<span class='letter inline-block'>$&</span>");
  letters2.value.innerHTML = letters2.value.textContent.replace(/\S/g, "<span class='letter inline-block'>$&</span>");
  letters3.value.innerHTML = letters3.value.textContent.replace(/\S/g, "<span class='letter max13h inline-block'>$&</span>");

  useAnime({
    targets: '.main-heading .letter',
    opacity: {
      value: [0, 1],
      delay: (el: any, i: any) => 55 * i
    },
    translateY: ["1.1em", "-0.2"],
    rotate: {
      value: () => { return `+=${useAnime.random(-8, 8)}` },
      duration: '3000',
      delay: 1000
    },
    direction: 'normal',
    duration: 700,
    delay: (el, i) => 50 * i,
    easing: 'easeOutBack'
  })
})
</script>

<style scoped>
.main-heading {
  position: relative;
}

.main-heading .letter {
  display: inline-block;
}
</style>
