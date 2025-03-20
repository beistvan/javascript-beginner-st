function testErrorFunc(a, func) {
    try {
        func(a);
    } catch (error) {
        return error.name;
    }
}
