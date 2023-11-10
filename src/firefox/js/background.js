// RELOAD ALL YOUTUBE TABS WHEN THE EXTENSION IS FIRST INSTALLED, DO NOTHING ON UPDATED
browser.runtime.onInstalled.addListener((details) => {
  switch (details.reason) {
    case "install":
      console.info("EXTENSION INSTALLED");
      browser.tabs.query({}, (tabs) => {
        tabs
          .filter((tab) => tab.url.startsWith("https://www.youtube.com/"))
          .forEach(({ id }) => {
            browser.tabs.reload(id);
          });
      });
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
});

const taimuRipu = async () => {
  await new Promise((resolve, _reject) => {
    const videoContainer = document.getElementById("movie_player");

    const setTimeoutHandler = () => 
    {
      const videoContainer = document.getElementById("movie_player"); //Since the DOM can change - it is better to not cache the movie_player DOM element.
      const isAd = videoContainer?.classList.contains("ad-interrupting") || videoContainer?.classList.contains("ad-showing");
      //Those 2 if statement with "skiplock" and "surveylock" are wrong. They are good for normal ads, but not for static ads.
      const videoPlayer = document.querySelector(".video-stream"); // document.querySelector(".video_stream") is faster in this case, then document.getElementsByClassName("video_stream")[0]
      if (isAd && videoPlayer) { 
        videoPlayer.muted = true; // videoPlayer.volume = 0;
        videoPlayer.currentTime = videoPlayer.duration - 0.1;
        videoPlayer.paused && videoPlayer.play()
        document.querySelector(".ytp-ad-skip-button")?.click();
        document.querySelector(".ytp-ad-skip-button-modern")?.click();
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
