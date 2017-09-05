const http = require('http')
const map = require('through2-map')
// var portNumber = Number(process.argv[2])
var portNumber = 3000;

var server = http.createServer( (req, res) => {
	if (req.method === 'POST') {
		console.log('POST')
		req.pipe(map( chunk => {
			console.log(chunk)
			return chunk.toString().toUpperCase()
		}).pipe(res))
	} else {
		console.log('not a POST')
		res.end()
	}
})

server.listen(portNumber, () => {
	console.log(`server listening on ${portNumber}`)
});