// EX 4

for (i=1; i<=100; i++) {
    if (i%3 == 0 && i%5 == 0) {
        console.log("You win 2 points (1p for 3 and 1p for 5)")
    } else {
        if (i%3 == 0) {
            console.log("You win 1 point (1p for 3)")
        } else {
            if (i%5 == 0) {
                console.log("You win 1 point (1p for 5)")
            } else {
                console.log(i)
            }
        }
    }

}