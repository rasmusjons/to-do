
function displayList(e){
  
    let newDiv = document.createElement("div"); 
    newDiv.setAttribute("id", "list");
    let newContent = document.createTextNode(e); 
    newDiv.appendChild(newContent);  
    let currentDiv = document.getElementById("div1"); 
    document.body.insertBefore(newDiv, currentDiv); 
    
}



function displayTitle(e){
  

    let newDiv = document.createElement("div"); 
    newDiv.setAttribute("id", "title");
    let newContent = document.createTextNode(e); 
    newDiv.appendChild(newContent);  
    let currentDiv = document.getElementById("div1"); 
    document.body.insertBefore(newDiv, currentDiv); 
 }

 function displayNew(e){
  

    let newDiv = document.createElement("div"); 
    newDiv.setAttribute("id", "newDiv");
    let newContent = document.createTextNode(e); 
    newDiv.appendChild(newContent);  
    let currentDiv = document.getElementById("div1"); 
    document.body.insertBefore(newDiv, currentDiv); 
 }




export {
    displayList,
    displayTitle,
    displayNew
}