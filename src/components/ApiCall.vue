<template>
  <h1>Call API's</h1>

  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>First-Name</th>
        <th>Last-Name</th>
        <th>Email</th>
        <th>Picture</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in info" :key="item">
        <td>{{ item.id }}</td>
        <td>{{ item.firstName }}</td>

        <td>{{ item.LastName }}</td>
        <td>{{ item.email }}</td>
        <td><img :src="item.image" alt="" /></td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import axios from "axios";
import { useRoute } from "vue-router";
export default {
  name: "ApiCall",
  data() {
    return {
      info: [],
    };
  },
  async mounted() {
    const limit = 15;
    const route = useRoute();
    let information = await axios.get(
      "https://dummyjson.com/users?limit=" +
        limit +
        "&skip=" +
        route.params.pageNumber * limit
    );
    this.info = information.data.users;
    console.log(information);
  },
};
</script>
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
