### Progressive enhancement vs Graceful degradation. 
> Writing code to make use of new features in modern browser while also maintaining backwards compatibility with older browsers. e.g. Promise.finally. IndexedDb etc. 

### Simultaneous downloads from the same domain
> IE -> 8, [ Chrome, Firefox ] -> 6

### Simple slideshow
> SetInterval

### FOUC
> If the content loads / renders before the CSS files are loaded in or applied. Best way is to load the CSS files in the header. 

### CORS
> Cross origin Resource Sharing. Browsers typically block Xorigin requests for security purposes. CORS headers allow reading certain data from another domain. 

### Doctype
> used by browsers to detect the rendering mode to use. Mainly implemented to support older browsers and websites that were developed for those browsers, i.e. Netscape and IE 5

### Full standards, almost standards, quirks mode
> Full Standards -> Follows all guidelines specified by HTML specifications. 
> Quirks mode -> Layout emulates netscape and IE 5. 

### Problems with `application/xhtml+xml`
> Triggers download box in IE8 instead of rendering page. 

### Multiple Languages on a page. 
> Each HTML element can have the `lang` attribute set to denote the language being used. 

### Building blocks of HTML5. 
> Audio/Video support, Local Storage, geolocation, Canvas and SVG, form elements, web worker etc, HTML5, CSS3

### Cookie vs Local storage vs Session storage. 
> Cookie -> smaller dataset, (key, value) pair
> Local Storage -> Persistent data available for the domain, stored client side. 
> Session Storage -> Persisten data avaialble for the window.

### `<script>` async and defer
> `<script>` Starts downloading the script as soon as tag is hit, pauses HTMl parsing while downloading. 
> `<script async>` Starts downloading the script when hit, pauses parsing only when the file is finished downloading. 
> `<script defer>` Only downloads after parsing has finished. 

### `srcset` on img tag. 
> Used to download different versions of image based on screen size. Mostly for different resolutions. Overrides the `src` tag.

### HTML templating libraries
> Handlebars, Mustache, AngularJs, Angular, Vue, HapiJS, express

# Javascript

### Event Delegation
> Adding event listeners to one parent. It listens to bubbled up events, and finds a match on child elements. 

### `this` in javascript

### Prototypical inheritance
> All Js objects have a link to a protoype object. When doing a lookup on the object, the property is searched for on the object, on the prototype of the object, the prototype of the prototype and so on till null is reached. 

### AMD vs CommonJS
> Difference in support for asynchronous module loading.

### IIFE
_WRONG_ <br>
<code>
    function foo() {}();
</code>

_CORRECT_ <br>
<code>

(function() foo() {})();
</code>

### null, undefined, undeclared
> undeclared -> variable can still be assigned a value without using var keyword, doesn't work in strict mode. <br>
> undefined -> declared, not assigned a value yet <br>
> null -> declared variable, assigned a value of null. 

### AJAX
> Allows loading data, incremental updates to page, instead of reloading the entire page. XMLHttpRequest. Fetch API

### JSONP
> JSON with padding. 


# Depth First Search

# Breadth First Search

# Binary Search