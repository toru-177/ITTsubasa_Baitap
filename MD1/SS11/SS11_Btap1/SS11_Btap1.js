let year = Number(prompt("Nhập vào một năm bất kỳ:"));

if (year % 4 == 0 && year % 100 != 0) {
    alert(`Năm ${year} là năm nhuận`);
} else {alert(`Năm ${year} không phải là năm nhuận`)}