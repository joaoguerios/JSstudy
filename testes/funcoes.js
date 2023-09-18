function bigger(x, y) {
    if (x >= y) {
        return x;
    } else {
        return y;
    }
};
console.log(bigger(1, 6));

//ou

function bigger2(x, y) {
    return x > y ? x : y;
};
console.log(bigger(1, 6));

function epaisagem(wid, hei) {
    return wid > hei ? true : false;
};
console.log(epaisagem(1920, 1080));

function fizzbuzz(number) {
    if (number % 3 == 0 && number % 5 == 0){
        return 'buzzfizz';
    }else if (number % 3 == 0) {
        return 'fizz';
    } else if (number % 5 == 0) {
        return 'buzz';
    } else{return number;}
};
for (let i=1;i<=100;i++){
    console.log(fizzbuzz(i));};