<p align="center">
  <img src="https://github.com/0x48piraj/fadblock/assets/5800726/cf39ef9f-779b-43ca-93f7-ee0bb2a93323" alt="fadblock: A fast, lightweight, and undetectable YouTube Ads Blocker for Chrome, Opera and Firefox"></img>
  <br/>
  <sub>A fast, lightweight, and undetectable YouTube Ads Blocker for Chrome, Opera and Firefox.</sub>
</p>

<p align="center">
	<a href="https://addons.mozilla.org/addon/fadblock/"><img src="https://user-images.githubusercontent.com/585534/107280546-7b9b2a00-6a26-11eb-8f9f-f95932f4bfec.png" alt="Get uBlock Origin for Firefox"></a>
	<a href="https://chrome.google.com/webstore/detail/fadblock/mdadjjfmjhfcibgfhfjbaiiljpllkbfc"><img src="https://user-images.githubusercontent.com/585534/107280622-91a8ea80-6a26-11eb-8d07-77c548b28665.png" alt="Get uBlock Origin for Chromium"></a>
	<a href="https://addons.opera.com/extensions/details/fadblock/"><img src="https://user-images.githubusercontent.com/585534/107280692-ac7b5f00-6a26-11eb-85c7-088926504452.png" alt="Get uBlock Origin for Opera"></a>
</p>

<h1 align="center">FadBlock: Friendly Adblock for Youtube™</h1>


This was posted over reddit a few months ago, [Apparently Ad Blockers are not allowed on Youtube. Is this a new thing they've implemented?](https://www.reddit.com/r/youtube/comments/13cfdbi/apparently_ad_blockers_are_not_allowed_on_youtube/?rdt=64832) and judging by all the recent comments and posts all over [r/youtube](https://www.reddit.com/r/youtube/), this change was just rolled out on a **larger scale**.

This blocker is designed to monitor advertisements, automatically seek the ads and skip them. It's important to note that this doesn't classify as traditional ad blocking, as the ad content is technically "loaded".

Nevertheless, the extension's underlying logic enables it to fast-forward through the ad content to its conclusion. The entire process is optimized to occur within an extremely brief timeframe, typically **<=50 milliseconds**, ensuring a smooth and uninterrupted user experience.

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

You will have to disable other adblockers as they are getting detected **not** fadblock.

> You can also add _youtube.com_ to the exception list for domains on other adblockers (uBlock Origin, AdBlock) and then download fadblock to override regular adblock being prioritized on YouTube while the conventional adblocker will work across the remainder of the Internet.

2. **Chrome extension says "Read your browsing history"?**

Prime example of Google being nonsensical, again. Firefox doesn't and they share the same code. (read in detail [here](https://stackoverflow.com/a/64063834))

3. **Why there's no privacy policy?**

There’s no privacy policy as there’s no data collection at all, not even analytical data for error reporting. Everything happens locally. No remote connections are made, nada!

4. **How do I use it for my phone?**

Unfortunately there’s no app or anything. You cannot install Chrome extensions on the Chrome browser on Android, but several Chromium-based third-party browsers support extensions (e.g. brave browser).

> Note: You will have to leave YouTube app and watch over a browser (not very elegant, sorry)


## Install Fadblock to Opera, Edge, and Brave

This section explains on how to install the extension utilizing the _developer mode_ as well as Chromium-based browsers,

<p align="center">
  <img src="https://bashvlas.com/blog/install-chrome-extension-in-developer-mode/example.gif" alt="installing chrome extension in devmode"></img>
</p>

**Opera Browser:** Go to the extensions manager page (`opera://extensions`), turn on **developer mode** and click on **Load Unpacked**.

**Edge Browser:** Go to the extensions manager page (`edge://extensions`), turn on **developer mode** and click on **Load Unpacked**.

**Brave Browser:** You can visit Chrome Web Store and download the extension (https://chrome.google.com/webstore/detail/fadblock/mdadjjfmjhfcibgfhfjbaiiljpllkbfc).

## Install Fadblock to Safari on macOS

1. Download the `Userscripts` from the [App Store](https://apps.apple.com/us/app/userscripts/id1463298887) (itms-apps://itunes.apple.com/app/id1463298887)

2. To open `Userscripts` and enable Safari extensions settings, open `Userscripts` ( userscriptsurlscheme:// ), then select the checkbox next to `Userscripts`.

3. Click on the `Userscripts` icon at the top of Safari to open the script editor and create a new JS file. Then, copy the code from [here](src/safari/js/content.js) and paste it into the newly created JS file.

## Show your support

* Follow me on GitHub [@0x48piraj](https://github.com/0x48piraj) for updates.
* I do not ask for donations, all I ask is that you star (⭐) this repository.


## Disclaimer

This software is provided for educational purposes only and
is provided "AS IS", without warranty of any kind, express or
implied, including but not limited to the warranties of merchantability,
fitness for a particular purpose and noninfringement. in no event shall the
authors or copyright holders be liable for any claim, damages or other
liability, whether in an action of contract, tort or otherwise, arising from,
out of or in connection with the software or the use or other dealings in the
software.