<template>
  <ChildSlot>
    <template v-slot:img>
      <img src="https://cdn.myanimelist.net/images/anime/1147/112650.jpg" />
    </template>
    <template v-slot:text>
      <h1>{{ msg }}</h1>
    </template>
  </ChildSlot>
  <ChildSlot>
    <template #img>
      <img src="https://cdn.myanimelist.net/images/anime/1147/112650.jpg" />
    </template>
  </ChildSlot>
</template>

<script>
import ChildSlot from "./ChildSlot.vue";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Hello Word",
    };
  },
  components: {
    ChildSlot,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
