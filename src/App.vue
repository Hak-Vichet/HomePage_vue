<template>
  <!-- the blur screen  -->
  <!-- <div class="flex w-full h-full bg-black/50 absolute z-10"></div> -->


  <div class="py-5 px-10 max-w-[1024px] mx-auto">
    <!-- the navbar -->
    <nav-bar />

    <!-- this routerview with contain all of the router pages  -->
    <router-view />
  </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
import HomePage from "@/pages/HomePage.vue";

import { RouterView } from "vue-router";
</script>
