let a = prompt("Введите имя")
function print1(arg){
 console.log(arg.length)

}
print1(a)


let num1 = Number(prompt("num1"))
let num2 = Number(prompt("num2"))
function minNum(a,b){
    if(a>b){
        console.log(b)
    }else if(b>a){
        console.log(a)
    }else{
        console.log('enter number');
    }
}
minNum(num1 , num2 )

const int1 = Number(prompt("num1"))
const symbol = prompt("+,-,*,/")
const int2 = Number(prompt("num2"))

function calc(a, sb ,b){
    if(sb==='+'){
        console.log(a+b)
    }else if(sb==="-"){
        console.log(a-b)
    }else if(sb==="*"){
        console.log(a*b)
    }else if(sb==="/"){
        if(a===0 || b===0 ){
            alert('error')
        }else{
            console.log(a/b)
        }
    }else{
        console.log('error')
    }
}
calc(int1 , symbol , int2)

