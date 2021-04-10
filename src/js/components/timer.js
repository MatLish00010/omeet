export default function initializeClock(endtime) {
    const clock = document.querySelector("[data-countdow]");
    const daysSpan = clock.querySelector("[data-countdow-days]");
    const hoursSpan = clock.querySelector("[data-countdow-hours]");
    const minutesSpan = clock.querySelector("[data-countdow-minutes]");

    function updateClock() {
        const total = getTimeRemaining(endtime);

        daysSpan.innerHTML = total.days;
        hoursSpan.innerHTML = ('0' + total.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + total.minutes).slice(-2);

        if (total.total <= 0) {
            clearInterval(timeInterval);
        }
    }

    updateClock();
    const timeInterval = setInterval(updateClock, 1000);
}

function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
        'total': total,
        'days': days,
        'hours': hours,
        'minutes': minutes
    };
}




