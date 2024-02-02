export const useAnimeStore = defineStore("anime", () => {
  const timeline = useAnime.timeline()

  return { timeline }
})
