function testDateTime(a, b) {

    let date1 = new Date(a);
    let date2 = new Date(b);

    let largerDate = date1 > date2 ? date1 : date2;

    const daysOfWeek = [
        "Sunday", "Monday", "Tuesday", "Wednesday", 
        "Thursday", "Friday", "Saturday"
    ];

    return daysOfWeek[largerDate.getDay()];
}
