export interface InputAttributes
  extends Partial<HTMLInputElement> {
  type: "text" | "number" | "password";
  name: string
}
export interface OptionsInput {
  className?: string;
  label?: {
    text: string;
    className?: string;
  };
  input: InputAttributes;
  onChange?: (e: Event) => void;
}
