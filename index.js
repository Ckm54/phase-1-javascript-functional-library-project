function makeArray(collection) {
    let workingData
    if(typeof(collection) === "object"){
        workingData = Object.values(collection)
    }else {
        workingData = collection
    }
    return workingData
}

function myEach(collection, callback) {
    const workingData = makeArray(collection)
    for(let i = 0; i < workingData.length; i++){
        callback(workingData[i])
    }
    return collection
}

function myMap(collection, callback) {
    const workingData = makeArray(collection)
    let outputArray = []
    for(let i = 0; i < workingData.length; i++){
        const newVal = callback(workingData[i])
        outputArray.push(newVal)
    }
    return outputArray
}

function myReduce(collection, callback, acc) {
    let workingData = makeArray(collection)
    if(!acc){
        acc = workingData[0]
        workingData = workingData.slice(1)
    }
    // let acc = workingData[0]
    for(let i=0; i<workingData.length; i++){
        acc = callback(acc, workingData[i], workingData)
    }
    return acc
}

function myFind(collection, predicate) {
    let workingData = makeArray(collection)
    for(let i = 0; i < workingData.length; i++){
        if (predicate(workingData[i])) {
            return workingData[i]
        }
    }
}