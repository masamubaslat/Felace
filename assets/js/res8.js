$(window).scroll(function(){
    let t=$(window).scrollTop();
    console.log($('res7-header').offset());
    if(t>=1){
            $('.res8-nav').addClass('bg-dark');
    $('.res8-nav').removeClass('bg-white');
    $('.res8-nav').css('transition',('1s'));
    }
    else{
        $('.res8-nav').addClass('bg-white');
    $('.res8-nav').removeClass('bg-dark'); 
    }
   
})