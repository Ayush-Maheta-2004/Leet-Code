var createHelloWorld = function() {
    return function(...args) {
        return "Hello World!"
    }
};

const newFun = createHelloWorld(1,2,3)
console.log(newFun(1,2,3))