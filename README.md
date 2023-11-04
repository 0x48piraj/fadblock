<p align="center">
  <img src="https://github.com/0x48piraj/fadblock/assets/5800726/cf39ef9f-779b-43ca-93f7-ee0bb2a93323" alt="fadblock: A fast, lightweight, and undetectable YouTube Ads Blocker for Chrome, Opera and Firefox"></img>
  <br/>
  <sub>A fast, lightweight, and undetectable YouTube Ads Blocker for Chrome, Opera and Firefox.</sub>
</p>

<p align="center">
	<a href="https://addons.mozilla.org/addon/fadblock/"><img src="https://user-images.githubusercontent.com/585534/107280546-7b9b2a00-6a26-11eb-8f9f-f95932f4bfec.png" alt="Get uBlock Origin for Firefox"></a>
	<a href="https://chrome.google.com/webstore/detail/fadblock/mdadjjfmjhfcibgfhfjbaiiljpllkbfc"><img src="https://user-images.githubusercontent.com/585534/107280622-91a8ea80-6a26-11eb-8d07-77c548b28665.png" alt="Get uBlock Origin for Chromium"></a>
	<a href="#opera--edge"><img src="https://user-images.githubusercontent.com/585534/107280692-ac7b5f00-6a26-11eb-85c7-088926504452.png" alt="Get uBlock Origin for Opera"></a>
</p>

<h1 align="center">FadBlock: Friendly Adblock for Youtube™</h1>


This was posted over reddit a few months ago, [Apparently Ad Blockers are not allowed on Youtube. Is this a new thing they've implemented?](https://www.reddit.com/r/youtube/comments/13cfdbi/apparently_ad_blockers_are_not_allowed_on_youtube/?rdt=64832) and judging by all the recent comments and posts all over [r/youtube](https://www.reddit.com/r/youtube/), this change was just rolled out on a **larger scale**.

This blocker is designed to monitor advertisements, automatically seek the ads and skip them. It's important to note that this doesn't classify as traditional ad blocking, as the ad content is technically "loaded".

Nevertheless, the extension's underlying logic enables it to fast-forward through the ad content to its conclusion. The entire process is optimized to occur within an extremely brief timeframe, typically **<=100 milliseconds**, ensuring a smooth and uninterrupted user experience.

### MAJOR ANNOUNCEMENT :mega::mega::mega:

*Faster, smoother and better than ever!*

The upcoming version will utilize a custom `MutationObserver` with polyfill to ensure **compatibility with older browsers**. This was the initial reason for not implementing `MO` from the start.

The next version will expand onto **YouTube Music** :tada:, will have a **"Blocked Ads" Counter** while including other niche features as well as proposed bugfixes :rocket:.

As this project has demanded a substantial amount of time, the repository will transition to an _open-core model for ongoing maintenance and updates_.

**Note:** Some people are getting confused about the new permissions as well as the access to `extensionpay.com`. The storage permission is for counting the "Blocked YouTube Ads" and ExtensionPay is a payment processor integrated with [Stripe](https://stripe.com/en-in) for obtaining a lifetime license after an initial free trial period (it's gonna stay free after as well but will ask for a contribution every now and then).

> I genuinely hope you all can appreciate the immense amount of time and effort it requires to sustain a project like this all the while YouTube keeps changing the rules, trying to shut-out everything. All this coupled with working >80 hours/week on my own thing (not FadBlock). If you're not satisfied with the decision where you have to pay a one-time contribution as a gesture for "_job well done and keep at it_", you still have the option to manually roll back to version 1.3. I won't remove it; it just won't receive further updates. I believe that's a fair compromise.

## Coverage

- [This special YouTube Adblocker skips ads instead of blocking them](https://ghacks.net/2023/10/28/this-special-youtube-adblocker-skips-ads-instead-of-blocking-them/) [[Archive](https://web.archive.org/web/20231103064810/https://ghacks.net/2023/10/28/this-special-youtube-adblocker-skips-ads-instead-of-blocking-them/)/[Snapshot](https://web.archive.org/web/20231103064822/http://web.archive.org/screenshot/https://ghacks.net/2023/10/28/this-special-youtube-adblocker-skips-ads-instead-of-blocking-them/)]

- [Fadblock: The Sneaky Trickster of YouTube Ad Skipping and YouTube Fast-Forwarding](https://innov8tiv.com/fadblock-the-sneaky-trickster-of-youtube-ad-skipping-and-youtube-fast-forwarding/) [[Archive](https://web.archive.org/web/20231103064518/https://innov8tiv.com/fadblock-the-sneaky-trickster-of-youtube-ad-skipping-and-youtube-fast-forwarding/)/[Snapshot](https://web.archive.org/web/20231103064518/http://web.archive.org/screenshot/https://innov8tiv.com/fadblock-the-sneaky-trickster-of-youtube-ad-skipping-and-youtube-fast-forwarding/)]

- [A fast, lightweight, and undetectable YouTube Ads Blocker for Chrome. : youtube](https://www.reddit.com/r/youtube/comments/177ijjb/a_fast_lightweight_and_undetectable_youtube_ads/) [[Archive](https://archive.ph/2023.10.21-121632/https://www.reddit.com/r/youtube/comments/177ijjb/a_fast_lightweight_and_undetectable_youtube_ads/)]

- [Fadblock YouTube Adblocker Speeds Through Ads Instead of Blocking](https://thetechhacker.com/2023/10/30/fadblock-youtube-adblocker-speeds-through-ads-instead-of-blocking/) [[Archive](https://web.archive.org/web/20231103065339/https://thetechhacker.com/2023/10/30/fadblock-youtube-adblocker-speeds-through-ads-instead-of-blocking/)/[Snapshot](https://web.archive.org/web/20231103065339/http://web.archive.org/screenshot/https://thetechhacker.com/2023/10/30/fadblock-youtube-adblocker-speeds-through-ads-instead-of-blocking/)]

- [Undetectable ad blocker 'FadBlock' that can be used on YouTube, which takes full-scale ad blocker blocking
](https://gigazine.net/gsc_news/en/20231102-youtube-ads-blocker-fadblock/) [[Archive](https://web.archive.org/web/20231103065818/https://gigazine.net/gsc_news/en/20231102-youtube-ads-blocker-fadblock/)/[Snapshot](https://web.archive.org/web/20231103065818/http://web.archive.org/screenshot/https://gigazine.net/gsc_news/en/20231102-youtube-ads-blocker-fadblock/)]

- [FadBlock: the adblocker for YouTube that isn't an adblocker](https://en.iguru.gr/fadblock-adblocker-gia-youtube-pou-den-einai-adblocker/) [[Archive](https://web.archive.org/web/20231103065657/https://en.iguru.gr/fadblock-adblocker-gia-youtube-pou-den-einai-adblocker/)/[Snapshot](https://web.archive.org/web/20231103065657/http://web.archive.org/screenshot/https://en.iguru.gr/fadblock-adblocker-gia-youtube-pou-den-einai-adblocker/)]

- [FadBlock: Youtube χωρίς διαφημίσεις απίστευτα εύκολα](https://techmaniacs.gr/fadblock-enas-diaforetikos-ad-blocker-gia-tis-diafimiseis-sto-youtube/) [[Archive](https://web.archive.org/web/20231103065532/https://techmaniacs.gr/fadblock-enas-diaforetikos-ad-blocker-gia-tis-diafimiseis-sto-youtube/)/[Snapshot](https://web.archive.org/web/20231103065532/http://web.archive.org/screenshot/https://techmaniacs.gr/fadblock-enas-diaforetikos-ad-blocker-gia-tis-diafimiseis-sto-youtube/)]

- [FADBLOCK: L’ESTENSIONE CHE SALTA LE PUBBLICITÀ DI YOUTUBE ANZICHÉ BLOCCARLE](https://www.drcommodore.it/2023/10/31/fadblock-estensione-chrome-youtube/) [[Archive](https://web.archive.org/web/20231103065204/https://www.drcommodore.it/2023/10/31/fadblock-estensione-chrome-youtube/)/[Snapshot](https://web.archive.org/web/20231103065204/http://web.archive.org/screenshot/https://www.drcommodore.it/2023/10/31/fadblock-estensione-chrome-youtube/)]

- [Fadblock: el adblock para YouTube que salta los anuncios en 50 milisegundos](https://blog.elhacker.net/2023/10/fadblock-adblock-para-youtube-salta-anuncios-sin-bloquear.html) [[Archive](https://web.archive.org/web/20231103064154/https://blog.elhacker.net/2023/10/fadblock-adblock-para-youtube-salta-anuncios-sin-bloquear.html)/[Snapshot](https://web.archive.org/web/20231103064154/http://web.archive.org/screenshot/https://blog.elhacker.net/2023/10/fadblock-adblock-para-youtube-salta-anuncios-sin-bloquear.html)]

- [广告加速器代替Adblock！YouTube和创作者均获得收益！](https://www.youtube.com/watch?v=OyAU1tr5qJE) [[Archive](https://web.archive.org/web/20231103063741/https://www.youtube.com/watch?v=OyAU1tr5qJE)/[Snapshot](https://web.archive.org/web/20231103063741/http://web.archive.org/screenshot/https://www.youtube.com/watch?v=OyAU1tr5qJE)]

## Features

This extension effectively eliminates all categories of YouTube advertisements:

**Category 1:** Ads visible on the homepage.

**Category 2:** Ads overlaid atop the suggested video list.

**Category 3:** Ads displayed below the video description.

> Starting on April 6th, 2023, the “Overlay ads” ad format will no longer appear on YouTube to help improve the viewer experience and shift engagement to higher performing ad formats on desktop and mobile devices. Overlay ads are a legacy ad format that only served on desktop and are disruptive for viewers.

**Category 4:** Skippable 5-second-must-be-watched video ads, which may be positioned at the video's start, midway, or at the end.

**Category 5:** Ads similar  to Category 4, but with two consecutive video ads instead of one.

**Category 6:** Inescapable 10-second video ads, which must be watched.

## FAQ

1. **It is not working!**

You will have to **disable other adblockers as they are getting detected**. It's not due to FadBlock as the technique it uses is completely different than other adblockers. It's hacky but it works and Google can't do jack _(for the most part)_.

Some of the extensions that does not and do work with fadblock are listed down below,

| Name of the extension    | Getting detected |
|--------------------------|------------------|
| uBlock Origin            | ✔️               |
| Enhancer For Youtube     | ✔️               |
| SponsorBlock for YouTube | ❌ _(probably)_  |
| Return YouTube Dislike   | ❌               |
| Malwarebytes extension   | ✔️               |
| Brave in-built adblock   | ✔️               |
| Firefox in-built adblock | ✔️               |

> You can also add _youtube.com_ to the exception list for domains on other adblockers (uBlock Origin, AdBlock) and then download FadBlock to override regular adblock being prioritized on YouTube while the conventional adblocker will work across the remainder of the Internet.

**Note:** If you're still getting the YouTube's Adblock warning, look at your extensions, disable extensions one-by-one until you find your culprit. If you still can't find it, change your browser to Chrome (as it has no in-built adblocker) and test again. If it still doesn't work, then and only then create an [issue](https://github.com/0x48piraj/fadblock/issues).

2. **Chrome extension says "Read your browsing history"?**

Prime example of Google being nonsensical, again. Firefox doesn't and they share the same code. (read in detail [here](https://stackoverflow.com/a/64063834))

3. **Why there's no privacy policy?**

There’s no privacy policy as there’s no data collection at all, not even analytical data for error reporting. Everything happens locally. No remote connections are made, nada!

4. **How do I use it for my phone?**

Unfortunately there’s no app or anything. You cannot install Chrome extensions on the Chrome browser on Android, but several Chromium-based third-party browsers support extensions (e.g. brave browser).

> Note: You will have to leave YouTube app and watch over a browser (not very elegant, sorry)


## Install FadBlock to Opera, Edge, Brave and Safari

This section explains on how to install the extension utilizing the _developer mode_ as well as Chromium-based browsers,

<p align="center">
  <img src="https://bashvlas.com/blog/install-chrome-extension-in-developer-mode/example.gif" alt="installing chrome extension in devmode"></img>
</p>

### Opera & Edge

Go to the extensions manager page for Opera (`opera://extensions`) or Edge (`edge://extensions`), turn on **developer mode** and click on **Load Unpacked**.

### Brave Browser

You can visit Chrome Web Store and download the [extension](https://chrome.google.com/webstore/detail/fadblock/mdadjjfmjhfcibgfhfjbaiiljpllkbfc).

### Install over Safari on macOS

1. Download the **Userscripts** from the [App Store](https://apps.apple.com/us/app/userscripts/id1463298887)

2. To open **Userscripts** and enable Safari extensions settings, open **Userscripts** (`userscriptsurlscheme://`), then select the checkbox next to **Userscripts**.

3. Click on the **Userscripts** icon at the top of Safari to open the script editor and create a new JS file. Then, copy the code from [fadblock.user.js](src/safari/js/fadblock.user.js) and paste it into the newly created JS file.

## Show your support

* Think about making a tiny one-time contribution to keep enjoying FadBlock with extended support.
* Star (⭐) this repository and consider following me on [GitHub](https://github.com/0x48piraj) if you're using the **free** version.


## Disclaimer

This software is provided for educational purposes only and
is provided "AS IS", without warranty of any kind, express or
implied, including but not limited to the warranties of merchantability,
fitness for a particular purpose and noninfringement. in no event shall the
authors or copyright holders be liable for any claim, damages or other
liability, whether in an action of contract, tort or otherwise, arising from,
out of or in connection with the software or the use or other dealings in the
software.