// Code your solution here

function findMatching(arr, name) {

    const newArr = [];

    arr.filter((driverName) => { driverName === name || driverName == name.toLowerCase() ? newArr.push(driverName) : newArr });

    return newArr;
}

function fuzzyMatch(arr, name) {
    const newArr = [];

    arr.filter((driverName) => { driverName.charAt(0) === name.charAt(0) ? newArr.push(driverName) : newArr });

    return newArr;
}

function matchName(arr, name) {
    const newArr = [];

    arr.filter((obj) => obj.name === name ? newArr.push(obj) : newArr);

    return newArr;
}