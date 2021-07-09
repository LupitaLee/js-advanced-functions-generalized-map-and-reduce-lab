// Add your functions here


// function mapping(arr){
//     const newArr = arr.map(-1 * arr)
//     return newArr
// }

// function mapToNegative(sourceArray){
//     let r = []
//     for (const arr of sourceArray){
//         r.push(arr * -1)
        
//     }
//     return r
// }

function map(src, callback) {
    const r = [];
  
    for (let i = 0; i < src.length; i++) {
      const theElement = src[i];
      r.push(callback(theElement));
    }
  
    return r;
  }

  function reduce(src, callback, startingValue) {
    let total;
    if (startingValue) {
      total = startingValue;
      for (let i = 0; i < src.length; i++) {
        total = callback(src[i], total);
      }
      return total;
    } else {
      total = src[0];
      for (let i = 1; i < src.length; i++) {
        total = callback(src[i], total);
      }
      return total;
    }
  }