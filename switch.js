// printing an alarm
let day="wednesday"
switch(day){
    case "monday":
        console.log("7am");
        break
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
        console.log("6:50am")// since these days alarm is the same we can use one console and add a break 
        break
    case 'saturday':
        console.log("7:30m");
    case 'sunday':
        console.log("8:00am");
    
}