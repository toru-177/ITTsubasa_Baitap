let a = +prompt("Nhập số a:");
let b = +prompt("Nhập số b:");

if (isNaN(a) || isNaN(b)) {
    alert("Vui lòng nhập số!");
} else if (b === 0) {
    alert("Không thể chia cho 0!");
} else if (a % b === 0) {
    alert("a chia hết cho b");
} else {
    alert("a không chia hết cho b");
}