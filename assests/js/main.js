const body = document.querySelector("body");
 let row =document.querySelector(".row");
 let input =document.getElementsByClassName(".search-input")[0]
 let btn =document.getElementsByClassName(".salam")
// //console.log(row)
btn.onclick=function(){

  //console.log(input.value)
$.ajax({

  method:"GET",
  url:"https://api.tvmaze.com/search/shows?q=" + input.value
  
})
.done((data)=>{
  //row.innerHTML=""
data.forEach(element=>{
  row.innerHTML=`<div class="col-3"> 
  <div>
  <img src="" alt="" class="image">
  <div>
    <h4 class="teze">HDfilmCehennemi</h4>
    <p>Tum filimlere uzretsiz izleme kanali</p>
  </div>
 </div>
  <div class="card" style="width: 18rem; ">
  <img src="${element.show.image?.medium}" class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title">${element.show.name}</h5>
  <p class="card-text">Imdb: ${element.show.rating.average}</p>
  <a href="detalies.html?id=${element.show.id}" class="btn btn-primary">BURDAN IZLE</a>
  </div>
  </div>`
})

})



}
//  axios.get("https://api.tvmaze.com/search/shows?q="+input.value)
//  .then(function(type){
//   console.log(type.data)

//  })
// }

fetch("https://api.tvmaze.com/shows")
.then(response => response.json())
.then(data =>{
  console.log(data);
    data.forEach(element => {
        row.innerHTML+=`
        <div class="col-3"> 
        <div>
        <img src="" alt="" class="image">
        <div>
          <h4 class="teze">HDfilmCehennemi</h4>
          <p>Tum filimlere uzretsiz izleme kanali</p>
        </div>
       </div>
        <div class="card" style="width: 18rem; ">
        <img src="${element.image.medium}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
        <p class="card-text">Imdb: ${element.rating.average}</p>
        <a href="detalies.html?id=${element.id}" class="btn btn-primary">BURDAN IZLE</a>
        </div>
        </div>
      `
        
    });
 })
