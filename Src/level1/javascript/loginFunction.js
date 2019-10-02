/* loginFunction.js */
/* description */
/* login 페이지에 적용되는 js 파일 */
/* history */
/* 20191001     0.0.0   html 코드와 분할    김한동 */
/* 20191002     0.0.1   회원가입, ID/PW 찾기 페이지 이동 함수 추가  김한동 */

/* :: TODO :: */

function setDarkMode() {
    const date = new Date();
    const darkModeFlag = date.getHours();

    if(darkModeFlag >= 6 && darkModeFlag < 18) {
        document.bfColor = "white";
        document.fgColor = "black";
    } else {
        document.bgColor = "black";
        document.fgColor = "white";
    }
}

function login() {

    const id = document.getElementsByName('id')[0].value;
    const pw = document.getElementsByName('password')[0].value;

    if(id == "test" && pw == "test") {
        alert("login access");
        document.getElementById("loginfunction").submit();
    } else {
        alert("login fail");
    }
}

function moveToRegister() {
    location.href="regUser.html";
}

function moveToFind() {
    location.href="findIDPW.html";
}