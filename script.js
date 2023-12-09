function clock() {
    var monthNames = ["jauary", "february", "march", "aprit", "may", "june", "july", "august", "september", "october", "november", "december"];
    var dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

    var today = new Date();
    
    document.getElementById("date").innerHTML = (dayNames[today.getDay()] + " " + today.getDate() + " " + monthNames[today.getMonth()] + " " + today.getFullYear());

    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var day = h < 11 ? "am" : "pm";

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    document.getElementById("hourss").innerHTML = h;
    document.getElementById("minn").innerHTML = m;
    document.getElementById("secc").innerHTML = s;
}
var inter = setInterval(clock, 1000);

// my anolag clock script goes to here

const hr = document.getElementById("hours");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

function displayTime() {
    let d = new Date();

    let hh = d.getHours();
    let mm = d.getMinutes();
    let ss = d.getSeconds();
    let ff = d.getMilliseconds();

    let hRotation = 30 * hh + mm / 2;
    let mRotation = 6 * mm + 0.1 * ss;
    let sRotation = 6 * ss;
    //let sRotation = 6 * ss + 0.006* ff;
    //let fRotation = 0.006 * ff;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

}

setInterval(displayTime, 1000);