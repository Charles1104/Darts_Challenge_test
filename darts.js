/*jshint esversion: 6 */

module.exports = (arr) => {

  var sum = 0;

  if (arr.length === 0){
      return -1;
    }

  if (!(Array.isArray(arr))){
      throw "Pass an array !!!";
    }

  for (var i=0; i < arr.length; i++){

    if (typeof(arr[i]) !== "number"){
      throw "Pass numbers only !!!";
    }

    else if (arr[i]>10 || arr[i] < 1){
      sum +=0;
    }
    else if (arr[i]<=10 && arr[i]>=5){
      sum +=5;
    }
    else if (arr[i]<5){
      sum +=10;
    }
  }

  return sum;

};

