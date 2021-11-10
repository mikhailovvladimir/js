var m = {}
var n = {
    "one": 12,
    "hello": "world",
    "prim": 2000,
    "double key": 777
};

n.one = 9000;
console.log(n['double key'])
var ppp = 'hello'
var out = document.getElementById('out')
console.log(n[ppp])
for (var key in n) {
    out.innerHTML += key + ' ';
}