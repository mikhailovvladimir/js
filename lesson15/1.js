var radio = document.getElementsByName('prim');//получаем элементы по имени
for (var i = 0; i < radio.length; i++) {
    radio[i].onchange = testRadio;//вешаем на все элементы массива событие
}

function testRadio() {
    console.log(this.value);//значение текущего события
}

document.getElementById('one').onclick = checkRadio;//вешаем на ай ди в хтмл событие

function checkRadio() {
    var m = document.getElementsByName('prim'); //получаем элементы по имени

    for (var i = 0; i < m.length; i++) {
        if (m[i].checked) { //
            alert(m[i].value);
            break;
        }
    }
}