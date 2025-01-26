
function CalculateSumOfMultiples (count) {
    var sum = 0;
    for (let i= 0; i < 100; i++) {
        if (i%5==0 || i%3==0) {
            sum+=i;
        }  
    }
    return sum;
}

var result = CalculateSumOfMultiples(100);
console.log(CalculateSumOfMultiples(result))
