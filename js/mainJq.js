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


})(jQuery);