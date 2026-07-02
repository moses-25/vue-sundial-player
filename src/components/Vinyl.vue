<script setup>
import "../styles/components/Vinyl.css";
defineProps({
    color: {
        type: String,
        default: "#C97B4A"},  
        isPlaying: Boolean,
        size: {
            type: Number,
            default: 64
        }  
})
</script>

<template>
     <div class="vinyl-rig" :style="{ width: size + 'px', height: size + 'px' }">
        <div
            class="vinyl-disc"
            :class="{ spinning: isPlaying }"
            :style="{ 
                background: `conic-gradient(
                from 0deg, #1A1715, ${color}22, #1A1715, ${color}22, #1A1715)`
            }"
        >
            <div class="vinyl-label" :style="{ background: color }"></div>
            <div class="vinyl-grooves"></div>
        </div>
    </div>
</template>