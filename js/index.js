let hours = document.querySelector('#hour');
let mins = document.querySelector('#min');
let secs = document.querySelector('#sec');
let day = document.querySelector('#day');
let img = document.querySelector('img');
let main = document.querySelector('.wrapper')
let a = 1;

var randomColor = function(){
    let sym = '0123456789ABCDEF'
    let col = '#';

    for(i=0;i<6;i++){
        color += sym[Math.floor(Math.random() * 16)]
    }
}

let clock = function (){
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let days = time.getDay();

    let h = (hour * 30) + (min / 2);
    let m = (min * 6) + (sec / 10);
    let s = sec * 6;

    hours.style.transform = `rotate(${h}deg)`
    mins.style.transform = `rotate(${m}deg)`
    secs.style.transform = `rotate(${s}deg)`

    switch(days){
        case 1:
            days = 'monday'
            break;
        case 2:
            days = 'tusday'
            break;
        case 3:
            days = 'wensday'
            break;
        case 4:
            days = 'thrusday'
            break;
        case 5:
            days = 'friday'
            break;
        case 6:
            days = 'saturday'
            break;
        case 7:
            days = 'sunday'
            break;
    }
    day.innerText = days;

    let sym = '0123456789ABCDEF'
    let col = '#';

    for(i=0;i<6;i++){
        col += sym[Math.floor(Math.random() * 16)]
        document.querySelector('.clock').style.boxShadow = `0 0 30px ${col}`;
        day.style.boxShadow = `0 3px 5px ${col}`
    }
    
}

setInterval(clock, 1000);

setInterval(() => {
    a++;
    if(a>3){
        a=1;
    }
    main.style.backgroundImage = `url(imgs/bg${a}.jpg)`
}, 4000);