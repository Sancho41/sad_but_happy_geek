<template>
  <div id="happiness">
    <span v-if="error" class="title">
      <h1>- OH, NO!</h1>
      <h2>- I could't find any joke...</h2>
    </span>
    <button v-if="error" class="button-title" @click="$router.push({ name: 'Home' })">Try again!</button>
    <Modal v-model="joke" ref="modal" />
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import Modal from "../components/Modal";

@Component({
  components: {
    Modal,
  },
})
export default class Happiness extends Vue {
  joke = "";
  error = false;

  async created() {
    this.$store.dispatch("makeItSad");
    try {
      const response = await fetch(
        "https://geek-jokes.sameerkumar.website/api?format=json"
      );
      const data = await response.json();
      this.joke = data.joke;
    } catch (error) {
      this.error = true;
    }
  }

  loadJoke() {
    this.joke = "PIADA";
  }

  get modalStatus() {
    return this.$store.state.openModal;
  }

  get happiness() {
    return this.$store.state.happiness;
  }

  leave() {
    setTimeout(() => {
      this.$router.push({ name: "Home" });
    }, 2000);
  }

  @Watch("joke")
  onJokeChange(value) {
    this.$store.dispatch("readingJoke", Boolean(value));
    if (!this.modalStatus && this.happiness == 100) this.leave();
  }
}
</script>

<style lang="scss" scoped>
#happiness {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
</style>