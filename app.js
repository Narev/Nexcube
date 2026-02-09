import HomeView from "./views/HomeView.js";

const { createApp, reactive } = Vue;

const state = reactive({view: "home",players: []});

createApp({
  components: {
    HomeView
  },
  template: `<HomeView v-if="state.view === 'home'" :state="state" />`,
  setup() {
    return { state };
  }
}).mount("#app");
