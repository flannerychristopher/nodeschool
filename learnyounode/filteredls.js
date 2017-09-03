var fs = require('fs')
const path = require('path');

let dir = process.argv[2]
let suffix = '.' + process.argv[3]

read(dir, suffix, search)

function read(dir, suffix, callback) {
	fs.readdir(dir, callback)
}

function search(err, dir) {
	let result = dir.filter(item => path.extname(item) === suffix)
	result.forEach(item => console.log(item))
}
