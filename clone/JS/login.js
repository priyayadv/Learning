var email=document.getElementById('email');
var password=document.getElementById('psw');
var submit=document.getElementById('submit');

 function loginVerify(){
    if (email.value=="") {
        alert('Please enter a valid email address.');
        return false;
    }

   else if (password.value=="") {
        alert('Please enter a valid password.');
        return false;
    } 
    storedata();
return true;

    
    
 }
// one way to submit data
//  submit.addEventListener("click",submitData)
//  function submitData(){
//     if(loginVerify()){
//         document.location='../HTML/clone.html'
//     }
// }


function storedata(){
   let user={
            email:email.value
         }
          localStorage.setItem("userData",JSON.stringify(user));
    }

function retriveData(){
let getData =localStorage.getItem("userData")!=null;
 console.log(getData);
 if(getData){
    document.location="../HTML/clone.html";
 }

 }

window.addEventListener('load',retriveData)


//second way to submit data

submit.addEventListener('click',()=>{
    if(loginVerify()){
        document.getElementById('email').value=" ";
        document.getElementById('psw').value=" ";	
   document.location="../HTML/clone.html";
   
    }
    
    
 });




