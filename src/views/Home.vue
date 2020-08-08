<template>
  <div id="home">
    <h1 class="title">- Hello, friend.</h1>
    <button @click="gotoHappiness" class="button-title">Oh, hello! How you doing?</button>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
@Component()
export default class Home extends Vue {
  created() {
    this.$store.dispatch("makeItNeutral");
    this.$store.dispatch("switchModal", false);
  }

  gotoHappiness() {
    this.$router.push({ name: "Happiness" });
  }

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
