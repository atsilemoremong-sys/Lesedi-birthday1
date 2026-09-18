// September 20 birthday countdown

let birthday = new Date(
    2026,
    8,
    20,
    0,
    0,
    0
).getTime();



function updateCountdown(){

    let now = new Date().getTime();


    let distance = birthday - now;



    let days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );


    let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );


    let minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );


    let seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );



    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;

}



setInterval(updateCountdown, 1000);


updateCountdown();