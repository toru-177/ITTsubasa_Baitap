let age = +prompt("Nhập vào tuổi muốn kiểm tra:")

if (isNaN(age) || age < 0) {
    alert("Hãy nhập số tuổi hợp lệ!")
} else if (age < 15) {
    alert ("Chưa đủ tuổi vào lớp 10!")
} else if (age > 16 ) {
    alert("Đã quá tuổi vào lớp 10!")
} else {
    alert("Độ tuổi hợp lý để vào lớp 10!")
}