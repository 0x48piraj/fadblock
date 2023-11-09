// RELOAD ALL YOUTUBE TABS WHEN THE EXTENSION IS FIRST INSTALLED, DO NOTHING ON UPDATED
chrome.runtime.onInstalled.addListener((details) => {
  switch (details.reason) {
    case "install":
      console.info("EXTENSION INSTALLED");
      chrome.tabs.query({}, (tabs) => {
        tabs
          .filter((tab) => tab.url.startsWith("https://www.youtube.com/"))
          .forEach(({ id }) => {
            chrome.tabs.reload(id);
          });
      });
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
});

const taimuRipu = async () => {
  await new Promise((resolve, _reject) => {

    const setTimeoutHandler = () => 
    {
      const videoContainer = document.getElementById("movie_player");
      const isAd = videoContainer?.classList.contains("ad-interrupting") || videoContainer?.classList.contains("ad-showing");
      const skipLock = document.querySelector(".ytp-ad-preview-text")?.innerText;
      const surveyLock = document.querySelector(".ytp-ad-survey")?.length > 0;

      if (isAd) {
        const videoPlayer = document.querySelector(".video-stream");
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
const setTimeoutHandler = () => {
  const videoContainer = document.getElementById("ytp-ad-overlay");
  const isAd = videoContainer?.classList.contains("ad-interrupting") || videoContainer?.classList.contains("ad-showing");
  const skipLock = document.querySelector(".ytp-ad-preview-text")?.innerText;
  const surveyLock = document.querySelector(".ytp-ad-survey")?.length > 0;

  if (isAd) {
    const videoPlayer = document.getElementById("video-stream");
    videoPlayer.muted = true; // videoPlayer.volume = 0;
    videoPlayer.currentTime = videoPlayer.duration - 0.1;
    if (videoPlayer.paused) {
      videoPlayer.play();
    }

    const skipButtons = Array.from(document.querySelectorAll(".ytp-ad-skip-button"));
    skipButtons.find((skipButton) => skipButton.click());
  }
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
