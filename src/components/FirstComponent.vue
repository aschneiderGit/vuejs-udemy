<template>
  <h1>First component</h1>
  <p v-if="number">number in path : {{ number }}</p>
</template>
<script>
import { useRoute } from "vue-router";
export default {
  name: "FirstComponent",
  data() {
    return {
      number: null,
    };
  },
  mounted() {
    const route = useRoute();
    this.number = route.params["number"];
  },
};
</script>
<style scoped>
h1 {
  color: rgb(104, 42, 165);
  font-weight: bold;
}
</style>
