// Code your solution in this file!
let distanceFromHqInBlocks = function (pickUp) {  
if (pickUp >= 42) {
    return pickUp - 42;
}
if (pickUp <= 42){
    return 42 - pickUp;
}
}
let distanceFromHqInFeet = function (pickUp) {
if (pickUp >= 42) {
    return (pickUp - 42)* 264;
}
if (pickUp <= 42) {
    return (42 - pickUp)* 264;
}
}
let distanceTravelledInFeet = function (start,end) {
    if (start >= end) {
        return (start - end)*264;
    }
    if (start <= end){
        return (end - start)*264;
    }
}
let calculatesFarePrice = function (start,destination){
    let feet = distanceTravelledInFeet (start,destination)
    if (feet <= 400) {
        return 0;
    } else if (feet > 400 && feet <= 2000){
        return (feet - 400) * 0.02;
    } else if (feet >2000 && feet <=2500) {
        return 25;
    } else if (feet > 2500){
        return 'cannot travel that far';
    }
}
