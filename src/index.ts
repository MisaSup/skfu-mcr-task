import "../public/styles.css";
import App from "./App";
import { initIpViewer } from "./widgets/IpViewer/IpViewer";

const render = (): void => {
  const appRoot = document.querySelector("#app") as HTMLElement | null;

  if (!appRoot) {
    return;
  }

  appRoot.innerHTML = App();
  
  initIpViewer();
};

window.onload = render;