var dayplanner = $(".container");
var time = new Date();
var hour = time.getHours();
var day = time.getDate();
var month = time.getMonth();
var year = time.getFullYear()

var months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

$("#currentDay").text(months[month] + " " + day + " " + year);

for (var i = 9; i < 18; i++) {
    var x = i;
    if (x > 12) {
        x = x - 12
        console.log("the time is: " + x + " PM")
    } else {
        console.log("the time is: " + x + " AM")
    }
}


