<script setup>
import "../styles/components/Navbar.css";
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
    <header class="navbar">
        <div class="brand">
            <span class="brand-mark">*</span>
            <h1 class="brand-name">Sundial</h1>
        </div>
        <nav class="nav-links">
            <RouterLink to="/" :class="{active: route.path == '/' }">
                Library
            </RouterLink>
            <RouterLink to="/artists" :class="{active: route.path == '/artists' }">
                Artists
            </RouterLink>
        </nav>
    </header>

</template>