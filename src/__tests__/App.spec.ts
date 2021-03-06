import { mount, createLocalVue } from "@vue/test-utils";
import App from "../App.vue";

import Home from "../views/Home.vue";
import HelpTheGeek from "../views/HelpTheGeek.vue";
import Happiness from "../views/Happiness.vue";

import VueRouter from "vue-router";
import router from "../router";
import store from "../store";

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("App", () => {
  it("render Home component via routing", () => {
    expect.assertions(1);
    const wrapper = mount(App, {
      localVue,
      router,
      store,
    }); // create wrapper

    // The default route is '/'
    expect(wrapper.findComponent(Home).exists()).toBe(true);
  });

  it("render HelpTheGeek component via routing by clicking a button", async () => {
    expect.assertions(1);
    try {
      const wrapper = mount(App, {
        localVue,
        router,
        store,
      });

      // The default route is '/', so is expected that Home component will be loaded
      const home = wrapper.findComponent(Home);
      const button = home.find("button");
      button.trigger("click");

      await wrapper.vm.$nextTick(); // Wait for next tick

      expect(wrapper.findComponent(HelpTheGeek).exists()).toBe(true);
    } catch (error) {
      expect(error).toEqual(new Error());
    }
  });

  it("render Happiness component via routing by clicking a button", async () => {
    expect.assertions(1);
    try {
      const wrapper = mount(App, {
        localVue,
        router,
        store,
      });
      // Already in HelpTheGeek route
      const button = wrapper.find("button");
      button.trigger("click");

      await wrapper.vm.$nextTick(); // Wait for next tick

      expect(wrapper.findComponent(Happiness).exists()).toBe(true);
    } catch (error) {
      expect(error).toEqual(new Error());
    }
  });
});
