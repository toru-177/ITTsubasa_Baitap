let a = +prompt("Mời bạn nhập vào số a:");
let b = +prompt("Mời bạn nhập vào số b:");
let c = prompt("Mời bạn nhập vào các phép tính (+, -, *, /):");

let result;
switch (c) {
    case "+":
        result = a + b
        alert(`Kết quả của phép tính trên: a + b = ${result}`)
    break;
    case "-":
        result = a - b
        alert(`Kết quả của phép tính trên: a - b = ${result}`)
    break;
    case "*":
        result = a * b
        alert(`Kết quả của phép tính trên: a * b = ${result}`)
    break;
    case "/":
        result = a / b
        alert(`Kết quả của phép tính trên: a / b = ${result}`)
    break;
    default:
        alert("Hệ thống chưa thể thực hiện được phép tính này!")
    break;
}