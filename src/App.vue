<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="text-gray-600 border-b border-b-2">
    <nav class="p-5 flex items-center justify-center gap-4 flex-col md:flex-row">
      <RouterLink to="/" class="hover:underline">Reverse String</RouterLink>
      <RouterLink to="/longest-word" class="hover:underline">Longest Word</RouterLink>
      <RouterLink to="/word-query" class="hover:underline">Word Query</RouterLink>
      <RouterLink to="/matrix-difference" class="hover:underline">Matrix Difference</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>