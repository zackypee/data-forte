let i = 1;

while (i <= 500) {
    let isPrime = true;
    if (i < 2) {
        isPrime = false;
    } else {
        let j = 2;
        while (j <= Math.sqrt(i)) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
            j++;
        }
    }

    let divisibleBy5 = i % 5 === 0;
    if (isPrime && divisibleBy5) {
        console.log("PrimeBuzz");
    } else if (isPrime) {
        console.log("Prime");
    } else if (divisibleBy5) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
    i++;
}-