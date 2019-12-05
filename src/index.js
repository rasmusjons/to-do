/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
const projectArray = [];
const run = false;
let id = 0;

function displayNew(text, appendID) {
  const newLi = document.createElement("li");
  newLi.setAttribute("class", "newItem");
  stylingItems(newLi);

  const newContent = document.createTextNode(text, null);
  newLi.appendChild(newContent);

  document.getElementById(appendID).appendChild(newLi);
}

function displayProject(e) {
  const passedId = e;
  console.log(passedId + "displayporject");
  const divProj = document.createElement("div");
  divProj.setAttribute("class", "divProj");
  divProj.setAttribute("id", passedId);

  const newContent = document.createTextNode(passedId);
  divProj.appendChild(newContent);
  document.getElementById("projectDiv").appendChild(divProj);
  displayPopForm(passedId);
}

// STYLING ------------------------------------
function stylingItems(e) {
  e.onclick = function() {
    if (e.style.textDecoration != "line-through") {
      e.style.textDecoration = "line-through";
      e.style.background = "grey";
      e.style.color = "white";
    } else {
      e.style.textDecoration = "none";
      e.style.background = "#eee";
      e.style.color = "black";
    }
  };
  e.style.cursor = "pointer";
}

function displayPopForm(e) {
  let passedIdPop = e;
  console.log(passedIdPop + "dPF");
  const f = document.createElement("form");
  f.setAttribute("id", "formId");

  const i = document.createElement("input"); // input element, text
  i.setAttribute("type", "text");
  i.setAttribute("name", "title");

  const s = document.createElement("input"); // input element, Submit button
  s.setAttribute("type", "submit");
  s.setAttribute("value", "Submit");
  f.appendChild(i);
  f.appendChild(s);
  document.getElementById(e).appendChild(f);
  displayNotes(passedIdPop);
}

// öppnar stänger listan
function projectStyling(e) {
  e.onclick = function() {
    const element = document.getElementById("myUL");
    if (element.style.display === "block") {
      element.style.display = "none";
    } else {
      element.style.display = "block";
    }
  };

  e.style.cursor = "pointer";
}

// STYLING SLUT ---------------

function calculateId() {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < projectArray.length; i++) {
    if (id <= projectArray[i].projectId) {
      id = projectArray[i].projectId + 1;
    }
  }
  return id;
}

const createProject = (title, id) => {
  const project = {
    title,
    projectId: id
  };
  projectArray.push(project);

  function printId() {
    return `${id}`;
  }
  displayProject(id);
};

// TRYCKER UT INPUTEN I FORMEN I DVS SOM APPENDAS MED DISPLANEW

function displayNotes(passedId) {
  let id = passedId;
  const addForm = document.forms.formId;
  addForm.addEventListener("submit", e => {
    e.preventDefault();
    const title = addForm.querySelector('input[name="title"]');
    const titleValue = `${title.value}`;
    displayNew(titleValue, id);
  });
}

// eslint-disable-next-line wrap-iife
(function addProjectEvent() {
  const addForm = document.forms.projectformId;

  addForm.addEventListener("submit", e => {
    e.preventDefault();
    const projectName = addForm.querySelector('input[name="project"]');
    const projectNameValue = `${projectName.value}`;
    const aProject = createProject(`${projectName.value}`, calculateId());
  });
})();
