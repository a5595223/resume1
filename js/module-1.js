!function () {
    var person = {
        name: 'frank',
        age: 18
    }
    window.frankGrowUp = function () {
        person.age += 1
        return person.age
    }

}.call()