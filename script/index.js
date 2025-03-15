 const ramens = [
   {
     name: "Shoyu Ramen",
     restaurant: "Ichiran",
     image: "shoyu.jpg",
     rating: 5,
     comment: "Delicious!",
   },
   {
     name: "Tonkotsu Ramen",
     restaurant: "Ippudo",
     image: "tonkotsu.jpg",
     rating: 4,
     comment: "Very rich broth.",
   },
    {
      name: "Miso Ramen",
      restaurant: "Ramen Misoya",
      image: "miso.jpg",
      rating: 3,
      comment: "Good but not great.",
    },
    {
      name: "Shio Ramen",
      restaurant: "Ramen Hak Ryu",
      image: "shio.jpg",
      rating: 4,
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