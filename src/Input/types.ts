export interface InputAttributes extends Partial<HTMLInputElement> {
  type: 'text' | 'number' | 'password';
  name: string;
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
export interface InputType {
  new (selector: string | HTMLDivElement, option: OptionsInput): any;
}
