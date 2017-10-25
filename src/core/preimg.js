/* preimg v0.0.1 | (c) 2017 by Graydalf | Released under the MIT License*/
(function(global, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if (typeof define === 'function' && define.amd) define([], factory);
  else if (typeof exports === 'object') exports['preimg'] = factory();
  else global['preimg'] = factory();
})(this, function() {
  'use strict';

  function preimg(arr) {
    var imgs = [],
      img,
      loaded = 0;
    var postaction = function() {};
    arr =
      Object.prototype.toString.apply(arr) === '[object Array]' ? arr : [arr];

    function imgloadpost() {
      loaded++;
      if (loaded === arr.length) {
        postaction(imgs);
      }
    }

    for (var i = 0; i < arr.length; i++) {
      img = imgs[i] = new Image();
      img.src = arr[i];

      if (img.complete) {
        imgloadpost();
      } else {
        img.onload = function() {
          imgloadpost();
        };
        img.onerror = function() {
          imgloadpost();
        };
      }
    }

    return {
      done: function(f) {
        postaction = f || postaction;
      }
    };
  }

  return preimg;
});
