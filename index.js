// Code your solution here
let friends = ['Teresa', 'Grecia', 'Alex', 'Shannon', 'Adam',]

// function findMatching(listOfNames, person) {
//     let sameName = listOfNames.filter(function(element) {
//         if (element.toLowerCase() === person.toLowerCase()) {
//             return element;
//         }
//     });
//     return sameName;

// function findMatching(listOfNames, person) {
//     return listOfNames.filter(element => {
//         if (element.toLowerCase() === person.toLowerCase()) {
//             return element;
//         }
//     });
// }

function findMatching(listOfNames, person) {
    return listOfNames.filter(element => element.toLowerCase() === person.toLowerCase())
}

function fuzzyMatch(listOfNames, letters) {
    return listOfNames.filter(element => element.startsWith(letters))
}

function matchName(driverObjects, randomName) {
    return driverObjects.filter(element=> element.name === randomName);
}