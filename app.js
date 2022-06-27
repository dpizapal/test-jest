// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}
// solo un registro en consola para nosotros.
console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
//dolar a yen
function fromDollarToYen (dollar){
    return dollar*135.46;
}
//euro a dolar
function fromEuroToDollar(euro){
    return euro*1.06;
}
//yen a pound
function fromYenToPound(yen){
    return yen*0.0060;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }