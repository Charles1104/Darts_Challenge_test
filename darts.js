function scoreThrows(arr) {

  var sum = 0;

  for (var i=0; i < arr.length; i++)
    if (arr.length === 0){
      return -1;
    }

    else if (arr[i]>10){
      sum +=0;
    }
    else if (arr[i]<=10 && arr[i]>=5){
      sum +=5;
    }
    else if (arr[i]<5){
      sum +=10;
    }

    return sum;
}

console.log(scoreThrows([1, 5, 11]));