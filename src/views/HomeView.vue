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
import { onMounted, watch, watchEffect } from 'vue';
const route = useRoute()

const fetchData = async (userName) => {
  try {
    const res = await axiosInstance.get('https://realtor-search.p.rapidapi.com/properties/search-buy', {
      params: {
        location: `city:${userName || 'New York'}`
      }
    });
    console.log('res :', res);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

onMounted(() => {
  fetchData(route.query.userName);
});

watch(() => route.query.userName, (newUserName) => {
  fetchData(newUserName);
});


</script>

<style scoped></style>