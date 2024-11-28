const fs = require('fs');

const fileName = 'welcome.txt';

fs.writeFile(fileName, 'Hello Node', (err) => {
  if (err) throw err;
  console.log(`File ${fileName} created successfully!`);

  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});