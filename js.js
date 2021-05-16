var x = 00, y = 00, z = 00;
var interval;
var a = document.getElementById("second");
var b = document.getElementById("minus");
var c = document.getElementById("hour");
function Count() {
    x++;
    if (x <= 9) a.innerHTML = " 0" + x;
    else a.innerHTML = " " + x;
    if (x == 60) {
        x = 00; y++;
        a.innerHTML = " 0" + x;
        if (y <= 9) b.innerHTML = " 0" + y;
        else b.innerHTML = " " + y;
    }
    if (y == 60) {
        y = 00; z++;
        b.innerHTML = " 0" + y;
        if (z <= 9) c.innerHTML = " 0" + z;
        else c.innerHTML = " " + z;
    }
}
function start() {
    clearInterval(interval);
    interval = setInterval(Count, 1000);
    document.getElementById("start").disabled = true;
}
function stop() {
    document.getElementById("start").disabled = false;
    clearInterval(interval);
}
function reset() {
    clearInterval(interval);
    document.getElementById("start").disabled = false;
    x = 0, y = 0, z = 0;
    a.innerHTML = " 0" + x;
    b.innerHTML = " 0" + y;
    c.innerHTML = " 0" + z;
}