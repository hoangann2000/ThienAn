/**
 * khối 1: input
 *  num1-num5 là 5 số tự cho
 *  
 * khối 2: 
 *  tạo biến gán giá trị
 *  xây dựng công thức
 * khối 3: output
 *  tb
 */
var tb = 0;
var result = document.getElementById("txtResult2")

function tinhTrungBinh() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var num4 = document.getElementById("num4").value;
    var num5 = document.getElementById("num5").value;

    tb = (Number(num1) + Number(num2) + Number(num3) +Number(num4) +Number(num5)) / 5;

    result.innerHTML = "Tổng trung bình cộng = " + tb;
    result.classList.add("styleText");
    
}

// tb = (num1 + num2 + num3 + num4 + num5) /5
// console.log("Trung binh: " + Math.round(tb));
// console.log("Trung binh: " + tb.toFixed(2));