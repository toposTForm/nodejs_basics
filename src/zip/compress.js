import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";
const compress = async () => {
    // Write your code here 
    let fileToCompress = 'src/zip/files/fileToCompress.txt';
    let inputStream = createReadStream(fileToCompress);
    let zipTransform = createGzip();
    let outputStream = createWriteStream('src/zip/files/archive.gz')
    inputStream.pipe(zipTransform).pipe(outputStream);
    inputStream.on('error', (err) => {
        console.log(err);
    })
    outputStream.on('finish', () => {
        console.log(`${fileToCompress} archived to archive.gz`);
    });

};

await compress();