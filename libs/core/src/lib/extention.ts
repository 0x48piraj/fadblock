export class FadblockExtension {
  constructor(protected api: typeof chrome | typeof browser) {}

  reloadYoutubeTabsOnInstall() {
    this.api.runtime.onInstalled.addListener(async (details) => {
      if (details.reason !== 'install' && details.reason !== 'update') {
        return;
      }

      const tabs = await this.api.tabs.query({});

      await Promise.all(
        tabs
          .filter(
            (tab) =>
              tab.id !== undefined &&
              tab.url?.startsWith('https://www.youtube.com'),
          )
          .map((tab) => this.api.tabs.reload(tab.id!)),
      );
    });
  }

  executeOnYoutubeTabs(func: () => void) {
    this.api.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
      if (
        changeInfo.status === 'complete' &&
        String(tab.url).includes('https://www.youtube.com/watch')
      ) {
        await this.api.scripting.executeScript({
          target: { tabId },
          func,
        });
      }
    });
  }
}
