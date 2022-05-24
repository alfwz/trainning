const arr = [5, 6, 7, 8]

Array.prototype.MyFilter = function (callbackFn) {
    let result = []
    for (let i = 0; i < this.length; i++){
        if (callbackFn(this[i])) result.push(this[i])
    }
    return result
}

const test1 = arr.MyFilter((element) => {
    return element % 2 === 1
})

const test2 = arr.MyFilter((element) => {
    return element>=6
})

console.log(test1)
console.log(test2)