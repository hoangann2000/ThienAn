/**
 * khối 1: input
 *  vnd là giá trị 1 usd = 23500
 *  usd
 * khối 2: 
 *  khai báo biến và gán giá trị
 *  xây dựng công thức
 * khối 3: output
 *  result
 */

var vnd = 23500;
var sum = 0;
var result = document.getElementById("txtResult3");

function tinhUsd(){
    var usd = document.getElementById("usd").value;
    sum = vnd * usd;
    result.innerHTML = usd + " USD = " + sum.toLocaleString() + "VND";
    result.classList.add("styleText");
}



