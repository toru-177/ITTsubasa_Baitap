let c = +prompt("Nhập vào nhiệt độ (°C) muốn chuyển đổi:")

if (isNaN(c)) {
    alert("Hãy nhập nhiệt độ bằng số!")
} else {
    let f = (c * 1.8) + 32;
    alert(`Nhiệt độ °F tương ứng là: ${f}°F`);
}