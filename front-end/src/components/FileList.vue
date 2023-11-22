<template>
  <!-- Navigation Links -->
  <div class="router-container">
    <router-link class="add-file" to="/add">Add Files</router-link>
    <router-link to="/update">Update Files</router-link>
  </div>
  <div>
    <h2 class="header">File List</h2>

    <!-- Table containing file informations -->
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>File Name</th>
          <th>File Path</th>
          <th>Size</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <!-- v-for directive to iterate over files array -->
        <tr v-for="file in files" :key="file.id">
          <td>{{ file.id }}</td>
          <td>{{ file.filename }}</td>
          <td>{{ file.path }}</td>
          <td>{{ file.size }}</td>

          <!-- Delete button -->
          <td>
            <button @click="confirmDelete(file.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      files: [],
    };
  },

  //Calls getAllFiles method when component is mounted
  mounted() {
    this.getAllFiles();
  },

  //Makes a GET request to retrieve list of files
  methods: {
    async getAllFiles() {
      try {
        const response = await this.$axios.get("/files/getAll");
        this.files = response.data;
        console.log("Files:", this.files);
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    },

    //Makes a DELETE request to delete file by ID
    async deleteFile(id) {
      try {
        await this.$axios.delete(`/files/delete/${id}`);
        // After successful deletion, fetch the updated file list
        this.getAllFiles();
        console.log("File deleted successfully!");
      } catch (error) {
        console.error("Error deleting file:", error);
      }
    },

    //Alert message to confirm file deletion
    confirmDelete(id) {
      const confirmMessage = `Are you sure you want to delete file with ID ${id}?`;

      if (window.confirm(confirmMessage)) {
        this.deleteFile(id);
      }
    },
  },
};
</script>

<style>
.header {
  text-align: center;
}
.router-container {
  margin: 20px;
}

.add-file {
  margin-right: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}
</style>
