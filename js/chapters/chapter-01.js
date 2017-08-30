/**
/**
 * NOTES:
 * Do not forget to insert RETURN statement, if needed!
 * Please use the following functions primarily and if needed all the other array functions
 *
 * - Array.prototpye.forEach(fn)
 * - Array.prototpye.find(fn)
 * - Array.prototpye.filter(fn)
 * - Array.prototpye.map(fn)
 * - Array.prototpye.reduce(fn)
 * - Array.prototpye.every(fn)
 * - Array.prototpye.some(fn)
 * - ...
 *
 *  Remember:
 *  () => {}  // this is an arrow function, basically a short form of function decleration.
 *  let       // this is another reserved for declaring variables like "var" which beawares of scopes!
 *  const     // this is an alternative way of declaring variables which does not allowed reference changes
 *
 * Note that:
 * - In the function paramter list the parameters are prefixed with "p" like "pPassengers"
 * - The decleration order of functions is not important!
 */



function findNumberOfPassengers(pPassengers){
    return pPassengers.length;
}

function findPersonByIndex(pPassengers, pIndex){
    return pPassengers[pIndex-1].firstname;
}

function findNumberOfWomen(pPassengers){
    var theWomen = pPassengers.filter(function(pPerson) {
        return pPerson.gender == 'F';
    });
    return theWomen.length;
}

function findNumberOfMen(pPassengers){
    var theMen = pPassengers.filter(function(pPerson) {
        return pPerson.gender == 'M';
    });
    return theMen.length;
}

function findPersonByTicketId(pPassengers, pId){
    var result = pPassengers.find(function(pPerson) {
        return pPerson.id == pId;
    });
    return result.lastname;
    
    // .find returns the object which is found
    // .filter returns a new array consist of the filtered elements
}

function findPassengersWithNoChildren(pPassengers){
    var result = pPassengers.filter(function(pPerson) {
       return pPerson.children.length == 0;
    });
    return result.length;
}

function findUnderagePassengers(pPassengers){
    var result = pPassengers.filter(function(pPerson) {
        return ((new Date().getFullYear() - new Date(pPerson.birth).getFullYear())) < 18;
    });
    return result.length;
}