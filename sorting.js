let arr1=[5,7,2,5,4,8,1,3,9,3,7,12,10]
var i=0
while (i<arr1.length){
    var j=0
    while (j<arr1.length-i-1){
        if (arr1[j]>arr[j+1]){
            var y=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=y
        }
        j++
    }
    i++
}
console.log(arr1)