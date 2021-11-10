//получаю все элементы с тегом p
var p = document.getElementsByTagName('p');
//получаю все классы one
var one = document.getElementsByClassName('one');
console.log(p);


// перебираю все элементы массива p и накидываю событие f1
for(var i = 0; i < p.length; i++) {
    p[i].onclick = f1;
}

// перебираю все элементы массива one и накидываю событие f2
for(var i = 0; i < one.length; i++) {
    one[i].onclick = f2;
}


//выовжу в консоль те элеметы над которыми произошли собтия
function f1() {
    console.log(this)
    this.style.background = 'pink';
}

function f2() {
    this.style.fontWeight = 'bold';
}

//this - это та переменная в которую помещаетая
// тот элемент на котором произошло событие