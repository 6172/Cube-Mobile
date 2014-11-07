'use strict';

define(function(require, exports, module) {
    require('./widget/nav');
    var Swipe = require('./widget/swipe');

    var swpieBox = document.querySelector('#page > .swipe-index');
    var swpieNavs = document.querySelectorAll('#page > .swipe-inde-nav > a');

    var indexSwipe = new Swipe(swpieBox);

    for(var i = 0, len = swpieNavs.length; i < len; i++) {
        (function(index, navs, box) {
            navs[index].addEventListener('touchstart', function() {
                box.slide(index, 400);
            }, false);
        })(i, swpieNavs, swpieBox);
    }

});