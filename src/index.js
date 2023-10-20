// Code here

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM is operational");
    
const baseUrl = "http://localhost:3000";
  console.log("base URL is set at:", baseUrl);
        
const fetchBeer = (beerId) => {
   console.log("Fetch beer ID:", beerId);
        
    fetch(`${baseUrl}/beers/${beerId}`)
      .then((response) => response.json())
      .then((beerInfo) => {
        console.log("Beer information receives as:", beerInfo);
        
// The const of the beer details that will show in homepage

const beerName = document.getElementById("beer-name");

const beerImage = document.getElementById("beer-image");

const beerDescription = document.getElementById("beer-description");

const reviewList = document.getElementById("review-list");
        

  beerName.textContent = beerInfo.name;
  beerDescription.textContent = beerInfo.description;
  beerImage.src = beerInfo.image_url;
        
  // Reviews
  reviewList.innerHTML = "";

  beerInfo.reviews.forEach((review) => {

    console.log("Review for Oh So Flattening:", review); 
  
                  
  const commentOn = document.createElement("li");
  commentOn.textContent = review;
  reviewList.appendChild(commentOn);
      });
    });
  };
        
const fetchBeerMenu = () => {
  console.log("Fetching beer menu");
        
const beerList = document.getElementById("beer-list");
      
  fetch(`${baseUrl}/beers`)
    .then((response) => response.json())
    .then((beers) => {

      console.log("Beer menu:", beers);

        
    beers.forEach((beer) => {
      const menu = document.createElement("li");
      menu.textContent = beer.name;
      menu.addEventListener("click", () => {
      fetchBeer(beer.id);
      });
      beerList.appendChild(menu);
      });
    });
  };
        
const reviewForm = document.getElementById("review-form");
  reviewForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Review form submission");
          
        
const theReview = document.getElementById("review").value;
            
const reviewList = document.getElementById("review-list");
            
const newReview = document.createElement("li");

  newReview.textContent = theReview;
  reviewList.appendChild(newReview);
  document.getElementById("review").value = ""; 
  // This will remove any input form the review slot
  });
        
  fetchBeerMenu();
  fetchBeer(1); 
  // THis displays the Oh So Flatening beer by default
});

