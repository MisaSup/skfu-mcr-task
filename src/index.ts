import "../public/styles.css";
import App from "./App";
import { setupIpViewer } from "./widgets/IpViewer/IpViewer"; 

const render = () => {
  const appRoot = document.querySelector<HTMLElement>("#app");

  if (!appRoot) {
    return;
  }

  appRoot.innerHTML = App();
  
  setupIpViewer(appRoot);
};

window.onload = render;