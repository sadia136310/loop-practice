// for (var i = 0; i <= 20; i++) {
//     console.log(i);
//     if (i > 7) {
//         break;
//     }
// }

// var roastGiven = 0;
// while (roastGiven < 10) {
//     roastGiven++;
//     if (roastGiven > 4) {
//         break;
//     }
//     console.log("roast dan pls")

// }
// var items = ['table', 'sunglass', 'pen', 'computer'];
// for (var i = 0; i < items.length; i++) {
//     var item = items[i];
//     if (item == 'pen') {
//         break;
//     }
//     console.log(item);

// }


var numbers = [10, 3, 74, 65, 73, 64, 24, 71, 57, 45, 69, 48, 166, 95, 128];

for (var i = 0; i < numbers.length; i++) {

    var number = numbers[i];
    if (number > 100) {
        break;
    }
    console.log(number);

}