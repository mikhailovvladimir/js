var arr = ['hello', 'how', 'are', 'you', 11, 33];
arr[6] = 'chelovek';

function getArr() {
    var p = document.getElementById('out');
    var str = '';

    for (var i = 0; i < arr.length; i++) {
        str += i + ' === ' + arr[i] + '<br>';
    }

    p.innerHTML = str;
}

function pushInArray() {
    var element = document.getElementById('element').value;
    arr.push(element);
    getArr();
}

function deleteInArray() {
    arr.pop();
    getArr();
}
