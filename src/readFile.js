const fs = require("fs");
var csv = null;
fs.readFile(
  "D:\\Freelancing Data\\Rows\\form-app\\DistributionInfo.csv",
  "utf-8",
  (err, data) => {
    if (err) throw err;
    csv = data;
    console.log(csv);
  }
);
module.exports = csv;
