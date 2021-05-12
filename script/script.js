// 작업내용
// 1. 점수입력란에 0~100 사이의 점수를 입력
// 2. 입력 후 "학점확인" 버튼을 클릭하면
//     "학점"란에 A, B, C, D, F 중에 1개를 출력함
// 3. 학점 규칙
//     A => 점수 90점 이상 100점 이하
//     B => 점수 80점 이상 90점 미만
//     C => 점수 70점 이상 80점 미만
//     D => 점수 60점 이상 70점 미만
//     F => 점수 60점 미만

$(function(){

    $("#sbmBtn").click(function(){

        var score = parseInt($("#score").val());
        var scoreGrade;

        if(score>=90 && score<=100) {
            scoreGrade = "A";
        } else if(score>=80 && score<90) {
            scoreGrade = "B";
        } else if(score>=70 && score<80) {
            scoreGrade = "C";
        } else if(score>=60 && score<70) {
            scoreGrade = "D";
        } else if(score>=0 && score<60) {
            scoreGrade = "F";
        } else {
            scoreGrade = "0~100사이의 숫자만 입력하세요!";
        }

        $("#res").text(scoreGrade);

    });

});
