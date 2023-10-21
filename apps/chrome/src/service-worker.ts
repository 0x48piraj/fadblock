import { FadblockExtension, scheduleSkipAds } from '@fadblock/core';

const extension = new FadblockExtension(chrome);

extension.reloadYoutubeTabsOnInstall();
extension.executeOnYoutubeTabs(scheduleSkipAds);
