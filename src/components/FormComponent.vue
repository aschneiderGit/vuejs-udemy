<template>
  <h1 id="form">Simple Form</h1>
  <form action="">
    <label>Username</label>
    &nbsp;
    <input v-model="form.username" type="text" placeholder="username" />
    <br />
    <label>Password</label>
    &nbsp;
    <input v-model="form.password" type="password" placeholder="password" />
    <br />
    <br />
    <label>Hobbies</label>
    &nbsp; &nbsp;
    <label>Kayak</label>
    <input v-model="form.hobbies" type="checkbox" value="kayak" />
    &nbsp; &nbsp;
    <label>Motocircle</label>
    <input v-model="form.hobbies" type="checkbox" value="moto" />
    &nbsp; &nbsp;
    <label>Video Game</label>
    <input v-model="form.hobbies" type="checkbox" value="videoGame" />
    <br />
    <label>Gender</label>
    &nbsp; &nbsp;
    <label>Male</label>
    <input v-model="form.gender" type="radio" value="male" />
    &nbsp; &nbsp;
    <label>Female</label>
    <input v-model="form.gender" type="radio" value="female" />

    <button type="button" v-on:click="login">Sign Up</button>
  </form>
  <p>{{ form }}</p>
</template>
<script>
export default {
  name: "FormComponent",
  data() {
    return {
      form: {
        username: "",
        password: "",
        hobbies: [],
        gender: "",
      },
      saveData: [],
    };
  },
  methods: {
    login() {
      for (const item in this.form) {
        if (this.form[item] != "" || this.form[item].length != 0) {
          this.saveData.push(this.form[item]);
        }
      }
      console.table("form data: " + this.form.toString());
      console.table("login data: " + this.saveData);
    },
  },
};
</script>
