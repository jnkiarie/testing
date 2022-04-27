const {substraction, addition} = require('./index');


test('Calculator can add and Subtract', () =>{
    //EXPECTATION VS RESULT
    expect(addition(1,2)).toBe(3);
    expect(substraction(5,2)).toBe(3);
})

test('Calculator can Subtract', () =>{
    //EXPECTATION VS RESULT
    expect(substraction(5,2)).toBe(3);
})