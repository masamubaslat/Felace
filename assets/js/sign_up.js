$(window).scroll(function(){
    let t=$(window).scrollTop();
    console.log(t);
if(t>=530){
    $('nav').addClass('bg-white')
    $('.nav-link').addClass('text-dark')
    $('nav').css('transition',('1s'));
    $('.navbar-brand-img').attr('src','assets/css/images/logo2.png')
    }

else{
    $('.nav-link').removeClass('text-dark')
    $('nav').removeClass('bg-white'); 
    $('.navbar-brand-img').attr('src','assets/css/images/logo.png')
    }
   
})

/**/ 
var UserName=$('#user_name');                                        
var UserEmail=$('#user_email');
var UserPassword=$('#user_password');
var UserLocation=$('#user_location');
var UserPhone=$('#user_phone');
var UserCat=$('#choice_admin_user');
var userdata;
var currentIndex;
var sign_up_but=document.getElementById('sign_up_button')
if(localStorage.getItem('userDataList')==null){
    userdata=[];}
else{
    userdata = JSON.parse(localStorage.getItem('userDataList')) ;
}
displayUsers();
console.log(UserName,UserEmail,UserPassword,UserLocation,UserPhone)
$('#sign_up_button').click(function(){
    if(sign_up_but.innerHTML=='sign up'){
          addUser();
          swal({
            icon: "success",
            text: "Welcome u!",
          });
    }
    else{
        updateUser();
    }
    
    displayUsers();
    clear();
});

function addUser(){
    user={
        name:UserName.val(),
        email:UserEmail.val(),
        pass:UserPassword.val(),
        location:UserLocation.val(),
        phone:UserPhone.val(),
        category:UserCat.val(),
    }
    userdata.push(user);
    localStorage.setItem('userDataList',JSON.stringify(userdata));
}
function displayUsers(){
    var result="";
    for(var i=0; i<userdata.length;i++){
        result+=`
        <tr>
        <td>${i}</td>
        <td>${userdata[i].name}</td>
        <td>${userdata[i].email}</td>
        <td>${userdata[i].pass}</td>
        <td>${userdata[i].location}</td>
        <td>${userdata[i].phone}</td>
        <td>${userdata[i].category}</td>
        <td><button class="btn subpages_table-btn" onclick="get_user_data(${i})">Update</button>
        <button class="btn subpages_table-btn" onclick="deleteUser(${i})">Delete</button>
        </td>
      </tr>
        `
    }
    $('#userdata').html(result)
}
function clear(){
    UserName.val('');
    UserEmail.val('');
    UserPassword.val('');
    UserLocation.val('');
    UserPhone.val('');
    UserName.removeClass('is-valid');
}
function deleteUser(index){
    userdata.splice(index,1);
    localStorage.setItem('userDataList',JSON.stringify(userdata));
    displayUsers();
}
$('#delete_all_button').click(function(){
    localStorage.removeItem('userDataList');
    userdata=[];
    $('#userdata').html('');
});

function search(e){
    var result="";
    for(var i=0; i<userdata.length;i++){
        if(userdata[i].name.toLowerCase().includes(e.value.toLowerCase()))
        window.scrollTo(500)
        result+=`
        <tr>
        <td>${i}</td>
        <td>${userdata[i].name}</td>
        <td>${userdata[i].email}</td>
        <td>${userdata[i].pass}</td>
        <td>${userdata[i].location}</td>
        <td>${userdata[i].phone}</td>
        <td>${userdata[i].category}</td>
        <td><button class="btn subpages_table-btn" onclick="get_user_data(${i})">Update</button>
        <button class="btn subpages_table-btn" onclick="deleteUser(${i})">Delete</button>
        </td>
      </tr>
        `
    }
    $('#userdata').html(result)
    
}
function get_user_data(index){
    var user= userdata[index]
    UserName.val(user.name);
    UserPassword.val(user.email);
    UserEmail.val(user.pass);
    UserLocation.val(user.location);
    UserPhone.val(user.phone);
    UserCat.val(user.category); 
    currentIndex=index;
    console.log(index);
    sign_up_but.innerHTML='Update'
}
function updateUser(){
    user_data_updated={
        name:UserName.val(),
        email:UserEmail.val(),
        pass:UserPassword.val(),
        location:UserLocation.val(),
        phone:UserPhone.val(),
        category:UserCat.val(),
    }
    userdata[currentIndex].name=user_data_updated.name;
    userdata[currentIndex].email=user_data_updated.email;
    userdata[currentIndex].pass=user_data_updated.pass;
    userdata[currentIndex].location=user_data_updated.location;
    userdata[currentIndex].phone=user_data_updated.phone;
    userdata[currentIndex].category=user_data_updated.category;
}

UserName.keyup(function regixname(){
    var namePattern= /^[A-Z][a-z]{2,8}$/
    if(namePattern.test(UserName.val())){
        UserName.removeClass('is-invalid')
        UserName.addClass('is-valid');
        return true;
    }
    else{
        UserName.addClass('is-invalid')
    }
});
UserEmail.keyup(function (){
    var namePattern= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(namePattern.test(UserEmail.val())){
        UserEmail.removeClass('is-invalid')
        UserEmail.addClass('is-valid');
        return true;
    }
    else{
        UserEmail.addClass('is-invalid')
    }
})
/*
UserPassword.keyup(function(){
    var namePattern= /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
    if(namePattern.test(UserEmail.val())){
        UserPassword.removeClass('is-invalid')
        UserPassword.addClass('is-valid');
    }
    else{
        UserPassword.addClass('is-invalid')
    }
})
*/

//------------------------------------------------------
var UserLoginName=$('#userLoginName');
var UserLoginEmail=$('#userLoginEmail');
var UserLoginPassword=$('#userLoginPassword')
var LoginButton=$('#loginButton');


LoginButton.click(function(){
    for(var i=0 ; i<userdata.length ; i++){
        if(UserLoginName.val().toLowerCase() ==userdata[i].name.toLowerCase()){
            UserLoginName.removeClass('is-invalid');
            UserLoginName.addClass('is-valid');
            if(UserLoginEmail.val().toLowerCase()==userdata[i].email.toLowerCase()){
                UserLoginEmail.removeClass('is-invalid');
                UserLoginEmail.addClass('is-valid')
                if(UserLoginPassword.val()==userdata[i].pass){
                    UserLoginPassword.removeClass('is-invalid');
                    UserLoginPassword.addClass('is-valid');
                    LoginButton.attr('href','index.html');
                   // let index = userdata.indexOf(userdata[i])
                  //  currentLogInUser=userdata[index];
                    //console.log(currentLogInUser);
                   //  return currentIndex;  
                    //currentLogInUser=
                    //$('.Login_navitem').html('LogOut');
                    //return true;
                }
                else{
                    UserLoginPassword.addClass('is-invalid')
                    
                }
            }   
            else{
                UserLoginEmail.addClass('is-invalid')
            }    
        }
        else{
            UserLoginName.addClass('is-invalid')
            swal("Hello world!", {
                icon:"error",
                text:"U don't have an account, if u want one click sign up button "
              });
        }
    }
})

//------------------------------- Reservation
var ReservationTime=$('#reservation_user_date');
var ReservationDate=$('#reservation_user_time');
var ReservationBranch=$('#reservation_res_branch');
var Reservationcount=$('#reservation_user_number');
var ReservationName=$('#reservation_user_name');                                        
var ReservationEmail=$('#reservation_user_email');
var ReservationPhone=$('#reservation_user_phone');
var ReservationMessage=$('#reservation_user_message');

var Reservations;
if(localStorage.getItem('userReservationList')==null){
    Reservations=[];}
else{
    Reservations = JSON.parse(localStorage.getItem('userReservationList')) ;
}
displayReservations();
$('#makeAReservation').click(function(){
    addReservation();
    displayReservations();
    clearReservation()
    console.log(ReservationTime.val())
    console.log(Reservations)
    swal({
        icon: "success",
        text: "Your request has been added successfully",
      });
})
function addReservation(){
    res={
        time:ReservationTime.val(),
        date:ReservationDate.val(),
        branch:ReservationBranch.val(),
        count:Reservationcount.val(),
        name:ReservationName.val(),
        email:ReservationEmail.val(),
        phone:ReservationPhone.val(),
        msg:ReservationMessage.val(),
        title:'',
        img:' ',
    }
    Reservations.push(res);
    localStorage.setItem('userReservationList',JSON.stringify(Reservations));
    
}
function displayReservations(){
    var result="";
    for(var i=0; i<Reservations.length;i++){
        result+=`
        <tr>
        <td>${Reservations[i].name}</td>
        <td>${Reservations[i].branch}</td>
        <td>${Reservations[i].time}</td>
        <td>${Reservations[i].date}</td>
        <td>${Reservations[i].count}</td>
        <td>${Reservations[i].email}</td>
        <td>${Reservations[i].phone}</td>
        <td>${Reservations[i].msg}</td>
        <td><button class="btn subpages_table-btn" onclick="get_user_data(${i})">Update</button>
        <button class="btn subpages_table-btn" onclick="deleteReservation(${i})">Delete</button>
        </td>
      </tr>
        `
    }
    $('#Reservation').html(result)
}
function clearReservation(){
ReservationTime.val('')
ReservationDate.val('')
ReservationBranch.val('')
Reservationcount.val('')
ReservationName.val('')                                       
ReservationEmail.val('')
ReservationPhone.val('')
ReservationMessage.val('')
}

function deleteReservation(index){
    Reservations.splice(index,1);
    localStorage.setItem('userReservationList',JSON.stringify(Reservations));
    displayReservations();
}

//--------------------------------- main menu 
let FoodMenu=[
    {id:0,price:'90$',des:'Toasted French bread topped with romano, cheddar'},
    {id:1,price:'76$',des:'Spreadable cream cheese, crumbled blue cheese'},
    {id:2,price:'54$',des:'Jumbo shrimp sauteed in white wine, butter and garlic'},
    {id:3,price:'98$',des:'Cream cheese, softened butter, brown sugar'},
    {id:4,price:'23$',des:'Breaded calamari, lightly fried in canola oil'},
    {id:5,price:'47$',des:'Cherry-size fresh mozzarella cheese balls'},
    {id:6,price:'32$',des:'Ground cumin, avocados, peeled and cubed'},
    {id:7,price:'44$',des:'Jumbo shrimp sauteed in white wine, butter and garlic'},
    {id:8,price:'29$',des:'Wild mushrooms, truffle potatoes, braised leeks carrots'},
    {id:9,price:'17$',des:'Classic Greek salad, barrel aged Feta cheese, pitta bread'},
    {id:10,price:'32$',des:'Smoked duck breast, pistachio, smoked pancetta'},
    {id:11,price:'47$',des:'Grilled lamb cutlets, pomegranate glaze, butternut squash'},
    {id:12,price:'55$',des:'Saffron, celeriac puree, black pudding, Parma ham'},
    {id:13,price:'88$',des:'Saffron and mussel’s broth, new potatoes, edamame beans'},
    {id:14,price:'71$',des:'Red onion marmelade, garlic Foccacia bread, grilled figs'},
    {id:15,price:'76.98$',des:'Creamy saffron, sauce Vierge'},
    {id:16,price:'21.87$',des:'Mediterranean olives casserole, celeriac puree, mushrooms'},
    {id:17,price:'58.93$',des:'Horseradish creme fraiche, beetroot mousse, citrus oil'},
    {id:18,price:'21$',des:'Smoked duck breast, pistachio, smoked pancetta'},
    {id:19,price:'66$',des:'Saffron and mussel’s broth, new potatoes, edamame beans'},
    {id:20,price:'48$',des:'Creole cream cheese, chocolate filigree and warm carame'},
    {id:21,price:'98.3$',des:'Dark chocolate mousse, candied pecan crunch and caramel'},
    {id:22,price:'11.99$',des:'Bananas with Caribbean rum served with vanilla ice cream'},
    {id:23,price:'89.95$',des:'Bananas with Caribbean rum served with vanilla ice cream'},
    {id:24,price:'76$',des:'Warm buttery caramel, chocolate syrup and ice cream'},
    {id:25,price:'26.76$',des:'Southern Pecan Streusel, creole cream and cheese ice cream'},
    {id:26,price:'90$',des:''},
    {id:27,price:'34.87$',desc:''}
]
let hotFood=[]
let Dishes=[];
let Drinks=[];
let currentOrder;
async function getSeaFood(place,meal,arr) {
    var response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${meal}`);
    var data = await response.json();
    arr = data.recipes;
    DisplayData(place,arr);
  }
function DisplayData(place,arr) {
    var result=``;
    for (var i = 0; i < 8; i++) {
      currentOrder=arr[i];
      result +=`
      <div class="col-md-5 mt-5 m-auto">
      <div class="d-flex justify-content-around align-items-center" >
        <a href="${arr[i].image_url}" class="main_meun_recipi_name text-start">${arr[i].title}</a>
        <div class="menu-item-dot"></div>
        <p class="main_meun_recipi_price">${FoodMenu[i].price}</p>
      </div>
      <div class="d-flex justify-content-between">
        <p class="main_meun_recipi_desc">${FoodMenu[i].des}</p>
        <a href="Reservation.html" class="btn orderbtn">Order now</a>
      </div>
    </div>
        `;
    }
    document.getElementById(place).innerHTML=result;
}
  getSeaFood('main_menu_s1','seafood','hotFood')
  getSeaFood('main_menu_s3','cake','Dishes')
  getSeaFood('main_menu_s5','ice cream','Drinks')

  /*
  swal({
  icon: "success",
});
  */
function alertsuccess(){
    alert('ok')
}

