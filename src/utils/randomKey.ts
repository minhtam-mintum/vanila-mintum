export default function randomKey() {
    return Math.random().toString(36).slice(2, 11);
}