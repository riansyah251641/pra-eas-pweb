<template>
  <div class="login-form">
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          v-model="formData.email"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          v-model="formData.password"
        />
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

<style scoped>
.login-form {
  max-width: 450px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  margin-left: auto !important;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
