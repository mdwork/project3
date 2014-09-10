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
        toggleButtonLink = $('.bt-toggle'),
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
    $('.list-filter-auto a').on('click', function(e){
        e.preventDefault();
        var currentLink = $(e.target).text(),
            li = $(e.target).parent(),
            valueLi = $(e.target).parent().hasClass('active-category-auto'),
            allItemFilter = $('.list-filter-auto li');

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
})(jQuery);