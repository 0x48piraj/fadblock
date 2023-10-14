function getVideoContainer() {
  const videoContainer = Array.from(
    document.getElementsByClassName("html5-video-container"),
  );
  return videoContainer.length > 0 ? videoContainer[0] : null;
}

function getVideoWrapper() {
  return getVideoContainer() ? getVideoContainer().parentNode : null;
}

function getVideoPlayer() {
  return getVideoContainer() ? getVideoContainer().firstChild : null;
}

function isAdShowing() {
  const wrapper = getVideoWrapper();
  return wrapper !== null
    ? wrapper !== undefined && String(wrapper.className).includes("ad-showing")
    : null;
}

function getSkipButton() {
  const skipAdButton = Array.from(
    document.getElementsByClassName("ytp-ad-skip-button ytp-button"),
  );
  return skipAdButton.length > 0 ? skipAdButton[0] : null;
}

function waitForPlayer() {
  if (getVideoPlayer()) {
    hookVideoPlayer();
  } else {
    setTimeout(() => {
      waitForPlayer();
    }, 200);
  }
}

function hookVideoPlayer() {
  const videoPlayer = getVideoPlayer();
  videoPlayer.addEventListener("timeupdate", () => {
    getSkipButton()?.click();
  });

  if (isAdShowing()) {
    videoPlayer.currentTime = videoPlayer.duration - 1;
    videoPlayer.pause();
    videoPlayer.play();
  }
}

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message)
    return true
});
