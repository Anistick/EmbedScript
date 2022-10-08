# EmbedScript - a JavaScript based app that lets you embed types of scripts
EmbedScript works by grabbing all HTML elements with the `<es>` tag, their types, and parses the specified script type into a `<script>` or the main tag for that script.
# Introduction
First, add the jsDelivr CDN.
```html
<script async defer src="https://cdn.jsdelivr.net/gh/Anistick/EmbedScript@v1.2.0/latest.min.js"></script>
```
### JavaScript embedding
To embed JavaScript, you need to use the `<es>` tag and `pure-js` type. An example is like so:
```html
<es type="pure-js"></es>
```
Next, add your JavaScript code.
```html
<es type="pure-js">
console.log("Hello, World!");
</es>
```
### Python embedding
To embed Python, you still need to use the `<es>` tag (doesn't change) but using the `py-script` type. An example is like so:
```html
<es type="py-script"></es>
```
Next, add your Python code:
```html
<es type="py-script">
print("Hello, World!")
</es>
```
That's the basics!
Python embedding uses [PyScript.](https://pyscript.net)
A demo of JavaScript is [here.](https://lightspeed.anistick.com/EmbedScript/demo) Python demo coming soon.
