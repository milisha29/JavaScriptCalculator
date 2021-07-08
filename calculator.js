console.log('Hello friends! This is my project of calculator along with a digital clock');
function updateClock() {
    let mydate = new Date();
    let hours = mydate.getHours();
    let minutes = mydate.getMinutes();
    let seconds = mydate.getSeconds();
    let str = (hours > 12) ? "PM" : "AM";
    if (hours > 12) hours = hours - 12;
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    if (hours == 00) hours = 12;
    let currentstr = `${hours}:${minutes}:${seconds}` + ' ' + str;
    let button = document.getElementById('btn');
    button.innerHTML = currentstr;
}
let buttons = document.querySelectorAll('button');
let screen = document.getElementById("screen");
let str = "";
for (let items of buttons) {
    items.addEventListener('click', function func1(e) {
        let buttontext = e.target.innerText;
        if (buttontext == 'C') {
            str = "";
            screen.value = 0;
        }
        else if (buttontext == 'x') {
            buttontext = '*';
            str += buttontext;
            screen.value = str;
        }
        else if (buttontext == "back") {
            str = str.slice(0, -1);
            screen.value = str;
        }
        else if (buttontext == "pi") {
            screen.value = str + "π";
            str += String(Math.PI);
            console.log(str);
        }
        else if (buttontext == "√") {
            screen.value = str + '√';

        }
        else if (buttontext == '=') {
            if (str.includes('3.14')) screen.value = eval(str);
            else screen.value = eval(screen.value);
            str = String(screen.value);
        }
        else {
            str += buttontext;
            screen.value = str;
        }

    });

}