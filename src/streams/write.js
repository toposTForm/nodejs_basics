import { error } from "node:console";
import { createWriteStream } from "node:fs";
const write = async () => {
    // Write your code here 
    const filetoWrite = 'src/streams/files/fileToWrite.txt';
        const output = createWriteStream(filetoWrite);
        process.stdin.on('data', data => {
        output.write(data.toString())
            console.log(`You typed ${data.toString()}`); 
        });
        output.on('error', (error) => {
            throw error;
        })
};
await write();