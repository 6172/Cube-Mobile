'use strict';

define(function(require, exports, module) {
    var doc = document;

    var opened = false;
    var body = doc.body,
        pageMask = doc.querySelector('#page-mask'),
        button = doc.querySelector('#page > h1');

    button.addEventListener('touchstart', function(e) {
        e.preventDefault();
        if(!opened) {
            body.classList.add('open');
        }else {
            body.classList.remove('open');
        }
        opened = !opened;
    }, false);

    pageMask.addEventListener('touchstart', function(e) {
        e.preventDefault();
        if(opened) {
            body.classList.remove('open');
            opened = !opened;
        }
    }, false);
});