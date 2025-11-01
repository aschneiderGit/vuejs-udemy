<template>
  <h1>Home</h1>

  <button @click="active = 'FristComponent'">First</button>
  <button @click="active = 'SecondComponent'">Second</button>
  <button @click="active = 'ThirdComponent'">Third</button>
  <!-- <FristComponent />
  <SecondComponent />
  <ThridComponent /> -->
  <component :is="active" />
</template>
<script>
import FristComponent from "./FirstComponent.vue";
import ThirdComponent from "./ThirdComponent.vue";
import SecondComponent from "./SecondComponent.vue";
export default {
  name: "HomeComponent",
  components: { FristComponent, SecondComponent, ThirdComponent },
  data() {
    return { active: "FristComponent" };
  },
};
</script>
