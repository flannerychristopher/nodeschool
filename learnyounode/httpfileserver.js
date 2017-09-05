const http = require('http')
const fs = require('fs')
var portNumber = Number(process.argv[2])
var file = process.argv[3]

var server = http.createServer( (req, res) => {
	console.log('client connected')
	var src = fs.createReadStream(file)
	src.pipe(res)
});

server.listen(portNumber, () => {
	console.log(`server listening on port: ${portNumber}`)
});
