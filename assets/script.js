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
        x = x - 12;
        var ampm = x + "PM";
    } else {
        var ampm = x + "AM";
    }
    if (hour === i) {
        mode = "present";
    } else if (hour > i) {
        mode = "future";
    } else if (hour < i) {
        mode = "past";
    }
    var itenerary = localStorage.getItem(ampm);
    if (typeof itenerary === "object") {
        var schedule = "";
    } else {
        schedule = itenerary;
    }

    var timebox = $('<div class="row"></div>');
    var hourDisplay = $('<div class="hour col-1">' + ampm + '</div>');
    var timeblock = $('<div class="col-10 time-block ' + mode + '"></div>');
    var hourInput = $('<input type="text" data-ampm = "' + ampm + '" class="form-control textarea ' + mode + ' " placeholder = "' + schedule + '">');
    var Btn = $('<button class="saveBtn col-1">save</button>');
    timebox.append(hourDisplay);
    timeblock.append(hourInput);
    timebox.append(timeblock);
    timebox.append(Btn);
    $(".container").append(timebox);

}

$(".saveBtn").on("click", function(event) {
    console.log(event.target.previousSibling.firstChild.value);
});





