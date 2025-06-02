let a = +prompt("Nhập một số nguyên a bất kỳ:");
let b = +prompt("Nhập một số nguyên b bất kỳ:");
let c = +prompt("Nhập một số nguyên c bất kỳ:");

if (isNaN(a) || isNaN(b) || isNaN(c) || !Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c)) {
    alert("Hãy nhập số nguyên hợp lệ")
} else {
    alert(`Số lớn nhất là: ${Math.max(a, b, c)}`);
}