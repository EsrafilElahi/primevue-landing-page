import { createRouter, createMemoryHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/search-buy-house",
    name: "SearchBuyHouse",
    component: () => import("../views/BasketView.vue"),
  },
  {
    path: "/search-rent-house",
    name: "SearchRentHouse",
    component: () => import("../views/BasketView.vue"),
  },
  {
    path: "/search-sold-house",
    name: "SearchSoldHouse",
    component: () => import("../views/BasketView.vue"),
  },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
