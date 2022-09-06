// function moneyBox(coins) {
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`MoneyBox: ${saveCoins}`);
// }

// moneyBox(2)
// moneyBox(6)


function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: ${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox()

myMoneyBox(3)
myMoneyBox(2)
myMoneyBox(10)