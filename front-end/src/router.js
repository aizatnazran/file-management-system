// Configuring and creating the Vue router instance
import { createRouter, createWebHistory } from "vue-router";
import AddFile from "./components/AddFile.vue";
import FileList from "./components/FileList.vue";
import UpdateFile from "./components/UpdateFile.vue";

//Define routes for application
const routes = [
  { path: "/", redirect: "/list" }, // Redirect root path to /list
  { path: "/add", component: AddFile },
  { path: "/list", component: FileList },
  { path: "/update", component: UpdateFile },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
