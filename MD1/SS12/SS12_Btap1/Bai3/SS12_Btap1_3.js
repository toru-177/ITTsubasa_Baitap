let number = +prompt("Nhập số nguyên bất kỳ:")

if (isNaN(number) || !Number.isInteger(number)) {
    alert("Hãy nhập số nguyên hợp lệ!")
} else if (number > 0) {
    alert("Số lớn hơn 0")
} else if (number < 0) {
    alert("Số bé hơn 0")
} else {
    alert("Số bằng 0")
}