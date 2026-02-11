import HomeView from "./views/HomeView.js";
import Header from "./components/Header.js";

const { createApp, reactive } = Vue;

const state = reactive({view: "home",players: []});

createApp({
  components: {
    Header,
    HomeView
  },
  template: `<HomeView v-if="state.view === 'home'" :state="state" />`,
  setup() {
    return { state };
  }
}).mount("#app");
