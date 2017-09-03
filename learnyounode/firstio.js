var fs = require('fs')
var doc = fs.readFileSync(process.argv[2])
var lineCount = doc.toString().split('\n').length - 1
console.log(lineCount)