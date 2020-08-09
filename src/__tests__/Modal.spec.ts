import { shallowMount } from "@vue/test-utils";
import Modal from "@/components/Modal.vue";
import store from "../store";

describe("Modal.vue", () => {
  it("render joke passing v-model", () => {
    expect.assertions(1);
    const joke = "My funny joke";
    const wrapper = shallowMount(Modal, {
      propsData: { value: joke },
      store,
    });

    expect(wrapper.text()).toMatch(joke);
  });

  it("will clear the joke and close modal when button clicked after read entire joke", async () => {
    expect.assertions(2);
    try {
      const joke = "My funny joke";
      const wrapper = shallowMount(Modal, {
        propsData: { value: joke },
        store,
      });

      // Read the entire joke
      wrapper.vm.$data.percent = 100;
      await wrapper.vm.$nextTick();

      const button = wrapper.find("button");
      button.trigger("click");

      expect(wrapper.vm.$data.joke).not.toBe(joke);
      expect(wrapper.vm.$data.joke).not.toBeTruthy();
    } catch (error) {
      expect(error).toEqual(new Error());
    }
  });
});
