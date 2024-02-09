<template>
  <div>
    <div id="aboutme" class="w-full h-24 bg-dark rounded-b-[8vw] relative">
      <h2 class="
        test
        inline-block
        text-big2
        mix-blend-difference
        text-light
        font-medium
        absolute
        -bottom-16
      ">Discover my projects</h2>
    </div>

    <div
      class="
        mt-24
        flex
        flex-col
        items-center
        sm:items-start
        sm:flex-row
        sm:flex-nowrap
        sm:overflow-x-scroll
        p-4
      "
    >
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="
          relative
          w-[90vw]
          h-[90vw]
          mt-4
          overflow-hidden
          rounded-2xl
          group
          sm:min-w-[90vw]
          sm:h-[90vw]
          md:min-w-[80vh]
          md:h-[80vh]


          sm:me-8
          sm:last:me-0
          sm:mt-0
        "
        @click="openModal(project.name)"
      >
        <NuxtImg
          :src="project.mainImage"
          class="
            w-[150%]
            transition-all
            blur-sm
            group-hover:blur-[2px]
            group-hover:scale-105
        "/>
        <div class="transition-all group-hover:bg-zinc-900 w-full h-full bg-dark absolute top-0 left-0 opacity-50"></div>
        <h3 class="transition-all group-hover:scale-105   absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-big5 text-light w-full text-center">{{ project.name }}</h3>

        <TransitionRoot appear :show="modalOpened === project.name">
          <Dialog @close="closeModal" class="relative z-10">
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
                class="flex min-h-full items-center justify-center p-4 text-center"
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
                  <DialogPanel class="bg-dark p-4 rounded-2xl">
                    <h3 class="text-light text-big3">{{ project.name }}</h3>
                      <p>{{ project.description }}</p>
                    <div>
                      <NuxtImg v-for="(image, imgIndex) in project.images" :key="imgIndex" :src="project.images[imgIndex]" />
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </TransitionRoot>

      </div>

    </div>
    <div>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo sed est dolor autem nihil natus architecto! Inventore culpa, consequatur, eligendi ullam in at doloremque fugit nemo tempore vero ratione. Fuga autem voluptatibus repudiandae sapiente aliquam doloremque veniam, magni enim officiis sunt delectus repellat cupiditate facere. Hic architecto corrupti itaque quod eaque voluptate repudiandae quas maiores sunt delectus explicabo ratione incidunt commodi, quibusdam saepe velit sapiente, fugit ipsam ullam numquam consequuntur ducimus. Facilis nobis harum voluptatem magnam sint, ipsum sapiente perspiciatis possimus earum atque distinctio qui error esse? Ab dolorum saepe at non odio dolore, repellat aut natus, blanditiis similique cumque sequi deserunt harum mollitia velit quasi! Laboriosam cupiditate id omnis tenetur et ut quas! Labore incidunt delectus atque error maiores! Ab, autem ipsum at officia hic inventore alias error velit pariatur reprehenderit distinctio eum nihil soluta magni suscipit voluptates? Molestias atque accusantium error magni doloribus. Dolorum, repellat fugit quibusdam laborum dolor doloremque esse id natus ipsum nobis debitis aspernatur! Tempore quasi est a, tempora obcaecati eos officiis numquam laborum veniam commodi nulla deleniti. Esse fuga ipsam similique, nam dicta itaque accusantium sunt! Quam nisi nostrum ab, expedita distinctio voluptas cumque eligendi. Ratione sit pariatur id, dolorem consequatur maxime laudantium deleniti quae soluta, alias expedita est vel ipsum ex ipsa? Quae, expedita, nostrum dolor, facere debitis quos saepe deserunt officiis officia nemo quaerat reprehenderit voluptates minima optio unde iusto laborum. Cumque officiis quisquam dolorum mollitia, culpa ipsam quam architecto cupiditate! Dolor quo tempora earum facere adipisci explicabo corrupti fugit quis quae! Culpa fugit distinctio possimus voluptate! Aliquam possimus explicabo libero earum fugiat sequi nulla. Sit necessitatibus alias facilis aliquid, voluptatibus minus fugit sapiente id dolore molestias praesentium ut officiis nostrum. Vero consectetur ducimus modi nihil numquam, hic sit illum quam fugiat corporis quo ratione, est quaerat veritatis ab inventore quis esse magni at enim voluptatibus architecto. At aliquid ducimus dolorem, nam aperiam expedita mollitia totam provident facilis corporis laborum magni qui molestiae quas illo assumenda incidunt consequatur suscipit quod eos itaque? Maiores, qui autem. Dolorum perferendis velit quo eligendi nobis consectetur accusantium iusto at consequatur, ipsa eius facere architecto voluptas quod vero aut iste ex veritatis magnam vel sapiente unde! Quam laboriosam nam molestias obcaecati possimus, esse cumque totam similique dolorem explicabo laudantium ratione. Nobis nostrum dolorum officiis ut facilis qui recusandae, quaerat obcaecati veritatis aperiam explicabo quidem sint nesciunt laudantium quibusdam pariatur eum rem autem, officia error delectus quas. Tempore incidunt vitae, pariatur explicabo asperiores cum, doloribus possimus consectetur iste reprehenderit eos minus fugiat voluptatibus dolor optio! Fugit, officia? Accusantium natus culpa velit ipsum nihil, exercitationem cupiditate, officiis porro iste possimus voluptates non facere. Eligendi, doloremque tempora magni veniam a velit deserunt sapiente? Consequatur minus aliquid unde odit id officiis neque at dolorem soluta eligendi! Placeat voluptas expedita non amet eveniet, facilis ipsa exercitationem voluptatibus commodi? Sint impedit eveniet soluta nesciunt voluptas, voluptates magni officiis, sit fugiat vero ipsam hic exercitationem perferendis doloribus quas! Fugiat ducimus hic deleniti non consequatur tenetur soluta labore recusandae maiores doloribus nulla, natus ipsam sit earum nihil architecto deserunt voluptate adipisci ut eum quas veritatis velit tempore? Itaque quae veritatis quos sed error voluptatem ipsum pariatur necessitatibus aspernatur autem accusantium accusamus, nostrum voluptatum, tempore fuga molestias magnam, at sit aperiam a non voluptate. Accusantium assumenda vel quidem eveniet dolores porro perferendis tenetur vero nulla nam architecto, blanditiis rerum cum. Aliquam voluptates maxime totam, obcaecati dolorem, sequi soluta libero quisquam sit commodi ipsam vero voluptatibus debitis mollitia accusantium eveniet nobis corporis perferendis? Placeat assumenda eveniet quia nulla dicta enim beatae eius a, soluta nam provident, explicabo neque. Suscipit sunt reiciendis ipsam sint autem optio! Officia rerum porro obcaecati? Error sequi veniam numquam ipsa iste totam unde minus accusamus repellendus, fugiat eum temporibus veritatis voluptatibus laboriosam consectetur facere aliquid earum nam, delectus sit fugit architecto. Dolorum cumque, excepturi, assumenda vero quaerat mollitia nobis neque animi delectus soluta similique. Quae id architecto reiciendis nostrum? Cupiditate assumenda quibusdam enim, ab at sequi exercitationem iste est alias corrupti eius, reprehenderit deleniti, distinctio ullam accusamus ea! Pariatur delectus, optio nesciunt animi assumenda perferendis sapiente perspiciatis deserunt facere reprehenderit. Deserunt neque itaque soluta voluptatibus quos harum eum consectetur fugit nulla velit, nostrum tenetur cum doloribus dolores, suscipit numquam laudantium placeat voluptatem. Odio accusamus impedit numquam quos eius saepe veniam sint sed. Voluptate eos debitis blanditiis libero! Quas blanditiis eos non id vero nostrum neque nobis, voluptatem alias perspiciatis recusandae repellat sint? Quisquam ducimus velit sed illum nisi doloribus incidunt, deleniti quia officia! Quaerat adipisci est repudiandae, ut eligendi porro recusandae, totam perspiciatis magnam distinctio beatae repellat molestias molestiae commodi modi, voluptas possimus eum sint libero cupiditate debitis neque animi. Libero voluptatum unde reiciendis corrupti quo minima quos esse optio soluta maiores distinctio placeat assumenda ea, quis velit alias architecto perspiciatis nobis harum tempora dolore. Laudantium eveniet quos porro id autem qui iusto, laborum optio possimus dolorem tempore eius? Exercitationem deleniti pariatur adipisci ipsum eveniet nisi laudantium, sunt nostrum dolorum, explicabo, minus officiis id quisquam. Exercitationem incidunt debitis corporis soluta quisquam repellat doloremque dolore, libero tempora inventore consequatur praesentium accusantium placeat assumenda voluptatem quia mollitia animi impedit. Neque quidem nulla ex autem earum debitis! Non laudantium velit sit nostrum quis, voluptate explicabo asperiores eligendi quod sequi sed! Dicta, praesentium veritatis est a earum alias corrupti commodi? Voluptatem quasi eum eligendi quas inventore distinctio fuga qui animi numquam consequuntur aliquam optio, odit aliquid nesciunt ipsa incidunt reiciendis aut temporibus quidem dignissimos repudiandae. Harum omnis nulla quae qui amet odio ex iure, reiciendis error quod, exercitationem distinctio? Distinctio, et! Iste iusto nulla architecto culpa maiores dolores nemo mollitia in non sapiente ex dolor ipsam, molestiae veniam eum? Unde explicabo placeat veniam! Delectus animi placeat rerum, dolores, aliquam harum magnam excepturi alias ipsum odit impedit? Repudiandae necessitatibus quasi vitae, libero veritatis cupiditate aliquid dolores. Provident alias ex similique temporibus nemo nisi cum quaerat cupiditate vero deleniti aspernatur velit dolor, accusamus dignissimos maiores at quis beatae, deserunt culpa. Placeat deserunt quae maxime ea quis doloribus dolorum rerum tempora cupiditate dolore harum, quibusdam debitis, laboriosam qui nihil adipisci.
    </div>

  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap"
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle, DialogDescription } from '@headlessui/vue'

const gsapStore = useGsapStore()

const projects = [
  {
    name: 'The Favorite',
    mainImage: 'https://raw.githubusercontent.com/max13h/the_favorite/master/app/assets/images/readme/competition.png',
    description: "The mental load is doubled when it's shared with the other parents and relationships deteriorate due to the tensions created by the organization. \nThe Favorite offers a humorous take on the burden of parenthood. Parents work as a real team, while having fun competing against each other. \nLink the the presentation video:\n https://www.youtube.com/watch?v=HKW5yFXF45Q",
    images: [
      "https://raw.githubusercontent.com/max13h/the_favorite/master/app/assets/images/readme/root.png",
      "https://raw.githubusercontent.com/max13h/the_favorite/master/app/assets/images/readme/home_tasks.png",
      "https://raw.githubusercontent.com/max13h/the_favorite/master/app/assets/images/readme/home_events.png",
      "https://raw.githubusercontent.com/max13h/the_favorite/master/app/assets/images/readme/competition.png",
      "https://raw.githubusercontent.com/max13h/the_favorite/master/app/assets/images/readme/common_pot.png",
      "https://raw.githubusercontent.com/max13h/the_favorite/master/app/assets/images/readme/kids.png",
    ],
    link: 'https://github.com/max13h/the_favorite'
  },
  {
    name: 'Early stage project',
    mainImage: 'https://raw.githubusercontent.com/max13h/the_favorite/master/app/assets/images/readme/competition.png',
    description: '',
    images: [],
    link: ''
  },
  {
    name: 'Portfolio',
    mainImage: 'https://raw.githubusercontent.com/max13h/the_favorite/master/app/assets/images/readme/competition.png',
    description: '',
    images: [],
    link: ''
  }
]

const modalOpened = ref('')
function closeModal() {
  modalOpened.value = ''
}
function openModal(technologie: string) {
  modalOpened.value = technologie
}

onMounted(() => {
  gsapStore.myProjectsTL = () => {
    return gsap.timeline()
      .to('.test', {
        x: 1000
      })
  }
})
</script>

<style scoped>

</style>
