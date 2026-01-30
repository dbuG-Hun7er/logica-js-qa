//MDC - Máximo Divisor Comum



function mdc(x, y) {
    while (y !== 0) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    return Math.abs(x);
}
//console.log(mdc(48, 18));
module.exports = { mdc };