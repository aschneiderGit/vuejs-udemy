<template>
  <h1>Email : {{ email }}</h1>
  <h1>Mobile : {{ (mobile = "0333333") }}</h1>
  <h1>Name : {{ getName1("Sajad") }}</h1>
</template>
<script>
export default {
  name: "PAGES",
  data() {
    return {
      email: "abc@gmail.com",
      mobile: "555555",
      getName1: function (a) {
        return a;
      },
    };
  },
};
</script>
<style scoped>
h1 {
  color: red;
}
</style>
