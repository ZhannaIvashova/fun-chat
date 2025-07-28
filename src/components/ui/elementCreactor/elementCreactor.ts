interface ElementCreatorProps<K extends keyof HTMLElementTagNameMap> {
  tag: K;
  text?: string | number;
  attributes?: Partial<Record<string, string>>;
  children?: HTMLElement[];
}

function ElementCreator<K extends keyof HTMLElementTagNameMap>(
  props: ElementCreatorProps<K>
): HTMLElementTagNameMap[K] {
  const { tag, text = '', attributes = {}, children = [] } = props;

  const element = document.createElement(tag);

  for (const key in attributes) {
    if (attributes.hasOwnProperty(key)) {
      element.setAttribute(key, attributes[key]!);
    }
  }

  if (text !== undefined && text !== null) {
    element.textContent = text.toString();
  }

  children.forEach((child) => {
    element.appendChild(child);
  });

  return element;
}

export default ElementCreator;
