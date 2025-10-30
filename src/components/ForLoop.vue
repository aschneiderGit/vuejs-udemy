<template>
  <h1 id="for-loop">For Loop</h1>
  <ul>
    <li v-for="language in stacks" :key="language">
      {{ language }}
    </li>
  </ul>
  <br />
  <ul>
    <li v-for="user in users" :key="user.email">
      {{ user.name }}
      <ul>
        {{
          user.email
        }}
      </ul>
      <ul>
        {{
          user.tel
        }}
      </ul>
    </li>
  </ul>
</template>
<script>
export default {
  name: "ForLoop",
  data() {
    return {
      stacks: ["PHP", "C#", "JS", "Java", "Python"],
      users: [
        {
          name: "Jack",
          email: "jack@gmail.com",
          tel: +338938393,
        },
        {
          name: "Joe",
          email: "joe@gmail.com",
          tel: +5555555,
        },
        {
          name: "Luck",
          email: "luck@gmail.com",
          tel: +4000000,
        },
      ],
    };
  },
  methods: {},
};
</script>
<style scoped></style>
