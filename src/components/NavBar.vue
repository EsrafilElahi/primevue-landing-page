<template>
  <div class="flex gap-3">
    <RouterLink :to="{ name: 'Home' }">home</RouterLink>
    <RouterLink to="/search-buy-house">Search Buy House</RouterLink>
    <RouterLink to="/search-rent-house">Search Rent House</RouterLink>
    <RouterLink to="/search-sold-house">Search Sold House</RouterLink>
  </div>

  <div class="card">
    <TabMenu v-model:activeIndex="active" :model="items" />
  </div>
</template>

<script setup>

import { ref } from "vue";

const active = ref(0);

const items = ref([
  { label: 'Dashboard', icon: 'pi pi-home' },
  { label: 'Transactions', icon: 'pi pi-chart-line' },
  { label: 'Products', icon: 'pi pi-list' },
  { label: 'Messages', icon: 'pi pi-inbox' }
]);

</script>

<style scoped></style>