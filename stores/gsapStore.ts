export const useGsapStore = defineStore("gsap", () => {
  const entranceTL: globalThis.Ref<null | (() => gsap.core.Timeline)> = ref(null)
  const isEntrance = ref(true)

  const welcomeTL: globalThis.Ref<null | (() => gsap.core.Timeline)> = ref(null)
  const isWelcomed = ref(false)

  const aboutMeTextPartTL: globalThis.Ref<null | (() => gsap.core.Timeline)> = ref(null)
  const aboutMeStackPartTL: globalThis.Ref<null | (() => gsap.core.Timeline)> = ref(null)

  const aboutmeTL: globalThis.Ref<null | (() => gsap.core.Timeline)> = ref(null)

  return {
    entranceTL,
    isEntrance,
    welcomeTL,
    isWelcomed,
    aboutMeTextPartTL,
    aboutMeStackPartTL,
    aboutmeTL,
  }
})
