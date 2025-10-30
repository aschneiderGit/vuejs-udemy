<template>
  <h1 id="if-condition" v-if="display">If Condition</h1>
  <h1 id="if-condition" v-else>Else Condition</h1>
  <button v-on:click="display = !display">Change condition</button>
</template>
<script>
export default {
  name: "IfCondition",
  data() {
    return {
      display: false,
    };
  },
  methods: {},
};
</script>
<style scoped></style>
