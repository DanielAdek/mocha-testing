function even() {
    let result = 0;
    for (let i = 0; i <= 10; i++) {
        if (i % 2 === 0) {
            result += i;
        }
    }
    return result;
};
const Algorithm = {
    evenNumber: even,

    oddNumber: function() {
        let sum = 0;
        for (let i = 0; i <= 10; i = i + 2) {
            sum += i;
        }
        return sum;
    }
}

module.exports = Algorithm;