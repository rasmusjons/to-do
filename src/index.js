function displayNew(e){
  

    let newLi = document.createElement("li"); 
    newLi.setAttribute("class", "newItem");
    stylingItems(newLi);

    let newContent = document.createTextNode(e); 
    newLi.appendChild(newContent);  
 
    document.getElementById("myUL").appendChild(newLi)
 }

 

function stylingItems (e) {
    e.onclick = function() {
        e.style.textDecoration = "line-through";
        e.style.background = "grey";
        e.style.color = "white"; 
        e.style.cursor = 'pointer'
    }  
}
 
//GÖR EN FÖR EACH FÖR DETTA---> 
let liItems = document.querySelector(".newItem")
stylingItems(liItems); 



 // TRYCKER UT INPUTEN I FORMEN I DVS SOM APPENDAS MED DISPLANEW

(function displayTitle(){
    const addForm = document.forms["formId"];
     addForm.addEventListener("submit", function (e) {
        e.preventDefault();
        let title = addForm.querySelector('input[name="title"]')
        let titleValue = title.value;
         displayNew(titleValue)
    

 })  
})();
 
(function displayDescription(){
    const addForm = document.forms["formId"];
     addForm.addEventListener("submit", function (e) {
        e.preventDefault();
        let description = addForm.querySelector('input[name="description"]')
        if (description.value === ''){
            console.log(description  + "no value in field")
            return; 
        } else {
        let descriptionValue = description.value;
        displayNew(descriptionValue)
        }
 })  
})();


(function displayDueDate(){
    const addForm = document.forms["formId"];
     addForm.addEventListener("submit", function (e) {
        e.preventDefault();
        let dueDate = addForm.querySelector('input[name="dueDate"]')
        let dueDateValue = dueDate.value;
        displayNew(dueDateValue)
 })  
})();


(function displayPrio(){
    const addForm = document.forms["formId"];
     addForm.addEventListener("submit", function (e) {
        e.preventDefault();
        let prio = addForm.querySelector('input[name="prio"]')
        let prioValue = prio.value;
        displayNew(prioValue)
 })  
})();
