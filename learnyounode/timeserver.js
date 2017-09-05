const net = require('net')

function returnDate() {
	var date = new Date()
	var month = ('0' + (date.getMonth() +1) ).slice(-2)
	var day = ('0' + date.getDate()).slice(-2)
	var hours = ('0' + date.getHours()).slice(-2)
	var minutes = ('0' + date.getMinutes()).slice(-2)
	var formattedDate = `${date.getFullYear()}-${month}-${day} ${hours}:${minutes}`
	return formattedDate
}

var server = net.createServer( socket => {
	console.log('client connected')
	socket.end(returnDate() + '\n')
});

server.listen(Number(process.argv[2]), () => {
	console.log('server bound')
});
