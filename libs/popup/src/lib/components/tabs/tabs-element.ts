import $ from 'jquery';
import template from './tabs-element.html';
import './tabs-element.scss';

import { ExtensionApiProvider } from '../../extention-api-provider';

export class TabsElement extends HTMLElement {
  static define() {
    customElements.define('fad-tabs', TabsElement);
  }

  protected api = ExtensionApiProvider.get();

  connectedCallback() {
    this.innerHTML = template;
    this.updateUI();
  }

  protected async updateUI() {
    if (!this.api) {
      return;
    }

    const tabs = await this.api.tabs.query({
      active: true,
      currentWindow: true,
    });

    const isOnYoutubeTab = tabs.some((tab) => tab.url?.includes('youtube.com'));

    if (!isOnYoutubeTab) {
      $('#video-feed').removeClass('type-active');
      $('#suggested-feed').removeClass('type-active');
      $('#home-feed').removeClass('type-active');
      return;
    }

    const isOnYoutubeWatchPage = tabs.some(
      (tab) => tab.url?.includes('youtube.com/watch'),
    );

    if (isOnYoutubeWatchPage) {
      $('#video-feed').addClass('type-active');
      $('#video-feed')
        .find('img')
        .attr('src', '../assets/popup/video-feed-active.svg');
      $('#suggested-feed').addClass('type-active');
      $('#suggested-feed')
        .find('img')
        .attr('src', '../assets/popup/suggested-feed-active.svg');
    } else {
      $('#home-feed').addClass('type-active');
      $('#home-feed').find('img').attr('src', '../assets/popup/home-feed.svg');
    }
  }
}
