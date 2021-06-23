/* Here we have the javascript code which takes care of the countdown to the event.
I think including a countdown is a great idea for the event soo the visitors remain alerted on the date!
*/

const second = 1000,
minute = second * 60,
hour = minute * 60,
day = hour * 24;

let countDown = new Date('August 5, 2021 18:00:00').getTime(),
x = setInterval(function() {

let now = new Date().getTime(),
    distance = countDown - now;

document.getElementById('days').innerText = Math.floor(distance / (day)),
document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

//do something later when date is reached
if (distance < 0) {
 clearInterval(x);
 /*initialize the various fields with zero when the event reaches and display an alert 
 message to inform visitor the event has reach
 */
 document.getElementById('days').innerHTML = 0,
 document.getElementById('hours').innerText = 0,
 document.getElementById('minutes').innerText = 0,
 document.getElementById('seconds').innerText = 0;
 document.getElementById('today').innerText = "The event starts today, Hurry up we are waiting for you!";
}

}, second)
