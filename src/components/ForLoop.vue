<template>
  <h1 id="pages3">For Loop</h1>
  <ul>
    <li v-for="program in technology" :key="program">
      {{ program }}
    </li>
  </ul>
  <br />
  <ChildComponent name="Tony stark" :user="user" :getData="getData" />
</template>
<script>
import ChildComponent from "./ChildComponent.vue";
export default {
  name: "ForLoop",
  data() {
    return {
      technology: ["PHP", "JavaScript", "C++", "C-sharp"],
      user: { name: "Tony", email: "tony@gmail.com" },
    };
  },
  methods: {
    getData() {
      alert("Methods called");
    },
  },
  components: { ChildComponent },
};
</script>
<style>
#pages3 {
  color: rgb(211, 25, 0);
}
</style>
