<template>
  <div>
    <header>
      <div class="sidebar">
        <h5>{{ groupName }}</h5>
        <h2>Channel</h2>
      </div>
    </header>
    <div class="chat">
      <div v-for="msg in messages" :key="msg.id" class="message">
        <template v-if="msg.channelasal === groupName">
      <p>{{ msg.chat }}</p>
      <small>{{ formatTimestamp(msg.timestamp) }}</small>
    </template>
      </div>

      <div class="mb-3">
        <label for="exampleInputChat" class="form-label"></label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="Ketik Pesan"
          v-model="message"
        />

        <button @click="sendMessage" class="btn btn-primary">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      message: "",
      messages: [],
      selectedGroup: null,
      groupName: "Nama Group",
    };
  },
  mounted() {
    this.fetchMessages();
    this.selectedGroup = this.$route.query.groupId;
    this.fetchGroupName();
  },
  methods: {
    async fetchMessages() {
      try {
        const response = await fetch("http://localhost:3000/api/Message");
        const data = await response.json();
        this.messages = data.docs.reverse();
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    },
    async sendMessage() {
      try {
        if (this.message.trim() === "") {
          return;
        }

        if (!this.selectedGroup) {
          console.error("No group selected.");
          return;
        }

        const response = await fetch("http://localhost:3000/api/Message", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat: this.message,
            channelasal : this.groupName,
            groupId: this.selectedGroup,
          }),
        });

        const result = await response.json();
        console.log("Message sent:", result);

        this.fetchMessages();
        this.message = "";
      } catch (error) {
        console.error("Error sending message:", error);
      }
    },
    async fetchGroupName() {
      try {
        if (this.selectedGroup) {
          const response = await fetch(
            `http://localhost:3000/api/Channel/${this.selectedGroup}`
          );
          const data = await response.json();
          this.groupName = data.channelName;
        }
      } catch (error) {
        console.error("Error fetching group name:", error);
      }
    },
    formatTimestamp(timestamp) {
      try {
        const momentDate = moment(timestamp);
        if (momentDate.isValid()) {
          return momentDate.format("YYYY/MM/DD HH:mm");
        } else {
          throw new Error("Invalid moment date");
        }
      } catch (error) {
        console.error("Error formatting timestamp:", error);
        return "Invalid Date";
      }
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding-top: 20px;
  font-family: "Inter", sans-serif;
}

/* Sidebar styling */
.sidebar {
  height: 100vh;
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #0d6efd;
  color: #fff;
  padding-top: 40px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
}

/* Chat styling */
.chat {
  position: fixed;
  bottom: 0;
  left: 300px; /* Adjust this value to provide space between sidebar and chat */
  width: calc(100% - 250px); /* Adjusted width */
  padding: 10px;
}

.message {
  background-color: #f2f2f2;
  padding: 10px;
  margin-bottom: 10px;
  margin-right: 150px;
  border-radius: 5px;
  text-align: right;
}

.chat input {
  width: calc(100% - 150px); /* Adjusted input width */
  margin-right: 10px;
}

.chat button {
  width: 70px;
  margin-top: 10px;
}
</style>
