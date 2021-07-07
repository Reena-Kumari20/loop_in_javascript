let input=require('readline-sync')
var div_length=Number(input.question("Enter the number: "))
var i=0
while (i<=div_length){
    if (i%7===0){
        console.log(i)
    }
    i++
}
