import {Template} from 'hogan.js';

export class View {
  element: Element;
  template: Template;

  constructor(parentSelector: string, template: Template) {
    this.element = document.querySelector(parentSelector) as Element;
    this.template = template;

    if (!this.element)
      throw Error(`Couldn't find element for selector '${parentSelector}'.`);

    this.element.innerHTML = this.template.render({});
  }

  update(props: Record<string, boolean | string | number | object>) {
    this.element.innerHTML = this.template.render(props);
  }
}
