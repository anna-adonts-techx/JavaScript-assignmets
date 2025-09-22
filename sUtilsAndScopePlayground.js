    // Part A: JavaScript Utilities Library (Functions)
    //     Build a mini utility library with reusable JavaScript functions.    Requirements:
    // Create at least 6 utility functions:
    // Use one function declaration, one function expression, and one arrow function.
    // Each function should solve a clear problem (e.g., math, string manipulation, array processing).
    // Write test calls with real data and log the results.Group and label each function block clearly in your code.Use meaningful parameter names and clear return values.

    // function declaration
    // 1
    function sqrt(a) {
    return a ** (1 / 2);
    }
    console.log(sqrt(9));

    // 2
    function getFirstElement(array) {
    return array[0];
    }

    let arr = [6, "panir", 2.3, 7];
    console.log(`The first element of my array: ${getFirstElement(arr)}`);

    // function expression
    // 1
    const factorial = function (a) {
    if (a < 0) {
        return undefined;
    }
    if (a === 0 || a === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= a; i++) {
        result *= i;
    }
    return result;
    };

    console.log(`The factorial of 5: ${factorial(5)}`);

    // 2

    const getArea = function (a, b, c) {
    let half_p = (a + b + c) / 2;
    let area = Math.sqrt(half_p * (half_p - a) * (half_p - b) * (half_p - c));

    return area;
    };

    console.log(`The area of my (3,4,5) sided triangle: ${getArea(3, 4, 5)}`);

    // arrow function
    // 1
    const getPrismVolume = (a, b, c, h) => {
    let half_p = (a + b + c) / 2;
    let baseArea = Math.sqrt(half_p * (half_p - a) * (half_p - b) * (half_p - c));
    return baseArea * h;
    };

    console.log(
    `The volume of my triangular prism: ${getPrismVolume(3, 4, 5, 10)}`
    );

    // 2
    const pyramidVolume = (a, b, c, h) => {
    let half_p = (a + b + c) / 2;
    let baseArea = Math.sqrt(half_p * (half_p - a) * (half_p - b) * (half_p - c));
    return (baseArea * h) / 3;
    };

    //   Part B: Scope Simulation & Analysis
    //     Demonstrate understanding of how JavaScript scope works by creating a simulation that uses:    Requirements:
    // A global variable that is used inside and outside functions.
    // A function that declares:
    // A var variable at function level.
    // A let and const inside a block (if, for, etc.).
    // A nested function that tries to access all declared variables.
    // Add comments explaining:
    // Which variables are accessible where.
    // Why some access attempts succeed or fail.
    //     You should clearly show and explain the difference between function scope and block scope.

    let globalVar = "This is a global variable.";

    function scope() {
    var functionVar = "This is a function scoped var";

    // block

    if (1) {
        let blockLet = "This is a block scoped let";
        const blockConst = "This is a block scoped const";

        console.log("Inside the block:");
        console.log(globalVar, "Global scope");
        console.log(functionVar, "Function scoped var");
        console.log(blockLet, "Let in the block");
        console.log(blockConst, "Const in the block");
    }

    console.log(blockLet)
    // console.log(blockConst)  Error cz both of these are not accessible here

    function nestedFunction() {
        console.log("Inside the nested function");
        console.log(globalVar, "Global scope");
        console.log(functionVar, "Function scoped var");
        console.log(blockLet) // not accessible cz it's in the block scope
        // console.log(blockConst) // not accessible cz it's in the block scope
    }

    nestedFunction();
    }

    scope();

    console.log("Outside function");
    console.log(globalVar);

    // Part C: Hoisting & TDZ Debugger
    //     Simulate and explain how hoisting and temporal dead zone affect variable access.    Requirements:
    // Use var, let, and const:
    // Access each variable before it's declared to show how hoisting behaves differently.
    // Include both variable and function hoisting examples.Log and label each case:
    // Which one logs undefined
    // Which one throws a ReferenceError
    // Write a short explanation as comments beside each log about what happened and why.

    console.log("Variable Hoisting");

    console.log(varVar); //undefined cz var is hoisted to the top of its scope but not initialized yet
    var varVar = 10;

    // console.log(letVar); // This will throw ReferenceError, let variable hoisting (TDZ)
    // let letVar = 20;

    // console.log(constVar) // This will throw ReferenceError, const variable hoisting (TDZ)
    // const constVar = 30;

    console.log("Function hoisting");

    console.log(declaredFunc(5)); // works fine
    function declaredFunc(x) {
    return x * x;
    }

    console.log(exprFunc(5)); //TypeError: exprFunc is not a function, because exprFunc is hoisted as undefined.
    var exprFunc = function (x) {
    return x + x;
    };

    console.log(arrowFunc(5)); //This will throw ReferenceError (TDZ)
    let arrowFunc = (x) => x - x;
