let testScores = +prompt("Nhập điểm bài kiểm tra (0-10):");
let midScores = +prompt("Nhập điểm giữa kỳ (0-10):");
let finalScores = +prompt("Nhập điểm cuối kỳ (0-10):");

if ([testScores, midScores, finalScores].some(scores => 
    isNaN(scores) || scores < 0 || scores > 10)) {
        alert("Điểm chưa hợp lệ!");
} else {
    const average = (testScores + midScores + finalScores) / 3;
    if (average === 10) {
        alert("Xếp loại xuất sắc!");
    } else if (average < 10 && average >= 8) {
        alert("Xếp loại giỏi!")
    } else if (average < 8 && average >= 6.5) {
        alert("Xếp loại khá!")
    } else if (average < 6.5 && average > 4) {
        alert("Xếp loại trung bình!")
    } else {
        alert("Xếp loại yếu!")
    }
}