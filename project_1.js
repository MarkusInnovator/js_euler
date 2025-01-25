var count=0;
for (let i= 0; i < 100; i++) {
    if (i%5==0 || i%3==0) {
        count+=i;
    }  
}
console.log(count)