<template>
  <div class="aboutme">
    <div class="bg-dark rounded-t-[128px] w-full h-16 translate-y-1"></div>
    <div class="w-full min-h-screen bg-dark  ">
      <h2 class="p-4 text-light">About me</h2>
      <div class="p-8">
        <div class="w-full relative">
          <p class="text-big3 text-nowrap text-end">My name is <br/> <span class="font-bold tracking-widest">Maxime</span></p>
          <div class="opacity-80 rounded-full overflow-hidden flex justify-center items-center absolute top-1/2 right-1/2
            w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64
            h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64">
            <NuxtImg src="/me.jpg" alt="Picture of max13h" sizes="128px sm:160px md:192px lg:224px xl:256px"></NuxtImg>
          </div>
        </div>
        <p class="text-big4 mt-32">I'm a junior</p>
        <p class="text-big4 text-center font-bold tracking-widest">Web Developer</p>
        <p class="text-big5 text-nowrap text-center mt-32 mb-16">Proficient in...</p>
        <div class="w-full flex flex-col items-center md:justify-evenly">
          <div class="backend flex flex-col items-center">
            <p class="text-big4 font-semibold">Back-end</p>
            <p class="text-big6 opacity-50 -translate-y-4">development</p>
            <p class="text-base">My technologies:</p>
            <div class="flex flex-wrap justify-evenly items-center">
              <Icon name="vscode-icons:file-type-ruby" size="8rem" class="techno-icon w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32" />
              <Icon name="simple-icons:rubyonrails" size="8rem" class="techno-icon-rails w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32" />
              <Icon name="logos:postgresql" size="8rem" class="techno-icon w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32" />
              <Icon name="logos:nuxt-icon" size="8rem" class="techno-icon w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32" />
              <Icon name="logos:nodejs-icon" size="8rem" class="techno-icon w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32" />
            </div>
          </div>

          <p class="self-start text-[3vw] mt-4">&</p>

          <div class="frontend flex flex-col items-center">
            <p class="text-big4 font-semibold">Front-end</p>
            <p class="text-big6 opacity-50 -translate-y-4">development</p>
            <p class="text-base">My technologies:</p>
            <div class="flex flex-wrap justify-evenly items-center">
              <Icon name="logos:vue" size="8rem" class="techno-icon w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32" />
              <Icon name="logos:javascript" size="8rem" class="techno-icon w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32" />
              <Icon name="logos:typescript-icon" size="8rem" class="techno-icon w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32" />
              <Icon name="vscode-icons:file-type-css" size="8rem" class="techno-icon w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32" />
              <Icon name="logos:tailwindcss-icon" size="8rem" class="techno-icon w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  const gsap = useGsap()
  const gsapStore = useGsapStore()

  const aboutmeTL = () => {
    return gsap.timeline()
      .to(".aboutme", {
        yPercent: -100,
        scrollTrigger: {
          scrub: true
        },
      });
  }

  gsapStore.aboutmeTL = aboutmeTL
})
</script>

<style scoped>
.techno-icon {
  @apply transition-all duration-500;
  filter: saturate(0);
  opacity: 0.8;
}

.techno-icon:hover {
  filter: none;
  opacity: 1;
}

.techno-icon-rails {
  @apply transition-all duration-500;
  filter: brightness(0%) saturate(100%) invert(100%) sepia(0%) saturate(0%) brightness(0%) contrast(0%);
  opacity: 0.8;
}
.techno-icon-rails:hover {
  filter: brightness(0) saturate(100%) invert(20%) sepia(84%) saturate(5919%) brightness(73%) contrast(120%);
  opacity: 1;
}
</style>
