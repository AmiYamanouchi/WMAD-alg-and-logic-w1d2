const repeatNumbers = function(data) {
    result = '';

    for(i = 0; i < data.length; i++) {
        for(j = 0; j < data[i][1]; j++) {
          result += data[i][0];
        }
    }
    
    return result;

  };
  console.log(repeatNumbers([[1, 10]]));
  console.log(repeatNumbers([[1, 2], [2, 3]]));

 