import { createReadStream, createWriteStream } from "fs";
import { createUnzip } from "zlib";
const decompress = async () => {
    // Write your code here 
    let fileToDeCompress = 'src/zip/files/archive.gz';
    let inputStream = createReadStream(fileToDeCompress);
    let zipTransform = createUnzip();
    let outputStream = createWriteStream('src/zip/files/fileToCompress.txt');
    inputStream.pipe(zipTransform).pipe(outputStream);
    inputStream.on('error', (err) => {
        console.log(err);
    })
    outputStream.on('finish', () => {
        console.log(`${fileToDeCompress} unarchived to fileToCompress.txt`);
    });
};

await decompress();