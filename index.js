// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  const headquartersLocation = 42; // Scuber's headquarters on 42nd Street
  const distance = Math.abs(someValue - headquartersLocation);
  return distance;
}
function distanceFromHqInFeet(someValue) {
  const a = distanceFromHqInBlocks(someValue);
  // the return value of distanceFromHqInBlocks can then be used to calculate feet
  return a * 264;
}
function distanceTravelledInFeet(start, destination) {
  if (start > destination) {
    const distance = (start - destination) * 264;
    return distance;
  } else if (destination > start) {
    const distance = (destination - start) * 264;
    return distance;
  } else {
    return 0;
  }
}
// function calculatesFarePrice(start, destination){
//     const distance = distanceTravelledInFeet();
//     if (distance >=0 && distance <= 400){
//         return 0;
//     } else if (distance <=2000){
//         const fare = (distance - 400) * 0.02;
//         return fare;
//     } else if (distance < 2500){
//         return 25;
//     } else{
//         return 'cannot travel that far.';
//     }
// }
function calculatesFarePrice(start, destination) {
  const blockInFeet = 264; // 1 block is equal to 264 feet
  const distanceInFeet = Math.abs(start - destination) * blockInFeet;

  // Fare price calculation
  if (distanceInFeet <= 400) {
    return 0; // First 400 feet are free
  } else if (distanceInFeet <= 2000) {
    const farePrice = (distanceInFeet - 400) * 0.02; // 2 cents per foot
    return farePrice;
  } else if (distanceInFeet <= 2500) {
    return 25; // Flat fare for distances between 2000 and 2500 feet
  } else {
    return "cannot travel that far";
  }
}
