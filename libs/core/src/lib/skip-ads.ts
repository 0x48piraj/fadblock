import { hideElementsBySelector } from './utils';

export function scheduleSkipAds(delayMs = 100) {
  setTimeout(trySkipAds, delayMs);
}

export function trySkipAds() {
  const videoContainer = document.getElementById('movie_player');
  const isAd =
    videoContainer?.classList.contains('ad-interrupting') ||
    videoContainer?.classList.contains('ad-showing');
  const skipLock = document.querySelector<HTMLElement>('.ytp-ad-preview-text')
    ?.innerText;
  const adSurvey = document.querySelector<HTMLFormElement>('.ytp-ad-survey');
  const surveyLock = adSurvey && adSurvey.length > 0;

  if (isAd && skipLock) {
    const videoPlayer =
      document.querySelector<HTMLVideoElement>('.video-stream')!;
    videoPlayer.muted = true; // videoPlayer.volume = 0;
    videoPlayer.currentTime = videoPlayer.duration - 0.1;
    videoPlayer.paused && videoPlayer.play();
    // CLICK ON THE SKIP AD BTN
    document.querySelector<HTMLElement>('.ytp-ad-skip-button')?.click();
  } else if (isAd && surveyLock) {
    // CLICK ON THE SKIP SURVEY BTN
    document.querySelector<HTMLElement>('.ytp-ad-skip-button')?.click();
  }

  const staticAds = [
    '.ytd-companion-slot-renderer',
    '.ytd-action-companion-ad-renderer', // in-feed video ads
    '.ytd-watch-next-secondary-results-renderer.sparkles-light-cta',
    '.ytd-unlimited-offer-module-renderer', // similar components
    '.ytp-ad-overlay-image',
    '.ytp-ad-text-overlay', // deprecated overlay ads (04-06-2023)
    '.ytd-display-ad-renderer',
    '.ytd-statement-banner-renderer',
    '.ytd-in-feed-ad-layout-renderer', // homepage ads
    '.ytd-banner-promo-renderer',
    '.ytd-video-masthead-ad-v3-renderer',
    '.ytd-primetime-promo-renderer', // subscribe for premium & youtube tv ads
  ];

  staticAds.forEach(hideElementsBySelector);

  scheduleSkipAds();
}
