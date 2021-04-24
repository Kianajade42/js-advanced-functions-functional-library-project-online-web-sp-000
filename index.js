const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function (collection,callback) {
    const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
           for (let x = 0; x < newCollection.length; x++)
             callback(newCollection[x])
           return collection
    },


    map: function(collection, callback) {
      if (!(collection instanceof Array))
      collection = Object.values(collection)
      const newArr=[]
      for (let x=0;x<collection.length;x++)
      newArr.push(callback(collection[x]))
return newArr
    },

    reduce: function(c=[],callback=()=>{},acc) {
      let collection=c.slice(0)
      if (!acc){
        acc=collection[0]
        collection=collection.slice(1)
      }
let len = collection.length;
for (let i=0; i<len; i++){
  acc=callback(acc,collection[i],collection)
}
return acc;
    },

    find: function(collection, value) {
      if (!(collection instanceof Array))
      collection = Object.values(collection)
      for (let x=0; x<collection.length; x++)
      if (value(collection[x])) return collection[x]
      return undefined
  },
  filter:function(collection,predicte){
    if (!(collection instanceof Array))
    collection=Object.values(collection)
    const newArr=[]
    for (let x=0; x<collection.length; x++)
    if (predicte(collection[x])) newArr.push(collection[x])
    return newArr
  },
  size: function(collection){
    return (collection instanceof Array)? collection.length : Object.keys(collection).length
  },
  first: function(collection,stop=false){
    return(stop)? collection.slice(0,stop) : collection[0]
  },
  last:function(collection,start=false){
    return(start)? collection.slice(collection.length-start, collection.length): collection[collection.length-1]
  },
  compact: function(collection) {
       const array = new Set([false, null, 0, "", undefined, NaN])
       return collection.filter(el => !array.has(el))
     },
     sortBy: function(collection, callback) {
          const newArr = [...collection]
          return newArr.sort(function(a, b) {
            return callback(a) - callback(b)
          })
        },

}
})()

fi.libraryMethod()
