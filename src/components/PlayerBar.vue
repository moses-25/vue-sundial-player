<script setup>
// import the component css
import "../styles/components/PlayerBar.css";
// import track player logic module
import useplayer from "../composables/usePlayer.js";
// import the vinyl component
import Vinyl from "./Vinyl.vue";

// Destructure needed functions from the useplayer composable
const { currentTrack, isPlaying, progresspercent, formattedprogress, formatedDuration, volume, toggle, next, prev, seekTo, setVolume } = useplayer();

function handleSeek(e) {
  const rect = e.currentTrack.getBoundingClientRect();
  const percent = (e.clientX - rect.left) / rect.width * 100;
  seekTo(Math.max(0, Math.min(100, percent)));
}
</script>

<template>
    <footer class="footer-bar" v-if="currentTrack">
        <div class="now-playing">
            <Vinyl :track="currentTrack.color" :is-playing="isPlaying" 
            :size="52"
            />
            <div class="now-playing-info">
                <span class="np-title">{{ currentTrack.title }}</span>
                <span class="np-artist">{{ currentTrack.artist }}</span>
            </div>
        </div>
        <div class="transport-button">
            <button 
            class="ctrl-btn" 
            @click="prev" 
            aria-label="Previous">⏮</button>

            <button class="play-btn" 
            @click="toggle" 
            aria-label="is playing ? 'Pause' : 'Play'">
            <span v-if="isPlaying">⏸</span>
            <span v-else>▶</span>
            </button>

            <button class="ctrl-btn" 
            @click="next" 
            aria-label="Next track">
            ⏭
            </button>
        </div>
        <div class="progress-row">
            <span class="time">{{ formattedProgress }}</span>
            <div class="progress-track" @click="handleSeek">
                <div class="progress-fill" :style="{ width: progressPercent + '%' }"></div>
                <div class="progress-thumb" :style="{ left: progressPercent + '%' }"></div>
            </div>
            <span class="time">{{ formattedDuration }}</span>
        </div>
        <div class="volume-control">
            <span class="vol-icon">
                {{ volume === 0 ? '🔇' : volume < 0.5 ? '🔉' : '🔊' }} </span>
                    <input type="range" min="0" max="1" step="0.01" :value="volume"
                        @input="setVolume(parseFloat($event.target.value))" class="vol-slider">
        </div>
    </footer>
</template>