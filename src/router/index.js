// import the vue.js fron routes functions
import { createRouter, createWebHistory } from "vue-router";
// import the page components
import LibraryView from "../pages/LibraryView.vue";
import ArtistView from "../pages/ArtistView.vue";

// define the routes for the application (endpoints)
const routes = [
    { path: "/", component: LibraryView },
    { path: "/artists", component: ArtistView }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;