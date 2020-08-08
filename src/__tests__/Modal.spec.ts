import { shallowMount } from "@vue/test-utils";
import Modal from "@/components/Modal.vue";

describe("Modal.vue", () => {
  it("render joke from props.msg when passed", () => {
    expect.assertions(1);
    const joke = "My funny joke";
    const wrapper = shallowMount(Modal, {
      propsData: { value: joke },
    });

    expect(wrapper.text()).toMatch(joke);
  });

  it("will clear the joke and close modal when button clicked", () => {
    expect.assertions(2);
    const joke = "My funny joke";
    const wrapper = shallowMount(Modal, {
      propsData: { value: joke },
    });

    const button = wrapper.find("button");
    button.trigger("click");

    expect(wrapper.vm.$data.joke).not.toBe(joke);
    expect(wrapper.vm.$data.joke).not.toBeTruthy();
  });
});
