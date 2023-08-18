const taskDescription=document.getElementById("taskDescriptionInput");
const taskTitle=document.getElementById("taskTitleinput");
const addbutton=document.getElementById("addTask");
const mainContainer=document.getElementById("container");

var taskarray=[];


function addTask(){
const listData={ischeck:false,title:"",description:""}
  //  console.log(listData)


const taskListDiv=document.createElement('div');//created new taskList div  
taskListDiv.className="taskList";

const checkboxDiv=document.createElement('div');//created new checkboxlist div
checkboxDiv.className="checkboxList";

const checkboxItem=document.createElement('input')
checkboxItem.setAttribute("type","checkbox");//set type of input
checkboxItem.setAttribute('id',"checkbox")//set id for checkbox
checkboxDiv.appendChild(checkboxItem);//appending checkboxItem into checkboxDiv
taskListDiv.appendChild(checkboxDiv);//appending the checkboxDiv into tasklistDiv



checkboxItem.addEventListener("change",function(){
    //console.log("checked",this.checked)
   
    if(this.checked){
    taskListDiv.style.backgroundColor="pink"; 

}else {
    taskListDiv.style.backgroundColor="blanchedalmond";
  
}

listData.ischeck=this.checked;//store value in object
console.log(listData)
storeData();
})//listener to checkbox



const taskTextDiv=document.createElement('div');//created new tasktextDiv or instance
taskTextDiv.className="taskText";
taskListDiv.appendChild(taskTextDiv);//appending tasktextDive into tasklistDiv


if(taskTitle.value==""){
    alert ("title is empty");
    return;
}


const title=document.createElement("h3")// created instance for h3
title.innerHTML=taskTitle.value; //set the title value
title.setAttribute('id',"title");//set id for title
taskTextDiv.appendChild(title)

listData.title=taskTitle.value;//stored the value in object

//console.log(listData)
inputTitle.value="";

const description=document.createElement("p");//created instance for p
//check condition taskdescription is empty
// if(taskDescription.value==""){
//    description.innerHTML="description is empty" ;//set that input is empty
// }else{
//     description.innerHTML=taskDescription.value;// assign the taskdescription value to the discription  
// }

description.innerHTML=taskDescription.value==""?"description is empty":taskDescription.value;  // checking condition with ternary  operator

description.setAttribute('id',"description")//set id of description
taskTextDiv.appendChild(description);

listData.description=description.innerHTML;//storing the description value in object
// console.log(listData)

taskDescription.value=""; // setting the value empty to clear inputfield

const deleteTask=document.createElement('div');
deleteTask.className="removeTask";
deleteTask.setAttribute('id',"delete")
taskListDiv.appendChild(deleteTask);

const deleteImg=document.createElement("img")
deleteImg.src="../icon/delete_icon.svg";
deleteTask.appendChild(deleteImg)

deleteImg.addEventListener('click',function(){
//console.log("remove",taskListDiv)
 mainContainer.removeChild(taskListDiv)
//  taskarray.indexOf(listData);
 const index= taskarray.indexOf(listData);
if(index > -1){
    taskarray.splice(index,1)
} 

 storeData();
});




mainContainer.appendChild(taskListDiv)// appending tasklist to container

// const taskarray=[];
taskarray.push(listData);
storeData();

}


 addbutton.addEventListener('click',addTask)

function storeData(){

    localStorage.setItem("list", JSON.stringify(taskarray));

}

function retrivedata(){
 taskarray=JSON.parse( localStorage.getItem("list"));
 console.log(taskarray)
createView();

}
window.onload=retrivedata();
// created view to maintain state
function createView(){
    for(let i=0;i<taskarray.length;i++){
      // console.log(taskarray[i]) 
      let listData=taskarray[i];

       const taskListDiv=document.createElement('div');//created new taskList div  
       taskListDiv.className="taskList";
       
       const checkboxDiv=document.createElement('div');//created new checkboxlist div
       checkboxDiv.className="checkboxList";
       
       const checkboxItem=document.createElement('input')
       checkboxItem.setAttribute("type","checkbox");//set type of input
       checkboxItem.setAttribute('id',"checkbox")//set id for checkbox
       checkboxDiv.appendChild(checkboxItem);//appending checkboxItem into checkboxDiv
       taskListDiv.appendChild(checkboxDiv);//appending the checkboxDiv into tasklistDiv
       
       
       checkboxItem.checked=listData.ischeck;
       checkboxItem.addEventListener("change",function(){
           //console.log("checked",this.checked)
          
           if(this.checked){
           taskListDiv.style.backgroundColor="pink"; 
       
       }else {
           taskListDiv.style.backgroundColor="blanchedalmond";
         
       }
       
       listData.ischeck=this.checked;//store value in object
       console.log(listData)
       storeData();
       })//listener to checkbox
       
       
       
       const taskTextDiv=document.createElement('div');//created new tasktextDiv or instance
       taskTextDiv.className="taskText";
       taskListDiv.appendChild(taskTextDiv);//appending tasktextDive into tasklistDiv
       
      
       
       
       const title=document.createElement("h3")// created instance for h3
       title.innerHTML=listData.title; //set the title value
       title.setAttribute('id',"title");//set id for title
       taskTextDiv.appendChild(title)
       
       
       //console.log(listData)
       
       const description=document.createElement("p");//created instance for p
       //check condition taskdescription is empty
       // if(taskDescription.value==""){
       //    description.innerHTML="description is empty" ;//set that input is empty
       // }else{
       //     description.innerHTML=taskDescription.value;// assign the taskdescription value to the discription  
       // }
       
       description.innerHTML=listData.description; // checking condition with ternary  operator
       
       description.setAttribute('id',"description")//set id of description
       taskTextDiv.appendChild(description);
       
       // console.log(listData)
       
       
       const deleteTask=document.createElement('div');
       deleteTask.className="removeTask";
    //    deleteTask.setAttribute('id',"delete")
       taskListDiv.appendChild(deleteTask);
       
       const deleteImg=document.createElement("img")
       deleteImg.src="../icon/delete_icon.svg";
       deleteImg.setAttribute('id',"delete")
       deleteTask.appendChild(deleteImg)


       
       deleteImg.addEventListener('click',function(){
       //console.log("remove",taskListDiv)
        mainContainer.removeChild(taskListDiv)
       //  taskarray.indexOf(listData);
        const index= taskarray.indexOf(listData);
       if(index > -1){
           taskarray.splice(index,1)
       } 
       
        storeData();
       });
       
       
       
       
       mainContainer.appendChild(taskListDiv)// appending tasklist to container


    }
}

// <div class="taskList">
// <div class="checkboxList">
// <input id="checkbox" type="checkbox">
// </div>
// <div class="taskText">
// <h3 id="title">Title:</h3>
// <p id="description">Text Description:</p>
// </div>
/* <div class="removeTask">
    <img src="../icon/delete_icon.svg" alt="deleteTask" id="delete">
</div> */
// </div>


