<template>
  <div ref="geek" id="geek" :class="openModal ? 'geek-modal' : ''">
    <span class="emoji">
      <transition name="fade">
        <h1
          :style="`animation-duration: ${100000 / happiness}ms;`"
          :key="emotion"
          class="emoji-enter"
          v-html="emotion"
        ></h1>
      </transition>
    </span>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";

@Component
export default class Geek extends Vue {
  emoji = ["", this.emotion];

  get openModal() {
    return this.$store.state.openModal;
  }

  get happiness() {
    return this.$store.state.happiness;
  }

  get emotion() {
    const happiness = this.happiness;
    const emotions = ["😩", "😞", "😑", "😏", "😁", "😂"];
    const index = Math.floor(happiness / 20);
    return emotions[index];
  }

  increase() {
    this.$store.dispatch("increaseHappiness");
  }

  reset() {
    this.$store.dispatch("makeItSad");
  }

  @Watch("emotion")
  emotionChange(after, before) {
    this.emoji = [before, after];
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

#geek h1 {
  position: absolute;
  transform: translate(-50%, -50%);
  animation: pulseEmoji 3s ease infinite;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>