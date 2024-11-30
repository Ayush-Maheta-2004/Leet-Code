var expect = function(val) {
  return {
    toBe:function(otherVal){
        if(val === otherVal){
            return true;
        }else{
            throw "Not equal"
        }
    },
    notToBe:function(otherVal){
        if(val !== otherVal){
            return true;
        }else{
            throw "equal"
        }
    }
  }  
};

// 1)
try {
    console.log(expect(5).toBe(5)); // true
} catch (e) {
    console.log(e); 
}

// 2)
try {
    console.log(expect(5).toBe(6)); // Throws "Not Equal"
} catch (e) {
    console.log(e); // "Not Equal"
}

// 3)
try {
    console.log(expect(5).notToBe(5)); // Throws "Equal"
} catch (e) {
    console.log(e); // "Equal"
}
  
// 4)
try {
    console.log(expect(5).notToBe(6)); // true
} catch (e) {
    console.log(e); 
}