<template>
  <div class="grid md:grid-cols-3 gap-x-4 mt-5 md:gap-y-4 gap-y-5">
    <div class="grid md:col-span-2">
      <img class="" src="/image-web-3-desktop.jpg" alt="image" />
      <div class="grid md:grid-cols-2 mt-3">
        <h2 class="text-4xl font-bold">The Bright Future of Web 3.0?</h2>

        <div class="flex flex-col gap-y-2">
          <p class="text-gray-500">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button class="bg-red-400 text-[10px] max-w-[100px] text-white p-1.5">
            READ MORE
          </button>
        </div>
      </div>
    </div>

    <div class="grid md:col-span-1 bg-black p-3 space-y-3">
      <div class="flex flex-col gap-y-3">
        <h1 class="text-4xl text-yellow-500">New</h1>

        <div class="space-y-2 mt-2">
          <h2 class="text-[14px] font-bold text-white">
            Hydrogen VS Electric Cars
          </h2>

          <p class="text-[12px] text-gray-500">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </div>

        <div class="w-full h-[1px] bg-gray-400 mt-2"></div>

        <div class="space-y-2 mt-2">
          <h2 class="text-[14px] font-bold text-white">
            Hydrogen VS Electric Cars
          </h2>

          <p class="text-[12px] text-gray-500">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </div>

        <div class="w-full h-[1px] bg-gray-400 mt-2"></div>

        <div class="space-y-2 mt-2">
          <h2 class="text-[14px] font-bold text-white">
            Hydrogen VS Electric Cars
          </h2>

          <p class="text-[12px] text-gray-500">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- list of items  -->
  <top-items :topItems="topItems" />


</template>

<script setup>
import TopItems from "../components/TopItems.vue";
import { ref } from "vue";

const topItems = ref([
    { id: 1, src: '/image-retro-pcs.jpg', name: 'Reviving Redtro PCs', description: 'What happend when the old PCs are givens modern upgrade?'},
    { id: 2, src: '/image-top-laptops.jpg', name: 'Top 10 laptop of 2022', description: 'Our best pick for various needs and debugs.'},
    { id: 3, src: '/image-gaming-growth.jpg', name: 'The growing of gamming', description: 'How the pendamice has sparked fresh opportunities?'}
])

</script>
