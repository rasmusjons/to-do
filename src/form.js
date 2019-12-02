
let tempList = [];

function addList(){
        const addForm = document.forms["formId"];
        addForm.addEventListener("submit", function (e) {
            e.preventDefault();
                  
            let title = addForm.querySelector('input[name="title"]')
            let titleValue = title.value;

            return titleValue;
         
        });
 
    let hej123 = titleValue;     
    return hej123;

}




export {
    form,
    addList,
    
}