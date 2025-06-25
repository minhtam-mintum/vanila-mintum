import createLabel from '../Label/index';
import createTextField from '../TextField/index';
import mergeClass from '../utils/mergeClass';
import randomKey from '../utils/randomKey';
import { OptionsInput } from './types';
/**
 * @param selector - A CSS selector string or an `HTMLDivElement` that acts as the mount point.
 *                   👉 **In React.js, it is recommended to pass an `HTMLDivElement` reference**
 *                   (e.g., via `useRef<HTMLDivElement>()`) to avoid querySelector and improve safety.
 *
 * @param options - Configuration object for customizing the component's behavior and appearance.
 */
export default class Input {
  private state;
  constructor(selector: string | HTMLDivElement, options: OptionsInput) {
    this.state = {
      selector,
      className: `flex flex-col gap-1 ${options.className}`,
      ...options,
    };
  }
  init = () => {
    const formInput = typeof this.state.selector === 'string' ? document.querySelector(this.state.selector) : this.state.selector;
    if (formInput) {
      const key = this.state.input.id ?? `mintum-${this.state.input.name}-${randomKey()}`;
      let label: HTMLLabelElement | undefined;
      if (this.state.label) {
        label = createLabel(key, this.state.label);
        formInput.appendChild(label);
      }
      const input = createTextField(this.state.input as HTMLInputElement, key);
      input.onkeydown = (ev: KeyboardEvent) => {
        if (this.state.input.type === 'number' && Number.isNaN(Number(ev.key))) {
          ev.preventDefault();
        }
      };
      input.onchange = (ev: Event) => {
        this.state.onChange?.(ev);
      };
      formInput.appendChild(input);
      mergeClass(formInput, this.state.className);
    }
    return formInput;
  };
}
