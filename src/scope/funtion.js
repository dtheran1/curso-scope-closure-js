let userName;
function greeting() {
    userName = 'Eberlin'
    console.log(userName);

    if (userName === 'Eberlin') {
        console.log(`Hello ${userName}!`);
    }
}

greeting();

console.log(userName);//Funtion Scope 