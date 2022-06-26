import { capitalize,reverse,calculator,ceaser,analyzeArr, } from "./index.js";


test("Capitalize the string",()=>{
    expect(capitalize("abc")).toBe("Abc");
});

test("Reverse The String",()=>{
    expect(reverse("ABC")).toBe("CBA");
});

test("Calculator Add",()=>{
    expect(calculator.add(10,20)).toBe(30);
});

test("Calculator Sub",()=>{
    expect(calculator.sub(10,20)).toBe(-10);
});

test("Calculator Div",()=>{
    expect(calculator.div(10,20)).toBe(0.5);
});
test("Calculator Mul",()=>{
    expect(calculator.mul(10,20)).toBe(200);
});

test("Ceaser Cipher",()=>{
    expect(ceaser("ABC")).toBe("BCD");
});

const arr=[10,20,30,40];

test("Analze Array Avg",()=>{
    expect(analyzeArr(arr).average).toBe(25);
});

test("Analze Array Min",()=>{
    expect(analyzeArr(arr).min).toBe(10);

});

test("Analze Array Max",()=>{
    expect(analyzeArr(arr).max).toBe(40);

});

test("Analze Array Length",()=>{
    expect(analyzeArr(arr).length).toBe(4);
});
