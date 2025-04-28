import * as fs from 'fs';
import { mkdir } from 'node:fs/promises';
import { readdir } from 'node:fs/promises';
const copy = async () => {
    // Write your code here 
    try {
        if (!fs.existsSync('src/fs/files') || fs.existsSync('src/fs/files_copy')){
            throw new Error('FS operation failed');
        } else{
            let papka = 'src/fs/files_copy';
            function filesContentCallback(err, data) {
                if (err) throw err;
            }
            let filesContent = await readdir('src/fs/files', filesContentCallback);
            let papkaCreate = await mkdir(papka, {recursive: true});
            function copyCallback(err) {
                if (err) throw err;
              }
              filesContent.forEach((item) => {
                fs.copyFile('src/fs/files/fresh.txt', `${papka}/${item}`, copyCallback);
              })
        }
    } catch (error) {
        console.error(error);
    }
};
await copy();
