export type Component<P = {}> = (props: P & { children?: string | HTMLElement }) => HTMLElement;
