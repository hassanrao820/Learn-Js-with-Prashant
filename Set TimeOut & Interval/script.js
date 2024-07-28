//? Set Time Out
let alarm = () => {
    console.log('Alarm Ringing!');
};
setTimeout(alarm, 5000);
console.log('It will ring the alarm after 5 seconds');

//? Set Interval
let Alarm = () => {
    console.log(`Subha ho gayi ${new Date()}`);
};
let intervalId = setInterval(Alarm, 1000);
console.log('It will ring the alarm every 5 seconds');
setTimeout(() => clearInterval(intervalId), 5000);