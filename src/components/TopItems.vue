<template>
    <div class="mt-10">
        <div class="grid md:grid-cols-3 gap-x-2 gap-y-4">
            <div v-for="item in topItems" :key="item.id" class="flex gap-x-4">
                <img class="w-[100px]" :src="item.src" alt="item image">
                <div>
                    <h2 class="text-xl text-gray-400">0{{ item.id }}</h2>
                    <h2 class="text-[15px] font-bold">{{ item.name }}</h2>
                    <p class="text-[12px] text-gray-500">{{ item.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const topItems = ref([
    { id: 1, src: '/image-retro-pcs.jpg', name: 'Reviving Redtro PCs', description: 'What happend when the old PCs are givens modern upgrade?'},
    { id: 2, src: '/image-top-laptops.jpg', name: 'Top 10 laptop of 2022', description: 'Our best pick for various needs and debugs.'},
    { id: 3, src: '/image-gaming-growth.jpg', name: 'The growing of gamming', description: 'How the pendamice has sparked fresh opportunities?'}
])


</script>