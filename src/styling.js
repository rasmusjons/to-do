/* eslint-disable indent */
function stylingItems(e) {
    e.onclick = function styleOnClick() {
        // eslint-disable-next-line eqeqeq
        if (e.style.textDecoration != 'line-through') {
            e.style.textDecoration = 'line-through';

            e.style.color = 'grey';
        } else {
            e.style.textDecoration = 'none';
            e.style.background = '#eee';
            e.style.color = 'black';
        }
    };
    e.style.cursor = 'pointer';
}

export { stylingItems };
