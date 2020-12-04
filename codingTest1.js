let tests = [
    { name: "Test 1", myString: "xxxy", maxRepeat: 2, testCompleted: false, myResult: "" },
    { name: "Test 2", myString: "xxyy", maxRepeat: 1, testCompleted: false, myResult: "" },
    { name: "Test 3", myString: "xxxxyyyyxx", maxRepeat: 1, testCompleted: false, myResult: "" },
    { name: "Test 4", myString: "aaaabbbbccccdddd", maxRepeat: 1, testCompleted: false, myResult: "" },
    { name: "Test 5", myString: "aaaabbbbccccdddd", maxRepeat: 2, testCompleted: false, myResult: "" },
    { name: "Test 6", myString: "aaaabbbbccccdddd", maxRepeat: 3, testCompleted: false, myResult: "" },
]

function test(myString, maxRepeat, testCompleted, myResult) {
    if ((myString.length == 0) || (maxRepeat <= 0)) {
        return ""
    }

    if (myString.length <= maxRepeat) {
        return myString
    }

    var count = 1
    var prev = myString[0]
    var newString = prev
    for (let i = 1; i < myString.length; i++) {
        let cur = myString[i]
        if (cur == prev && count < maxRepeat) {
            newString += cur
            count += 1
        } else if (cur != prev) {
            newString += cur
            count = 1
        }
        prev = cur
    }
    myResult = newString
    testCompleted = !testCompleted

    return myResult
}

for (t in tests) {
    console.log(tests[t].name, test(tests[t].myString, tests[t].maxRepeat, tests[t].testCompleted, tests[t].myResult))
}