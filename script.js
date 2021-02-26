// Delay script execution to prevent DOMException errors
setTimeout(() => {
    let date = new Date();

    let currentDay = date.getDay();

    let goldenCookieClickCount = 0;

    setInterval(() => {
        checkIfGoldenCookieExists();
    }, 1000);


    function checkIfGoldenCookieExists(){
        if(document.body.contains(document.getElementsByClassName("shimmer")[0])){
            document.getElementsByClassName("shimmer")[0].addEventListener("click", clickGoldenCookie);
        }
    }

    function clickGoldenCookie(){
        goldenCookieClickCount++;
        console.log(`You have clicked ${goldenCookieClickCount} golden cookies for the day of ${date}`);
        insertIntoLocalStorage(date, goldenCookieClickCount);
        if(date.getDay() != new Date().getDay()){
            // Hide all logged clicks
            console.clear();

            // Reset golden cookie click count for the day
            goldenCookieClickCount = 0;

            date = new Date();
        }
    }

    function insertIntoLocalStorage(date, goldenCookieClickCount){
        localStorage.setItem(`${date}`, `${goldenCookieClickCount} clicked on ${date}`);
    }
}, 2000)