const http = require('http')
var url = process.argv[2]

http.get(url, print).on('error', console.error)

function print(response) {
	response.setEncoding('utf8')
	let rawData = ''

	response.on('data', chunk => {
		rawData += chunk + '\n'
	})

	response.on('error', err => {
		console.error(err.message)
	})

	response.on('end', () => {
		let splitData = rawData.split('\n')
		splitData.forEach(item => console.log(item))
	})

}