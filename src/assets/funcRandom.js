// CALCUL RANDOM NUMBER STRING
export function randomNumStr(max = 49) {
    return (Math.floor(Math.random() * max) + 1).toString();
}
// CREATE ARRAY
export function returnArray(min, max, value = null) {
    let arr = [];
    for (let i = min; i < max + 1; i++) {
        arr.push(value !== "*" ? i.toString() : "*");
    }
    return arr;
}
// CALCUL JACKPOT
export function getJackpot(arr, max = 0, arrUser = [""]) {
    let arrCopy = arr;
    arrCopy.forEach((item, index) => {
        // Get random number
        let random = randomNumStr(max !== 0 ? max : 49);
        // IF number is not already use
        if (item === "*" &&
            !arrCopy.includes(random) &&
            !arrUser.includes(random)) {
            // Add number
            arrCopy[index] = random;
        }
        else if (item === "*") {
            // IF number is already use
            while (item === random ||
                arrCopy.includes(random) ||
                arrUser.includes(random)) {
                // Get new random number
                return (arrCopy[index] = randomNumStr(max !== 0 ? max : 49));
            }
            // Add number
        }
        else if (item !== "*" && !arrUser.includes(item)) {
            // IF number is already use
            while (item === random ||
                arrUser.includes(random) ||
                arrCopy.includes(random)) {
                // Get new random number
                random = randomNumStr(max !== 0 ? max : 49);
            }
            return item !== random && (arrCopy[index] = random);
        }
    });
    return arrCopy.sort((a, b) => a - b);
}
// CHECK VALUE IN ARRAY
export function checkValinArray(arrStr, v) {
    // IF number already use
    if (arrStr.includes(v)) {
        // Get index to v
        const indX = arrStr.findIndex((item) => item === v);
        // Replace v
        arrStr.splice(indX, 1, "*");
        // IF number not already use
    }
    else {
        // Get index first '*'
        const ind = arrStr.findIndex((item) => item === "*");
        // Replace '*'
        arrStr.splice(ind, 1, v);
    }
    return arrStr;
}
