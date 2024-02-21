// A stream is a sequence of data that is being moved from one point to another point in over time.
// Data is transfer the data into chunks




const fs = require('node:fs');
const zlib = require('zlib');

glib = zlib.createGzip();

const readableStream = fs.createReadStream('./greet.txt', {
    highWaterMark: 2,
    encoding: 'utf-8'
});

const writeableStream = fs.createWriteStream('./newfile.txt');

readableStream.pipe(writeableStream);

readableStream.pipe(glib).pipe(fs.WriteStream('./glib.txt.gz'))

/* readableStream.on("data", (chunk) => {
    console.log(chunk)
    writeableStream.write(chunk);
}) */