// Code your solution in this file!
const returnFirstTwoDrivers = function(arrayOfDrivers) {
    let twoDrivers = [...arrayOfDrivers]
    return twoDrivers.splice(0,2)
}

const returnLastTwoDrivers = function(arrayOfDrivers) {
    let twoDrivers = [...arrayOfDrivers]
    return twoDrivers.splice(-2)
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

function createFareMultiplier(integer) {

    return function(integer){integer * 4}
    
}

function fareDoubler(params) {
    const multiplyer = createFareMultiplier(integer)
}