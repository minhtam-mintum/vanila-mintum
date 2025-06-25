import mergeClass from '../utils/mergeClass';

export default function createLabel(id: string, props: { className?: string; text: string }) {
  const label = document.createElement('label');
  label.className = '';
  if (props.className) {
    mergeClass(label, props.className);
  }
  label.htmlFor = id;
  label.innerText = props.text;
  return label;
}
