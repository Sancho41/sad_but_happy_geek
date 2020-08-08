<template>
  <div id="help-the-geek">
    <h1 class="title">- I'm so sad!</h1>
    <button
      class="button-title"
      @click="$router.push({ name: 'Happiness' })"
    >Tell a joke to the Geek!</button>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import Modal from "../components/Modal";

@Component({
  components: {
    Modal,
  },
})
export default class Happiness extends Vue {
  created() {
    this.$store.dispatch("makeItSad");
    this.$store.dispatch("switchModal", false);
  }
}
</script>

<style lang="scss" scoped>
#help-the-geek {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
</style>