import * as fs from 'fs';
const read = async () => {
    // Write your code here 
    let fileToRead = 'src/fs/files/fileToRead.txt';
    function readCallback(err, data){
        if (err) throw new Error('FS operation failed');
        console.log(data);
    }
    fs.readFile(fileToRead, readCallback);
};

await read();