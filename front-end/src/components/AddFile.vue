<template>
  <div class="add-file-container">
    <!-- Navigation Links -->
    <div class="router-container">
      <router-link class="file-list-link" to="/list">File List</router-link>
      <router-link to="/update">Update Files</router-link>
    </div>
    <!-- Input fields -->
    <div class="add-file-form">
      <h2 class="header-text">Add File</h2>
      <form @submit.prevent="addFile">
        <label for="filename">Filename:</label>
        <input type="text" v-model="filename" required />

        <label for="path">Path:</label>
        <input type="text" v-model="path" required />

        <label for="size">Size:</label>
        <input type="text" v-model="size" required />

        <button type="submit">Add File</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filename: "",
      path: "",
      size: "",
    };
  },

  //Call addFile method when form is submitted
  methods: {
    async addFile() {
      try {
        await this.$axios.post("/files/add", {
          filename: this.filename,
          path: this.path,
          size: this.size,
        });
        // Optionally: Fetch and update the file list after adding

        // Show success alert
        alert("File added successfully!");
      } catch (error) {
        console.error("Error adding file:", error);
        // Show error alert if needed
        alert("Error adding file. Please try again.");
      }
    },
  },
};
</script>

<style>
.header-text {
  text-align: center;
}

.add-file-container {
  margin: 20px;
}

.router-container {
  margin-bottom: 10px;
}

.file-list-link {
  margin-right: 10px;
}

.add-file-form {
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
