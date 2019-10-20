function clock() {
    
    //Lay thoi gian thuc va tinh goc quay cho cac kim dong ho
    var time = new Date;
    var second = time.getSeconds(),
        s = second * 360/60;
    var minute = time.getMinutes(),
        m = minute * 360/60 + s/60;
    var hour = time.getHours(),
        h = hour % 12 * 360/12 + m/12;

    //Cai dat thuoc tinh transform: rotate() cho cac kim dong ho
    function setAngle(id, val) {
        var v = 'rotate(' + val + 'deg)';
        document.getElementById(id).style.transform = v;
    }

    function tiktak() {
        setAngle('second', s+180);
        setAngle('minute', m+180);
        setAngle('hour', h+180);

        var hour_num = document.getElementById('hour_num'),
            minute_num = document.getElementById('minute_num'),
            second_num = document.getElementById('second_num'),
            ampm = document.getElementById('ampm');
        if(hour<12) {
            ampm.innerText = 'AM';
            hour_num.innerText = hour;
        } else {
            ampm.innerText = 'PM';
            hour_num.innerText = hour - 12;
        }
        minute_num.innerText = minute;
        second_num.innerText = second;

        setTimeout(clock, 1000);
    }
    tiktak();
}
clock();


var analog_mode = document.querySelector('#analog_mode'),
    digital_mode = document.querySelector('#digital_mode'),
    analog_clock = document.querySelector('.analog_clock'),
    digital_clock = document.querySelector('.digital_clock');
function show_mode(mode) {
    if(mode==1) {
        analog_mode.style.backgroundColor = '#4619af';
        digital_mode.style.backgroundColor = 'unset';
        analog_clock.style.visibility = 'visible';
        digital_clock.style.visibility = 'hidden';
    } else if(mode==2) {
        analog_mode.style.backgroundColor = 'unset';
        digital_mode.style.backgroundColor = '#4619af';
        analog_clock.style.visibility = 'hidden';
        digital_clock.style.visibility = 'visible';
    }
}
analog_mode.onclick = function() {
    show_mode(1);
}
digital_mode.onclick = function() {
    show_mode(2);
}
window.onload = function() {
    show_mode(1);
}