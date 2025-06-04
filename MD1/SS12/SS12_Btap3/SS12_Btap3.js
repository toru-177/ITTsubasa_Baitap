let count = 0;  // Để đếm số nguyên tố
let num = 2;    // Là số bắt đầu kiểm tra
let primes = ""; // Để lưu kết quả

while (count < 20) {
    let isPrime = true;
    
    // Vòng lặp kiểm tra số nguyên tố
    if (num <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= num / 2; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    
    // Lưu kết quả
    if (isPrime) {
        primes += num;
        count++;
        
        // Thêm dấu phẩy
        if (count < 20) {
            primes += ", ";
        }
    }
    
    num++; // Xét số tiếp theo
}

alert(`20 số nguyên tố đầu tiên là:\n ${primes}`);