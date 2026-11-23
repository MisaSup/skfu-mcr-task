export type Component<P = Record<string, unknown>> = (
    props?: P & { children?: string }
) => string;
