function MaxElement(arr) {
    var result = []; 
    arr.forEach(element => {
            if (!result.includes(element)) {
                result.push(element);
            }
        });
    return result;
}


console.log(MaxElement([2, 2, 4, 3, 3]));

function MaxElementeWithSet(arr) {
    var result = new Set();
    arr.forEach(i => {
        result.add(i);
    });

    return result;
}

console.log(MaxElementeWithSet([2, 2, 4, 3, 3]));

