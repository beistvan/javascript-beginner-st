function testArray(a, b) {

    let arr = a.split('').concat(b.split(''));

    arr.unshift('Johnson');

    return arr.reverse().join('');
}
