import { mountApp } from "./App";

const appContainer = document.querySelector<HTMLElement>("#app");

if (appContainer) {
    mountApp(appContainer);
}
