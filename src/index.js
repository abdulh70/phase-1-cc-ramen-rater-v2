// index.js
function displayRamens() {
  fetch("http://localhost:3000/students").then((response)=>response.json()).
  then((data)=>renderRamen(data))
  };
  function renderRamen(ramen) {
    const ramenImg = document.createElement('img'); 
    ramenImg.src = ramen.image;
    ramenImg.alt = ramen.name;
    ramenImg.innerHTML=`<img src="${ramen}.jpg">`
    ramenImg.addEventListener('click', () => handleClick(ramen))
  
   const ramenMenu = document.querySelector("#ramen-menu");
   ramenMenu.append(ramenImg)
  
  
  }
  renderRamen(newRamen)
  
  const handleClick = (ramen) => {
    const detailImage = document.querySelector("#ramen-detail img"); 
    detailImage.src = ramen.image;
  
    const name = document.querySelector("#ramen-detail h2");
    name.textContent = ramen.name;
  
    const restaurantName = document.querySelector("#ramen-detail h3");
    restaurantName.textContent = ramen.restaurant;
  
    const rating = document.querySelector("#rating-display");
    rating.textContent = ramen.rating;
  
    const comment = document.querySelector("#comment-display");
    comment.textContent = ramen.comment;
  }; 
  
  const addSubmitListener = () => {
    const ramenForm = document.querySelector("#new-ramen");
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
       const name = document.querySelector("#new-name").value
       const restaurant = document.querySelector("#new-restaurant").value
       const image = document.querySelector("#new-image").value
       const rating = document.querySelector("#new-rating").value 
       const comment = document.querySelector("#new-comment").value
  
       const newzRamen = {
        name,
        restaurant,
        image,
        rating,
        comment
       }
  
       renderRamen(newzRamen)
  
       ramenForm.reset()
    }
    ramenForm.addEventListener("submit", handleSubmit)
  }
  
  const main = () => {
   displayRamens()
  };
  
  main();
  
  // Export functions for testing
  export {
    displayRamens,
    addSubmitListener,
    handleClick,
    main,
  };