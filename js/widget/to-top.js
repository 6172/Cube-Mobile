'use strict';

define(function(require, exports, module) {
    var doc = document,
        body = doc.body;

    var toTop = doc.createElement('div');

    toTop.id = 'to-top';
    toTop.className = 'to-top';

    doc.body.appendChild(toTop);

    toTop.addEventListener('click', function(e) {
        e.preventDefault();
        body.scrollTop = 0;
    }, false);

    window.addEventListener('scroll', function() {
        if(body.scrollTop > 200) {
            toTop.style.display = 'block';
        }else {
            toTop.style.display = '';
        }
    }, false);
});