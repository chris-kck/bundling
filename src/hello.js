import Circle from './circle.js';

window.onload = () => {
    console.log("hello");

    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => a / b;

    const sqrt = (a) => Math.sqrt(a);
    const square = (a) => a * a;
    const pow = (a, b) => Math.pow(a, b);
    const cube = (a) => a * a * a;

    const asyncAdd = (a, b, callback) => {
        setTimeout(() => {
            callback(a + b);
        }, 1000);
    }

    //check async await transpilation vs callback bundling

    const positiveAdd = (a, b) => {
        return new Promise((resolve, reject) => {
            if (a < 0 || b < 0) {
                reject('Numbers must be positive');
            }
            setTimeout(() => {
                resolve(a + b);
            }, 1000);
        });
    }

    //get element references
    const addElement = document.getElementById("add");
    const subtractElement = document.getElementById("subtract");
    const multiplyElement = document.getElementById("multiply");
    const divideElement = document.getElementById("divide");
    const circleElement = document.getElementById("circle");


    const first = document.getElementById("firstNumber");
    const second = document.getElementById("secondNumber");
    const resultElement = document.getElementById("result");
    let result=0;

    //add onclick event listeners

    //try-catch es5 / 6 feature
    addElement.addEventListener("click", async () => {
        try {
            result = await positiveAdd(parseInt(first.value), parseInt(second.value));
            resultElement.innerHTML= (result);
        } catch (e) {
            resultElement.innerHTML= (e);
        }
    });

        subtractElement.addEventListener("click", () => {
            result = subtract(parseInt(first.value), parseInt(second.value));
            resultElement.innerHTML= (result);
        });

        multiplyElement.addEventListener("click", () => {
            result = multiply(parseInt(first.value), parseInt(second.value));
            resultElement.innerHTML= (result);
        });

        divideElement.addEventListener("click", () => {
            result = divide(parseInt(first.value), parseInt(second.value));
            resultElement.innerHTML= (result);
        });

        //class es6 feature - check how its bundled / transpiled.
        circleElement.addEventListener("click", () => {
            result = new Circle(parseInt(first.value));
            resultElement.innerHTML= (result.toString());
        });


        // result.addEventListener("click", () => {
        //     document.getElementById("demo").innerHTML = `Result: ${resultfirst.value, second.value)}`;
        // });

//leaves out comments, whitespace, and unused code
//minifies code
//tree shaking
//webpack, rollup, parcel, browserify
}

//optimizations examples:
//!0 ===true
//1000 === 1e3