function Factorial() {
    let numberElement = document.getElementById("number");
    let number = numberElement.value;
    let result = BigInt(1);
    for (let i = 1n; i <= number; ++i) result *= i;
    let resultElement = document.getElementById("factorial-result");
    resultElement.innerHTML = `${number}! = ${result}`;
}