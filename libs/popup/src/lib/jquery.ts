import $ from 'jquery';

export function initJQuery() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).jQuery = (window as any).$ = $;
}
