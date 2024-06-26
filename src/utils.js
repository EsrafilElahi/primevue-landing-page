import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

// const RAPID_API_KEY = "917d9af744msh5bbe388a9895c71p14050djsn53926f762f6f";
// const RAPID_API_HOST = "realtor-search.p.rapidapi.com";
// axiosInstance.defaults.headers.common["X-Rapidapi-Key"] = RAPID_API_KEY;
// axiosInstance.defaults.headers.common["X-Rapidapi-Host"] = RAPID_API_HOST;

import { ref, watch } from "vue";

export function useDebounce(value, delay = 300) {
  const debouncedValue = ref(value.value);

  let timeout;
  watch(value, (newValue) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      debouncedValue.value = newValue;
    }, delay);
  });

  return debouncedValue;
}
