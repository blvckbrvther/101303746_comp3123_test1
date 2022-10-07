function lowerCaseWords (myarray){
    var b = new Promise((resolve, reject) => {
        resultarray = [];
    
        for (let i = 0; i < myarray.length; i++) {
          if (typeof myarray[i] === "string") {
            resultarray.push(myarray[i].toLowerCase());
          }
        }
        if (resultarray) {
          setTimeout(() => {
            resolve( resultarray);
          }, resultarray);
        } else {
          reject( resultarray);
        }
      });
      return b;

    
}

lowerCaseWords(["PIZZA", 10, true, 25, false, "wings"])
  .then(
    (success) => console.log(success),
    (err) => console.log(err)
  )