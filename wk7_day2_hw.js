// Question #1
// Use the array of shop items provided and present the the information in the following format
var shopItems=[{
    id:1,
    name:"Air Max 97",
    price:130.00,
    desc:"The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. ",
    category:"shoes"
},{
    id:2,
    name:"Adidas NMD R1",
    price:128,
    desc:"New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.",
    category:"shoes"
},{
    id:3,
    name:"Gucci Oversize T-shirt with Interlocking G",
    price:580,
    desc:"The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.",
    category:"shirts"
},{
    id:4,
    name:"Nike Sportswear Club",
    price:18.97,
    desc:"The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.",
    category:"shirts"
},{
    id:5,
    name:"Spanx Flare Jeans, Vintage Indigo",
    price:148,
    desc:"These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.",
    category:"pants"
},{
    id:6,
    name:"Bonobos Premium Stretch Jeans",
    price:69,
    desc:"Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.",
    category:"pants"
}]
     

// Question #2
// Write a function that parses through the below object and displays all of their favorite food dishes as shown:

// pizza contains:
// Deep Dish
// South Side Thin Crust
// tacos contains:
// Anything not from Taco bell
// burgers contains:
// Portillos Burgers
// ice_cream contains:
// Chocolate
// Vanilla
// Oreo
// shakes contains:
// oberwise contains:
// Chocolate
// dunkin contains:
// Vanilla
// culvers contains:
// All of them
// mcDonalds contains:
// Sham-rock-shake
// cupids_candies contains:
// Chocolate Malt
// Note: The solution should work on any object with values of strings, numbers, objects, and arrays not just this specific object

// Hint recursion and checking types
favFood(foods)
    for (let shakes in foods){
        const value = food[shakes];
        const shakes = shakes

        if(person(shakes)){
            console.log(shakes);
            value.every(foods => {
            console.log(foods);
        })
    }
}

var hwPerson = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

favFood(person);

// Question #5
// Complete 3 Codewars problems using JavaScript, start with ones you have already solved in python. Paste a link here to the 3 questions you completed

// 1:JavaScript:
function find(a, e) {
    return a.includes(e) ? a.indexOf(e) : "Not found";
  }

// 2:JavaScript:
function greet(name) {
    if (name === "Johnny"){
      return "Hello, my love!";
    }
    return"Hello," + name + "!";
  }
  
  console.log(greet("Johnny"));
  console.log(greet("Jenny"));
  console.log(greet(" Jim"));

// 3:JavaScript:
function arrayplusarray(arr1, arr2) {
  return arr1.concat(arr2).reduce((sum, num) => sum + num, 0);
}
var arr1 = [1,2,3];
var arr2 = [4,5,6];
console.log(array_plus_array(arr1, arr2));