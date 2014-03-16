This is a test of creating custom elements using x-tag and brick. The web page started off with the example by [Angelina Fabbro](https://hacks.mozilla.org/2014/03/custom-elements-for-custom-applications-web-components-with-mozillas-brick-and-x-tag/).

The custom elements themselves tend towards the experimental and silly. In addition to `brick.min.js` and `brick.min.css` to use them, you will also need `dom.js` which adds some functionality to the xtag utility functions, and `channel.js` which implements a simple bi-directional publish/subscribe mechanism.

### `dom.js`

* `xtag.addFrameHandler(fn)` This function allows you to register a function which will be called every frame with the milliseconds since it's last call as an argument. You don't have to call anything else for the next frame, your function will just keep getting called forever.
* `xtag.mouseX` current position of the mouse in browser coordinates.
* `xtag.mouseY` current position of the mouse in browser coordinates.
* `xtag.html(tagName, [attributes], [children])` This is a convenience function for creating HTML elements with the given nodeName. If there is an object as the second argument the keys and values will be iterated over and each pair added to the new element using `setAttribute(key, value)`. The optional third argument (or second, if there is no attributes argument) can be a string, another element, or an array. If it is a string it will be appended to the new element after being converted to a DOM TextNode. If it is a node it will be appended as-is. If it is an array, the contents are expected to either be strings or nodes, and each will be appended in turn to the element. The new element is returned.
* `xtag.svg(tagName, [attributes], [children])` is just like the html() function above, but creates elements in the SVG namespace.
* `xtag.remove(elem)` will remove an element from its parent. It is just shorter than the standard DOM call. Returns the element just removed.
* `xtag.closest(elem, selector)` will return the nearest ancestor element of elem that matches the selector.
* `xtag.randomId()` returns a suitably random id, useful for use inside widgets.


### `channel.js`

* `channel.on(channelName, elem)` registers element to receive updates on channelName.
* `channel.off(channelName, elem)` unregisters element to receive updates on channelName.
* `channel.once(channelName, elem)` registers element to recieve a one-time update on channelName.
* `channel.emit(channelName, data)` sends an arbitrary data object to every element listening on channelName. Each listener that has an `onChannel(channelName, data)` method will have it called with those arguments.
* `channel.emitAsync(channelName, data)` sends an arbitrary data object to every element listening on channelName, but doesn't wait until they process it. Each listener's `onChannel` method will be called as above.


