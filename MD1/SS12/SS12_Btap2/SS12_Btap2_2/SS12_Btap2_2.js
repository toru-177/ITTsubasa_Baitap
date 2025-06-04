let m = +prompt("Nhập độ dài (mét) muốn chuyển đổi:");

if (isNaN(m) || m<0 ) {
    alert("Hãy nhập độ dài bằng số hợp lệ!")
} else {
    let f = m * 3.28;
    alert(`Độ dài (feet) tương ứng là: ${f}f`);
}