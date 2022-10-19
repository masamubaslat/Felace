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
function home_pages(kind , arr , place){
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
home_pages('show all' ,m_pic , 'data');
let a = document.querySelectorAll('.home-menu')
for(let i=0 ; i< a.length ; i++){
    a[i].addEventListener('click',function(e){
        if(e.target.text=='show all')
        home_pages('show all' ,m_pic , 'data');
        else if(e.target.text=='cafe')
        home_pages('cafe',m_pic , 'data');
        else
        home_pages('resturant',m_pic , 'data');
    })
}  

//****************************************** end main resturant page ********************************************


//****************************************** start resturant --7-- page ********************************************


