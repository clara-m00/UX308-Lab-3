// Take a variable with distance in **meters** as input and output the same distance **converted** to **yards**

function meters2yards(meters) {
    let yards = meters * 1.094;
    return yards;
}

let meters = 30;

console.log(`${meters} meters is ${meters2yards(meters)} yards`);

export { meters2yards };