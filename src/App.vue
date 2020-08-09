<template>
  <div id="app" :style="`background-color: ${color}`">
    <!-- The Geek components stay visible in all application -->
    <Geek />
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import Geek from "./components/Geek.vue";

@Component({
  components: {
    Geek, // Register Geek component
  },
})
export default class App extends Vue {
  colors = ["#ff4d4d", "#ffaf40", "#fffa65", "#7efff5", "#18dcff", "#32ff7e"]; // Color emotions
  emotions = ["😩", "😞", "😑", "😏", "😁", "😂"]; // Emoji emotions
  color = this.colors[2];

  /**
   * Return the amount of happines from state.
   */
  get happiness() {
    return this.$store.state.happiness;
  }

  /**
   * Set title document and background color, fired when happiness
   * state changes.
   */
  @Watch("happiness")
  happinessChange(newHappiness) {
    const index = Math.floor(newHappiness / 20); // Get index between 0 and 5
    document.title = `Geek - ${this.emotions[index]}`; // Set document title

    const color = this.colors[index];
    const metaColor = document.querySelector('[name="theme-color"]');
    if (metaColor) metaColor.setAttribute("content", color);
    this.color = color;
  }
}
</script>

<style lang="scss" scoped>
#app {
  min-height: 100vh;
  transition: background-color 300ms ease-in-out;
}
</style>