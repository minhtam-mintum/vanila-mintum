import { InputAttributes, OptionsInput } from "./types";

export default class Input {
  private state;
  constructor(id: string, options: OptionsInput) {
    this.state = {
      id,
      ...options,
    };
  }
  init = () => {
    const formInput = document.getElementById(
      this.state.id
    );
    if (formInput) {
      let label: HTMLLabelElement | undefined;
      if (this.state.label) {
        label = document.createElement("label");
        label.setAttribute(
          "className",
          this.state.label?.className ?? ""
        );
        label.innerText =
          this.state.label?.text ?? "";
        formInput.appendChild(label);
      }
      const input =
        document.createElement("input");
      (
        Object.keys(this.state.input) as Array<
          keyof InputAttributes
        >
      ).forEach((key: keyof InputAttributes) => {
        input.setAttribute(
          key,
          String(
            this.state.input[
              key as keyof InputAttributes
            ]
          )
        );
      });
      if (this.state.onChange) {
        input.addEventListener(
          "input",
          (ev: Event) => {
            this.state.onChange?.(ev);
          }
        );
      }
      formInput.appendChild(input);
    }
    return formInput;
  };
}
