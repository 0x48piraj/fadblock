import $ from 'jquery';
import template from './navigation-element.html';
import './navigation-element.scss';

export class NavigationElement extends HTMLElement {
  static define() {
    customElements.define('fad-navigation', NavigationElement);
  }

  connectedCallback() {
    this.innerHTML = template;
    this.updateUI();
  }

  protected async updateUI() {
    $('#more').on('click', () => {
      if ($('#more-select').hasClass('countactive')) {
        $('#more-select').removeClass('countactive');
      } else {
        $('#more-select').addClass('countactive');
      }
    });
  }
}
