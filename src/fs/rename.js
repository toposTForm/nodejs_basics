import * as fs from 'fs';
import { readdir } from 'node:fs/promises';
const rename = async () => {
    // Write your code here 
    let oldFileName = 'src/fs/files/wrongFilename.txt';
    let newFileName = 'src/fs/files/properFilename.md';
    function filesContentCallback(err, data) {
        if (err) throw err;
    }
    let renamed = (await readdir('src/fs/files', filesContentCallback)).filter((file) => file == 'properFilename.md');
    function renameCallback(err, data) {
        if(err) throw new Error('FS operation failed');
    }
    if (renamed.length == 0){
        fs.rename(oldFileName, newFileName, renameCallback);
    } else throw new Error('FS operation failed');
    
};

await rename();