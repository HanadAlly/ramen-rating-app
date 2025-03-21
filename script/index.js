 const ramens = [
   {
     name: "Gyukotsu Ramen",
     restaurant: "Royal",
     image: "./images/gyukotsu.jpg",
     rating: 7,
     comment: "Delicious!",
   },
   {
     name: "Kojiro Ramen",
     restaurant: "Jamia",
     image: "./images/kojiro.jpg",
     rating: 8,
     comment: "Very rich broth.",
   },
   {
     name: "Naruto Ramen",
     restaurant: "Kempinski",
     image: "./images/naruto.jpg",
     rating: 6,
     comment: "Good but not great.",
   },
   {
     name: "Nirvana Ramen",
     restaurant: "Food mart",
     image: "./images/nirvana.jpg",
     rating: 7,
     comment: "Salty but tasty.",
   },
 ];

 function displayRamens() {
   const ramenMenu = document.getElementById("ramen-menu");
   ramenMenu.innerHTML = "";
   ramens.forEach((ramen) => {
     const img = document.createElement("img");
     img.src = ramen.image;
     img.alt = ramen.name;
     img.addEventListener("click", () => handleClick(ramen));
     ramenMenu.appendChild(img);
   });
 }

 function handleClick(ramen) {
   document.getElementById("detail-image").src = ramen.image;
   document.getElementById("detail-name").textContent = ramen.name;
   document.getElementById("detail-restaurant").textContent = ramen.restaurant;
   document.getElementById(
     "detail-rating"
   ).textContent = `Rating: ${ramen.rating}`;
   document.getElementById("detail-comment").textContent = ramen.comment;
 }

 function addSubmitListener() {
   const form = document.getElementById("new-ramen-form");
   form.addEventListener("submit", (event) => {
     event.preventDefault();
     const newRamen = {
       name: document.getElementById("new-name").value,
       restaurant: document.getElementById("new-restaurant").value,
       image: document.getElementById("new-image").value,
       rating: document.getElementById("new-rating").value,
       comment: document.getElementById("new-comment").value,
     };
     ramens.push(newRamen);
     displayRamens();
     form.reset();
   });
 }

 function main() {
   displayRamens();
   addSubmitListener();
   if (ramens.length > 0) {
     handleClick(ramens[0]);
   }
 }

 document.addEventListener("DOMContentLoaded", main);