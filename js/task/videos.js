'use strict';

define(function(require, exports, module) {
    require('../widget/nav');
    var Swipe = require('../widget/swipe');

    // 选择视频分类
    var select = document.querySelector('#video-selector'),
        videoType = select.querySelector('h2'),
        selectItems = select.querySelectorAll('a'),
        selectBtn = select.querySelector('.video-select-btn');
    var selectOpened = false,
        currentItem;

    selectBtn.addEventListener('click', function() {
        if(!selectOpened) {
            select.classList.add('show-option');
        }else {
            select.classList.remove('show-option');
        }
        selectOpened = !selectOpened;
    }, false);

    selectItems = Array.prototype.slice.call(selectItems, 0);
    currentItem = selectItems[0];
    selectItems.forEach(function(ele, index) {
        selectItems[index].addEventListener('touchstart', function() {
            currentItem.classList.remove('on');
            currentItem = this;
            currentItem.classList.add('on');
        }, false);
    });

    document.addEventListener('touchend', function() {
        currentItem.classList.remove('on');
    });

    select.querySelector('.video-options').addEventListener('touchmove', function(e) {
        e.preventDefault();
    }, false);
    // // 视频左右切屏
    // var swpieBox = document.querySelector('#swipe-video');
    // var swipeMover = document.querySelector('#swipe-video-wrap');
    // var swpieNav = document.querySelector('#swipe-video-nav'),
    //     swpieNavs;

    // var childLength = swipeMover.querySelectorAll('li').length;
    // var navChild = '';
    // var currentIndex = 0;

    // for(var i = 0; i < childLength; i++) {
    //     navChild += '<a href="javascript:void(0);"></a>';
    // }

    // swpieNav.innerHTML = navChild;
    // swpieNavs = swpieNav.querySelectorAll('a');
    // swpieNavs[0].className = 'on';

    // var videoSwipe = new Swipe(swpieBox, {
    //     continuous : false,
    //     stopPropagation : true,
    //     callback : function(index) {
    //         swpieNavs[currentIndex].className = '';
    //         swpieNavs[index].className = 'on';
    //         currentIndex = index;
    //     }
    // });

});