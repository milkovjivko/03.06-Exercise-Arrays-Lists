function commonElements (firstArray,secoundArray) {

    for (const element of firstArray) {
        if (secoundArray.includes(element)) {
            console.log(element);
        }
    }
}
commonElements (['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)