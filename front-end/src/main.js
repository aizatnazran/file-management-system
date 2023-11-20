// src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import router from "./router";

const app = createApp(App);

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000", // Update with your backend server URL
});

app.config.globalProperties.$axios = axiosInstance;

app.use(router); // Use Vue Router

app.mount("#app");
