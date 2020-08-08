<template>
  <div id="happiness">
    <!-- If there is any erro, this is shown and the modal wont open -->
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
    Modal, // Register Modal component
  },
})
export default class Happiness extends Vue {
  joke = "";
  error = false;

  async created() {
    this.$store.dispatch("makeItSad");

    try {
      const apiUrl = "https://geek-jokes.sameerkumar.website/api?format=json";
      const response = await fetch(apiUrl); // Get the joke from api
      const data = await response.json();

      this.joke = data.joke; // Set the joke from api response
    } catch (error) {
      this.error = true; // Set error flag to true if there is any error
    }
  }

  /**
   * Get modal status from state
   */
  get modalStatus() {
    return this.$store.state.openModal;
  }

  /**
   * Get ammount of happiness from state
   */
  get happiness() {
    return this.$store.state.happiness;
  }

  /**
   * Go to home page after 2 seconds
   */
  async leave() {
    return setTimeout(() => {
      this.$router.push({ name: "Home" });
    }, 2000);
  }

  /**
   * Watch the joke property to change state or to leave
   */
  @Watch("joke")
  onJokeChange(value) {
    if (value) this.$store.dispatch("readingJoke", Boolean(value));
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