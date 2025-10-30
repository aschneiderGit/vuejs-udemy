<template>
  <h1>Child Component</h1>
  <h3>{{ name }}</h3>
</template>
<script>
export default {
  name: "ChildComponent",
  props: {
    name: String,
  },
  methods: {},
};
</script>
<style scoped></style>
