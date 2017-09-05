const http = require('http')
const url = process.argv[2]

http.get(url, (res) => {
	let string = ''

	res.on('data', chunk => {
		string += chunk
	})

	response.on('error', err => {
		console.error(err.message)
	})

	res.on('end', () => {
		console.log(string.length)
		console.log(string.toString())
	})

})