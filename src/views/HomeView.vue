<template>
  <div>
    <CitiesTabs />

    <div>
      <div v-if="!cityData.error">
        <div v-if="cityData.loading" class="text-center mt-10">loading...</div>
        <div v-else class="text-center mt-10" v-for="city in cityData.data" :key="city.id">
          <CityHouseItem item={{ city }} />
        </div>
      </div>
      <div v-else class="text-red-500 text-center mt-10"> error data fetch : {{ cityData.error.message }}</div>
    </div>
  </div>
</template>

<script setup>
import { axiosInstance } from '../utils';
import CitiesTabs from '../components/CitiesTabs.vue';
import { useRoute } from 'vue-router';
import CityHouseItem from '../components/CityHouseItem.vue';
import { onMounted, reactive, watch } from 'vue';
const route = useRoute();

const cityData = reactive({
  loading: false,
  error: null,
  data: []
});

const pagination = reactive({
  limit: 20,
  offset: 0,
  next: null,
  previous: null,
})

const fetchData = async () => {
  try {
    cityData.loading = true
    const res = await axiosInstance.get(`/ability/?limit=${pagination.limit}&offset=${pagination.offset}`, {
      // params: {
      //   location: `city:${cityName || 'New York'}`
      // }
    });
    cityData.loading = false
    cityData.error = null
    cityData.data = res.data.results
    pagination.next = res.data.next
    pagination.previous = res.data.previous

  } catch (error) {
    console.log('error fetching data:', error);
    cityData.error = error
  }
};

onMounted(() => {
  fetchData();
});

// watch(() => route.query.cityName, (newCityName) => {
//   fetchData(newCityName);
// });

</script>

<style scoped></style>