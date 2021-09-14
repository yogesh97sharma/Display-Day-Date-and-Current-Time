//Grab day of the week from local computer
let date = new Date();
let dayOfWeekNumber = date.getDay();
dates = date.toDateString();
time = date.toLocaleTimeString();
let nameOfDay;
let quote;

switch(dayOfWeekNumber){
    case 0: 
        nameOfDay = 'Sunday';
        quote = 'Time to chillax!';
        break;
    case 1:
        nameOfDay = 'Monday';
        quote = 'Monday blues!';
        break;
    case 2:
        nameOfDay = 'Tuesday';
        quote = 'Happy Tuesday!';
        break;
    case 3:
        nameOfDay = 'Wednesday';
        quote = 'CRAZY Wednesday!';
        break;
    case 4:
        nameOfDay = 'Thursday';
        quote = 'Amazing Thusday!';
        break;
    case 5:
        nameOfDay = 'Friday';
        quote = 'Weekend Friday!';
        break;
    case 6:
        nameOfDay = 'Saturday';
        quote = 'Time to party!';
        break;

}
//Display the day of the week
let weekdayDiv = document.getElementById('weekday');
weekdayDiv.innerHTML = `${nameOfDay}`;

//Display quote
let quoteDiv = document.getElementById('phrase');
quoteDiv.innerHTML = `${quote}`

let datessDiv = document.getElementById('Taariq');
datessDiv.innerHTML = `${dates}`

let timesDiv = document.getElementById('samay');
timesDiv.innerHTML = `${time}`
    