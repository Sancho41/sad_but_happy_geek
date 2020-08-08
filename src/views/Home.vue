<template>
  <div id="home">
    <h1 class="title">- Hello, friend.</h1>

    <!-- Change route on clicked -->
    <button
      @click="$router.push({ name: 'HelpTheGeek' })"
      class="button-title"
    >Oh, hello! How you doing?</button>
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
}
</style>
