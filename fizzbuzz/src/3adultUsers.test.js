const adultUsers = require("./3adultUsers")

test('recive objects array and return array >= 18', () => {

    let users = [
        {
            name: "Nat",
            age: 47,
        },
        {
            name: "Joan",
            age: 16,
        },
        {
            name: "Ariadna",
            age: 30,
        },
    ]

    let result = adultUsers(users)
    let expected = [
        {
            name: "Nat",
            age: 47,
        },
        {
            name: "Ariadna",
            age: 30,
        },
    ]

    expect(result).toMatchObject(expected);

})