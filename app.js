const port = process.env.PORT || 3000;
const host = ("RENDER" in process.env) ? `0.0.0.0` : `localhost`;

const fastify = require('fastify')({
  logger: true
})

fastify.get('/', function (request, reply) {
  reply.type('text/html').send(html)
})

fastify.listen({host: host, port: port }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello Fastify!</title>
  </head>
  <body>
    Hello Fastify!
  </body>
</html>
`