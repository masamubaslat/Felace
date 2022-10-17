var UserName=$('#user_name');                                        
var UserEmail=$('#user_email');
var UserPassword=$('#user_password');
var UserLocation=$('#user_location');
var UserPhone=$('#user_phone');
var UserCat=$('#choice_admin_user');
var userdata;
if(localStorage.getItem('userDataList')==null){
    userdata=[];}
else{
    userdata = JSON.parse(localStorage.getItem('userDataList')) ;
}
displayUsers();
console.log(UserName,UserEmail,UserPassword,UserLocation,UserPhone)
$('#sign_up_button').click(function(){
    addUser();
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
        <td><button class="btn btn-primary">Update</button>
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