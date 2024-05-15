<template>
  <div class="flex justify-center gap-3">
    <router-link active-class="text-purple-500 border-purple-300" class="px-3 py-2 border rounded-lg"
      :to="{ name: 'Home' }">home</router-link>
    <router-link active-class="text-purple-500 border-purple-300" class="px-3 py-2 border rounded-lg"
      to="/search-buy-house">Search Buy House</router-link>
    <router-link active-class="text-purple-500 border-purple-300" class="px-3 py-2 border rounded-lg"
      to="/search-rent-house">Search Rent House</router-link>
    <router-link active-class="text-purple-500 border-purple-300" class="px-3 py-2 border rounded-lg"
      to="/search-sold-house">Search Sold House</router-link>
  </div>
</template>

<script setup>

</script>

<style scoped></style>