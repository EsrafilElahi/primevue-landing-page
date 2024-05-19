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
import { onMounted, reactive, watch } from 'vue';
const route = useRoute()

const cityData = reactive({
  loading: false,
  error: false,
  data: []
})


const fetchData = async (userName) => {
  try {
    cityData.loading = true
    const res = await axiosInstance.get('https://realtor-search.p.rapidapi.com/properties/search-buy', {
      params: {
        location: `city:${userName || 'New York'}`
      }
    });
    cityData.loading = false
    cityData.error = false
    cityData.data = res.data.data.results
  } catch (error) {
    cityData.error = error
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