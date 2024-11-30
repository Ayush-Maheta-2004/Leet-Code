var createCounter = function(n) {
    return function() {
        return n++
    };
};

const newFun = createCounter(-2)
console.log(newFun())
console.log(newFun())
console.log(newFun())
console.log(newFun())
console.log(newFun())
console.log(newFun())