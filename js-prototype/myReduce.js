const arr = [1, 2, 3, 4]

Array.prototype.MyReduce = function (callbackFn) {
    let result = this[0]
    for (let i = 1; i < this.length; i++){
        result=callbackFn(result, this[i])
    }
    return result
}

const test1 = arr.MyReduce((prevVal, curVal) => {
    return prevVal+curVal
})
console.log(test1) //expected:10

const test2 = arr.MyReduce((prevVal, curVal) => {
    return prevVal*curVal
})
console.log(test2) //expected:24