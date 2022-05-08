const numArray = require("./2numArray_filter");

test('should return array with param num div', () => {
    let numList = [1,2,3,4,5,6,7,8,9,10]
    let num = 2

    let result = numArray(numList, num);
    expect(result).toContain(2,4,6,8,10);
})