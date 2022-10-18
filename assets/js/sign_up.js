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
                    return true;
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
    
    
    
    console.log('masaaaaa')
})