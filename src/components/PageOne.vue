<template>
  <h1>Two Way Binding</h1>
  <input type="text" placeholder="Add the number" v-model="count" />
  <h3>{{ count }}</h3>
</template>
<script>
export default {
  name: "PageOne",
  data() {
    return {
      count: 0,
    };
  },
};
</script>
