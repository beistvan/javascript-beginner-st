function testWhile(a) {
    var x = 0;

    var i = 2;

    while (i <= a) {
        x += i;
        i += 2;
    }

    return x;
}
