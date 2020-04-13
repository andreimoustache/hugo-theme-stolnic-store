export class View {
  element: Element;

  constructor(element: Element) {
    this.element = element;
  }

  updateValue(selector: string, value: string) {
    const el = this.element.querySelector(selector);
    if (!el) {
      console.error(`No element found for ${selector}.`);
      return;
    }

    el.textContent = value;
  }
}
