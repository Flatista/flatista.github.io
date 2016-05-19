function setActive(d,index){
	$("li").removeClass("active");
	$(d).addClass("active");	
    if(index == 0){
    	$("#brandIcon").attr("src","img/byronTrans.png")
    				   .removeClass("brandIconFav")
    				   .addClass("brandIconLogo");
    }else{
    	$("#brandIcon").attr("src","img/favicon.png")
    				   .removeClass("brandIconLogo")
    				   .addClass("brandIconFav");
    }
}

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

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