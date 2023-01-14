const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.post('/signup', (req, res) => {
  const name = req.body.name;
  const reg_no = req.body.reg_no;
  const password = req.body.password;
  const confirm_password = req.body.confirm_password;
  console.log(`Name: ${name}`);
  console.log(`Registration Number: ${reg_no}`);
  console.log(`Password: ${password}`);
  console.log(`Confirm Password: ${confirm_password}`);
  res.send("Success")
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
