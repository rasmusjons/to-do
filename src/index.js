/* eslint-disable indent */
/* eslint-disable no-use-before-define */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */

import { deleteButton } from './button';
import { stylingItems } from './styling';
import { calculate } from './calculateID';

const projectArray = [];
const id = 0;

function displayNewToDo(text, appendID) {
    const newLi = document.createElement('li');
    newLi.setAttribute('class', 'newItem');
    stylingItems(newLi);

    const newContent = document.createTextNode(text);
    newLi.appendChild(newContent);
    document.getElementById(appendID).appendChild(newLi);

    newLi.appendChild(deleteButton());
}

function displayProject(title, projectId) {
    const passedId = projectId;

    const divProj = document.createElement('div');
    divProj.setAttribute('class', 'divProj');
    divProj.setAttribute('id', passedId);

    const newContent = document.createTextNode(title);
    divProj.appendChild(newContent);
    document.getElementById('projectDiv').appendChild(divProj);

    displayPopForm(passedId);
}

// STYLING ------------------------------------

function displayPopForm(e) {
    const passedIdPop = e;
    console.log(`${passedIdPop}dPF`);
    const f = document.createElement('form');
    f.setAttribute('id', passedIdPop);
    f.setAttribute('class', passedIdPop);

    const i = document.createElement('input'); // input element, text
    i.setAttribute('type', 'text');
    i.setAttribute('name', 'title');

    const s = document.createElement('input'); // input element, Submit button
    s.setAttribute('type', 'submit');
    s.setAttribute('value', 'Create');
    f.appendChild(i);
    f.appendChild(s);
    document.getElementById(e).appendChild(f);
    createToDoItems(passedIdPop);
}

// STYLING SLUT ---------------

// Helper metod till createProject.

const createProject = (title, id) => {
    const project = {
        title,
        projectId: id
    };
    projectArray.push(project);

    displayProject(title, id);
};

// TRYCKER UT INPUTEN I FORMEN I DVS SOM APPENDAS MED DISPLANEW

function createToDoItems(formId) {
    const addForm = document.getElementById(formId);
    addForm.addEventListener('submit', e => {
        e.preventDefault();
        const title = addForm.querySelector('input[name="title"]');
        const titleValue = `${title.value}`;
        if (titleValue === '') {
            alert('please enter a to-do item');
            return;
        }
        displayNewToDo(titleValue, formId);
    });
}

// eslint-disable-next-line wrap-iife
(function createToDoList() {
    const addForm = document.forms.projectformId;

    addForm.addEventListener('submit', e => {
        e.preventDefault();
        const projectName = addForm.querySelector('input[name="project"]');
        const projectNameValue = `${projectName.value}`;
        if (projectNameValue === '') {
            alert('please enter a project name');
            return;
        }
        const aProject = createProject(
            `${projectName.value}`,
            calculate(id, projectArray)
        );
    });
})();
