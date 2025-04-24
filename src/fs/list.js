import * as fs from 'fs';
const list = async () => {
    // Write your code here 
        function filesContentCallback(err, data) {
            if (err) throw new Error('FS operation failed');
            console.log(data);
        }
        fs.readdir('src/fs/files', filesContentCallback);
};
await list();