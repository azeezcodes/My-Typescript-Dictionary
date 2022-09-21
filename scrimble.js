var names = 'azeez';
var age = 78;
var gender = true;
var review = [
    {
        name: "ben",
        age: 8
    }, {
        name: "jude",
        age: 11
    }, {
        name: "rita",
        age: "3"
    }
];
function checklen() {
    return "the number of the people here are ".concat(review.length, " and the last person is ").concat(review[0].name);
}
console.log(checklen());
