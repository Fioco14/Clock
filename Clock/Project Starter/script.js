const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Satureday"];
const months = ["Jan", "Feb", "Mar", "Apr", "may", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', () => {
    const html = document.querySelector('html')
    if(html.classList.contains('dark')) {
        html.classList.remove('dark');
        toggle.innerText = 'Dark mode'
    } else {
        html.classList.add('dark');
        toggle.innerText = 'Light mode';
    }
});

function setTime() {
    let date = new Date();
    let second = date.getSeconds() / 60;
    let minute = (date.getMinutes() + second) / 60;
    let hour = (date.getHours() + minute) / 12;
    
    secondEl.style.transform = "translate(-50%, -100%) rotate(" + (second * 360) + "deg)";
    minuteEl.style.transform = "translate(-50%, -100%) rotate(" + (minute * 360) + "deg)";
    hourEl.style.transform = "translate(-50%, -100%) rotate(" + (hour * 360) + "deg)";

    


}

setTime()

setInterval(setTime, 1000)
