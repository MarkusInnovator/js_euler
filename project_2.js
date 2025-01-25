function fib(n) {
    if (n <= 1) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

var limit = 4000000;
var sum_even = 0;
var n = 0;

while (fib(n)<limit) {
    if (fib(n)%2==0) {
        sum_even += fib(n);
    }
    n+=1;
}

console.log("Die Summe der geraden Zahlen in der Fibonacci-Folge unter", limit, "ist:", sum_even);