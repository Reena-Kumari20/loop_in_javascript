const input=require('readline-sync')
let num=Number(input.question("Enter the perfect number: "))
let sum=0
let st=String(num)
let l=st.length
let i=num
while (i>0){
    n=i%10
    sum=sum+n**l
    i=parseInt(i/10)
}
console.log((num===sum)? `${num} is armstrong number`:`${num} is not armstrong number`)
console.log(st)