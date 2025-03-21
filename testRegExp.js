function testRegExp(s, sub_s) {

    let regex = new RegExp(sub_s, 'g');

    let matches = s.match(regex);

    return matches ? matches.join(',') : '';
}
