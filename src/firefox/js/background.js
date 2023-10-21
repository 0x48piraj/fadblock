// RELOAD ALL YOUTUBE TABS WHEN THE EXTENSION IS INSTALLED OR UPDATED
browser.runtime.onInstalled.addListener((details) => {
  switch (details.reason) {
    case "install":
      console.info("EXTENSION INSTALLED");
      break;
    case "update":
      console.info("EXTENSION UPDATED");
      break;
    case "browser_update":
    case "shared_module_update":
    default:
      console.info("BROWSER UPDATED");
      break;
  }

  browser.tabs.query({}, (tabs) => {
    tabs
      .filter((tab) => tab.url.startsWith("https://www.youtube.com/"))
      .forEach(({ id }) => {
        browser.tabs.reload(id);
      });
  });
});

const taimuRipu = async () => {
  await new Promise((resolve, _reject) => {
    const videoContainer = document.getElementById("movie_player");

    const setTimeoutHandler = () => {
      const isAd = videoContainer?.classList.contains("ad-interrupting") || videoContainer?.classList.contains("ad-showing");
      const skipLock = document.querySelector(".ytp-ad-preview-text")?.innerText;
      const surveyLock = document.querySelector(".ytp-ad-survey")?.length > 0;

      if (isAd && skipLock) {
        const videoPlayer = document.getElementsByClassName("video-stream")[0];
        videoPlayer.muted = true; // videoPlayer.volume = 0;
        videoPlayer.currentTime = videoPlayer.duration - 0.1;
        videoPlayer.paused && videoPlayer.play()
        // CLICK ON THE SKIP AD BTN
        document.querySelector(".ytp-ad-skip-button")?.click();
      } else if (isAd && surveyLock) {
        // CLICK ON THE SKIP SURVEY BTN
        document.querySelector(".ytp-ad-skip-button")?.click();
      }

      resolve();
    };

    // RUN IT ONLY AFTER 100 MILLISECONDS
    setTimeout(setTimeoutHandler, 100);
  });

  taimuRipu();
};

browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === "complete" &&
    String(tab.url).includes("https://www.youtube.com/watch")
  ) {
    browser.scripting.executeScript({
      target: { tabId: tabId },
      func: taimuRipu,
    });
  }
});
