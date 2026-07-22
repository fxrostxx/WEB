function Factorial() {
    let numberElement = document.getElementById("number");
    let number = numberElement.value;
    let result = BigInt(1);
    for (let i = 1n; i <= number; ++i) result *= i;
    let resultElement = document.getElementById("factorial-result");
    resultElement.innerHTML = `${number}! = ${result}`;
}
function SetImage() {
    let filename = document.getElementById("image-file");
    let reader = new FileReader();
    reader.onload = function (e) {
        document.getElementById("image").src = e.target.result;
    }
    reader.readAsDataURL(filename.files[0]);
}
//function SetBackgroundColor(event) {
//    document.body.style.backgroundColor = event.target.value;
//}
//function SetForegroundColor() {
//    document.body.style.color = document.getElementById("foreground-color").value;
//}
function SetColor(event) {
    if (event.target.id === "background-color") document.body.style.backgroundColor = event.target.value;
    else document.body.style.color = event.target.value;
}