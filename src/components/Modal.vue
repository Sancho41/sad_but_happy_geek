<template>
  <transition name="fade">
    <div id="modal" v-if="isOpen">
      <div ref="jokeContainer" @scroll="setHappiness" class="joke-container">
        <p v-if="joke" class="joke">{{joke}}</p>
        <p v-else class="loading">Loading...</p>
        <span v-if="joke" class="footer">
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

@Component
export default class Modal extends Vue {
  constructor() {
    super();
    this.name = "Modal";
    this.isOpen = false;
    this.joke = "";
    this.percent = 0;
  }
  get happiness() {
    return this.$store.state.happiness;
  }

  closeModal() {
    this.$store.dispatch("switchModal", false);
    this.$router.push({ name: "Home" });
  }

  async openModal() {
    this.isOpen = true;
    this.$store.dispatch("switchModal", true);

    const response = await fetch(
      "https://geek-jokes.sameerkumar.website/api?format=json"
    );
    const data = await response.json();
    this.joke = data.joke;
    // this.joke = "No statement can catch the ChuckNorrisException.";
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
  margin-top: calc(150px / 2);
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
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
