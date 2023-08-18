var maincontainer=document.getElementById("mainContainer");
var storeBreeds=[];

function catData(id,imgUrl,catName,catOrigin,catLife,catDesc){

let container=document.createElement('div');
container.className='container';

let image=document.createElement('div');
image.className='image';
container.appendChild(image);

let catimage=document.createElement('img');
catimage.setAttribute("id","catImage")
catimage.src="https://cdn2.thecatapi.com/images/"+imgUrl+".jpg";
image.appendChild(catimage);
catimage.addEventListener("click",function(){
    document.location="../HTML/catDes.html";
    localStorage.setItem('id',id)
})

let catDetail=document.createElement('div');
catDetail.className="catDetail";
container.appendChild(catDetail);

let name=document.createElement("h4");
name.innerText="Breed Name: "+catName;
name.className="detail";
name.setAttribute('id',"breedName");
catDetail.appendChild(name);

let origin=document.createElement("p");
origin.innerText="Country of origin: "+catOrigin;
origin.className="detail";
origin.setAttribute('id',"breedOrigin");
catDetail.appendChild(origin);

let lifeSpan=document.createElement("p");
lifeSpan.innerText=catLife +" years " ;
lifeSpan.className="detail";
lifeSpan.setAttribute('id',"life");
catDetail.appendChild(lifeSpan);

maincontainer.appendChild(container)


}

window.addEventListener('load',fetchData)

function fetchData(){
    fetch("https://api.thecatapi.com/v1/breeds")
 .then(response => response.json())
  .then((data) =>{ console.log(data)
    for(let i=0;i<data.length;i++){
    let catDetail=data[i];
console.log(catDetail)  ;
catData(catDetail.id,catDetail.reference_image_id,catDetail.name,catDetail.origin,catDetail.life_span,catDetail.description)
}


})
}



// <div class="container">
//         <div class="image">
//             <img src="../IMAGE/cat.png" alt="" id="catImage">
//         </div>
//         <div class="catDetail">
//             <h4 id="breedName">name</h4>
//             <p id="breedOrigin">origin country</p>
//             <p id="life">life span</p>
//         </div>
//     </div>