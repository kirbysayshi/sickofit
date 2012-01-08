Sickofit
========

HTML canvas boilerplate, ready-to-go.

Usage
-----

- clone/download repo
- add code to index.html
- maybe update the assembled libs by running `updatelibs.sh`

Features
--------

* You can press `ESC` to halt the whole thing. Calling `window.sickofit.stop` does the same.
* Pushing a function onto the `window.sickofit.loops` automatically calls it at 60FPS (args: delta time, canvas 2d context).
* The current number of frames is at `window.sickofit.iterations`.
* Most of the packaged libs can be autoupdated to their most current versions by running `updatelibs.sh`. It requires `wget`.

Included Libraries / Utilities
------------------------------

* [jQuery](http://jquery.com)
* [requestAnimationFrame](http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating)
* [gl-matrix](https://github.com/toji/gl-matrix)
* [Stats.js](https://github.com/mrdoob/stats.js)
* [dat-gui](http://code.google.com/p/dat-gui/)

WHY
---

I often do small experiments using the `canvas` element. Usually these never see the light of day. But I get excited and can't wait to start coding!

But I can't, because I usually need at least some boilerplate "drawing loop" code, usually with the escape key bound to halt the whole thing (60fps + laptop = poor battery and hot lap). So I make that.

And then there are a few utilities that are just... useful. Like [jQuery](http://jquery.com), [requestAnimFrame](http://paulirish.com/2011/requestanimationframe-for-smart-animating/) or [requestAnimationFrame](http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating), [gl-matrix](https://github.com/toji/gl-matrix) for vector calculations and matrix transforms, [Stats.js](https://github.com/mrdoob/stats.js), [dat-gui](http://code.google.com/p/dat-gui/) ... 

So I built this repo, with the idea that you grab it whenever you want to start a quick canvas... thing... and get coding!