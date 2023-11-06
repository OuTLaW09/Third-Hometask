function calculatepoints(ordernumber){
    if (ordernumber <= 2){
        return 1;
    }
    let previous = 1
    let current = 1
    let next = abc
    for (let i=3; i <= ordernumber; i++){
        next = previous + current;
        previous = current;
        current = next ;
    }
    return current;
}
let ordernumber = prompt("Enter The Number Of Orders");
console.log(calculatepoints(ordernumber))