# Wiki Game Hack

A little hack to (always) win the (Wikipedia Racing Game)[http://thewikirace.com].

## Instructions

Open the developer console in your respective browser by following the instructions below (on the Wikipedia Game tab), paste the following code in, hit 'Enter' and enjoy the show!

```
var script= document.createElement('script');
script.type= 'text/javascript';
script.src= 'http://raw.githubusercontent.com/rukmal/WikiGameHack/master/cheat.js';
document.head.appendChild(script);
```

Note: The script will stop working when you refresh the page.

### Google Chrome

```
Right click -> Inspect Element -> Console
```

### Firefox

```
Tools -> Web Developer -> Web Console
```

### Safari

```
Right click -> Inspect Element -> Console
```

### Opera

```
Right click -> Inspect Element -> Console
```

### Internet Explorer

```
Tools -> Developer Tools -> Script -> Console
```

## Becoming the ultimate troll

If you're really keen on being a troll, install [Tapermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) for Chrome or [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) for Firefox, and configure the script to run continuously whenever you load the game!