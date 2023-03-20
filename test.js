export function average(a, b) {
    return (a + b) / 2;
}

function getInParallel(apiCalls) {
    
    return new Promise((resolve, reject) => {
        
        
        function names(apiCalls) {
            return [apiCalls.then().resolve()]
        }

    })

  }
  
  let promise = getInParallel([() => Promise.resolve("First API call!"),
                               () => Promise.resolve("Second API call!")]);
  if(promise) {
    promise.then((result) => console.log(result)).catch((err) => console.log(err));
  }
  
  //console.log(average(2, 1));
  
  //module.exports = average;