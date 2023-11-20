<template>
  <div class="update-file-container">
    <div class="router-container">
      <router-link class="file-list-link" to="/list">File List</router-link>
      <router-link class="add-file-link" to="/add">Add Files</router-link>
    </div>
    <div class="update-file-form">
      <h2 class="header-text">Update File</h2>
      <form @submit.prevent="updateFile">
        <label for="id">File ID:</label>
        <input type="text" v-model="id" required />

        <label for="filename">New Filename:</label>
        <input type="text" v-model="filename" required />

        <label for="path">New Path:</label>
        <input type="text" v-model="path" required />

        <label for="size">New Size:</label>
        <input type="text" v-model="size" required />

        <button type="submit">Update File</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      filename: "",
      path: "",
      size: "",
    };
  },
  methods: {
    async updateFile() {
      try {
        await this.$axios.put(`/files/update/${this.id}`, {
          filename: this.filename,
          path: this.path,
          size: this.size,
        });
        // Optionally: Fetch and update the file list after updating

        // Show success alert
        alert("File updated successfully!");
      } catch (error) {
        console.error("Error updating file:", error);
        // Show error alert if needed
        alert("Error updating file. Please try again.");
      }
    },
  },
};
</script>

<style>
.header-text {
  text-align: center;
}

.update-file-container {
  margin: 20px;
}

.router-container {
  margin-bottom: 10px;
}

.file-list-link {
  margin-right: 10px;
}

.add-file-link {
  margin-right: 10px;
}

.update-file-form {
  max-width: 400px;
  margin: 0 auto;
}

form {
  display: grid;
  gap: 10px;
}

label {
  font-weight: bold;
}

button {
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
