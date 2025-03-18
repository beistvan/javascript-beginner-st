function testMathDiv(a, b, c, d) {
    z = Math.max(a, b, c, d);   
    y = Math.min(a, b, c, d); 
    x = z / y;
    x = Math.floor (x);
    return(x);
}
