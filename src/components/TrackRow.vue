<script setup>
// import the component css styles 
import "../styles/components/TrackRow.css";
// import the vue.js functions
import { computed } from "vue";
// import the Tracks dataset
import useplayer from "../composables/usePlayer.js";
// import the vinyl component
import Vinyl from "./Vinyl.vue";

const props = defineProps({
  track: {
    type: Object,
    index: Number
  }
});

// Destructure needed functions from the usePlayer composable
const { currentTrack, isPlaying, play, pause, formatTime } = useplayer();

const isCurrent = computed(() => currentTrack.value?.id === props.track.id);
const isActivePlaying = computed(() => isCurrent.value && isPlaying.value);

function handlePlayPause() {
  if (isCurrent.value) {
    isPlaying.value ? pause() : play();
  } else {
    play(props.index);
  }
}
</script>

<template>
        <button
        class="track-row"
        :class="{ current: isCurrent }"
        @click="handleClick"
    >
        <Vinyl :color="track.color" :is-playing="isActivePlaying" :size="44" />
        <div class="track-info">
            <span class="track-title">{{ track.title }}</span>
            <span class="track-artist">{{ track.artist }}</span>
        </div>
        <span class="track-duration">{{ formatTime(track.duration) }}</span>
        <span class="track-icon">{{ isActivePlaying ? '⏸' : '▶' }}</span>
    </button>
</template>