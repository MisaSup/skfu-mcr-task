import type { Component } from "./shared/lib/components/types";
import { IpViewer, initIpViewer } from "./widgets/IpViewer/IpViewer";

export const App: Component = () => {
    return IpViewer();
};

export const mountApp = (container: HTMLElement): void => {
    container.innerHTML = App();
    initIpViewer(container);
};
