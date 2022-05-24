const arr1 = [1, 2, 3, 4]
const arr2 = [2, 3, 4]

Array.prototype.MySome = function (callbackFn) {
    let result = false
    for (let i = 0; i < this.length; i++){
        if(callbackFn(this[i])) result=true
    }
    return result
}

const mySomeTest1 = arr1.MySome((element) => {
    return element === 1
})

const mySomeTest2 = arr2.MySome((element) => {
    return element === 1
})

console.log(mySomeTest1)
console.log(mySomeTest2)