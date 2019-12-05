/* eslint-disable indent */
function deleteButton() {
    const button = document.createElement('button');
    button.innerHTML = 'X';
    button.setAttribute('class', 'closeButton');
    button.onclick = function displayNoneOnClick() {
        this.parentNode.style.display = 'none';
    };
    return button;
}

export { deleteButton };
