import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router, { setupRouter } from './router'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import setupPinia from "./store";

library.add(faMagnifyingGlass);

async function bootstrap() {
  const app = createApp(App);

  app.component("font-awesome-icon", FontAwesomeIcon);

  setupPinia(app);

  setupRouter(app);

  await router.isReady(); // wait till router is ready before mounting
  app.mount("#app");
}
bootstrap();
