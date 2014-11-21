'use strict';

define(function(require, exports, module) {
    require('../widget/nav');

    var boxs = document.querySelectorAll('.spread-box');
    boxs = Array.prototype.slice.call(boxs, 0);

    boxs.forEach(function(item, index) {
        var btn = item.querySelector('.spread-title'),
            content = item.querySelector('.spread-content'),
            opened = false;

        var height = (30 + content.getBoundingClientRect().height) + 'px';
        
        btn.addEventListener('touchstart', function() {
            if(opened) {
                item.classList.remove('open');
                item.style.height = '30px';
            }else {
                item.classList.add('open');
                item.style.height = height;
            }
            opened = !opened;
        }, false);
    });
});