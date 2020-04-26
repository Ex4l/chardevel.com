var fs = require("fs");
const path = require("path");

const pathToFile = path.join(__dirname, "CNAME");
const pathToNewDestination = path.join(__dirname, "../../public", "CNAME");

fs.writeFile(pathToFile, "www.chardevel.com", function(err) {
  if (err) throw err;
  console.log("File is created successfully.");
});

fs.copyFile(pathToFile, pathToNewDestination, err => {
  if (err) throw err;

  console.log("CNAME was copied to public folder");
});
