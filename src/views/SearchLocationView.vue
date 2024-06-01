<template>
  <div class="flex flex-col justify-center items-center mt-10 gap-1">
    <span>
      Search Location With Name
    </span>

    <InputSearch v-model:inputValue="value" placeholder="like: hoenn or id: 4" />

    <div v-if="!pokemonLocationData?.error" class="mt-10">
      <div v-if="pokemonLocationData?.loading">loading...</div>
      <div v-else>
        <div v-if="pokemonLocationData?.data?.region">
          <PokemonItem :item="pokemonLocationData?.data?.region" />
        </div>
      </div>
    </div>
    <div v-else class="text-red-500 text-center mt-10">
      error data fetch: {{ pokemonLocationData?.error?.message }}
    </div>


  </div>
</template>

<script setup>
import { reactive, ref, watch, watchEffect } from 'vue';
import InputSearch from '../components/InputSearch.vue';
import PokemonItem from '../components/PokemonItem.vue';
import { axiosInstance, useDebounce } from '../utils';

const value = ref('');

const debouncedValue = useDebounce(value, 700);

const pokemonLocationData = reactive({
  loading: false,
  error: null,
  data: {}
});

const fetchData = async (pokeLocation) => {
  try {
    pokemonLocationData.loading = true;
    const res = await axiosInstance.get(`https://pokeapi.co/api/v2/pokedex/${pokeLocation}`);

    pokemonLocationData.loading = false;
    pokemonLocationData.error = null;

    pokemonLocationData.data = res.data;
  } catch (error) {
    console.log('error fetching data search games :', error);
    pokemonLocationData.error = error
  }
};

// watch(() => value.value, (newVal) => {
// console.log('value watch :', newVal)
// });

watch(() => pokemonLocationData.data, () => {
  // console.log('pokemonLocationData watch :', pokemonLocationData)
})

// both of wathes is ok
// watch(debouncedValue, (newVal) => {
//   // console.log('debounced value watchhhhhh :', newVal);
//   if (newVal) {
//     fetchData(newVal);
//   }
// });

watchEffect(async () => {
  // this effect will run immediately and then
  // re-run whenever currentBranch.value changes
  if (debouncedValue.value) {
    fetchData(debouncedValue.value);
  }
})

</script>

<style scoped></style>