function longestConsec(strarr, k) {
    let newArray = []
    let y = []

    for( let i = 0; i < strarr.length; i++) {
        
        if(i < strarr.length - (k - 1) && k > 1) {
            for(let j = 1; j < k; j++){
                y = strarr[i] += strarr[i + j]
            }
            newArray.push(y)
        }
        if(i < strarr.length - 1 && k === 1) {
                y = strarr[i]
            newArray.push(y)
        }

    }
    
  return newArray.sort( (a,b) => b.length - a.length)[0]
}

strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 3

console.log(longestConsec(strarr, k))


// для красоты

function longestConsec(strarr, k) {
    let newArray = []
    
    checkingForCorrectInput(strarr, k)
    getAddition(strarr, k)
    
    return newArray.sort( (a,b) => b.length - a.length)[0]
  
  // functions 
  //if we'll get wrong data just return an empty array
  function checkingForCorrectInput(array, ratio) {
    if( ratio < 1 || !array || array.length < ratio) {
      return newArray = ['']
    }
  }
  function getAddition(array, ratio) {
    let subArray = []
  
    //take each index from input array
    for( let i = 0; i < strarr.length; i++) {
        
        //when index of taken element less than length of array minus last n-th elements and ratio more than 1
        if(i < array.length - (ratio - 1) && ratio > 1) {
            for(let j = 1; j < ratio; j++) {
                subArray = array[i] += array[i + j]
            }
          newArray.push(subArray)
        }
        //when index of taken element less than length of array and ratio equals 1
        if(i < array.length && ratio === 1) {
            subArray = array[i]
            newArray.push(subArray)
        }
    }
  }
}