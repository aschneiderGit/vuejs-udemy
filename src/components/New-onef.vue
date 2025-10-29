<template>
  <h1>Email : {{ getData().email }}</h1>
  <h1>Mobile : {{ getData().phone }}</h1>
  <h1>Name : {{ getName("Joe") }}</h1>
  <button v-on:click="alertData('hello')">Click Here</button>
</template>
<script>
export default {
  name: "PAGES",
  data() {
    return {
      email: "abc@gmail.com",
      mobile: "555555",
    };
  },
  methods: {
    getName(name) {
      return name;
    },
    getData() {
      return {
        email: this.email,
        phone: this.phone,
      };
    },
    alertData(data) {
      alert(data);
    },
  },
};
</script>
<style scoped>
h1 {
  color: red;
}
</style>
