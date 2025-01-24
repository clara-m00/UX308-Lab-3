// Take a variable with distance in **kilometers** as input and output the same distance **converted** to **miles**

function convertKilometersToMiles(kilometers){
    let miles = kilometers/1.609;
    return miles; 
}

let kilometers = 150;
let miles = convertKilometersToMiles(kilometers);

console.log (`${kilometers} kilometers is ${miles} miles`);

