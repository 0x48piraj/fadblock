import { FadblockExtension, scheduleSkipAds } from '@fadblock/core';

const extension = new FadblockExtension(browser);

extension.reloadYoutubeTabsOnInstall();
extension.executeOnYoutubeTabs(scheduleSkipAds);
