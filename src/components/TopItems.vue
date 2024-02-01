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
// import { defineProps } from 'vue';

const props = defineProps({
    topItems: {
        topItems: Array,
    }
})


</script>