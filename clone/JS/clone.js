var container=document.getElementById('bodyContainer')
var back=document.getElementById('closepage')
var logout=document.getElementById('logout');
function post(tweetData){

   let postContainer=document.createElement('div');
   postContainer.className="mainContainer";


    let titleHead=document.createElement('div');
    titleHead.className="headTitle";
    postContainer.appendChild(titleHead)

    let profileimg=document.createElement('img');
    profileimg.setAttribute('id','profileimg');
    profileimg.src="../image/person.png";
    titleHead.appendChild(profileimg);

    let title=document.createElement('h4');
    title.setAttribute('id','title');
    title.innerText=tweetData.title;
    titleHead.appendChild(title);

    

   let desciptionHead=document.createElement('div');
   desciptionHead.className='DesciptionHead';
   postContainer.appendChild(desciptionHead);

   let description=document.createElement('p');
   description.setAttribute('id','Description');
   description.innerText=tweetData.body;
  desciptionHead.appendChild(description);

   let footerMain=document.createElement('div');
   footerMain.className='footerMain';
   postContainer.appendChild(footerMain);

  let likehead=document.createElement('div');
  likehead.className='like';
  footerMain.appendChild(likehead);

   var isliked=false;
   let count=0
   let like=document.createElement('img');
   like.setAttribute('id','likeicon');
   like.src='../image/Like.png';
   likehead.appendChild(like);
   like.addEventListener('click',function(){
    if(!isliked){
      count++;
      likeinput.innerHTML=count;
      isliked=!isliked;
      like.style.backgroundColor="red"
    }
    else{
      count--;
      likeinput.innerHTML=count;
      isliked=!isliked;
      like.style.backgroundColor="rgb(235, 196, 196)";
    }

   })

   let likeinput=document.createElement('span');
   likeinput.setAttribute('id','countslike');
   likehead.appendChild(likeinput);

   let commentHead=document.createElement('div');
   commentHead.className='comment';
   footerMain.appendChild(commentHead);
 


   let comments=document.createElement('img');
   comments.setAttribute('id','commentIcon');
   comments.src='../image/Comment.png';
   commentHead.appendChild(comments);
   comments.addEventListener('click',function(){
    document.location="../HTML/displayComment.html";
    localStorage.setItem('tweetdata',JSON.stringify(tweetData))
   })

   
   let commentinput=document.createElement('span');
   commentinput.setAttribute('id','countscomment');
  fetchComments(tweetData.id,commentinput)
   commentHead.appendChild(commentinput)

   let addCommentsHead=document.createElement('div');
   addCommentsHead.className='addcomment';
   footerMain.appendChild(addCommentsHead);

  let addComments=document.createElement('img');
  addComments.setAttribute('id','addCommentIcon');
  addComments.src='../image/addComment.png';
  addCommentsHead.appendChild(addComments);

container.appendChild(postContainer); 
}
window.addEventListener('load',fetchdata)

function fetchdata(){
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then((data) =>{ 
  //console.log(data)
for(let i=0;i<data.length;i++){
    let detail=data[i];
    console.log(detail);
post(detail);
}


})
}

function fetchComments(id,commentinput){
  fetch('https://jsonplaceholder.typicode.com/posts/'+id+'/comments')
  .then(response=>response.json())
  .then((data)=>{
    console.log(id)
    console.log(data)
 commentinput.innerText=data.length;
  });

}
logout.addEventListener("click",()=>{
  localStorage.removeItem('userData');
  document.location='../HTML/login.html';
})

window.addEventListener('load',()=>{
  let userData=localStorage.getItem('userData')
if(userData==null){
  document.location='../HTML/login.html';
  return;
}
})

