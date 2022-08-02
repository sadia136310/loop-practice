var numbers = [10, 3, 74, 65, 73, 64, 24, 71, 57, 45, 69, 48, 166, 95, 128];

for (var i = 0; i < numbers.length; i++) {

    var number = numbers[i];
    if (number > 100) {
        continue;
    }
    console.log(number);

}