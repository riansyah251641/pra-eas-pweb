<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">ChattingApp</a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/home">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/">Logout</router-link>
            </li>
          </ul>
          <!-- Tombol Add Channel -->
          <router-link class="btn btn-outline-primary me-2" to="/addchannel">
            <i class="bi bi-plus"></i> Add Channel
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Card Section -->
    <div class="container mt-5">
      <div class="row">
        <div
          v-for="(channel, index) in Channels"
          :key="index"
          class="col-sm-6 mb-4"
        >
          <div class="card h-200 shadow">
            <div class="card-body">
              <h5 class="card-title">{{ channel.channelName }}</h5>
              <p class="card-text">{{ channel.channelDescription }}</p>
              <button @click="joinChannel(channel.id)" class="btn btn-primary">
                Join Channel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Konten -->
    <main class="mt-5">
      <div class="container">
        <!-- ... (Konten lainnya) ... -->
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Channels: [],
    };
  },
  mounted() {
    this.getChannels();
  },
  activated() {
    this.getChannels();
  },
  methods: {
    async getChannels() {
      try {
        const response = await this.$axios.get(
          "http://localhost:3000/api/Channel"
        );
        this.Channels = response.data.docs;
      } catch (error) {
        console.error("Error fetching Channels:", error);
      }
    },
    joinChannel(groupId) {
      console.log("Joining channel with ID:", groupId);
      this.$router.push({ path: "/channel", query: { groupId: groupId } });
    },
  },
};
</script>

<style>
nav {
  height: 70px;
}

main {
  margin-top: 70px;
}
</style>
