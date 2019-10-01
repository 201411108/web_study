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

    // TODO :: 다음 페이지로 넘어가도록 설정
    if(id == "test" && pw == "test") {
        alert("login access");
        // location.href="afterlogin.html";
        document.getElementById("loginfunction").submit();
    } else {
        alert("login fail");
    }
}