<template>
  <div class="login-form">
    <form @submit.prevent="submitForm">
      <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-4 col-form-label" >Email</label>
    <div class="col-sm-10">
      <input type="email"
          class="form-control"
          id="exampleInputEmail1"
          v-model="formData.email"
          placeholder="email@gmail.com" />
  
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-4 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword"  v-model="formData.password">
    </div>
  </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        // Make a POST request to the login endpoint without checking the response
        await axios.post("http://localhost:3000/api/Users/login", this.formData);

        // Navigate to the home page on successful login
        this.$router.push("/home");
      } catch (error) {
        // Handle any errors here
        console.error("Error during login:", error.message);
        console.log("Server response:", error.response);
      }
    },
  },
};
</script>
