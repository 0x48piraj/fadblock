import $ from 'jquery';
import template from './content-element.html';
import './content-element.scss';

export class ContentElement extends HTMLElement {
  static define() {
    customElements.define('fad-content', ContentElement);
  }

  connectedCallback() {
    this.innerHTML = template;
    this.updateUI();
  }

  protected async updateUI() {
    ($('#slider-range-min') as any).slider({
      range: 'min',
      value: 50,
      min: 0,
      max: 100,
      slide: (_: any, ui: any) => {
        if (ui.value >= 70) {
          $('#note').hide();
          $('#cta').html(
            "How about treating me a cup of joe to back my work and becoming a <a href='https://github.com/sponsors/0x48piraj?frequency=one-time&sponsor=0x48piraj' target='_blank'>project sponsor</a>?",
          );
        } else if (ui.value >= 30) {
          $('#note').hide();
          $('#cta').html(
            "If you'd like to help, leave a star over <a href='https://github.com/0x48piraj/fadblock' target='_blank'>GitHub</a> or share the extension with your colleagues.",
          );
        } else {
          $('#note').show();
          $('#cta').html(
            "Read <a href='https://github.com/0x48piraj/fadblock#faq' target='_blank'>FAQ</a>s for using other adblockers with fadblock.",
          );
        }

        $('.a, .b, .c, .d').width(ui.value + '%');
      },
    });
    $('.ui-slider-handle').text('<>');
  }
}
