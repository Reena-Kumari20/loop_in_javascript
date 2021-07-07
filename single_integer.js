// Write a Python program to convert a list of multiple integers into a single integer.
// Sample list: [11, 33, 50]
// Expected Output: 113350

arr=[11,33,50]
let i=0
let str1=''
while (i<arr.length){
    str1=str1+String(arr[i])
    i++

}
const str2=Number(str1)
console.log(str2)
console.log(typeof str2)
