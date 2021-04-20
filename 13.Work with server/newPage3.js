
function planetList(){
    fetch('https://swapi.dev/api/planets/?page=4')
     .then((response) => {
         return response.json();
     })
     .then((data) => {
         const planetList = [];
        data.results.map((p, i) => planetList.push(p.name))
        const divPlanets = document.createElement('div')
 divPlanets.innerHTML = "<b>List of planets </b> <br> " + planetList;
 document.body.append(divPlanets);  
 });
 }
 planetList();
 function openNewPage4(){
    window.location.href = 'newPage4.html'
}

 document.getElementById("next").addEventListener("click",openNewPage4 , {once : true});