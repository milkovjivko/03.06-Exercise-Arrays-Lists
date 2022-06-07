function mergeArrays(firstArray, secoundArray) {

    let newArray = [];
    let firstArrayL = firstArray.length;

    for (let i = 0; i < firstArrayL; i++) {
        if (i % 2 === 0) {
            newArray[i] = Number(firstArray[i]) + Number(secoundArray[i]);
        } else {
            newArray[i] = firstArray[i] + secoundArray[i];
        }
    }
       console.log(newArray.join(" - "));
}
mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)