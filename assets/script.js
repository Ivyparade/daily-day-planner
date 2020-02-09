var calendar = $(".container");
var time = new Date();
console.log(time.getHours());

for (var i = 9; i < 18; i++) {
    var x = i;
    if (x > 12) {
        x = x - 12
        console.log("the time is: " + x + " PM")
    } else {
        console.log("the time is: " + x + " AM")
    }
}
