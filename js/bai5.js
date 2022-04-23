/**
 * khối 1: input
 *  txtNumber là chữ số tự cho
 * khối 2: 
 *  khai báo a và sum
 *  xây dựng công thức sum = txtNumber % 10 + txtNumber / 10 - (txtNumber % 10)/10
 * khối 3: ouput 
 *  sum
 */


var sum = 0;
var result = document.getElementById("txtResult5")

function tinhTong() {
    var txtNumber = document.getElementById("bai5").value;

    sum = txtNumber % 10 + txtNumber / 10 - (txtNumber % 10)/10;
    result.innerHTML = "Tổng = " + sum;
    result.classList.add("styleText");
}


