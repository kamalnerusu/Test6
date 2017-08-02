const express = require('express');
const path = require('path');
const router = express.Router();
const app = express();
app.use(express.static(path.join(__dirname, 'src')));
app.get('/',function(req,res){
     res.sendFile(path.join(__dirname, 'src','index.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

module.exports = router;