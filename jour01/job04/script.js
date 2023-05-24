function test (a) {
    if (a%4==0 && a%100!=0 || a%4==0 && a%100==0 && a%400==0) {
        console.log('bissextile');
    } else {
        console.log('non bissextile')
    }
}
