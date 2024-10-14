// index.js
function displayRamens() {
  fetch("http://localhost:3000/students").then((response)=>response.json()).
  then((data)=>renderRamen(data))
  };
  function renderRamen(ramen) {
    const ramenImgg = document.createElement('img'); 
    ramenImgg.src = ramen.image;
    ramenImgg.alt = ramen.name;
    ramenImgg.innerHTML=`<img src="${ramen}.jpg">`
    ramenImgg.addEventListener('click', () => handleClick(ramen))
  
   const ramenMenuu = document.querySelector("#ramen-menu");
   ramenMenuu.append(ramenImg)
  
  
  }
  renderRamen(newzRamen)
  
  const handleClick = (ramen) => {
    const detailImage = document.querySelector("#ramen-detail img"); 
    detailImage.src = ramen.image;
  
    const namez = document.querySelector("#ramen-detail h2");
    namez.textContent = ramen.name;
  
    const resttName = document.querySelector("#ramen-detail h3");
    resttName.textContent = ramen.restaurant;
  
    const rating = document.querySelector("#rating-display");
    rating.textContent = ramen.rating;
  
    const comment = document.querySelector("#comment-display");
    comment.textContent = ramen.comment;
  }; 
  
  const addSubmitListener = () => {
    const ramenFormm = document.querySelector("#new-ramen");
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
       const newname = document.querySelector("#new-name").value
       const newrestaurant = document.querySelector("#new-restaurant").value
       const newimage = document.querySelector("#new-image").value
       const newrating = document.querySelector("#new-rating").value 
       const newcomment = document.querySelector("#new-comment").value
  
       const newzRamen = {
        newnamename,
        newrestaurant,
        newimage,
        newrating,
        newcomment
       }
  
       renderRamen(newzRamen)
  
       ramenFormm.reset()
    }
    ramenFormm.addEventListener("submit", handleSubmit)
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