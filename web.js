$(document).ready(function(){
	$(window).scroll(function(){

		if(this.scrollY > 20)
		{
          $('.navigation').addClass("scroll");
		}else
		{
           $('.navigation').removeClass("scroll");
		}

	});
	$('.btn').click(function(){
        $('.navigation .menu').toggleClass("active");
        $('.btn i').toggleClass("active");
    });
});

