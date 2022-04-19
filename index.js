function myEach(collection, callback) {
    let workingData
    if(typeof(collection) === "object"){
        workingData = Object.values(collection)
    }else {
        workingData = collection
    }
    for(let i = 0; i < workingData.length; i++){
        callback(workingData[i])
    }
    return collection
}