function setActive(d,index){
	$("li").removeClass("active");
	$(d).addClass("active");	
}

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

function loaded(){
    if($(window).width() <= 991){        
        if($(window).width() <= 767){        
            $("#mainNavbar").removeClass("mainNavbarFull");
            $("#mainNavbar").removeClass("mainNavbarLogo");
        }
        setMargin(".aboutAda",4,3,4,3);
    }
    $('body').css('width', window.innerWidth+"px");
    
    var max = 0.7*window.innerWidth
    $('#logoImage').css('max-width', max+"px");

    window.addEventListener("resize",function(){
        $('body').css('width', window.innerWidth+"px");
    })
    setMargin(".aboutText",4,3,4,3);
    setMargin(".contactText",4,3,4,3);
    setMargin(".contactTextTitle",1,3,0,3);
    //setPadding(".bodyText",5,0,0,0);
    setSize("#mainBackground",100,100);
}

$(window).load(loaded);


function setPadding (name,top,right,bottom,left) {
    function scalePadding (name,top,right,bottom,left){
        var scrWidth = window.innerWidth;
        var scrHeight = window.innerHeight;

        top = (scrHeight * top) / 100;
        right = (scrWidth * right) / 100;        
        bottom = (scrHeight * bottom) / 100;
        left = (scrWidth * left) / 100;

        if (name.charAt(0) === '.') {
            name = name.substr(1);
            var cols = document.getElementsByClassName(name);
            for(i=0; i<cols.length; i++) {
                cols[i].style.paddingTop = top+"px";  
                cols[i].style.paddingRight = right+"px";  
                cols[i].style.paddingBottom = bottom+"px";  
                cols[i].style.paddingLeft = left+"px";
            }
        }else if (name.charAt(0) === '#') {
            name = name.substr(1);
            document.getElementById(name).style.paddingTop = top+"px";  
            document.getElementById(name).style.paddingRight = right+"px";  
            document.getElementById(name).style.paddingBottom = bottom+"px";  
            document.getElementById(name).style.paddingLeft = left+"px";
        }
    }

    jQuery(window).resize( function(event) {
        scalePadding(name,top,right,bottom,left);
    });
    scalePadding(name,top,right,bottom,left);
}

function setMargin(name,top,right,bottom,left) {
    function scaleMargin (name,top,right,bottom,left){
        var scrWidth = window.innerWidth;
        var scrHeight = window.innerHeight;

        top = (scrHeight * top) / 100;
        right = (scrWidth * right) / 100;        
        bottom = (scrHeight * bottom) / 100;
        left = (scrWidth * left) / 100;

        if (name.charAt(0) == '.') {
            name = name.substr(1);
            var cols = document.getElementsByClassName(name);
            for(i=0; i< cols.length; i++) {
                cols[i].style.marginTop = top+"px";  
                cols[i].style.marginRight = right+"px";  
                cols[i].style.marginBottom = bottom+"px";  
                cols[i].style.marginLeft = left+"px";
            }
        }else if (name.charAt(0) == '#') {
            name = name.substr(1);
            document.getElementById(name).style.marginTop = top+"px";  
            document.getElementById(name).style.marginRight = right+"px";  
            document.getElementById(name).style.marginBottom = bottom+"px";  
            document.getElementById(name).style.marginLeft = left+"px";
        }
    }                               

    jQuery(window).resize( function(event) {
        scaleMargin(name,top,right,bottom,left);
    });
    scaleMargin(name,top,right,bottom,left);
}

function setSize(name,height,width) {
    function scaleSize (name,height,width){
        var scrWidth = window.innerWidth;
        var scrHeight = window.innerHeight;

        height = (scrHeight * height) / 100;
        width = (scrWidth * width) / 100;

        if (name.charAt(0) == '.') {
            name = name.substr(1);
            var cols = document.getElementsByClassName(name);
            for(i=0; i< cols.length; i++) {
                cols[i].style.height = height+"px";
                cols[i].style.width = width+"px"
            }
        }else if (name.charAt(0) == '#') {
            name = name.substr(1);
            document.getElementById(name).style.height = height+"px";
            document.getElementById(name).style.width = width+"px"
        }
    }                               

    jQuery(window).resize( function(event) {
        scaleSize(name,height,width);
    });
    scaleSize(name,height,width);
}


document.addEventListener('scroll', function (event) {
    var e =  (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;;
    if (e > 200) {
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

(function ($) {

    'use strict';

    // Toggle classes in body for syncing sliding animation with other elements
    $('#bs-example-navbar-collapse-2')
        .on('show.bs.collapse', function (e) {
            $('body').addClass('menu-slider');
        })
        .on('shown.bs.collapse', function (e) {
            $('body').addClass('in');
        })
        .on('hide.bs.collapse', function (e) {
            $('body').removeClass('menu-slider');
        })
        .on('hidden.bs.collapse', function (e) {
            $('body').removeClass('in');
        });

})(jQuery);