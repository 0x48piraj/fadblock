// RELOAD ALL YOUTUBE TABS WHEN THE EXTENSION IS INSTALLED OR UPDATED
chrome.runtime.onInstalled.addListener((details) => {
  switch (details.reason) {
    case "install":
      console.info("EXTENSION INSTALLED");
      break;
    case "update":
      console.info("EXTENSION UPDATED");
      break;
    case "chrome_update":
    case "shared_module_update":
    default:
      console.info("BROWSER UPDATED");
      break;
  }

  chrome.tabs.query({}, (tabs) => {
    tabs
      .filter((tab) => tab.url.startsWith("https://www.youtube.com/"))
      .forEach(({ id }) => {
        chrome.tabs.reload(id);
      });
  });
});

const taimuRipu = async () => {
  await new Promise((resolve, _reject) => {
    const videoContainer = document.getElementById("movie_player");

    const setTimeoutHandler = () => {
      const isAd = videoContainer?.classList.contains("ad-interrupting") || videoContainer?.classList.contains("ad-showing");
      const skipLock = document.querySelector(".ytp-ad-preview-text")?.innerText;

      if (isAd && skipLock) {
        const videoPlayer = document.getElementsByClassName("video-stream")[0];
        videoPlayer.muted = true; // videoPlayer.volume = 0;
        videoPlayer.currentTime = videoPlayer.duration - 0.1;
        // CLICK ON THE SKIP AD BTN
        document.querySelector(".ytp-ad-skip-button")?.click();
      }

      resolve();
    };

    // RUN IT ONLY AFTER 100 MILLISECONDS
    setTimeout(setTimeoutHandler, 100);
  });

  taimuRipu();
};

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === "complete" &&
    String(tab.url).includes("https://www.youtube.com/watch")
  ) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      function: taimuRipu,
    });
  }
});
