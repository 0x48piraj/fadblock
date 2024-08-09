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

      const staticAds = [".ytd-companion-slot-renderer", ".ytd-action-companion-ad-renderer", // in-feed video ads
                           ".ytd-watch-next-secondary-results-renderer.sparkles-light-cta", ".ytd-unlimited-offer-module-renderer", // similar components
                           ".ytp-ad-overlay-image", ".ytp-ad-text-overlay", // deprecated overlay ads (04-06-2023)
                           "div#root.style-scope.ytd-display-ad-renderer.yt-simple-endpoint", "div#sparkles-container.style-scope.ytd-promoted-sparkles-web-renderer",
                           ".ytd-display-ad-renderer", ".ytd-statement-banner-renderer", ".ytd-in-feed-ad-layout-renderer", // homepage ads
                           "div#player-ads.style-scope.ytd-watch-flexy, div#panels.style-scope.ytd-watch-flexy", // sponsors
                           ".ytd-banner-promo-renderer", ".ytd-video-masthead-ad-v3-renderer", ".ytd-primetime-promo-renderer" // subscribe for premium & youtube tv ads
                          ];

      staticAds.forEach((ads) => {
          [...document.querySelectorAll(ads)].forEach(
              (el) => (el.style.display = "none")
          );
      });

      resolve();
    };

    // RUN IT ONLY AFTER 100 MILLISECONDS
    setTimeout(setTimeoutHandler, 100);
  });

  skipAd();
};


const init = async () => {
    skipAd();
};

init();