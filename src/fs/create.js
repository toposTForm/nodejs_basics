import * as fs from 'fs';
const create = async () => {
    // Write your code here
    try {
        fs.readFile('src/fs/files/fresh.txt', { encoding: 'utf-8' }, (err, data) => {
                if (err){
                    fs.open('src/fs/files/fresh.txt', 'w', (err) =>{
                        console.log('created');
                        fs.appendFile('src/fs/files/fresh.txt', 'I am fresh and young', (err) => {
                            if (err) throw err;
                            console.log('I am fresh and young added')
                        });
                    });
                } else{
                    throw new Error('FS operation failed');
                }
        });
    } catch (err) {
        console.error(err.message);
    }
};

await create();

