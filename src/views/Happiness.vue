<template>
  <div id="happiness">
    <h1 class="title">- I'm so sad!</h1>
    <button class="button-title" @click="openModal">Tell a joke to the Geek!</button>
    <Modal ref="modal" />
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
  }

  openModal() {
    this.$refs.modal.openModal();
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