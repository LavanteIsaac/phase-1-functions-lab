const hqLocation = 42;
const pickUpLocation = 50;

function distanceFromHqInBlocks(someValue) {
    const distance = Math.abs(someValue - hqLocation);
    return distance;

}
distanceFromHqInBlocks();


function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    const distance = Math.abs ((someValue - hqLocation) * 264);
    return distance;

}
distanceFromHqInFeet();



function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs ((start - destination) *264);
    return distance;
  }

  distanceTravelledInFeet()

  
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
    if (distance < 400) {
        return 0;
    } else if (400 < distance && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (2000 < distance && distance <= 2500) {
        return 25;
    } else if (distance > 2500) {
        return 'cannot travel that far';
    }
    
  }
  console.log (calculatesFarePrice(25, 30))
