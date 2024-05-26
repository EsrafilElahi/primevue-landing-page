<template>
  <div class="flex justify-center gap-3">
    <router-link active-class="text-purple-500 border-purple-300" class="px-3 py-2 border rounded-lg"
      :to="{ name: 'Home' }">Home</router-link>
    <router-link active-class="text-purple-500 border-purple-300" class="px-3 py-2 border rounded-lg"
      to="/search-games">Search Games</router-link>
    <router-link active-class="text-purple-500 border-purple-300" class="px-3 py-2 border rounded-lg"
      to="/search-location">Search Location</router-link>
    <router-link active-class="text-purple-500 border-purple-300" class="px-3 py-2 border rounded-lg"
      to="/search-pokemon">Search Pokemon</router-link>
  </div>
</template>

<script setup>

</script>

<style scoped></style>