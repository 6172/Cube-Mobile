'use strict';

define(function(require, exports, module) {
    var doc = document;

    // 菜单、导航逻辑
    var opened = false;
    var body = doc.body,
        pageMask = doc.querySelector('#page-mask'),
        button = doc.querySelector('#page > h1');

    button.addEventListener('touchstart', function(e) {
        if(e.target.tagName.toLowerCase() !== 'a') {
            e.preventDefault();
            if(!opened) {
                body.classList.add('open');
            }else {
                body.classList.remove('open');
            }
            opened = !opened;
        }
    }, false);

    pageMask.addEventListener('touchstart', function(e) {
        e.preventDefault();
        if(opened) {
            body.classList.remove('open');
            opened = !opened;
        }
    }, false);

    // 全局搜索逻辑
    var searchForm = doc.querySelector('#search-form');

    searchForm.addEventListener('submit', function(e) {
        if(this[0].value.replace(/\s/, '') === '') {
            e.preventDefault();
        }
    }, false);
});