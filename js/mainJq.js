(function($){
    /*adding triagle-icon for menu's item if are subMenu*/
    var subMenu = $('.nav li').children('ul');
    if(subMenu) {
        subMenu.parent().children('a').css({
            'backgroundImage':'url(images/header/icon-triagle.png)',
            'paddingRight': 30 + 'px'
        });
    }
    /*end*/
})(jQuery);