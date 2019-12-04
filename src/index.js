let project = [];

function displayNew(element) {

    let newLi = document.createElement("li");
    newLi.setAttribute("class", "newItem");
    stylingItems(newLi);

    let newContent = document.createTextNode(element);
    newLi.appendChild(newContent);

    document.getElementById("myUL").appendChild(newLi)
}


function displayProject(e) {

    let divProj = document.createElement("div");
    divProj.setAttribute("class", "divProj");
    projectStyling(divProj);
    
    let newContent = document.createTextNode(e);
    divProj.appendChild(newContent);

    document.getElementById("projectDiv").appendChild(divProj)
}






// STYLING ------------------------------------
function stylingItems(e) {
    e.onclick = function () {
        e.style.textDecoration = "line-through";
        e.style.background = "grey";
        e.style.color = "white";
    }
    e.style.cursor = 'pointer'

}



function projectStyling(e) {
    e.onclick = function () {
        let element = document.getElementById("myUL")
            if (element.style.display === "block") {
                element.style.display = "none";
            } else {
                element.style.display = "block";
        } 
    }

    e.style.cursor = 'pointer'
}

//fixar stylingen för listan som är där via html
document.querySelectorAll(".newItem").forEach(e => stylingItems(e));
document.querySelectorAll(".newItem").forEach(e => e.style.cursor = 'pointer');


(function setMyUlAsBlock(){
    document.getElementById("myUL").style.display = "block"; 
})();


//STYLING SLUT ---------------








let createToDo = (title, desc, due, prio) => {
    return {
        title: title,
        desc: desc,
        due: due,
        prio: prio

    }
}

// let newtodo = createToDo("handla", "mycket", "nu", "5a")
// console.log(newtodo);





// TRYCKER UT INPUTEN I FORMEN I DVS SOM APPENDAS MED DISPLANEW

(function displayNotes() {
    const addForm = document.forms["formId"];
    addForm.addEventListener("submit", function (e) {
        e.preventDefault();
        let title = addForm.querySelector('input[name="title"]')
        let description = addForm.querySelector('input[name="description"]')
        let dueDate = addForm.querySelector('input[name="dueDate"]')
        let prio = addForm.querySelector('input[name="prio"]')
        let note = `${title.value} ${description.value} ${dueDate.value} ${prio.value}`;


        let newtodo = createToDo(
            `${title.value}`,
            `${description.value}`,
            `${dueDate.value}`,
            `${prio.value}`
        )
        project.push(newtodo);

        console.log(project[0].title)
        displayNew(note)
        //displayProject(project[0].title)


    })
})();


(function displayProjects() {
    let addForm = document.forms["projectformId"];

    addForm.addEventListener("submit", function (e) {
        e.preventDefault();
        let projectName = addForm.querySelector('input[name="project"]');
        let projectNameValue = `${projectName.value}`
        displayProject(projectNameValue);

    })
})();








// (function displayDescription() {
//     const addForm = document.forms["formId"];
//     addForm.addEventListener("submit", function (e) {
//         e.preventDefault();
//         let description = addForm.querySelector('input[name="description"]')
//         if (description.value === '') {
//             console.log(description.  + "no value in field")
//             return;
//         } else {
//             let descriptionValue = description.value;
//             displayNew(descriptionValue)
//         }
//     })
// })();


// (function displayDueDate() {
//     const addForm = document.forms["formId"];
//     addForm.addEventListener("submit", function (e) {
//         e.preventDefault();
//         let dueDate = addForm.querySelector('input[name="dueDate"]')
//         if (description.value === '') {
//             console.log("no value in field")
//             return;
//         } else {
//             let dueDateValue = dueDate.value;
//             displayNew(dueDateValue)
//         }
//     })
// })();


// (function displayPrio() {
//     const addForm = document.forms["formId"];
//     addForm.addEventListener("submit", function (e) {
//         e.preventDefault();
//         let prio = addForm.querySelector('input[name="prio"]')
//         if (description.value === '') {
//             console.log("no value in field")
//             return;
//         } else {
//             let prioValue = prio.value;
//             displayNew(prioValue)
//         }
//     })
// })();
