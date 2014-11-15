'use strict';

define(function(require, exports, module) {
    require('../widget/nav');
    var Swipe = require('../widget/swipe');

    var swpieBox = document.querySelector('#page > .swipe');
    var swpieNavs = document.querySelectorAll('#page > .swipe-nav > a');

    var currentIndex = 0;

    var indexSwipe = new Swipe(swpieBox, {
        continuous : false,
        callback : function(index) {
            swpieNavs[currentIndex].className = '';
            swpieNavs[index].className = 'on';
            currentIndex = index;
        }
    });
});