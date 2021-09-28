<template>
  <div class="container">
    <h1>Отель {{ hotel?.title }}</h1>
    <img
      class="image-form"
      :alt="hotel?.id"
      :src="`${publicPath}${hotel?.id}.jpg`"
    />
    <p>{{ hotel?.body }}</p>
    <div class="form">
      <h3>Заполните поля и отправьте форму</h3>
      <input v-model="address" placeholder="Адрес" />
      <input v-model="name" placeholder="Имя" />
      <input v-model="phone" placeholder="Телефон" />
      <button>Забронировать</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import actions from "../constants/actions";
import { useStore } from "../store";

export default defineComponent({
  data() {
    return {
      address: "",
      name: "",
      phone: "",
    };
  },
  setup() {
    const store = useStore();
    const route = useRoute();

    const hotel = computed(() => store.state.hotel);

    onMounted(() => {
      store.dispatch(actions.ONE_HOTEL, route.params.id);
    });
    console.log(this);

    return { hotel };
  },
});
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.image-form {
  height: 400px;
  width: 400px;
}
.form {
  display: flex;
  flex-direction: column;
}
</style>
