<template>
  <!-- Add a class when satete reading to change position -->
  <div ref="geek" id="geek" :class="readingJoke ? 'geek-modal' : ''">
    <span ref="emoji" class="emoji">
      <!-- Change the face on state change  -->
      <transition name="fade">
        <img
          :key="emotion.filename"
          :src="require(`@/assets/svg/${emotion.filename}`)"
          :filename="emotion.filename"
          :alt="emotion.alt"
          class="emoji-enter emoji-image"
        />
      </transition>
    </span>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import EmotionsUrl from "../utils/emotions";

@Component
export default class Geek extends Vue {
  emotions = [];

  created() {
    for (const emotion of EmotionsUrl) {
      this.emotions.push(emotion);
    }
  }

  get readingJoke() {
    return this.$store.state.readingJoke;
  }

  get happiness() {
    return this.$store.state.happiness;
  }

  get emotion() {
    const happiness = this.happiness;
    const index = Math.floor(happiness / 20);
    return this.emotions[index];
  }

  increase() {
    this.$store.dispatch("increaseHappiness");
  }

  reset() {
    this.$store.dispatch("makeItSad");
  }
}
</script>

<style lang="scss" scoped>
#geek {
  font-size: 4em;
  position: absolute;
  top: 50%;
  left: 50%;
  transition: all 400ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  z-index: 999;
}

#geek.geek-modal {
  transform: translate(calc(-50%), calc(-50% - 200px));
}

@keyframes pulseEmoji {
  0%,
  100% {
    transform: translate(-50%, -50%);
  }
  50% {
    transform: translate(-50%, calc(-50% - 20px));
  }
}

#geek img {
  position: absolute;
  width: 150px;
  height: 150px;
}

#geek .emoji {
  position: absolute;
  transform: translate(-50%, -50%);
  animation: pulseEmoji 2s ease-in-out infinite;
  width: 150px;
  height: 150px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms;
}
.fade-enter,
.fade-leave-to {
  opacity: 0.6;
}
</style>