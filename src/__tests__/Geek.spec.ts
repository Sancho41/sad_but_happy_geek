import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Store from "../store";
import Geek from "../components/Geek.vue";

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

      expect(wrapper.find("h1").text()).toBe("😑"); // Firste state

      store.dispatch("makeItSad");
      await wrapper.vm.$nextTick();

      expect(wrapper.find("h1").text()).toBe("😩"); // sad state (Happiness = 0)

      store.dispatch("setHappiness", 100);
      await wrapper.vm.$nextTick();

      expect(wrapper.find("h1").text()).toBe("😂"); // Happy state (Happiness = 100)
    } catch (error) {
      expect(error).toEqual(new Error());
    }
  });
});
