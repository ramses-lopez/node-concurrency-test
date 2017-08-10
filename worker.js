var http = require('http');
const cluster = require('cluster')
const srv = http.createServer(function(req, res) {
	const time = Math.random()*10000
	console.log(`request received by worker > ${cluster.worker.id}, please wait ${time}...`);

	setTimeout(() => {
		console.log('> worker ' + cluster.worker.id + ' is now free')
		res.writeHead(200, {'content-type': 'text/html'})
		res.end('Hello from worker > ' + cluster.worker.id)
	}, time)
});

srv.listen(1337)
