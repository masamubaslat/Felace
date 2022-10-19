var UserName=$('#user_name');                                        
var UserEmail=$('#user_email');
var UserPassword=$('#user_password');
var UserLocation=$('#user_location');
var UserPhone=$('#user_phone');
var UserCat=$('#choice_admin_user');
var userdata;
var currentIndex;
let currentLogInUser;
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
        <td><button class="btn btn-primary" onclick="get_user_data(${i})">Update</button>
        <button class="btn btn-danger" onclick="deleteUser(${i})">Delete</button>
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
        <td><button class="btn btn-primary" onclick="get_user_data(${i})">Update</button>
        <button class="btn btn-danger" onclick="deleteUser(${i})">Delete</button>
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

UserName.keyup(function(){
    var namePattern= /^[A-Z][a-z]{2,8}$/
    if(namePattern.test(UserName.val())){
        sign_up_but.removeAttribute("disabled");
        UserName.removeClass('is-invalid')
        UserName.addClass('is-valid');
    }
    else{
        sign_up_but.setAttribute("disabled","disabled");
        UserName.addClass('is-invalid')
    }
    
});


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

var Reservations=[]
$('#makeAReservation').click(function(){
    addReservation();
    displayReservations();
    clear();
    console.log(ReservationTime.val())
    console.log(Reservations)
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
    }
    Reservations.push(res);
    //localStorage.setItem('userDataList',JSON.stringify(userdata));
}
function displayReservations(){
    var result="";
    for(var i=0; i<Reservations.length;i++){
        result+=`
        <tr>
        <td>${i}</td>
        <td>${Reservations[i].time}</td>
        <td>${Reservations[i].date}</td>
        <td>${Reservations[i].branch}</td>
        <td>${Reservations[i].count}</td>
        <td>${Reservations[i].name}</td>
        <td>${Reservations[i].email}</td>
        <td>${Reservations[i].phone}</td>
        <td>${Reservations[i].msg}</td>
        <td><button class="btn btn-primary" onclick="get_user_data(${i})">Update</button>
        <button class="btn btn-danger" onclick="deleteReservation(${i})">Delete</button>
        </td>
      </tr>
        `
    }
    $('#Reservation').html(result)
}
function clear(){
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
    //localStorage.setItem('userDataList',JSON.stringify(userdata));
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
  let seaFood = [];
async function getSeaFood(place,meal) {
    var response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${meal}`);
    var data = await response.json();
    seaFood = data.recipes;
    console.log(seaFood)
    DisplayData(place);
  }
  
  function DisplayData(place) {
    var result = "";
    for (var i = 0; i < 8; i++) {
      result += `
      <div class="col-md-5 mt-5 m-auto">
      <div class="d-flex justify-content-around align-items-center" >
        <a href="${seaFood[i].image_url}" class="main_meun_recipi_name text-start">${seaFood[i].title}</a>
        <div class="menu-item-dot"></div>
        <p class="main_meun_recipi_price">${FoodMenu[i].price}</p>
      </div>
      <div class="d-flex justify-content-between">
        <p class="main_meun_recipi_desc">${FoodMenu[i].des}</p>
        <button class="btn">Order now</button>
      </div>
    </div>

        `;
    }
  
    document.getElementById(place).innerHTML = result;
  }
  getSeaFood('main_menu_s1','seafood')
  getSeaFood('main_menu_s3','cake')
  getSeaFood('main_menu_s5','ice cream')
  