import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useGsapStore = defineStore("gsap", () => {
  gsap.registerPlugin(ScrollTrigger)

  return { gsap }
})
