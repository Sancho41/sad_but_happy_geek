<template>
  <div id="app" :style="`background-color: ${color}`">
    <Geek />
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import Geek from "./components/Geek";

@Component({
  components: {
    Geek,
  },
})
export default class App extends Vue {
  colors = ["#e77f67", "#e15f41", "#f7d794", "#63cdda", ", #2ecc71"];
  emotions = ["😩", "😞", "😑", "😏", "😁", "😂"];
  color = this.colors[2];

  get happiness() {
    return this.$store.state.happiness;
  }

  // Escuta pela mudança do estado happiness e muda o título da página
  // de acordo com a quantidade de 'felicidade'
  @Watch("happiness")
  happinessChange(newHappiness) {
    const index = Math.floor(newHappiness / 20);
    document.title = `Geek - ${this.emotions[index]}`;
    this.color = this.colors[index];
  }
}
</script>

<style lang="scss" scoped>
#app {
  min-height: 100vh;
  transition: background-color 300ms ease-in-out;
}
</style>