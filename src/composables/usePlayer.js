//  import the  vue.js functions
import { ref, computed } from "vue";
// import the Tracks dataset
import trackList from "../data/tracks.js";

// state: shared singleton across every component
const queue = ref([...trackList]);
const currentindex = ref([0]);
const isplaying = ref(false);
const progress = ref(0); // second elapse in the current track
const volume = ref(0.8);

let tickInterval = null;

export default function usePlayer() {
    const currentTrack = computed(() => queue.value[currentindex.value]);

    const progresspercent = computed(() => {
        if (!currentTrack.value) return 0;
        return (progress.value / currentTrack.value.duration) * 100;
    });

    const formattedprogress = computed(() => formatTime(progress.value));
    const formattedDuration = computed(() => 
        (currentTrack.value ? formatTime(currentTrack.value.duration) : "0:00") 
    );

    function formatTime(seconds) {
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60).toString().padStart(2, "0");
        return `${m}:${s}`;
    }
    function startTicking() {
        stopTicking ();
        tickInterval = setInterval(() =>{
            if (!currentTrack.value) return;
            if (progress.value < currentTrack.value.duration){
                progress.value += 1;
            } else {
                next();
            }
        }, 1000);
    }

    function stopTicking() {
        if (tickInterval) clearinterval(tickInterval);
        tickInterval = null;
    }

    function play(index = null) {
        if (index !== null) {
            currentindex.value = index;
            progress.value = 0;
        }
        isplaying.value = true;
        startTicking();
    }

    function pause() {
        isplaying.value = false;
        stopTicking();
    }
    {
        function togggle() {
            isplaying.value ? pause() : play();
        }

        function next(){
            currentindex.value = (currentindex.value + 1) % queue.value.length;
            progress.value = 0;
            if (isplaying.value) startTicking();
        }

        function prev(){
            currentindex.value = 
            (currentindex.value - 1 + queue.value.length) % queue.value.length;
            progress.value = 0;
            if (isplaying.value) startTicking();
        }

        function seekTo(percent) {
            if (!currentTrack.value) return;
            progress.value = Math.round((percent / 100) * currentTrack.value.duration);
        }

        function setVolume(v) {
            volume.value = v;
        }

        return {
            queue,
            currentindex,
            isplaying,
            progress,
            volume,
            currentTrack,
            progresspercent,
            formattedprogress,
            formattedDuration,
            play,
            pause,
            togggle,
            next,
            prev,
            seekTo,
            setVolume,
            formatTime
        }
}