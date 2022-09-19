import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import hljsVuePlugin from "@highlightjs/vue-plugin";
import "highlight.js/lib/common";
import "highlight.js/styles/stackoverflow-dark.css";

const app = createApp(App);

app.use(hljsVuePlugin);

app.use(router);
app.mount("#app");
