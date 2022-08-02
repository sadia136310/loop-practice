var myWorks = ['everyday unlock module at 8PM', 'practice with video', 'take notes', 'keep practice after complete video', 'if any problem join support session'];
var i = 10;
while (i > 1) {
    i--;
    console.log(i);
    var j = 0;
    while (j < myWorks.length) {
        j++;
        var myDay = myWorks[j - 1];
        if (myWorks[4] == false) {
            console.log('go to support');
        }
        console.log(myDay);
    }

}

