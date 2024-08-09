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

const skipAd = async () => {
    await new Promise((resolve, _reject) => {
        const setTimeoutHandler = () => {
            const isAd = document.querySelector("[class*=ytp-ad]") != null;

            if (isAd) {
                const videoPlayer = document.getElementsByClassName("video-stream")[0];
                videoPlayer.muted = true;
                videoPlayer.currentTime = videoPlayer.duration - 0.1;
                videoPlayer.paused && videoPlayer.play()
                // CLICK ON THE SKIP AD BTN
                document.querySelector("button[class*=skip]")?.click();
            }

            resolve();
        };

        // RUN IT ONLY AFTER 100 MILLISECONDS
        setTimeout(setTimeoutHandler, 100);
    });

    skipAd();
};

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (
        changeInfo.status === "complete" &&
        String(tab.url).includes("https://www.youtube.com/watch")
    ) {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            function: skipAd,
        });
    }
});
