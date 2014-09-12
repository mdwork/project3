(function($){
    /*adding triagle-icon for menu's item if are subMenu*/
    var subMenu = $('.nav li').children('ul');
    if(subMenu) {
        subMenu.parent().children('a').css({
            'backgroundImage':'url(images/header/icon-triangle.png)',
            'paddingRight': 30 + 'px'
        });
    }
    /*end*/

    /*toggle form*/
    var toggleButton = $('.toggle-search-form'),
        toggleButtonLink = $('#bt-toggle'),
        toggleElementForm = $('.form-search-features');

    toggleButton.on('click', function(e){
        e.preventDefault();
        toggleElementForm.slideToggle('slow', function(){
            if(toggleButton.text() == 'Свернуть поиск') {
                toggleButtonLink.text('Развернуть поиск');
                toggleButton.css('backgroundImage','url(images/content/icon-triangle-disable.png)');
            }
            else {
                toggleButtonLink.text('Свернуть поиск');
                toggleButton.css('backgroundImage','url(images/content/icon-triangle-active.png)');
            }
        });
    });
    /*end*/

    /*toggle auto pages*/
    $('#list-filter-auto_js a').on('click', function(e){
        e.preventDefault();
        var currentLink = $(e.target).text(),
            li = $(e.target).parent(),
            valueLi = $(e.target).parent().hasClass('active-category-auto'),
            allItemFilter = $('#list-filter-auto_js li');

        if(valueLi != 'active-category-auto') {
            for(var i = 0; i < allItemFilter.length; i++) {
                $(allItemFilter[i]).removeAttr('class');
            }

            li.addClass('active-category-auto');

            var brand = $('.list-auto-brand').parent(),
                type = $('.list-auto-type').parent(),
                city = $('.list-auto-city').parent();

            if(currentLink == 'По марке') {
                $('.wrap-all-category-auto > li').removeAttr('class');
                brand.addClass('show_js');
            }
            if(currentLink == 'По кузову') {
                $('.wrap-all-category-auto > li').removeAttr('class');
                type.addClass('show_js');
            }
            if(currentLink == 'По городу') {
                $('.wrap-all-category-auto > li').removeAttr('class');
                city.addClass('show_js');
            }

        }
    });
    /*end*/

    /*toggle autoservices pages*/
    $('#list-autoservice-auto_js a').on('click', function(e){
        e.preventDefault();
        var currentLink = $(e.target).text(),
            li = $(e.target).parent(),
            valueLi = $(e.target).parent().hasClass('active-category-auto'),
            allItemFilter = $('#list-autoservice-auto_js li');

        if(valueLi != 'active-category-auto') {
            for(var i = 0; i < allItemFilter.length; i++) {
                $(allItemFilter[i]).removeAttr('class');
            }

            li.addClass('active-category-auto');

            var sto = $('.list-sto').parent(),
                rental = $('.list-car-rental').parent(),
                dealer = $('.list-dealers').parent(),
                trucking = $('.list-trucking').parent();

            if(currentLink == 'СТО') {
                $('.wrap-all-category-autoservice > li').removeAttr('class');
                sto.addClass('show_js');
            }
            if(currentLink == 'Прокат авто') {
                $('.wrap-all-category-autoservice > li').removeAttr('class');
                rental.addClass('show_js');
            }
            if(currentLink == 'Автодиллеры') {
                $('.wrap-all-category-autoservice > li').removeAttr('class');
                dealer.addClass('show_js');
            }
            if(currentLink == 'Грузоперевозки') {
                $('.wrap-all-category-autoservice > li').removeAttr('class');
                trucking.addClass('show_js');
            }
        }
    });
    /*end*/

    /*valid email*/
    $('#submit-subscription_js').submit(function(e){
        var emailValid = $('#valid-email_js');
        if(emailValid.val() == '' || emailValid == ' ') {
            e.preventDefault();
            $('#bt-subscription_js').css('backgroundColor','#ccc');
            emailValid.addClass('no-valid-email_js');

            emailValid.blur(function(e){
                if(emailValid.val() != '' && emailValid != ' ') {
                    $('#bt-subscription_js').css('backgroundColor','#D7270D');
                    emailValid.removeClass('no-valid-email_js');
                }
                else {
                    $('#bt-subscription_js').css('backgroundColor','#ccc');
                }
            });
        }

    });
    /*end*/

    /*popup align*/

    /*end*/

    /*popup function*/
    function popupWindow(targetClick, showCurrentForm) {
        targetClick.on('click', function (e) {
            e.preventDefault();

            var bgPopup = $('#bg-popup'),
                fotoPopup = $('#wrap-popup');

            bgPopup.addClass('show_js');
            fotoPopup.prepend('<span class="icon-close_js"></span>');
            showCurrentForm.addClass('show_js');

            $('.icon-close_js').on('click', function() {
                bgPopup.removeClass('show_js');
                $('.icon-close_js').remove();
                showCurrentForm.removeClass('show_js');
            });

            bgPopup.height($(document).height());

            var fotoInPopupW = fotoPopup.width(),
                fotoInPopupH = fotoPopup.height(),
                clientW = document.body.clientWidth,
                clientH = document.body.clientHeight;

            fotoPopup.css({
                'marginTop': clientH/2 - fotoInPopupH/2 + 'px',
                'marginLeft': clientW/2 - fotoInPopupW / 2 + 'px'
            });
        });
    }
    /*end*/

    /*popup call*/
    var popupRegestration = $('#popup-registration'),
        formReg = $('.wrap-reg-autoreg-form');
    popupWindow(popupRegestration, formReg);
    /*end*/
})(jQuery);