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

    toggleButtonLink.on('click', function(e){
        e.preventDefault();
        toggleElementForm.slideToggle('slow');

        if(toggleButtonLink.text() == 'Свернуть поиск') {
            toggleButtonLink.text('Развернуть поиск');
            toggleButton.css('backgroundImage','url(images/content/icon-triangle-disable.png)');
        }
        else {
            toggleButtonLink.text('Свернуть поиск');
            toggleButton.css('backgroundImage','url(images/content/icon-triangle-active.png)');
        }
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

    /*toggle popup-regestration pages*/
    $('#list-reg-link_js a').on('click', function(e) {
        e.preventDefault();
        var currentLink = $(e.target).text(),
            li = $(e.target).parent(),
            valueLi = $(e.target).parent().hasClass('active-page'),
            allItemFilter = $('#list-reg-link_js li');


        if (valueLi != 'active-page') {
            for (var i = 0; i < allItemFilter.length; i++) {
                $(allItemFilter[i]).removeAttr('class');
            }


            var regBox = $('#reg-form'),
                autoregBox = $('#autoreg-form');

            if (currentLink == 'Авторизация') {
                $('#list-reg-link_js > li').removeAttr('class');
                li.addClass('active-page');
                regBox.addClass('show_js');
                autoregBox.removeClass('show_js');
            }
            if (currentLink == 'Регистрация') {
                $('#list-reg-link_js > li').removeAttr('class');
                li.addClass('active-page');
                autoregBox.addClass('show_js');
                regBox.removeClass('show_js');
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

            emailValid.blur(function(){
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
    function popupWindow(targetClick, showCurrentForm, subForm) {
        targetClick.on('click', function (e) {
            e.preventDefault();

            var bgPopup = $('#bg-popup'),
                fotoPopup = $('#wrap-popup');

            bgPopup.addClass('show_js');
            fotoPopup.prepend('<span class="icon-close_js"></span>').animate({'opacity': 1}, 500);
            showCurrentForm.addClass('show_js');
            try {
                subForm.addClass('show_js');
            }
            catch (err) {}

            $('.icon-close_js').on('click', function() {
                bgPopup.removeClass('show_js');
                $('.icon-close_js').remove();
                showCurrentForm.removeClass('show_js');
                $(showCurrentForm).find('.show_js').removeClass('show_js');
                fotoPopup.css('opacity', 0);

                try {
                    subForm.removeClass('show_js');
                }
                catch (err) {}
            });


            bgPopup.height($(document).height());

            var fotoInPopupW = fotoPopup.width(),
                clientW = document.body.clientWidth,
                scrollTop = window.pageYOffset;

            fotoPopup.css({
                'marginTop': scrollTop + 100 + 'px',
                'marginLeft': clientW/2 - fotoInPopupW / 2 + 'px'
            });
        });
    }
    /*end*/

    /*popup call*/
    var popupRegestration = $('#popup-registration'),
        formReg = $('.wrap-reg-autoreg-form'),
        subForm = $('#reg-form');
    popupWindow(popupRegestration, formReg, subForm);

    var popupAutoreg = $('#popup-autoreg'),
        subFormAutoreg = $('#autoreg-form');
    popupWindow(popupAutoreg, formReg, subFormAutoreg);

    var popupTooltip = $('#popup-tooltip_js'),
        formTooltip = $('#popup-reg'),
        unregForm = $('#unregistered-box');
    popupWindow(popupTooltip, formTooltip, unregForm);

    var popupAdvancedSearch = $('#link-advanced-search'),
        formAdvancedSearch = $('#popup-advanced-search');
    popupWindow(popupAdvancedSearch, formAdvancedSearch);
    /*end*/

    /*responsive*/
    if(document.body.clientWidth < 769) {
        $('.list-autoservice tr, .list-autoservice td').load(function(e){
            e.preventDefault();
        });
    }
    /*end*/

    popupAutoreg.on('click', function(){
        $('#link-reg').parent().addClass('active-page');
        $('#link-autoreg').parent().removeClass('active-page');
    });

    popupRegestration.on('click', function(){
        $('#link-reg').parent().removeClass('active-page');
        $('#link-autoreg').parent().addClass('active-page');
    });

    var menuDynamik = $('.list-other-parameters > li > a');
    menuDynamik.on('click', function(e){
        e.preventDefault();

        menuDynamik.parent().each(function(){
            if($(this).hasClass('active')) {
                $(this).removeClass('active');
            }
        });

        $(e.target).parent().addClass('active');
    });

})(jQuery);