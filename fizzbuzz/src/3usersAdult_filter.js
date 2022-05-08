const adultUsers = (users) => {

    let userArray = users.filter(person => person.age >=18)
    return userArray;
}

module.exports = adultUsers;