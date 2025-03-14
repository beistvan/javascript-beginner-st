function testArrayReduce(a, b) {
    return a.reduce((x, y) => x + y, 0) + b.reduce((x, y) => x + y, 0)
}
