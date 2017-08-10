const app = require('express')()
const chalk = require('chalk')

const { fork } = require('child_process');

app.get('/slow', (req, res) => {
	const forked = fork('slow_server.js')
	console.log( chalk.green(`${forked.pid} > handling slow request`));
	forked.on('message', (msg) => {
		console.log(chalk.red(`${forked.pid} < `), chalk.red(msg))
		res.send(msg)
	})
	forked.send({'params': req.params})

})

app.get('/fast', (req, res) => {
	console.log(chalk.bgBlue(`${process.pid} > fast request`));
	res.send('fast response')
	console.log(chalk.bgCyan(`${process.pid} < fast request`));
})

app.listen(3000, () => {
	console.log('listening on 3000');
})
