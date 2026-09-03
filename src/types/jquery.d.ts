export type JQueryInstance = {
  ready: (fn: () => void) => JQueryInstance;
  owlCarousel: (opts?: Record<string, unknown>) => JQueryInstance;
  initializeRegistration: (opts: Record<string, unknown>) => JQueryInstance;
};

export type JQueryStatic = ((selector: Document | string) => JQueryInstance) & {
  fn: Record<string, unknown>;
};

declare global {
  interface Window {
    jQuery?: JQueryStatic;
    AOS?: { init: (opts?: Record<string, unknown>) => void };
  }
}
