var fs = require('fs')

read(process.argv[2], countLines)

function read(file, callback) {
	fs.readFile(file, 'utf8', callback)
}

function countLines(err, data) {
	if (err) {
		console.log('error')
	} else {
		var lines = data.split('\n').length -1
		console.log(lines)
	}
}