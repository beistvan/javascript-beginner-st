function testLogical(a, b) {
    let difference = a - b;
    let notDifference = !difference;
    return a && notDifference;
}
