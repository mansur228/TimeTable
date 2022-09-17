// let nowDate = new Date('September 22, 2022 20:30:30');
let nowDate = new Date();

let WeekTimeTable = document.getElementById('#WeekTimeTable')

function getCurrentWeekDay() {
    if (nowDate.getDay() !== 0 && nowDate.getDay() !== 6) {
        return nowDate.getDay() - 1
    } else {
        return 0
    }
}
console.log(nowDate.getDay() - 1)

$(document).ready(function () {
    $('#WeekTimeTable').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        initialSlide: getCurrentWeekDay()
    });
});