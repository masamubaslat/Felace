$(document).ready(function(){
    //$(".loader").css('display','none');
    $(".loader").fadeOut(2000);
    $(".spinner").fadeOut(2000);
   // $(".spinner").css('display','none');
    $("body").css('overflow','auto');
    $('.rest-head-content').fadeIn(2000);
    $('.rest-head-content').removeClass('d-none');
})
$(window).scroll(function(){
    let t=$(window).scrollTop();
    console.log(t);
    if(t>=500){
        $('nav').addClass('bg-white')
        $('.nav-link').addClass('text-dark')
        $('.nav-link i').addClass('text-dark')
        $('nav').css('transition',('1s'));
        $('.navbar-brand-img').attr('src','assets/css/images/logo2.png')
    }
    else if(t>=3600 && t<4000){ 
        console.log('im here')
       // $('.nav-link').removeClass('text-dark')
       // $('.nav-link i').removeClass('text-dark')
       // $('nav').removeClass('bg-white'); 
       // $('.navbar-brand-img').attr('src','assets/css/images/logo.png')
    }
    else{
        $('.nav-link').removeClass('text-dark')
        $('.nav-link i').removeClass('text-dark')
        $('nav').removeClass('bg-white'); 
        $('.navbar-brand-img').attr('src','assets/css/images/logo.png')
    }
   
})
// ***************************************** start main resturant page *****************************************
let m_pic=[
    {id :1 , image : 'assets/css/images/m-1.jpg' , tilte:'Homepage Cafe 1' , type:'cafe'},
    {id :2 , image : 'assets/css/images/m-2.jpg' , tilte:'Homepage Restaurant 1' , type:'resturant'},
    {id :3 , image : 'assets/css/images/m-3.jpg' , tilte:'Homepage Cafe 2', type:'cafe'},
    {id :4 , image : 'assets/css/images/m-4.jpg' , tilte:'Homepage Restaurant 2' , type:'resturant'},
    {id :5 , image : 'assets/css/images/m-5.jpg' , tilte:'Homepage Cafe 3' , type:'cafe'},
    {id :6 , image : 'assets/css/images/m-6.jpg' , tilte:'Menu Cafe' , type:'cafe'},
    {id :7 , image : 'assets/css/images/m-7.jpg' , tilte:'Menu Restaurant 1' , type:'resturant'},
    {id :8 , image : 'assets/css/images/m-8.jpg' , tilte:'Menu Restaurant 2' ,type:'resturant'},
    {id :9 , image : 'assets/css/images/m-9.jpg' , tilte:'Blog' , type:'cafe'},
    {id :10 , image : 'assets/css/images/m-10.jpg' , tilte:'Blog Single' , type:'cafe'},
    {id :11 , image : 'assets/css/images/m-11.jpg' , tilte:'Gallery' , type:'cafe'},
    {id :11 , image : 'assets/css/images/m-12.jpg' , tilte:'Reservation' , type:'cafe'},
]
function home_page(kind , arr , place){
let list =" ";
for(let i=0 ; i<arr.length ; i++ )
{    
    if(kind=='cafe'){
         if(m_pic[i].type=="cafe")
            list+=`
            <div class="mt-5">
                        <img src=${arr[i].image} width="300px" height="250px">
                         <p class="text-center mt-3 text-white">${arr[i].tilte}</p>
                     </div>
            `
    }
    else if(kind=='resturant'){
        if(m_pic[i].type=="resturant")
            list+=`
            <div class="mt-5">
                        <img src=${arr[i].image} width="250px" height="200px">
                         <p class="text-center mt-3 text-white">${arr[i].tilte}</p>
                     </div>
            `
    }
    else if(kind=='show all' ||kind==' '){
        list+=`
            <div class="mt-5">
                        <img src=${arr[i].image} width="300px" height="250px">
                         <p class="text-center mt-3">${arr[i].tilte}</p>
                     </div>
            `
    }
}
document.getElementById(place).innerHTML=list;
}
home_page('show all' ,m_pic , 'data');
let a = document.querySelectorAll('.home-menu')
for(let i=0 ; i< a.length ; i++){
    a[i].addEventListener('click',function(e){
        if(e.target.text=='show all')
        home_page('show all' ,m_pic , 'data');
        else if(e.target.text=='cafe')
        home_page('cafe',m_pic , 'data');
        else
        home_page('resturant',m_pic , 'data');
    })
}  

//****************************************** end main resturant page ***************************************

