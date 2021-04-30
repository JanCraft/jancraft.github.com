const path = location.pathname.split('/');
path.shift();

if (path[0] == 'wawary') {
    const comingsoon = document.getElementById('wawary_comingsoon');
    const current = document.getElementById('wawary_current');

    if (1619859600000 - Date.now() <= 0) {
        current.hidden = false;
        comingsoon.remove();
    } else {
        comingsoon.hidden = false;
        current.remove();

        setInterval(() => {
            const timeleft = 1619859600000 - Date.now();

            const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

            comingsoon.innerHTML = "<center><br><br><h1>" + days + "d " + hours + "h "
            + minutes + "m " + seconds + "s </h1></center><br><br>";

            if (timeleft <= 0) location.reload();
        }, 1000);
    }
}