<template>
  <div>
    <CitiesTabs />

    <div>
      <div v-if="!cityData.error">
        <div v-if="cityData.loading">loading...</div>
        <div v-else>{{ route.query.cityName || 'New York' }}</div>
      </div>
      <div v-else class="text-red-500"> error data fetch {{ cityData.error.message }}</div>
    </div>
  </div>
</template>

<script setup>
import { axiosInstance } from '../utils';
import CitiesTabs from '../components/CitiesTabs.vue';
import { useRoute } from 'vue-router';
import { onMounted, reactive, watch } from 'vue';
const route = useRoute();

const cityData = reactive({
  loading: false,
  error: null,
  data: []
})

const fetchData = async (cityName) => {
  try {
    cityData.loading = true
    const res = await axiosInstance.get('https://realtor-search.p.rapidapi.com/properties/search-buy', {
      params: {
        location: `city:${cityName || 'New York'}`
      }
    });
    cityData.loading = false
    cityData.error = null
    cityData.data = res.data.data.results
  } catch (error) {
    console.log('error fetching data:', error);
    cityData.error = error
  }
};

onMounted(() => {
  fetchData(route.query.cityName);
});

watch(() => route.query.cityName, (newCityName) => {
  fetchData(newCityName);
});

</script>

<style scoped></style>