<script setup>
// Import the page CSS styles
import "../styles/pages/LibraryView.css";
// Import the Track player logic module
import usePlayer from "../composables/usePlayer.js";
// Import the component's page
import TrackRow from "../components/TrackRow.vue";

// Destructure needed functions from the shared composable
const { queue } = usePlayer();
</script>

<template>
    <div class="library">
        <section class="library-hero">
            <p class="eyebrow">Welcome</p>
            <h2 class="hero-title">Your library</h2>
        </section>
        <section class="track-list">
            <TrackRow 
                v-for="(track, i) in queue"
                :key="track.id"
                :track="track"
                :index="i"
            />
        </section>
    </div>
</template>