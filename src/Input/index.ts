import createLabel from "../Label/index";
import createTextField from "../TextField/index";
import mergeClass from "../utils/mergeClass";
import randomKey from "../utils/randomKey";
import { OptionsInput } from "./types";

export default class Input {
  private state;
  constructor(id: string, options: OptionsInput) {
    this.state = {
      id,
      className: `flex flex-col gap-1 ${options.className}`,
      ...options,
    };
  }
  init = () => {
    const formInput = document.getElementById(
      this.state.id
    );
    if (formInput) {
      const key =
        this.state.input.id ??
        `mintum-${
          this.state.input.name
        }-${randomKey()}`;
      let label: HTMLLabelElement | undefined;
      if (this.state.label) {
        label = createLabel(
          key,
          this.state.label
        );
        formInput.appendChild(label);
      }
      const input = createTextField(
        this.state.input as HTMLInputElement,
        key
      );
      input.onkeydown = (ev: KeyboardEvent) => {
        if (
          this.state.input.type === "number" &&
          Number.isNaN(Number(ev.key))
        ) {
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
