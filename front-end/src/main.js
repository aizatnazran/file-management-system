// Entry point for application
import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import router from "./router";

const app = createApp(App);

//Create custom Axios instance with specified base URL
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

app.config.globalProperties.$axios = axiosInstance;

app.use(router);

app.mount("#app");
