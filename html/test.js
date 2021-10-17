function foo1(a, b) {
    for (var i = 0; i < 5; i++) {
        console.log(false)
    }
}

foo1()

function bar() {}

const newLocal = {
    // region newLocal
    name: 'aaa',
    age: 12,
    // endregion
}
let aaa = newLocal

foo1()