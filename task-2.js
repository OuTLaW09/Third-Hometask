function getDeliveryCost(){
    let distance = prompt("Type the Distance of road with km");
    let amount = (5 + (distance * 0.25));
    return `Overall amount: ${amount}`;
}
let overallcost = getDeliveryCost()
console.log(overallcost);