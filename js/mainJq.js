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
                regBox.removeClass('show_js');
                autoregBox.addClass('show_js');
            }
            if (currentLink == 'Регистрация') {
                $('#list-reg-link_js > li').removeAttr('class');
                li.addClass('active-page');
                autoregBox.removeClass('show_js');
                regBox.addClass('show_js');
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

            bgPopup.height($(document).height());

            var fotoInPopupW = fotoPopup.width(),
                clientW = document.body.clientWidth,
                scrollTop = window.pageYOffset;

            fotoPopup.css({
                'top': scrollTop + 100,
                'left': '50%',
                'margin-left': - (fotoInPopupW / 2)
            });

            $('.icon-close_js, #bg-popup').on('click', function() {
                bgPopup.removeClass('show_js');
                $('.icon-close_js').remove();
                showCurrentForm.removeClass('show_js');

                $(showCurrentForm).find('.show_js').removeClass('show_js');

                fotoPopup.css({
                    'opacity' : 0,
                    'top': 0,
                    'left': 0,
                    'margin-left': 0
                });

                try {
                    subForm.removeClass('show_js');
                }
                catch (err) {}
            });

            $("#wrap-popup").click(function(e) {
                e.stopPropagation();
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

    var popupAd = $('.bt-ad_js'),
        formAd = $('#popup-up-ad'),
        unregAdForm = $('#unregistered-ad-box');
    popupWindow(popupAd, formAd, unregAdForm);

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
        $('#link-reg').parent().removeClass('active-page');
        $('#link-autoreg').parent().addClass('active-page');
    });

    popupRegestration.on('click', function(){
        $('#link-reg').parent().addClass('active-page');
        $('#link-autoreg').parent().removeClass('active-page');
    });

    var menuDynamik = $('.list-other-parameters > li > a');
    $('.active .list-values').css("opacity", 1);
    menuDynamik.on('click', function(e){
        e.preventDefault();
        $('.active .list-values').css("opacity", 0);

        menuDynamik.parent().each(function(){
            if($(this).hasClass('active')) {
                $(this).removeClass('active');
            }
        });

        $(e.target).parent().addClass('active');
        $('.active .list-values').animate({"opacity": 1}, 500);
    });


        /* prepend menu icon */
        $('#nav-wrap').prepend('<div id="menu-icon"></div>');

        /* toggle nav */
        $("#menu-icon").on("click", function(){
            $("#nav").slideToggle();
            $(this).toggleClass("active");
        });

    $('.placeholder_js').focus(function(){
        var textPlaceholder = $(this).prop('placeholder');

        $(this).removeAttr('placeholder');
        $(this).blur(function(){
            $(this).prop('placeholder', textPlaceholder);
        });
    });

    $('input.check-other-parameters').change('click', function(e){
        var curLabel = $(e.target).parent();

        if(curLabel.hasClass('bg-label_js')) {
            curLabel.removeClass('bg-label_js');
        }
        else if (!curLabel.hasClass('bg-label_js')) {
            curLabel.addClass('bg-label_js');
        }
    });


    $(".custom-select_js").selectmenu();

    $(".ui-selectmenu-button").addClass( "custom-input custom-select-height" );
    $(".select-subscription").parent().children(".ui-selectmenu-button").addClass("select-subscription");

    /*collage toggle*/
    function collageToggle(targetFoto, wrapMainFoto) {
        targetFoto.on('click', function(e){
            var activeFotoCollage = $(e.target).clone();

            wrapMainFoto.children('img').remove();
            activeFotoCollage.css('opacity', 0);
            wrapMainFoto.prepend(activeFotoCollage);
            activeFotoCollage.animate({'opacity': 1}, 500);
        });
    }

    var littleFotoCollage = $('.list-foto-collage img'),
        wrapMainFotoCollage = $('.wrap-main-auto');
        collageToggle(littleFotoCollage, wrapMainFotoCollage);
    /*end*/

    /**/
    $('.hide-text_js').fadeToggle();
    $('#show-text').on('click', function(e){
        e.preventDefault();
        $('.hide-text_js').fadeToggle();
        console.log($(this).text());
        if($(this).text() != 'Скрыть') {
            $(this).text('Скрыть');
        }
        else {
            $(this).text('Подробнее');
        }
    });
    /*end*/

    /*favorites box*/
    var curFavoritesBt = $('.bt-favorites'),
        textCurFavoritesBt = curFavoritesBt.text();

    curFavoritesBt.on('click', function(e){
        var curBoxFavorites = $(e.target).closest('.favorite_js'),
            posTopCurBoxFavorites = curBoxFavorites.offset().top,
            posLeftCurBoxFavorites = curBoxFavorites.offset().left;

        if($(e.target).text() != 'В избранное') {
            $(e.target).text('В избранное');
        }
        else {
            $(e.target).text('В избранном');
                $('.box-favorites_js').remove();

                var searchFavoritesBox = curBoxFavorites.children('.box-favorites_js');
                if(searchFavoritesBox) {
                    curBoxFavorites.prepend('<span class="box-favorites_js"><i class="fa fa-heart"></i>250</span>');
                    $('.box-favorites_js').slideDown(250);
                    if($(window).width() > 1204) {
                        $('.box-favorites_js').css(
                            'left', posLeftCurBoxFavorites - 62
                        );
                        if(posTopCurBoxFavorites >= $(document).scrollTop()) {
                            topPosition = posTopCurBoxFavorites - $(document).scrollTop()
                        }
                        else {
                            topPosition = 0
                        }
                        $('.box-favorites_js').css(
                            'top', topPosition
                        )
                    }
                    else if($(window).width() < 1204 && $(window).width() > 480) {
                        $('.box-favorites_js').css(
                            'left', 0
                        );
                        if(posTopCurBoxFavorites >= $(document).scrollTop()) {
                            topPosition = posTopCurBoxFavorites - $(document).scrollTop()
                        }
                        else {
                            topPosition = 0
                        }
                        $('.box-favorites_js').css(
                            'top', topPosition
                        )
                    }

                    else if($(window).width() <= 480) {
                        $('.box-favorites_js').css({
                            'bottom': 0,
                            'left': 0
                        });
                    }
                }
        }

        if($('.bt-favorites').text() == textCurFavoritesBt){

            $('.box-favorites_js').remove();
        }
    });
    /*end*/

    /*sort element*/
    function sortElement(targetCategory, nameDataParameter){
        targetCategory.click(function(e){
            e.preventDefault();

            var $detachAdsItem = $(".wrap-all-list-auto-result-sort").detach();

            $detachAdsItem.sort(function (a, b) {
                var aSortTime = $(a).data(nameDataParameter),
                    bSortTime = $(b).data(nameDataParameter);

                if ( aSortTime < bSortTime ) { return -1; }
                if ( aSortTime > bSortTime ) { return 1; }

                return 0;
            });

            $detachAdsItem.appendTo(".all-list-auto-result-sort");
        });
    }
    var dataSort = $('.data-sort_js'),
        dataParam = 'sort-timestamp';
        sortElement(dataSort, dataParam);

    var priceSort = $('.price-sort_js'),
        priceParam = 'sort-price';
        sortElement(priceSort, priceParam);

    var yearSort = $('.year-sort_js'),
        yearParam = 'sort-year';
        sortElement(yearSort, yearParam);

    var engineSort = $('.engine-sort_js'),
        engineParam = 'sort-engine';
        sortElement(engineSort, engineParam);

    var mileageSort = $('.mileage-sort_js'),
        mileageParam = 'sort-mileage';
        sortElement(mileageSort, mileageParam);

    var transmissionSort = $('.transmission-sort_js'),
        transmissionParam = 'sort-transmission';
        sortElement(transmissionSort, transmissionParam);
    /*end*/

    /*active link*/

    $('.list-sort-link li').on('click', function(event){
        var listLinks = $('.list-sort-link li');
            listLinks.each(function(){
                $(this).removeClass('active-sort-link');
            });
        $(event.target).parent().addClass('active-sort-link');

    });
    /*end*/
})(jQuery);