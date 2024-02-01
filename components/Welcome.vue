<template>
  <div class="w-full h-screen overflow-hidden flex justify-center items-center">
    <h1 class="main-heading w-full text-center">
        <span ref="letters1" class="block me-64">Hello,</span>
        <span ref="letters2" class="block">I'm max13h</span>
    </h1>
  </div>
</template>

<script setup lang="ts">
const letters1 = ref()
const letters2 = ref()

onMounted(() => {
  letters1.value.focus()
  letters2.value.focus()

  letters1.value.innerHTML = letters1.value.textContent.replace(/\S/g, "<span class='letter inline-block'>$&</span>");
  letters2.value.innerHTML = letters2.value.textContent.replace(/\S/g, "<span class='letter inline-block'>$&</span>");


  useAnime.timeline({loop: false})
    .add({
      targets: '.main-heading .letter',
      opacity: {
        value: [0, 1],
        delay: (el: any, i: any) => 55 * i
      },
      translateY: ["1.1em", "-0.2"],
      rotate: {
        value: function() { return `+=${useAnime.random(-8, 8)}` },
        duration: '3000'
      },
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
