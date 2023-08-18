var container=document.getElementById("container")
var backButton=document.getElementById("back")

function catDetail(catObject){

    let description=document.createElement('div')
    description.className="description";
    
    
    let img=document.createElement('img')
    img.setAttribute('id','img');
    img.src="https://cdn2.thecatapi.com/images/"+catObject.reference_image_id+".jpg";
    description.appendChild(img);

    let title=document.createElement('h4');
    title.setAttribute("id",'detail');
    title.innerText=catObject.name;
    description.appendChild(title);

    let catDescription=document.createElement('p');
    catDescription.innerText=catObject.description;
    catDescription.setAttribute('id','detail');
    description.appendChild(catDescription);
container.appendChild(description);
}
window.addEventListener('load',fetchData)
backButton.addEventListener("click",function(){
    document.location="../HTML/cat.html";
    localStorage.removeItem('id')


})

function fetchData(){
    let breedID=localStorage.getItem('id');
    if(breedID==null){
    document.location="../HTML/cat.html"
    return;
    }
    fetch("https://api.thecatapi.com/v1/breeds/"+breedID)
 .then(response => response.json())
  .then((data) =>{ console.log(data)
    catDetail(data)
    
    
}) 
}











// <div class="description">
//     <img id="img" src="" alt="">
//     <p id="detail" >hellocatty</p>
// </div>
