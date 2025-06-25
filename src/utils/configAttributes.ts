import mergeClass from './mergeClass';

export default function configAttributes(selector: HTMLElement, attributes: HTMLElement) {
  Object.keys(attributes).forEach((key) => {
    if (key === 'className') {
      mergeClass(selector, attributes.className);
    }
    selector.setAttribute(key, String(attributes[key as keyof HTMLElement]));
  });
}
