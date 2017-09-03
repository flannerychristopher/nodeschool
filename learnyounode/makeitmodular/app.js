var mymodule = require('./mymodule')

let dir = process.argv[2]
let fileType = process.argv[3]

mymodule(dir, fileType, print)

function print(err, array) {
	if (err) throw err
	array.forEach(item => console.log(item))
}
