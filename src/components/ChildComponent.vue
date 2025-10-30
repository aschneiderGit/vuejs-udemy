<template>
  <h1>child components</h1>
  <h3>{{ name }}</h3>
  <h3>{{ user.name }}</h3>
  <button v-on:click="getData()">Call the Function</button>
  <ul>
    <li v-for="item in users" :key="item">
      <Newuser :data="item" />
    </li>
  </ul>
  <div>
    <div v-html="emailadress"></div>
    <div v-html="id"></div>
  </div>
  <h1>Class Binding</h1>
  <h3 :class="{ yellow: color }">Dynamic class</h3>
  <button v-on:click="color = !color">change the color</button>
</template>
<script>
import Newuser from "./NewUser.vue";
export default {
  name: "ChildComponent",
  props: {
    name: String,
    user: Object,
    getData: Function,
  },
  data() {
    return {
      users: [
        {
          name: "jackson",
          email: "<h1>jackson454@gmail.com</h1>",
        },
        {
          name: "jamws",
          email: "james4564@gmail.com",
        },
        {
          name: "Henry",
          email: "Henry@gmail.com",
        },
        {
          name: "Oliver",
          email: "Oliver788@gmail.com",
        },
        {
          name: "Tony",
          email: "Tony3004@gmail.com",
        },
      ],
      names: "peter",
      emailadress: "<p>peter123@gmail.com<p/>",
      id: "<h1> 16465466 <h1/>",
      color: false,
    };
  },
  components: { Newuser },
};
</script>
<style>
.yellow {
  color: blue;
  font-weight: bold;
  background-color: yellow;
  width: 150px;
  height: 50px;
}
</style>
