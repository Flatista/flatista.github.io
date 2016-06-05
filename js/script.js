function setActive(d,index){
	$("li").removeClass("active");
	$(d).addClass("active");	
}

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});



function navbarCheck(){
    if($(window).width() <= 991){        
        if($(window).width() <= 767){        
            $("#mainNavbar").removeClass("mainNavbarFull");
            $("#mainNavbar").removeClass("mainNavbarLogo");
        }
        supportVhVw.setMargin(".aboutAda",4,3,4,3);
    }
    $('#mainBackground').css({'background-image': 'url(img/'+(Math.floor(Math.random()*10000)%20)+'.jpg)'});
    $("#btnmainBackground, #btnabout, #btncontact").on('click', function(e){
        e.preventDefault();
        var target = "#"+$(this).get(0).id.substring(3);
        target = $(target);
        $('html, body').stop().animate({
           scrollTop: target.offset().top
        }, 1000);
    });

    // Init object
    var supportVhVw = new SupportVhVw();

    // Scale all texts
    supportVhVw.setMargin(".aboutText",4,3,4,3);
    supportVhVw.setMargin(".contactText",4,3,4,3);
    supportVhVw.setMargin(".contactTextTitle",1,3,0,3);
    supportVhVw.setPadding(".bodyText",5,0,0,0);
    supportVhVw.setPadding("#logoImage",30,10,0,10);
}

$(window).load(navbarCheck);

$(window).scroll(function () {
    var e = $(this).scrollTop();
    if (e > 120) {
    	$("#iconLogo").removeClass("brandIconLogo");
    	$("#iconLogo").addClass("brandIconFull");
    	$("#mainNavbar").removeClass("mainNavbarLogo");
    	$("#mainNavbar").addClass("mainNavbarFull");
    } else {
    	$("#iconLogo").removeClass("brandIconFull");
    	$("#iconLogo").addClass("brandIconLogo");
    	$("#mainNavbar").removeClass("mainNavbarFull");
    	$("#mainNavbar").addClass("mainNavbarLogo");
    }
});

function SupportVhVw() {
    this.setPadding = function(name,top,right,bottom,left) {
        jQuery(window).resize( function(event) {
            scalePadding(name,top,right,bottom,left);
        });
        scalePadding(name,top,right,bottom,left);
    }

    this.setMargin = function(name,top,right,bottom,left) {
        jQuery(window).resize( function(event) {
            scaleMargin(name,top,right,bottom,left);
        });
        scaleMargin(name,top,right,bottom,left);
    }
    
    var scaleMargin = function (name,top,right,bottom,left){
        var scrWidth = $(window).width();
        var scrHeight = $(window).height();

        top = (scrHeight * top) / 100;
        right = (scrWidth * right) / 100;        
        bottom = (scrHeight * bottom) / 100;
        left = (scrWidth * left) / 100;     
        var marginTop = jQuery(name).css('margin-top', top + "px");
        var marginRight = jQuery(name).css('margin-right', right + "px");        
        var marginBottom = jQuery(name).css('margin-bottom', bottom + "px");
        var marginLeft = jQuery(name).css('margin-left', left + "px");
    }

    var scalePadding = function (name,top,right,bottom,left){
        var scrWidth = $(window).width();
        var scrHeight = $(window).height();

        top = (scrHeight * top) / 100;
        right = (scrWidth * right) / 100;        
        bottom = (scrHeight * bottom) / 100;
        left = (scrWidth * left) / 100;
        
        var paddingTop = jQuery(name).css('padding-top', top + "px");
        var paddingRight = jQuery(name).css('padding-right', right + "px");        
        var paddingBottom = jQuery(name).css('padding-bottom', bottom + "px");
        var paddingLeft = jQuery(name).css('padding-left', left + "px");
    }
};