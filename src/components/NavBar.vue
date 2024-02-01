<template>
  <nav class="">
    <!-- The black blur  -->

    <!-- Desktop Navigation -->
    <div class="hidden md:flex items-center justify-between">
      <svg
        fill="#000000"
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        class="w-10 h-10"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M128 209c-44.735 0-81-36.265-81-81s36.265-81 81-81 81 36.265 81 81-36.265 81-81 81zm22.53-141.14A64.379 64.379 0 0 0 128.5 64a64.352 64.352 0 0 0-22.917 4.19 1317.969 1317.969 0 0 0 21.079 22.104c.77.79 2.042.806 2.831.038 0 0 12.798-12.235 21.038-22.472zm0 121.635c-8.239-10.237-21.05-22.665-21.05-22.665a1.975 1.975 0 0 0-2.806.041s-10.22 10.605-21.09 22.294a64.352 64.352 0 0 0 22.916 4.19 64.379 64.379 0 0 0 22.03-3.86zM89.908 76.531s-26.02 17.694-26.02 51.538c0 33.845 26.02 53.465 26.02 53.465l38.09-39.787 38.376 38.29s27.389-21.385 27.389-52.066c0-30.682-27.739-51.678-27.739-51.678l-25.672 26.32 13.39 13.837 13.112-11.68s6.936 10.757 7.035 23.153c.098 12.396-6.653 24.904-6.653 24.904l-39.191-38.937-37.495 38.69s-7.684-11.61-7.65-25.002c.035-13.393 7.008-24.966 7.008-24.966l12.75 12.488 14.996-12.609-27.746-25.96z"
            fill-rule="evenodd"
          ></path>
        </g>
      </svg>
      <div>
        <router-link to="/" class="text-gray-600 mr-5">Home</router-link>
        <router-link to="/about" href="about" class="text-gray-600 mr-5"
          >About</router-link
        >
        <a class="text-gray-600 mr-5">Popular</a>
        <a class="text-gray-600 mr-5">Trading</a>
        <a class="text-gray-600">Catagories</a>
      </div>
    </div>

    <!-- Mobile Navigation (Hidden by default) -->
    <div class="md:hidden mt-4">
      <button @click="toggleMobileMenu" class="text-gray-600">
        <svg
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      <div
        v-if="isMobileMenuOpen"
        class="absolute z-10 bg-white h-full w-2/3 ml-0"
      >
        <router-link
          to="/"
          class="flex text-gray-600 py-2 pl-10 hover:bg-red-400 hover:text-white items-center"
          >Home</router-link
        >
        <router-link
          to="/about"
          class="flex text-gray-600 py-2 pl-10 hover:bg-red-400 hover:text-white items-center"
          >New</router-link
        >
        <a
          class="flex text-gray-600 py-2 pl-10 hover:bg-red-400 hover:text-white items-center"
          >Popular</a
        >
        <a
          class="flex text-gray-600 py-2 pl-10 hover:bg-red-400 hover:text-white items-center"
          >Trading</a
        >
        <a
          class="flex text-gray-600 py-2 pl-10 hover:bg-red-400 hover:text-white items-center"
          >Categories</a
        >
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>
