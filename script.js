const sec = document.getElementById('second');
const min = document.querySelector('#minute');
const hr = document.querySelector('#hour');

setInterval(() => {
    let date = new Date();
    let s = date.getSeconds();
    let m = date.getMinutes();
    let h = date.getHours();
    let hRotation = 30 * h + m / 2;
    let mRotation = 6 * m;
    let sRotation = 6 * s;
    sec.style.transform = `rotate(${sRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    hr.style.transform = `rotate(${hRotation}deg)`;
}, 1000);