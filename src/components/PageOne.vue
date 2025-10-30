<template>
  <h1>Two Way Binding</h1>
  <input type="text" placeholder="Add the number" v-model="count" />
  <h3>{{ count }}</h3>
  <ChildComponent name="Tony Stark" />
</template>
<script>
import ChildComponent from "./ChildComponent.vue";
export default {
  name: "PageOne",
  components: {
    ChildComponent,
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>
