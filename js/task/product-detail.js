'use strict';

define(function(require, exports, module) {
    require('../widget/nav');

    var doc = document,
        orderForm = doc.getElementById('order-form'),
        submit = orderForm.querySelector('.submit');

    function orderThrough(xhr, e) {
        submit.classList.add('success');
    }

    function orderFailed(xhr, e) {
        submit.classList.add('failed');
        submit.addEventListener('click', submitForm, false);
    }

    function sendOrder(form) {
        var xhr = new XMLHttpRequest(),
            data = new FormData(form);

        xhr.open('POST', form.dataset.ajax, true);

        xhr.timeout = 5000;
        xhr.addEventListener('load', function(e) {
            var status = xhr.status;
            if((status >= 200 && status < 300) || status === 304) {
                orderThrough(xhr, e);
            }else {
                orderFailed(xhr, e);
            }
        }, false);
        xhr.addEventListener('error', function(e) {
            orderFailed(xhr, e);
        }, false);

        xhr.send(data);
    }

    function verifyForm(form) {
        for(var i = 0, len = form.length; i < len; i++) {
            form[i].style.borderColor = '#ccc';
            if(form[i].value.replace(/\s/, '') === '') {
                form[i].style.borderColor = '#f75a53';
                return false;
            }
        }
        return true;
    }

    function submitForm() {
        var canSubmit = verifyForm(orderForm);
        if(canSubmit) {
            submit.removeEventListener('click', submitForm, false);
            submit.classList.remove('success');
            submit.classList.remove('failed');
            submit.classList.add('on-send');
            sendOrder(orderForm);
        }
    }

    submit.addEventListener('click', submitForm, false);
});