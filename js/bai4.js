/**
 * khối 1: input
 *  a b là chiều dài và chiều rộng
 * khối 2 : 
 *   khai báo biến và gán giá trị
 *  xây dựng công thức
 * khối 3: output
 *  dt , cv
 */

var dt = 0;
var cv = 0;
var result = document.getElementById("txtResult4");
    
function tinhDienTich(){
    var width = document.getElementById("width").value;
    var height = document.getElementById("height").value;
    dt = width * height;
    cv = (Number(width)  +Number(height))*2;
    result.innerHTML = " Diện tích HCN = " + dt + " Và Chu vi HCN = " + cv;
    result.classList.add("styleText");
}
