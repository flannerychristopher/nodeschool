const http = require('http')
var urlList = [process.argv[2], process.argv[3], process.argv[4]]
var responseList = ['','','']
var counter = 0

for (var i = 0; i < urlList.length; i++) {
	let index = i

	http.get(urlList[index], res => {

		res.on('error', err => {
			return console.error(err)
		})

		res.on('data', chunk => {
			responseList[index] += chunk
		})

		res.on('end', () => {
			counter += 1
			if (counter === 3) print(responseList)
		})
	})
}

function print(array) {
	array.forEach(item => console.log(item))
}


// blocking solution     :-(

// var url1 = process.argv[2]
// var url2 = process.argv[3]
// var url3 = process.argv[4]

// http.get(url1, (res) => {
// 	data1 = ''

// 	res.on('data', chunk => {
// 		data1 += chunk
// 	})

// 	res.on('end', () => {

// 		http.get(url2, res => {
// 			data2 = ''
// 			res.on('data', chunk => {
// 				data2 += chunk
// 			})

// 			res.on('end', () => {

// 				http.get(url3, res => {
// 					data3 = ''
// 					res.on('data', chunk => {
// 						data3 += chunk
// 					})

// 					res.on('end', () => {
// 						console.log(data1)
// 						console.log(data2)
// 						console.log(data3)
// 					})
// 				})
// 			})
// 		})
// 	})
// })