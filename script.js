function Solve(val) {
    var v = document.getElementById('res');            //Operations
    v.value += val;
 }
 function Square() {                                   //Square numbers
    var d = document.getElementById('res').value;  
    var c = eval(d*d);                      
    document.getElementById('res').value = c;
 }
 function Result() {                                   //Final Answer
    var num1 = document.getElementById('res').value;
    var num2 = eval(num1);
    document.getElementById('res').value = num2;
 }
 function Clear() {                                    //Clear
    var inp = document.getElementById('res');      
    inp.value = '';
 }
 function Back() {                                     //Backspace
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0,-1);
 }