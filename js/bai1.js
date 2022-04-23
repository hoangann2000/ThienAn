/**
 * Khối 1 input:
 *  luong1Ngay = Lương 1 ngày
 *  soNgayLam = số ngày làm
 *  
 * Khối 2:
 *  tạo biến và gắn giá trị
 *  xây dựng công thức
 * khối 3 : 
 *  output 
 */
var result1 = document.getElementById("txtResult1");

function tinhTienLuong() {
    var luong1Ngay = document.getElementById("luongNgay").value;
    var soNgayLam =document.getElementById("soNgay").value;
    var tongLuong = luong1Ngay * soNgayLam;

    result1.innerHTML = "Tổng lương = " + tongLuong.toLocaleString();

    result1.classList.add("styleText");
}



