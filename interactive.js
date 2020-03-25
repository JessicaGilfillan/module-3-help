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
/* add methods using the prototype property of constructor function */  

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

bootifulButtonDetails.addEventListener("click", function(){
  bootiful.details();
});
bootifulButtonAvailability.addEventListener("click", function()bootiful.availability();
    });






    ////////////////////////CONDO//////////////////////////
    let trendy = new Condo('Trendy Condo','image2.jpg', 83.59,7, "9415 Florida Street E", "Yes", ["Wi-Fi", "excercise-room"],32);





    var trendyButtonDetails = document.createElement("button");
    var trendyButtonAvailability = document.createElement("button");
    trendyButtonDetails.innerHTML = "Details";
    articleHTML1.appendChild(trendyButtonDetails);
    trendyButtonAvailability.innerHTML = "Check Availability";
    articleHTML1.appendChild(trendyButtonAvailability);

    trendyButtonDetails.addEventListener("click", function(){
        trendy.details();
    });
    trendyButtonAvailability.addEventListener("click", function(){
        trendy.availability();
    });