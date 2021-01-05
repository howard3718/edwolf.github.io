$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('nav').addClass('greyNav');
    }
    else
    {
        $('nav').removeClass('greyNav');
    }
})