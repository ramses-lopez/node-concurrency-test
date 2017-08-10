// const cluster = require('cluster')

let params = null

process.on('message', (msg) => {
	// console.log('Message from master:', msg);
})

const pid = process.pid;
// console.log(`worker #${pid} serving slow request`)

setTimeout(() => {
	process.send({ msg: 'goomba ' + process.pid });
}, 3000)
