<template>
  <div id="happiness">
    <!-- If there is any erro, this is shown and the modal wont open -->
    <span v-if="error" class="title">
      <h1>- OH, NO!</h1>
      <h2>- I could't find any joke...</h2>
    </span>
    <button v-if="error" class="button-title" @click="$router.push({ name: 'Home' })">Try again!</button>

    <Modal v-model="joke" ref="modal" v-on:another-joke="anotherJoke()" v-on:leave="leave()" />
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import JokeService from "../services/JokeService";
import Modal from "../components/Modal";

@Component({
  components: {
    Modal, // Register Modal component
  },
})
export default class Happiness extends Vue {
  joke = "";
  error = false;

  created() {
    this.$store.dispatch("makeItSad");
    this.loadJoke();
  }

  /**
   * Return the amount of happines from state.
   */
  get happiness() {
    return this.$store.state.happiness;
  }

  /**
   * Load joke from API
   */
  async loadJoke() {
    try {
      this.joke = await JokeService.getJoke(); // Set the joke from api response
    } catch (error) {
      this.error = true; // Set error flag to true if there is any error
    }
  }

  /**
   * Load another joke from API
   */
  anotherJoke() {
    this.joke = "";
    this.loadJoke();
    this.$store.dispatch("makeItSad");
  }

  /**
   * Go to home page after 2 seconds
   */
  leave() {
    this.joke = "";
    setTimeout(() => {
      this.$router.push({ name: "Home" });
    }, 2000);
  }

  /**
   * Watch the joke property to change state or to leave
   */
  @Watch("joke")
  onJokeChange(value) {
    this.$store.dispatch("readingJoke", Boolean(value));
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