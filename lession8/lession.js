/*
* Math.floor - округляет в нижнюю сторону
* Math.random - генерирует случайное число 
*/ 
function f1() {
    var num, prNum, out, tempOut;
    // 1 - 10
    prNum = Math.floor((Math.random() * 10) + 1);
    tempOut = document.getElementById('temp-out');
    tempOut.innerHTML = prNum;

    num = document.getElementById('mynum').value;
    out = document.getElementById('out');

    if (num == prNum) {
        out.innerHTML = 'Вы угадали';
    } 
    else if (num > prNum) {
        out.innerHTML = 'Вы ввели число больше чем нужно';
    } 
    else {
        out.innerHTML = 'Вы ввели число меньше'
    }
}