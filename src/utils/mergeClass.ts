export default function mergeClass(selector: Element, classList: string) {
  const newClassName = `${selector.className} ${classList}`;
  selector.className = newClassName
    .split(' ')
    .filter((cls, i, arr) => cls !== 'undefined' && cls.trim() !== '' && arr.indexOf(cls) === i)
    .join(' ');
}
