import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/hotel-list",
    name: "hotel-list",
    component: () => import("./pages/HotelList.vue"),
  },
  {
    path: "/hotel/:id",
    alias: "/hotel-form",
    name: "hotel-form",
    component: () => import("./pages/HotelForm.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

