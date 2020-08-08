<template>
  <transition name="fade">
    <div id="modal" v-if="value">
      <div ref="jokeContainer" @scroll="setHappiness" class="joke-container">
        <p v-if="value" class="joke">{{value}}</p>
        <p v-else class="loading">Loading...</p>
        <span v-if="value" class="footer">
          <h1>Thank you!</h1>
          <h2>I'm happy again!</h2>
          <button @click="closeModal">Leave</button>
        </span>
      </div>
    </div>
  </transition>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    value: String,
  },
})
export default class Modal extends Vue {
  name = "Modal";
  isOpen = false;
  percent = 0;

  get happiness() {
    return this.$store.state.happiness;
  }

  closeModal() {
    this.$emit("input", "");
  }

  scrollPercent(scroller) {
    const height = scroller.clientHeight;
    const scrollHeight = scroller.scrollHeight - height;
    const scrollTop = scroller.scrollTop;
    const percent = Math.floor((scrollTop / scrollHeight) * 100);
    return percent;
  }

  setHappiness(element) {
    const percent = this.scrollPercent(element.target);

    const round = Math.floor(percent / 10) * 10;
    if (round > this.percent) {
      this.percent = round;
      this.$store.dispatch("setHappiness", round);
    }
  }
}
</script>

<style lang="scss" scoped>
#modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: grid;
  place-items: center;
  background: rgba($color: #000000, $alpha: 0.6);
}

.joke-container {
  background-color: white;
  border: 10px solid black;
  border-radius: 10px;
  width: 400px;
  height: 400px;
  max-width: calc(100vw - 20px);
  overflow-y: auto;
  overflow-x: hidden;
  display: grid;
  place-items: center;
  padding: 10px;
  // padding-top: calc(150px / 2);
}

.joke {
  font-size: 2.5em;
  text-align: center;
  line-height: 2em;
  word-wrap: break-word;
  margin-top: calc(50px);
  // min-height: calc(400px - 150px / 2);
}

.footer {
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

button {
  display: block;
  margin: 10px auto;
}

.fade-enter-active,
.joke-container,
.fade-leave-active,
.joke-container {
  transition: all 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter .joke-container,
.fade-leave-to .joke-container {
  transform: translateY(100%);
}
</style>
