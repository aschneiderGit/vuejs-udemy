<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <RouterLink to="/"> Home</RouterLink>
  <RouterLink to="/1/2"> First </RouterLink>
  <RouterLink to="/second"> 2nd </RouterLink>
  <RouterView></RouterView>
</template>

<script>
//import HomeComponent from "./components/HomeComponent.vue";

export default {
  name: "App",
  components: {
    //HomeComponent,
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
