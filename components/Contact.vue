<template>
  <section>
    <div class="divider-block-md bg-light"></div>
    <div class="t-heading relative leading-none">
      <h2 ref="contactme" class="
        t-contactme
        ms-4
        text-big2
        mix-blend-difference
        text-light
        font-medium
      ">
        Contact
        <br>
        me
      </h2>
    </div>

    <div class="bg-dark h-[70vh]">
      <div class="flex flex-col sm:flex-row items-center justify-evenly h-full">
        <NuxtLink to="https://www.linkedin.com/in/max13h/" target="_blank" class="w-fit">
          <Icon
            name="mdi:linkedin"
            size="16rem"
            class="
              t-contacticons
              filter-light
              w-32 sm:w-36 md:w-40 lg:w-48 xl:w-56
              h-32 sm:h-36 md:h-4w-40 lg:h-48 xl:h-5w-56"
            />
        </NuxtLink>

        <NuxtLink to="mailto:contact@max13h.fr" class="w-fit">
          <Icon
            name="fluent:mail-48-filled"
            size="16rem"
            class="
              t-contacticons
              filter-light
              w-32 sm:w-36 md:w-40 lg:w-48 xl:w-56
              h-32 sm:h-36 md:h-4w-40 lg:h-48 xl:h-5w-56"
              @click="copyContent"
            />
        </NuxtLink>
      </div>
      <TransitionRoot appear :show="modalOpened">
        <Dialog @close="modalOpened = false" class="relative z-10">
          <TransitionChild
            as="div"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="fixed inset-0 bg-black/25" />
          </TransitionChild>

          <div class="fixed inset-0 overflow-y-auto">
            <div
              class="flex min-h-full items-center justify-center p-4"
            >
              <TransitionChild
                as="div"
                enter="duration-300 ease-out"
                enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95"
              >
                <DialogPanel class="bg-dark p-8 rounded-2xl">
                  <p class="text-light">
                    {{ clipboardMessage }}
                    <Icon :name="isMailCopied ? 'fluent:checkmark-circle-12-regular' : 'fluent:dismiss-circle-12-regular'" class="filter-light" />
                  </p>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle, DialogDescription } from '@headlessui/vue'

const modalOpened = ref(false)
const clipboardMessage = ref('Email copied to clipboard')
const isMailCopied = ref(false)

const copyContent = async () => {
  modalOpened.value = true

  try {
    await navigator.clipboard.writeText('contact@max13h.fr');
    clipboardMessage.value = 'Email copied to clipboard'
    isMailCopied.value = true

  } catch (err) {
    console.log(err);
    clipboardMessage.value = 'Failed to copy the email. My address is: contact@max13h.fr'
    isMailCopied.value = false
  }
}

const contactme = ref()

onMounted(() => {
  splitLettersInHTML(contactme, 't-contactme-letters text-light')
  gsap.registerPlugin(ScrollTrigger)
  gsap.timeline()
  .from('.t-contactme-letters', {
    scrollTrigger: {
      trigger: '.t-contactme',
      start: '-200 55%',
      end: 'top 55%',
      scrub: 1.5,
    },
    opacity: 0,
    yPercent: 50,
    stagger: 0.1
  })
  .from('.t-contacticons', {
    scrollTrigger: {
      trigger: '.t-contactme',
      start: '-100 55%',
      end: '100 55%',
      scrub: 1.5,
    },
    opacity: 0,
  })
})

</script>

<style scoped>
.filter-light {
  @apply transition-all duration-150
}

.filter-light:hover {
  @apply scale-105
}

.t-heading:after {
  content: '';
  @apply bg-dark absolute bottom-0 left-0 rounded-t-3xl w-full h-[48%] -z-10
}
</style>
