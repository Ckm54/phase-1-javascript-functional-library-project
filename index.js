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

