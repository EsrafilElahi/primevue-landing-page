<template>
  <div>
    <CitiesTabs />
    Home pageeeeeeeeeeee

    {{ route.query.userName || 'New York' }}
  </div>
</template>

<script setup>
import { axiosInstance } from '../utils';
import CitiesTabs from '../components/CitiesTabs.vue';
import { useRoute } from 'vue-router'
import { onMounted } from 'vue';
const route = useRoute()

onMounted(() => {
  axiosInstance.get('https://realtor-search.p.rapidapi.com/properties/search-buy')
})

</script>

<style scoped></style>