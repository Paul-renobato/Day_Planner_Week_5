var dateToday = moment();
$("#currentTime").text(dateToday.format("dddd: MMM Do, YYYY"));

function timeUpdate(){
    var time = moment().format("h:mm:ss a");
    currentTime=$("#currentTime");
    currentTime.text(time);
}
var scheduleTime=$(".row");
var startTime=moment("9:00", "HH:mm, a");
var endTime=moment("17:00", "HH,mm,a");
var hours=["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"]