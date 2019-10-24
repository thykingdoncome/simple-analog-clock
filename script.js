const secHand = document.querySelector('.secHand');
const minHand = document.querySelector('.minHand');
const hourHand = document.querySelector('.hourHand');

function getCurrentTime() {
    const seconds = new Date().getSeconds();
    const secToDeg = ((seconds / 60) * 360) + 90;
    secHand.style.transform = `rotate(${secToDeg}deg)`;

    const minutes = new Date().getMinutes();
    const minToDeg = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minToDeg}deg)`;

    const hours = new Date().getHours();
    const hourToDeg = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourToDeg}deg)`;
}
setInterval(getCurrentTime, 1000);