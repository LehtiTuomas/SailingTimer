function Timer() {
    // Get data from UI
    let date, time, x, countDownDate;
    date = document.getElementById('date').value;
    time = document.getElementById('time').value;

    // Get timecode for the set time
    x = new Date(date + " " + time).toISOString();
    countDownDate = new Date(x).getTime();

    Countdown(countDownDate);
}


function Countdown(countDownDate) {
    let y, now, distance, days, hours, minutes, seconds;

    // Update the count down every 1 second
    y = setInterval(function () {

        // Get today's date
        now = new Date().getTime();

        // Find the distance between now and the count down date
        distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        days = Math.floor(distance / (1000 * 60 * 60 * 24));
        hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("days").innerHTML = days + " päivää";
        document.getElementById("hours").innerHTML = hours + " tuntia";
        document.getElementById("minutes").innerHTML = minutes + " minuuttia";
        document.getElementById("sekonds").innerHTML = seconds + " sekunttia";

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(y);
            document.getElementById("days").innerHTML = "Purjehduskausi on alkanut!";
            document.getElementById("hours").innerHTML = "";
            document.getElementById("minutes").innerHTML = "";
            document.getElementById("sekonds").innerHTML = "";

        }
    }, 1000)
}
