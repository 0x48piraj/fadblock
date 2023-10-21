import './jquery';
import 'jquery-nice-select';
import 'jquery-ui';
import {
  ContentElement,
  ExtensionApiProvider,
  NavigationElement,
  TabsElement,
} from '@fadblock/popup';

import './styles.scss';

if (window.chrome) {
  ExtensionApiProvider.provide(chrome);
}

NavigationElement.define();
TabsElement.define();
ContentElement.define();
