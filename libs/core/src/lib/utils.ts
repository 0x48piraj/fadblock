export function hideElementsBySelector(selector: string) {
  document
    .querySelectorAll<HTMLElement>(selector)
    .forEach((el) => (el.style.display = 'none'));
}
