'use strict';

define(function(require, exports, module) {
    var doc = document;

    var opened = false;
    var body = doc.body,
        button = doc.querySelector('#page > h1');

    button.addEventListener('touchstart', function() {
        if(!opened) {
            body.classList.add('open');
        }else {
            body.classList.remove('open');
        }
        opened = !opened;
    }, false);
});