const http = require('http')
const url = require('url')

function parsetime(time) {
	return {
		hour: time.getHour(),
		minute: time.getMinutes(),
		second: time.getSeconds()
	}
}

function unixtime(time) {
	return { unixtime: time.getTime() }
}

var server = http.createServer( (req, res) => {
	var parsedUrl = url.parse(req.url, true)
	var time = new Date(parsedUrl.query.iso)
	var result

	if (/^\/api\/parsetime/.test(req.url)) {
		result = parsetime(time)
	} else if {
		result = unixtime(time)
	}

	if (result) {
		res.writeHead(200, { 'Content-Type': 'application/json' })
		res.end(JSON.strinfify(result))
	} else {
		res.writeHead(404)
		res.end()
	}
})

server.listen(Number(process.argv[2]))