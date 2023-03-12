var insert = prompt('Введите цвет светафора').toLowerCase().trim()
var red = ['Stop']
var yellow = ['Get ready']
var green = ['Go']

// 1.option if else (написала оба варианта)

// if (insert === 'red'){
//     console.log(red)
// }
// else if (insert === 'yellow'){
//     console.log(yellow)
// }
// else if (insert === 'green'){
//     console.log(green)
// }
// else {alert ('Надо вводить цвета светофора')
//     }


// 2.option switch case
switch (insert){
    case 'red':
        console.log(red)
        break
    case 'yellow':
        console.log(yellow)
        break
    case 'green':
        console.log(green)
        break
    default:
        alert ('надо вводить цвета светофора')
        break
}

/////////////////////////////////////////////////////////
//1.For

for (var i = 20; i >= 0; i --){
    console.log(i)
}


//2.Думаю что это не правильно

// var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// arr.reverse()
// console.log(arr)

var arr = [10, 20, 30,50, 235, 3000]
var answer = [ ]
for(i of arr){
    newI=String(i)
    if(newI[0]==="1" ){
        answer.push(newI)
    }else if(newI[0]==="2"){
        answer.push(newI)
    }else if (newI[0]==="5"){
        answer.push(newI)}
}
console.log(answer);