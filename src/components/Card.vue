<template>
  <li class="card" v-on:click="viewHotel(hotel.id)">
    <img
      class="image"
      :src="`${publicPath}${hotel.id}.jpg`"
      v-bind:alt="hotel.id"
    />

    <div class="content">
      <p class="title">{{ hotel.title }}</p>
      <p class="content">{{ hotel.body }}</p>
    </div>
  </li>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { defineComponent, PropType } from "vue";
import { Hotel } from "@/types/hotel";

export default defineComponent({
  props: {
    hotel: {
      type: Object as PropType<Hotel>,
    },
    onClick: {
      type: Function as PropType<() => void>,
    },
  },
  setup() {
    const router = useRouter();

    const viewHotel = (id: number) => {
      router.push(`/hotel/${id}`);
    };
    return { viewHotel, publicPath: process.env.BASE_URL };
  },
});
</script>

<style scoped>
.card {
  display: flex;
  align-items: center;
  padding: 10px;
}
.image {
  width: 200px;
  height: 200px;
}
</style>

