//1
var str = prompt("input");
function Calculator(str) {
    var arr = str.match(/\d/g);
    var d = str.match(/\D/g);
    var n = arr.length-1;
    var s = +arr[0];
    for (i=1; i<=n; i++) {
        if (d[i] == "+") {var s = s + (arr[i]*1)}
        else if (d[i] == "-") {var s = s - (arr[i]*1)}
        else if (d[i] == "*") {var s = s * (arr[i]*1)}
        else if (d[i] == "/") {var s = s / (arr[i]*1)}
    }

    return s;
};
Calculator(str);
var powerCalc = new Calculator;
powerCalc.addMethod('*', function(a, b) {
    return a * b;
});
powerCalc.addMethod('/', function(a, b) {
    return a / b;
});
powerCalc.addMethod('**', function(a, b) {
    return Math.pow(a, b);
});

var result = powerCalc.calculate('2 ** 3');
console.log( result ); // 8

//2
function User(fullName) {
    this.fullName = fullName;
    Object.defineProperties(this, {
        firstName: {
            get: function () {
                return this.fullName.split(' ')[0];
            },
            set: function (newFirstName) {
                this.fullName = newFirstName + ' ' + this.lastName;
            }
        },
        lastName: {
            get: function() {
                return this.fullName.split(' ')[1];
            },
            set: function(newLastName) {
                this.fullName = this.firstName + ' ' + newLastName;
            }
        }
    });
};

var vasya = new User('Александр Пушкин');