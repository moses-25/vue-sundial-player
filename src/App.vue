<script setup>
// import the application components
import Navbar from "./components/Navbar.vue";
import PlayerBar from "./components/PlayerBar.vue";
// import the global CSS styles
import "./styles/global.css";
// import the App CSS styles
import "./styles/App.css";
</script>

<template>
  <div class="app-shell">
    <Navbar />
    <main class="app-main">
      <RouterView />
    </main>
    <PlayerBar />
  </div>
</template>
