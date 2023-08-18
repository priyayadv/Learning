let container=document.getElementById('container');
let closepage=document.getElementById('closepage');
let tweetTitle=document.getElementById('title')
let tweetpost=document.getElementById('Description')

let commentHead=document.getElementById('commentsHead');
 let Titlecomment=document.getElementById('Titlecomment');

  
function commentData(displayComment){


let comment=document.createElement('div');
comment.className="comments";
commentHead.appendChild(comment);

let titleid=document.createElement('p');
titleid.setAttribute('id','id');
titleid.innerText=displayComment.email;
comment.appendChild(titleid);


let des=document.createElement('p');
des.setAttribute('id','displayDiscription');
des.innerText=displayComment.body;
comment.appendChild(des);

}

window.addEventListener('load',fetchComments)
closepage.addEventListener('click', function(){
    document.location='../HTML/clone.html';

})
function fetchComments(){
    let postData=localStorage.getItem('tweetdata');
    if(postData!=null){
        let Obj=JSON.parse(postData);
    //for debugging
    console.log(Obj);
    tweetTitle.innerHTML=Obj.title;
    tweetpost.innerHTML=Obj.body;

    // console.log(postData)
    fetch('https://jsonplaceholder.typicode.com/posts/'+Obj.id+'/comments')
    .then(response=>response.json())
    .then((data)=>{
      console.log(data)
      for(let i=0;i<data.length;i++){
      let  detail= data[i];
    
     commentData(detail)}
      
    })
    }
    else{
        document.location='../HTML/clone.html';
    }

}

