// content of index.js
const http = require('http');
const path = require('path');
const fs = require('fs');
const port = 8080;

const requestHandler = (request, response) => {
	console.log(request.url)
	fpath = path.join(__dirname, request.url);
	if(fs.existsSync(fpath)) {
		var rstream = fs.createReadStream(fpath);
		rstream.pipe(response);
	} else {
		response.end('Hello Node.js Server!')
	}
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
