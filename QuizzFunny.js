class Question {
    constructor(content, answer, correctAnswer, point) {
        this.content = content;
        this.answer = answer;
        this.correctAnswer = correctAnswer;
        this.point = point;
    }

    checkAnswer(answer) {
        if (answer === this.correctAnswer) {
            return true
        }
    }

}

let sound = new Audio()
let sound2 = new Audio()
sound2.src = "Audio/vit.mp3"
sound.src = "Audio/audio.mp3"
let question1 = new Question(
    "Câu 1.Anh không muốn cưa em đổ, vì nhìn em ngã thì thương quá đi. Là câu hát nổi tiếng trong bài hát nào?",
    ["A.Anh nhà ở đâu thế", "B.Nhà anh ở đâu thế", "C.Em nhà ở đâu đấy", "D.Còn câu hỏi nào khó hơn không?"],
    "A.Anh nhà ở đâu thế",
    "0");
let question2 = new Question(
    "Câu 2. Trong bài hát \"Anh nhà ở đâu thế\" địa chỉ nhà anh nằm ở đâu?",
    ["A.Trong tim em", "B.Hỏa Lò", "C.Trâu Quỳ", "D.Biết thế ** nào được ??"],
    "D.Biết thế ** nào được ??",
    "Giỏi lắm tiếp nào");
let question3 = new Question(
    "Câu 3:Trong phim “Aladin và cây đèn thần”, thần đèn mặc áo màu gì?",
    ["A.Tím", "B.Trắng", "C.Cởi Trần", "D.Nude"],
    "C.Cởi Trần",
    "Được 2 câu rồi");
let question4 = new Question(
    "Câu 4:Trong MV \"Em gái mưa\", tóc của Hương Tràm có màu gì?",
    ["A.Nắng", "B.Gió", "C.Đen", "D.7 sắc cầu vồng"],
    "C.Đen",
    "Được 3 câu rồi");
let question5 = new Question(
    "Câu 5:Trong truyện \"Cô bé quàng khăn đỏ\", bà tiên xuất hiện khi nào?",
    ["A.Lúc gặp chó sói", "B.Lúc bị sói ăn thịt", "C.Lúc gặp 7 chú lùn", "D.Bà kiêu không thèm xuất hiện"],
    "D.Bà kiêu không thèm xuất hiện",
    "Được 4 câu rồi");
let question6 = new Question(
    "Câu 6:Phương tiện nào được sử dụng trong bài hát \"12 giờ\"?",
    ["A.Xe Đạp", "B.Phân khối lớn", "C.Đi bộ", "D.Maybach S650 Pullman"],
    "A.Xe Đạp",
    "Penta Kill");
let question7 = new Question(
    "Câu 7:Ăn gì không no nhưng ai cũng thích?",
    ["A.Ăn Đập", "B.Ăn Bả", "C.Ăn Tiền", "D.Ăn...(trong sáng lên anh em :v)"],
    "C.Ăn Tiền",
    "Hexa Kill");
let question8 = new Question(
    "Câu 8:Trên bàn có 5 con ruồi, 2 con ruồi đực, 3 con ruồi cái đậu vào thức ăn. A bực mình, A đập chết 2 con. Hỏi còn mấy con ruồi?",
    ["A.Nguyên 5 con", "B.Không còn con nào", "C.Còn 3 con", "D.Còn 2 con "],
    "D.Còn 2 con ",
    "Ối dồi ôi Kinh Thặc");
let question9 = new Question(
    "Câu 9:Bức tranh nàng Mônalisa, người đẹp này không có gì?",
    ["A.Lông mi", "B.Lông mày", "C.Tóc xoăn", "D.Mặc áo dài tay"],
    "B.Lông mày",
    "Trên thông thiên văn ");
let question10 = new Question(
    "Câu 10:Trên nhấp nhô, dưới giật giật là đang làm gì?",
    ["A.Làm gì là làm gì", "B.Câu cá", "C.Đi thuyền", "D.ekekeke"],
    "B.Câu cá",
    "Dưới tường địa lý");
let question11 = new Question(
    "Câu 11:Ở Việt Nam, một thằng mù và Ba thằng điếc đi ăn phở, mỗi người ăn một tô. Mỗi tô phở là 10 ngàn đồng. Hỏi ăn xong họ phải trả bao nhiêu tiền?",
    ["A.10k", "B.20k", "C.30k", "D.40k"],
    "B.20k",
    "Giỏi lắm giải thích xem");
let question12 = new Question(
    "Câu 12:Điền vào chỗ trống: Đều như... ",
    ["A.Vắt Chanh", "B.Vắt Tranh", "C.Vắt Quất", "D.Vắt Cam"],
    "B.Vắt Tranh",
    "Ba thằng điếc là bố của thằng điếc ");
let question13 = new Question(
    "Câu 13:Đâu là tên một loại bánh nổi tiếng ở Huế?",
    ["A.Khoái", "B.Thích", "C.Phê", "D.Sướng"],
    "A.Khoái",
    "Lên google tìm Vắt Tranh xem nó là qq gì nhé");
let question14 = new Question("Câu 14:Nhân vật chị Dậu trong tác phẩm Tắt đèn của Ngô Tất Tố có tên thật là gì?",
    ["A.Lê Thị Đào", "B.Lê Thị Mai", "C.Lê Thị Xuân", "D.Lê Thị Lan"],
    "A.Lê Thị Đào",
    "Khoái Khoái Khoái, chảy nước miếng , chảy nước miếng");
let question15 = new Question(
    "Câu 15: Ai cũng biết đến 18 Vua Hùng. Vậy Vua Hùng Họ gì?",
    ["A.Họ Lộc", "B.Họ Hùng", "C.Họ Hàng", "D.Họ Vương"],
    "A.Họ Lộc",
    "Trả lời được hết là lấy le với Gái đc rồi.");
let question16 = new Question(
    "Hết rồi đợi ra phiên bản thương mại rồi chơi tiếp nhé. Chúc Vui!! ",
    ["" ,"", "", ""],
    "",
    "");


let array = [
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
    question8,
    question9,
    question10,
    question11,
    question12,
    question13,
    question14,
    question15,
    question16
];
// Hiển thị câu hỏi và câu trả lời
function disPlay(num) {
    document.getElementById('question').innerHTML = num.content

    for (let i = 0; i < 4 ; i++) {
        document.getElementById('cau' + (i + 1)).innerHTML = num.answer[i];
    }
}
// Next câu hỏi
function nextQuestion(i) {
    i++;
    disPlay(array[i]);
}
let count = 0;
function checkTrueFalse(id) {
    let answer = document.getElementById(id).innerHTML;
    if (array[count].checkAnswer(answer)) {
        nextQuestion(count);
        count++;
        document.getElementById('result').innerHTML =(array[count].point);
        sound.play()
        alert('Khá quá nhờ!');
    } else {
        sound2.play()
        alert("Sai rồi bạn êi")
    }
}
