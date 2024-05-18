<template>
  <div>
    <CitiesTabs />
    Home pageeeeeeeeeeee

    {{ route.query.userName || 'New York' }}
  </div>
</template>

<script setup>
import CitiesTabs from '../components/CitiesTabs.vue';
import { useRoute } from 'vue-router'
const route = useRoute()

</script>

<style scoped></style>