// ***************************************** start resturant --7-- menue page *****************************************

$(window).scroll(function(){
  let t=$(window).scrollTop();
  if(t>=450){
          $('nav').addClass('bg-darkBlue');
  $('nav').css('transition',('1s'));
  }
  else{
      $('nav').removeClass('bg-darkBlue');
      $('nav').addClass('bg-tansparent');
  }
 
})

let seaFoodMenu=[
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
async function getSeaFood(start,end,place) {
  var response = await fetch("https://forkify-api.herokuapp.com/api/search?q=seafood");
  var data = await response.json();
  seaFood = data.recipes;
  console.log(seaFood)
  DisplayData(start,end,place);
}
function DisplayData(start,end,place) {
  var result = "";
  for (var i = start; i < end; i++) {
    result += `
      <div class="col-md-5 mt-5 mx-auto">
                <div class="res-7-menu-card" >
                  <div class="d-flex justify-content-between align-items-center">
                    <h6>${seaFood[i].title}</h6>
                    <span class="res7-menu-line ms-2 mt-1"></span>
                    <p class='ms-2'>${seaFoodMenu[i].price}</p>
                  </div>
                  <div class='d-flex justify-content-between'> 
                    <p class='res-7-meun-desc'>${seaFoodMenu[i].des}</p>
                    <a href="#" class="btn">Order now</a>
                  </div>
                </div>
      </div>            
      `;
  }
  document.getElementById(place).innerHTML = result;
}
getSeaFood(0,8,'res-men-7-data');
getSeaFood(8,16,'res-men-7-maincourses');
getSeaFood(18,24,'res-men-7-sweet');




//****************************************** end main resturant page ********************************************

//****************************************** start resturant --7-- page ********************************************
