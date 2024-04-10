
var first_Count;
var second_Count;
var res;
const results = [];
function plusing(el) {
    first_Count = document.getElementById('first').value;
    second_Count = document.getElementById('second').value;
    first_Count = parseFloat(first_Count);
    second_Count = parseFloat(second_Count);
    var resultat = document.createElement('p')
    resultat.id = 'result';
    res = first_Count + second_Count;
    resultat.textContent = first_Count + second_Count;
    var resultElement = document.getElementById('result');
    resultElement.textContent = first_Count + second_Count;
    var symboli = document.getElementById('symbol');
    symboli.textContent = "+";
    storing(res);
}
function minusing(el) {
    first_Count = document.getElementById('first').value;
    second_Count = document.getElementById('second').value;
    first_Count = parseFloat(first_Count);
    second_Count = parseFloat(second_Count);
    var resultat = document.createElement('p')
    resultat.id = 'result';
    res = first_Count - second_Count;
    resultat.textContent = first_Count + second_Count;
    var resultElement = document.getElementById('result');
    resultElement.textContent = res;
    var symboli = document.getElementById('symbol');
    symboli.textContent = "-";
    storing(res);
}
function umnzh(el) {
    first_Count = document.getElementById('first').value;
    second_Count = document.getElementById('second').value;
    first_Count = parseFloat(first_Count);
    second_Count = parseFloat(second_Count);
    var resultat = document.createElement('p')
    resultat.id = 'result';
    res = first_Count * second_Count;
    resultat.textContent = first_Count + second_Count;
    var resultElement = document.getElementById('result');
    resultElement.textContent = res;
    var symboli = document.getElementById('symbol');
    symboli.textContent = "*";
    storing(res);
}
function del(el) {
    first_Count = document.getElementById('first').value;
    second_Count = document.getElementById('second').value;
    first_Count = parseFloat(first_Count);
    second_Count = parseFloat(second_Count);
    var resultat = document.createElement('p')
    resultat.id = 'result';
    res = first_Count / second_Count;
    resultat.textContent = first_Count + second_Count;
    var resultElement = document.getElementById('result');
    resultElement.textContent = res;
    var symboli = document.getElementById('symbol');
    symboli.textContent = "/";
    storing(res);
}
function step(el) {
    first_Count = document.getElementById('first').value;
    second_Count = document.getElementById('second').value;
    first_Count = parseFloat(first_Count);
    second_Count = parseFloat(second_Count);
    var resultat = document.createElement('p')
    resultat.id = 'result';
    res = first_Count ** second_Count;
    resultat.textContent = first_Count + second_Count;
    var resultElement = document.getElementById('result');
    resultElement.textContent = res;
    var symboli = document.getElementById('symbol');
    symboli.textContent = "^";
    storing(res);
}
function sqrt(el) {
    first_Count = document.getElementById('first').value;
    second_Count = document.getElementById('second').value;
    first_Count = parseFloat(first_Count);
    second_Count = parseFloat(second_Count);
    var resultat = document.createElement('p')
    resultat.id = 'result';
    res = first_Count ** (1 / second_Count);
    resultat.textContent = first_Count + second_Count;
    var resultElement = document.getElementById('result');
    resultElement.textContent = res;
    var symboli = document.getElementById('symbol');
    symboli.textContent = "sqrt";
    storing(res);
}
function persent(el) {
    first_Count = document.getElementById('first').value;
    second_Count = document.getElementById('second').value;
    if (second_Count == "") {
        first_Count = parseFloat(first_Count);
        second_Count = parseFloat(second_Count);
        var resultat = document.createElement('p')
        resultat.id = 'result';
        res = first_Count * (1/100);
        resultat.textContent = first_Count + second_Count;
        var resultElement = document.getElementById('result');
        resultElement.textContent = res;
        var symboli = document.getElementById('symbol');
        symboli.textContent = "%";
        storing(res);
    }
    else{
        alert("Нужно, чтобы было введено только 1 число");
    }
}
function sin(el) {
    first_Count = document.getElementById('first').value;
    second_Count = document.getElementById('second').value;
    if (second_Count == "") {
        first_Count = parseFloat(first_Count);
        second_Count = parseFloat(second_Count);
        var resultat = document.createElement('p')
        resultat.id = 'result';
        res = Math.sin(first_Count);
        resultat.textContent = first_Count + second_Count;
        var resultElement = document.getElementById('result');
        resultElement.textContent = res;
        var symboli = document.getElementById('symbol');
        symboli.textContent = "sin";
        storing(res);
    }
    else{
        alert("Нужно, чтобы было введено только 1 число");
    }
}
function cos(el) {
    first_Count = document.getElementById('first').value;
    second_Count = document.getElementById('second').value;
    if (second_Count == "") {
        first_Count = parseFloat(first_Count);
        second_Count = parseFloat(second_Count);
        var resultat = document.createElement('p')
        resultat.id = 'result';
        res = Math.cos(first_Count);
        resultat.textContent = first_Count + second_Count;
        var resultElement = document.getElementById('result');
        resultElement.textContent = res;
        var symboli = document.getElementById('symbol');
        symboli.textContent = "cos";
        storing(res);
    }
    else{
        alert("Нужно, чтобы было введено только 1 число");
    }
}
function tan(el) {
    first_Count = document.getElementById('first').value;
    second_Count = document.getElementById('second').value;
    if (second_Count == "") {
        first_Count = parseFloat(first_Count);
        second_Count = parseFloat(second_Count);
        var resultat = document.createElement('p')
        resultat.id = 'result';
        res = Math.tan(first_Count);
        resultat.textContent = first_Count + second_Count;
        var resultElement = document.getElementById('result');
        resultElement.textContent = res;
        var symboli = document.getElementById('symbol');
        symboli.textContent = "tan";
        storing(res);
    }
    else{
        alert("Нужно, чтобы было введено только 1 число");
    }
}
function ctg(el) {
    first_Count = document.getElementById('first').value;
    second_Count = document.getElementById('second').value;
    if (second_Count == "") {
        first_Count = parseFloat(first_Count);
        second_Count = parseFloat(second_Count);
        var resultat = document.createElement('p')
        resultat.id = 'result';
        res = Math.atan(first_Count);
        resultat.textContent = first_Count + second_Count;
        var resultElement = document.getElementById('result');
        resultElement.textContent = res;
        var symboli = document.getElementById('symbol');
        symboli.textContent = "ctg";
        storing(res);
    }
    else{
        alert("Нужно, чтобы было введено только 1 число");
    }
}
function Pi(el) {
    first_Count = document.getElementById('first').value;
    second_Count = document.getElementById('second').value;
    second_Count = "";
    if (second_Count == "" ) {
        first_Count = parseFloat(first_Count);
        var resultat = document.createElement('p')
        resultat.id = 'result';
        res = Math.PI;

        var resultElement = document.getElementById('second');
        resultElement.value = res;
        var symboli = document.getElementById('symbol');
        symboli.textContent = "pi =";
        storing(res);
    }
    else{
        alert("Не заполняйте второе поле");
    }
}
function e(el) {
    first_Count = document.getElementById('first').value;
    second_Count = document.getElementById('second').value;
    second_Count = "";
    if (second_Count == "" ) {
        first_Count = parseFloat(first_Count);
        var resultat = document.createElement('p')
        resultat.id = 'result';
        res = Math.E;

        var resultElement = document.getElementById('second');
        resultElement.value = res;
        var symboli = document.getElementById('symbol');
        symboli.textContent = "E =";
        storing(res);
    }
    else{
        alert("Не заполняйте второе поле");
    }
}
function log(el) {
    first_Count = document.getElementById('first').value;
    second_Count = document.getElementById('second').value;
    if (second_Count == ""){
        first_Count = parseFloat(first_Count);
        second_Count = parseFloat(second_Count);
        res = Math.log(first_Count);
        var resultat = document.createElement('p')
        resultat.id = 'result';
        resultat.textContent = first_Count + second_Count;
        var resultElement = document.getElementById('result');
        resultElement.textContent = res;
        var symboli = document.getElementById('symbol');
        symboli.textContent = "log";
        storing(res);
    }
    else if (first_Count != "" && second_Count != ""){
        first_Count = parseFloat(first_Count);
        second_Count = parseFloat(second_Count);
        res = Math.log(first_Count) / Math.log(second_Count);
        var resultat = document.createElement('p')
        resultat.id = 'result';
        resultat.textContent = first_Count + second_Count;
        var resultElement = document.getElementById('result');
        resultElement.textContent = res;
        var symboli = document.getElementById('symbol');
        symboli.textContent = "log";
        storing(res);
    }

}
function storing(res) {
    results.push(res);
    var str = document.getElementById('history');
    str.textContent = results.join('\n');
    var result = results.slice(-1);
    document.getElementById('first').value = result;
}