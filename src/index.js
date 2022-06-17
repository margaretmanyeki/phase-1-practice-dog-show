document.addEventListener('DOMContentLoaded', () => {
 fetch("http://localhost:3000/dogs/:id",{
     method:"POST",
     headers:{
        "Content-Type": "application/json",
        Accept: "application/json",
     },
     body: JSON.stringify({
         dog:"name",dog:"breed",dog:"sex",dog:"editing dog",
     })
});
})