'use strict';

define(function(require, exports, module) {
    require('../widget/nav');

    var doc = document;
    var brandSelect = doc.getElementById('brand');
    var techSelect = doc.getElementById('tech'),
        techSelectText = techSelect.querySelector('b');
    var content = doc.getElementById('plist-content');

    var menus = doc.getElementById('menus');
    var brandOptions = menus.querySelector('.brand-menu > .plist-menu');
    var techOptions = menus.querySelector('.tech-menu > .plist-menu');

    function showBrandMenu() {
        techOptions.style.display = 'none';
        menus.style.display = brandOptions.style.display = 'block';
    }

    function showTechMenu() {
        brandOptions.style.display = 'none';
        menus.style.display = techOptions.style.display = 'block';
    }

    function hideMenus() {
        menus.style.display = 'none';
    }

    function sortProcucts(process) {
        var selector = (process === 'all') ? 'a' : 'a[data-process="' + process + '"]';
        var nodes = content.querySelectorAll('a');

        for(var i = 0, len = nodes.length; i < len; i++) {
            if(process === 'all') {
                nodes[i].style.display = 'block';
            }else {
                if(nodes[i].dataset.process === process) {
                    nodes[i].style.display = 'block';
                }else {
                    nodes[i].style.display = 'none';
                }
            }
        }

        hideMenus();
    }

    var brandIsOpen = false;
    var techIsOpen = false;

    brandSelect.addEventListener('touchstart', function() {
        techIsOpen = false;
        if(brandIsOpen) {
            hideMenus();
        }else {
            showBrandMenu();
        }
        brandIsOpen = !brandIsOpen;
    }, false);

    if(!!techSelect) {
        techSelect.addEventListener('touchstart', function() {
            brandIsOpen = false;
            if(techIsOpen) {
                hideMenus();
            }else {
                showTechMenu();
            }
            techIsOpen = !techIsOpen;
        }, false);

        techOptions.addEventListener('click', function(e) {
            var element = e.target,
                process = '';
            if(element.tagName.toLowerCase() === 'li') {
                process = element.dataset.process;
                sortProcucts(process);
                techSelectText.innerHTML = element.innerHTML;
            }
            e.preventDefault();
        }, false);
    }
});