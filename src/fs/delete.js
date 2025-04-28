import * as fs from 'fs';
const remove = async () => {
    // Write your code here 
    let fileToDelete = 'src/fs/files/fileToRemove.txt';
    try {
        function rmCallback(err) {
            if (err) throw new Error('FS operation failed');
        }
        fs.rm(fileToDelete, rmCallback);
    } catch (error) {
        console.log('FS operation failed')
    }
};

await remove();