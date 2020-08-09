import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Store from "../store";
import Geek from "../components/Geek.vue";
import Emotions from "../utils/emotions";

const localVue = createLocalVue();
localVue.use(Vuex);

const store = Store;

describe("Geek.vue", () => {
  it("will change emotion on state change", async () => {
    expect.assertions(3);
    try {
      const wrapper = mount(Geek, {
        store,
        localVue,
      });

      await wrapper.vm.$nextTick();
      expect(wrapper.find(".emoji-image").attributes("filename")).toBe(
        Emotions[2]
      ); // Firste state

      store.dispatch("makeItSad");
      await wrapper.vm.$nextTick();

      expect(wrapper.find(".emoji-image").attributes("filename")).toBe(
        Emotions[0]
      ); // sad state (Happiness = 0)

      store.dispatch("setHappiness", 100);
      await wrapper.vm.$nextTick();

      expect(wrapper.find(".emoji-image").attributes("filename")).toBe(
        Emotions[5]
      ); // Happy state (Happiness = 100)
    } catch (error) {
      expect(error).toEqual(new Error());
    }
  });
});
