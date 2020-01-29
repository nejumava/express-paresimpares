const express = require('express');
const app = express();

app.get('/', (req, res) => {
  let value = ""
  for(var i=1; i<=50;  i++){
      if(i%2 == 0){
        value += '<p>'+ i + ' Soy Par!</p>'
      }else {
        value += '<p>'+ i + ' Soy Impar!</p>'
      }
  }
  res.send(value);
});

app.listen(3000, () => console.log('Listening on port 3000!'));