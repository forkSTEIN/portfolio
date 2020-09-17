$(document).ready(function()
{
	//Toggle menu when it's clicked
	$('.div-menu-toggler').on('click', function()
	{
		$(this).toggleClass('open');
		$('.nav-top-nav').toggleClass('open');
	});

	// Toggle menu when links are clicked
	$('.nav-top-nav .a-nav-link').on('click', function()
	{
		$('.div-menu-toggler').removeClass('open');
		$('.nav-top-nav').removeClass('open');
	});

	// Smooth transition when menu is closing
	$('nav a[href*="#"]').on('click', function()
	{
        $('html, body').animate(keyframes={
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, options=2000);
    });

	// Smooth transition when up button it's pressed
	$('#up').on('click', function ()
	{
		$('html, body').animate(keyframes={
			scrollTop: 0
		}, options=2000)
    });

    if ((screen.width>=320) && (screen.width<=375))
    {
    	$("link[rel=stylesheet]:not(:first)").attr({href: "./assets/css/320x800.css"});
    }

    if ((screen.width>=375) && (screen.width<=425))
    {
    	$("link[rel=stylesheet]:not(:first)").attr({href: "./assets/css/375x800.css"});
    }

    if ((screen.width>=425) && (screen.width<=768))
    {
    	$("link[rel=stylesheet]:not(:first)").attr({href: "./assets/css/425x800.css"});
    }

    if ((screen.width>=768) && (screen.width<=1024))
    {
    	$("link[rel=stylesheet]:not(:first)").attr({href: "./assets/css/768x800.css"});
    }

    if ((screen.width>=1024) && (screen.width<=1440))
    {
    	$("link[rel=stylesheet]:not(:first)").attr({href: "./assets/css/1024x800.css"});
    }

    if ((screen.width>=1440) && (screen.width<=1920))
    {
    	$("link[rel=stylesheet]:not(:first)").attr({href: "./assets/css/1440x800.css"});
    }

    if ((screen.width>=1920) && (screen.width<=3840))
    {
    	$("link[rel=stylesheet]:not(:first)").attr({href: "./assets/css/1920x1080.css"});
    }
    
    AOS.init({
    	easing: 'ease',
    	duration: 1800,
    	once: true
    });
});