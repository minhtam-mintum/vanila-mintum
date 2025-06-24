import configAttributes from "../utils/configAttributes";

export default function createTextField(
  props: HTMLInputElement,
  id: string
) {
  const textField =
    document.createElement("input");
  textField.className =
    "border rounded-sm outline-none px-4 py-1 text-sm autofill:bg-white focus:border-[#228be6]";
  configAttributes(textField, props);
  textField.id = id;
  textField.type = props.type === 'password' ? 'password' : 'text'
  return textField;
}
