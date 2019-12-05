/* eslint-disable indent */
function calculate(numberID, array) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < array.length; i++) {
        if (numberID <= array[i].projectId) {
            numberID = array[i].projectId + 1;
        }
    }
    return numberID;
}

export { calculate };
