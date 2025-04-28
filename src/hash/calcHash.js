
import { createReadStream } from 'node:fs';
const calculateHash = async () => {
    // Write your code here 
    const { createHash } = await import('node:crypto');
    const filename = 'src/hash/files/fileToCalculateHashFor.txt';
    const hmac = createHash('sha256', '');
    try {
        const input = createReadStream(filename);
        input.on('readable', () => {
        const data = input.read();
        if (data){
            hmac.update(data);
        }else {
            console.log(`${hmac.digest('hex')}`);
        }
    });
    } catch (error) {
        throw error;
    }


};

await calculateHash();


