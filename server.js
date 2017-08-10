const app = require('express')()
const chalk = require('chalk')

app.get('/slow', (req, res) => {
	console.log( chalk.green(`${process.pid} > handling slow request`));
	setTimeout(() => {
		console.log(chalk.red(`${process.pid} < done`))
		res.send({ msg: 'goomba ' + process.pid });
	}, 3000)
})

app.get('/fast', (req, res) => {
	console.log(chalk.bgBlue(`${process.pid} > fast request`));
	res.send('fast response')
	console.log(chalk.bgCyan(`${process.pid} < fast request`));
})

app.listen(3000, () => {
	console.log('listening on 3000');
})
