# preimg

[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/Graydalf/preimg/blob/master/LICENSE)

A JavaScript Library for preload images.

## Install

Using npm

```bash
npm install preimg
```

## Example

Preload some images

```js
var arr = ['/imgs/comment.png', '/imgs/blue.png']

preimg(arr).done(function(imgs) {
  // imgs is Array, typeof HTML DOM Image
})
```
