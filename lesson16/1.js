document.getElementById('r1').oninput = cssGenerator;

function cssGenerator() {
    //прямоугольник
    var div = document.getElementById('test');
    console.log(this.value);
    div.style.borderRadius = this.value + 'px';
}

let button = function(){
    document.getElementById("test").style.backgroundColor = "#" + document.getElementById("color").value;
    document.getElementById("test").style.width = document.getElementById("width").value+ 'px';
    document.getElementById("test").style.height = document.getElementById("height").value+ 'px';
}
