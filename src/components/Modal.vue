<template>
  <transition name="fade">
    <!-- Modal will open only if there is any joke -->
    <div v-if="joke" id="modal">
      <div ref="jokeContainer" @scroll="setHappiness" class="joke-container">
        <!-- Joke -->
        <p class="joke">{{joke}}</p>

        <!-- Footer  -->
        <span v-if="joke" class="footer">
          <h1>- Thank you!🎉</h1>
          <h2>- I'm happy again!🎆</h2>

          <!-- Will show only if the happiness reach 100% -->
          <transition name="fade">
            <div class="buttons" :style="`opacity:${happiness == 100 ? 1 : 0};`">
              <button @click="closeModal">Leave</button>
              <button @click="$emit('another-joke')">Read another joke</button>
            </div>
          </transition>
        </span>
      </div>
    </div>
  </transition>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";

@Component({
  props: {
    value: String,
  },
})
export default class Modal extends Vue {
  name = "Modal";
  joke = this.value;

  @Watch("value")
  valueChange(value) {
    this.joke = value; // Update joke value on value change
  }

  get happiness() {
    return this.$store.state.happiness;
  }

  /**
   * Clear the joke to close modal and emit leave event to parent
   */
  closeModal() {
    this.joke = "";
    this.$emit("leave");
  }

  /**
   * Check the percentage of scrollable content
   */
  scrollPercent(scroller) {
    const height = scroller.clientHeight;
    const scrollHeight = scroller.scrollHeight - height;
    const scrollTop = scroller.scrollTop;
    const percent = Math.floor((scrollTop / scrollHeight) * 100);
    return percent;
  }

  /**
   * Update happiness state according to scroll percent
   */
  setHappiness(element) {
    const percent = this.scrollPercent(element.target);

    const round = Math.floor(percent / 10) * 10;
    if (round > this.happiness) {
      // Will only increase happiness value
      this.$store.dispatch("setHappiness", round);
    }
  }
}
</script>

<style lang="scss" scoped>
#modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: grid;
  place-items: center;
  background: rgba($color: #000000, $alpha: 0.6);
}

.joke-container {
  background-color: white;
  border: 5px solid black;
  border-radius: 10px;
  width: 400px;
  height: 400px;
  max-width: calc(100vw - 20px);
  overflow-y: auto;
  overflow-x: hidden;
  display: grid;
  place-items: center;
  padding: 10px;
}

.joke {
  font-size: 2.5em;
  text-align: center;
  line-height: 2em;
  word-wrap: break-word;
  margin-top: calc(50px);
}

.footer {
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

button {
  display: block;
  margin: 20px auto;
}

.buttons {
  transition: opacity 300ms ease-in-out;
}

.fade-enter-active,
.joke-container,
.fade-leave-active,
.joke-container {
  transition: all 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter .joke-container,
.fade-leave-to .joke-container {
  transform: translateY(100%);
}
</style>
