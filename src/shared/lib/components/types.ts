export type Component<T = Record<string, unknown>> = (
  props?: T & { children?: string }  // <-- добавили ?
) => string;