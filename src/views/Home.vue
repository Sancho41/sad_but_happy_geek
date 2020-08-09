<template>
  <div id="home" @click="$router.push({ name: 'HelpTheGeek' })">
    <div class="title">
      <h1>- Hello, friend.</h1>
      <h2>- I'm Geek.</h2>
    </div>

    <!-- Change route on clicked -->
    <button class="button-title">- Oh, hello! How you doing?</button>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
@Component()
export default class Home extends Vue {
  created() {
    // Set the states when the component is created
    this.$store.dispatch("makeItNeutral");
    this.$store.dispatch("readingJoke", false);
  }

  /**
   * Return the amount of happines from state.
   */
  get happiness() {
    return this.$store.state.happiness;
  }
}
</script>

<style lang="scss">
#home {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
}
</style>
