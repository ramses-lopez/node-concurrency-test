# node-concurrency-test

`node master` = inicia servidor que hace forks en el servicio lento
`node master_2` = inicia script que hace un fork de cada server por procesador disponible

load tester:

`npm i -g loadtest` usage: `loadtest -c 10 -t 45 http://localhost:3000/fast` y/o `loadtest -c 10 -t 45 http://localhost:3000/slow`
