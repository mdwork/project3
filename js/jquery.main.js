﻿jQuery(document).ready(function(){


/* слайдер цен */

jQuery("#slider").slider({
	min: 100,
	max: 200000,
	values: [100,200000],
	range: true,
	stop: function(event, ui) {
		jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
		jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
		
    },
    slide: function(event, ui){
		jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
		jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
    }
});

jQuery("input#minCost").change(function(){

	var value1=jQuery("input#minCost").val();
	var value2=jQuery("input#maxCost").val();

    if(parseInt(value1) > parseInt(value2)){
		value1 = value2;
		jQuery("input#minCost").val(value1);
	}
	jQuery("#slider").slider("values",0,value1);	
});

	
jQuery("input#maxCost").change(function(){
		
	var value1=jQuery("input#minCost").val();
	var value2=jQuery("input#maxCost").val();
	
	if (value2 > 200000) { value2 = 200000; jQuery("input#maxCost").val(200000)}

	if(parseInt(value1) > parseInt(value2)){
		value2 = value1;
		jQuery("input#maxCost").val(value2);
	}
	jQuery("#slider").slider("values",1,value2);
});



// фильтрация ввода в поля
	jQuery('#minCost, #maxCost').keypress(function(event){
		var key, keyChar;
		if(!event) var event = window.event;
		
		if (event.keyCode) key = event.keyCode;
		else if(event.which) key = event.which;
	
		if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
		keyChar=String.fromCharCode(key);
		
		if(!/\d/.test(keyChar))	return false;
	
	});


    /*two*/
    jQuery("#slider1").slider({
        min: 100,
        max: 200000,
        values: [100,200000],
        range: true,
        stop: function(event, ui) {
            jQuery("input#minCost1").val(jQuery("#slider1").slider("values",0));
            jQuery("input#maxCost1").val(jQuery("#slider1").slider("values",1));

        },
        slide: function(event, ui){
            jQuery("input#minCost1").val(jQuery("#slider1").slider("values",0));
            jQuery("input#maxCost1").val(jQuery("#slider1").slider("values",1));
        }
    });

    jQuery("input#minCost1").change(function(){

        var value1=jQuery("input#minCost1").val();
        var value2=jQuery("input#maxCost1").val();

        if(parseInt(value1) > parseInt(value2)){
            value1 = value2;
            jQuery("input#minCost1").val(value1);
        }
        jQuery("#slider1").slider("values",0,value1);
    });


    jQuery("input#maxCost1").change(function(){

        var value1=jQuery("input#minCost1").val();
        var value2=jQuery("input#maxCost1").val();

        if (value2 > 200000) { value2 = 200000; jQuery("input#maxCost1").val(200000)}

        if(parseInt(value1) > parseInt(value2)){
            value2 = value1;
            jQuery("input#maxCost1").val(value2);
        }
        jQuery("#slider1").slider("values",1,value2);
    });



// фильтрация ввода в поля
    jQuery('#minCost1, #maxCost1').keypress(function(event){
        var key, keyChar;
        if(!event) var event = window.event;

        if (event.keyCode) key = event.keyCode;
        else if(event.which) key = event.which;

        if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
        keyChar=String.fromCharCode(key);

        if(!/\d/.test(keyChar))	return false;

    });
});



