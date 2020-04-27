var fs = require("fs");
const path = require("path");

const pathToFile = path.join(__dirname, "../../public/", "CNAME");

const errorOrSuccess = (err, success) => {
  if (err) throw err;
  console.log(success);
};

fs.writeFile(pathToFile, "www.chardevel.com", err => {
  errorOrSuccess(err, "File is created successfully.");
});
