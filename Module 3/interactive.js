// function Stay (name,img, price, rating, location, availability, features){
//     this.name = name;
//     this.img = img;
//     this.price = price;
//     this.rating = rating;
//     this.location = location;
//     this.availability = availability;
//     this.features = features;
// }


// function Condo(name,img, price, rating, location, availability, features,floor){
// 	Stay.call(this,name,img, price, rating, location, availability, features);
// 	this.floor = floor;
// }


// Condo.prototype = Object.create(Stay.prototype);

// Object.defineProperty(Condo.prototype, 'constructor',{
// 	value: 'Condo',
// 	enumerable: false,
//     writable: true});
    
//     function House(name,img, price, rating, location, availability, features,landSize){
//         Stay.call(this,name,img, price, rating, location, availability, features);
//         this.landSize = landSize;
//     }
    
//     House.prototype = Object.create(Stay.prototype);
    
//     Object.defineProperty(House.prototype, 'constructor',{
//         value: 'House',
//         enumerable: false,
//         writable: true});
        
    
//         Stay.prototype.details = function (){
//             let locationHTML = document.createElement('address');
//             let featuresHTML = document.createElement('p');
//             let ratingHTML = document.createElement('p');
        
//             locationHTML.textContent = this.location;
//             featuresHTML.textContent = "This includes " + this.features;
//             ratingHTML.textContent = "Rating: " + this.rating + "/10";
        
//             articleHTML.appendChild(locationHTML);
//             articleHTML.appendChild(featuresHTML);
//             articleHTML.appendChild(ratingHTML);
        
//         }
        
//         Stay.prototype.availability = function(){
        
//             let availabilityHTML = document.createElement("p");
        
//             availabilityHTML.textContent = "Available: " + this.availability;
        
//             articleHTML.appendChild(availabilityHTML);
        
//         }
        
// ///////////////////////////HOUSE//////////////////////
//     let bootiful = new House('Bootiful Mansion','image1.jpg', 149.99, 9, "843 Star Ave NE", "No", ["pool", "Wi-Fi", "foods", "AC"],800);

//     let sectionHTML = document.querySelector("section");
//     let articleHTML = document.createElement('article');
//     let nameHTML = document.createElement('h2');
//     let imgHTML = document.createElement('img');
//     let priceHTML = document.createElement('p');
//     let landSizeHTML = document.createElement('p');

//     nameHTML.textContent =  bootiful.name;
//     imgHTML.setAttribute('src', "assets/" + bootiful.img);
//     imgHTML.setAttribute('alt', bootiful.img);
//     priceHTML.textContent = "Price: $" + bootiful.price;
//     landSizeHTML.textContent = "Land Size: " + bootiful.landSize + " sf";

//     articleHTML.appendChild(nameHTML);
//     articleHTML.appendChild(imgHTML);
//     articleHTML.appendChild(priceHTML);
//     articleHTML.appendChild(landSizeHTML);
//     sectionHTML.appendChild(articleHTML);

//     var bootifulButtonDetails = document.createElement("button");
//     var bootifulButtonAvailability = document.createElement("button");
//     bootifulButtonDetails.innerHTML = "Details";
//     articleHTML.appendChild(bootifulButtonDetails);
//     bootifulButtonAvailability.innerHTML = "Check Availability";
//     articleHTML.appendChild(bootifulButtonAvailability);

//     bootifulButtonDetails.addEventListener("click", function(){
//         bootiful.details();
//     });
//     bootifulButtonAvailability.addEventListener("click", function(){
//         bootiful.availability();
//     });

//     ////////////////////////CONDO//////////////////////////
//     let trendy = new Condo('Trendy Condo','image2.jpg', 83.59,7, "9415 Florida Street E", "Yes", ["Wi-Fi", "excercise-room"],32);

//     let sectionHTML1 = document.querySelector("section");
//     let articleHTML1 = document.createElement('article');
//     let nameHTML1 = document.createElement('h2');
//     let imgHTML1 = document.createElement('img');
//     let priceHTML1 = document.createElement('p');
//     let floorHTML = document.createElement('p');

//     nameHTML1.textContent =  trendy.name;
//     imgHTML1.setAttribute('src', "assets/" + trendy.img);
//     imgHTML1.setAttribute('alt', trendy.img);
//     priceHTML1.textContent = "Price: $" + trendy.price;
//     floorHTML1.textContent = "Total Floor: " + trendy.floor;

//     articleHTML1.appendChild(nameHTML1);
//     articleHTML1.appendChild(imgHTML1);
//     articleHTML1.appendChild(priceHTML1);
//     articleHTML1.appendChild(landSizeHTML1);
//     sectionHTML1.appendChild(articleHTML1);

//     var trendyButtonDetails = document.createElement("button");
//     var trendyButtonAvailability = document.createElement("button");
//     trendyButtonDetails.innerHTML = "Details";
//     articleHTML1.appendChild(trendyButtonDetails);
//     trendyButtonAvailability.innerHTML = "Check Availability";
//     articleHTML1.appendChild(trendyButtonAvailability);

//     trendyButtonDetails.addEventListener("click", function(){
//         trendy.details();
//     });
//     trendyButtonAvailability.addEventListener("click", function(){
//         trendy.availability();
//     });

/* constructor function to create main object template */ 


function Stay (name,img, price, rating, location, availability, features){
    this.name = name;
    this.img = img;
    this.price = price;
    this.rating = rating;
    this.location = location;
    this.availability = availability;
    this.features = features;
}

Stay.prototype.basicInfo = function (){
    
    let sectionHTML = document.querySelector("section");
    let articleHTML = document.createElement('article');
    let nameHTML = document.createElement('h2');
    let imgHTML = document.createElement('img');
    let priceHTML = document.createElement('p');


    nameHTML.textContent =  this.name;
    imgHTML.setAttribute('src', "assets/" + this.img);
    imgHTML.setAttribute('alt', this.img);
    priceHTML.textContent = "Price: $" + this.price;


    articleHTML.appendChild(nameHTML);
    articleHTML.appendChild(imgHTML);
    articleHTML.appendChild(priceHTML);
    sectionHTML.appendChild(articleHTML);
}

House.prototype = Object.create(Stay.prototype);
    
    Object.defineProperty(House.prototype, 'constructor',{
        value: 'House',
        enumerable: false,
        writable: true});


Condo.prototype = Object.create(Stay.prototype);

    Object.defineProperty(Condo.prototype, 'constructor',{
        value: 'Condo',
        enumerable: false,
        writable: true});
        
House.prototype.basicInfoHouse = function(){

    let landSizeHTML = document.createElement('p');

    landSizeHTML.textContent = "Land Size: " + this.landSize + " sf";
    articleHTML.appendChild(landSizeHTML);

    var buttonDetails = document.createElement("button");
    var buttonAvailability = document.createElement("button");
    buttonDetails.innerHTML = "Details";
    articleHTML.appendChild(buttonDetails);
    buttonAvailability.innerHTML = "Check Availability";
    articleHTML.appendChild(buttonAvailability);
    buttonDetails.addEventListener("click", function(){
        this.details();
    });
    buttonAvailability.addEventListener("click", function(){
        this.availability();
    });
}

    Condo.prototype.basicInfoCondo = function(){
    
    let floorHTML = document.createElement('p');

    floorHTML.textContent = "Total Floor: " + this.floor;
    articleHTML.appendChild(floorHTML);

    var buttonDetails = document.createElement("button");
    var buttonAvailability = document.createElement("button");
    buttonDetails.innerHTML = "Details";
    articleHTML.appendChild(buttonDetails);
    buttonAvailability.innerHTML = "Check Availability";
    articleHTML.appendChild(buttonAvailability);
    buttonDetails.addEventListener("click", function(){
        this.details();
    });
    buttonAvailability.addEventListener("click", function(){
        this.availability();
    });
}

 Stay.prototype.details = function (){
   let locationHTML = document.createElement('address');
   let featuresHTML = document.createElement('p');
   let ratingHTML = document.createElement('p');
   locationHTML.textContent = this.location;
   featuresHTML.textContent = "This includes " + this.features;
   ratingHTML.textContent = "Rating: " + this.rating + "/10";
        
   articleHTML.appendChild(locationHTML);
   articleHTML.appendChild(featuresHTML);
   articleHTML.appendChild(ratingHTML);
 }

  Stay.prototype.availability = function(){
    let availabilityHTML = document.createElement("p");
    availabilityHTML.textContent = "Available: " + this.availability;
    articleHTML.appendChild(availabilityHTML);
  }

    ///////////////////////////HOUSE//////////////////////
    let bootiful = new House('Bootiful Mansion','image1.jpg', 149.99, 9, "843 Star Ave NE", "No", ["pool", "Wi-Fi", "foods", "AC"],800);

    bootiful.basicInfo();
    bootiful.basicInfoHouse();

    ////////////////////////CONDO//////////////////////////
    let trendy = new Condo('Trendy Condo','image2.jpg', 83.59,7, "9415 Florida Street E", "Yes", ["Wi-Fi", "excercise-room"],32);

    trendy.basicInfo();
    trendy.basicInfoCondo();
    
















// bootifulButtonDetails.addEventListener("click", function(){
//   bootiful.details();
// });
// bootifulButtonAvailability.addEventListener("click", function(){bootiful.availability();
//     });










    // var trendyButtonDetails = document.createElement("button");
    // var trendyButtonAvailability = document.createElement("button");
    // trendyButtonDetails.innerHTML = "Details";
    // articleHTML1.appendChild(trendyButtonDetails);
    // trendyButtonAvailability.innerHTML = "Check Availability";
    // articleHTML1.appendChild(trendyButtonAvailability);

    // trendyButtonDetails.addEventListener("click", function(){
    //     trendy.details();
    // });
    // trendyButtonAvailability.addEventListener("click", function(){
    //     trendy.availability();
    // });