var date  = new Date(Date.UTC(2016, 4, 6, 12, 0, 0));
var now   = new Date();
var diff  = date.getTime()/1000 - now.getTime()/1000;

var clock = $('.clock').FlipClock(diff, {
    clockFace: 'DailyCounter',
    countdown: true,
    showSeconds: false
});