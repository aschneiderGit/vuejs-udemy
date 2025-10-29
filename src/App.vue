<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="MetaBrain.org" />
  <PAGES />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import PAGES from "./components/New-onef.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    PAGES,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
