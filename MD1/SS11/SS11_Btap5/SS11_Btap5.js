let weight = Number(prompt("Nhập vào cân nặng (kg):"));
let height = Number(prompt("Nhập vào chiều cao (m):"));

if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Vui lòng nhập số dương!");
} else {
    let BMI = weight / (height ** 2);

    if (BMI < 18.5) {
        alert("Cân nặng thấp (gầy)");
    } else if (BMI >= 18.5 && BMI < 25) {
        alert("Cân nặng bình thường");
    } else if (BMI >= 25 && BMI < 30) {
        alert("Tiền béo phì");
    } else if (BMI >= 30 && BMI < 35) {
        alert("Béo phì độ I");
    } else if (BMI >= 35 && BMI < 40) {
        alert("Béo phì độ II");
    } else if (BMI >= 40) {
        alert("Béo phì độ III");
    }
}