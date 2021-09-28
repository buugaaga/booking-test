<template>
  <div>
    <h1>Отели</h1>
    <div>
      <ul class="list-container">
        <template v-for="hotel in hotels" :key="hotel.id">
          <card :hotel="hotel" />
        </template>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useStore } from "../store";
import actions from "../constants/actions";
import Card from "../components/Card.vue";

export default defineComponent({
  components: {
    card: Card,
  },
  setup() {
    const store = useStore();
    const hotels = computed(() => store.state.hotels);

    onMounted(() => {
      store.dispatch(actions.ALL_HOTELS);
    });

    return { hotels };
  },
});
</script>

<style scoped>
.list-container {
  list-style: none;
  display: flex;
  flex-direction: column;
}

</style>