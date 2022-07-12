const fs = require('fs');

const generateArrayOfZipCode = (stdIn, stdOut) => {
  fs.readFile(stdIn, function (err, data) {
    if (err) throw err;
    const parseArray = data.toString().split("\n");

    const result = parseArray.map(row => {
      let line = row.split(',')
      let regionName = line[5]
      
      if(stdIn === './country/DE.csv') {
        regionName = line[7]
      }

      return {
        "departmentCode": line[1],
        "departmentName": line[3],
        "regionCode": line[1],
        "regionName": regionName
      }


    })

    fs.writeFileSync(stdOut, JSON.stringify(result, null, 2), () => {
      console.log('All Good')
    })

  })
};

generateArrayOfZipCode('./country/BE.csv', './result/BE.js')
generateArrayOfZipCode('./country/IT.csv', './result/IT.js')
generateArrayOfZipCode('./country/DE.csv', './result/DE.js')
generateArrayOfZipCode('./country/GB.csv', './result/GB.js')