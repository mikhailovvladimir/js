// function pow2() {
//     //в текущем документе получить элемент по id.то что ввел пользователь
//     let num1 = document.getElementById('inp1').value
//     alert(num1 * num1)
// }

function plus() {
    let numberOne = parseInt(document.getElementById('num1').value);
    let numberTwo = parseInt(document.getElementById('num2').value);
    let result = numberOne + numberTwo;
    
    document.getElementById('result').innerHTML = result;
}

function minus() {
    let numberOne = parseInt(document.getElementById('num1').value);
    let numberTwo = parseInt(document.getElementById('num2').value);
    let result = numberOne - numberTwo;

    document.getElementById('result').innerHTML = result;
}