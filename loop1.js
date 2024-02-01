// Loop: for, while, do-while
function Sequence() {
    console.log("Inside Sequence");
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
}
function Iteration_For() {
    console.log("Iteration_For()");
    var i = 0;
    for (i = 1; i <= 5; i++) {
        console.log("Hello");
    }
}
function Iteration_While() {
    console.log("Iteration_While()");
    var i = 1;
    while (i <= 5) {
        console.log("Hello");
        i++;
    }
}
Sequence();
Iteration_For();
Iteration_While();
