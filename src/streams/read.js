import { createReadStream } from "node:fs";
const read = async () => {
    // Write your code here 
    const filetoRead = 'src/streams/files/fileToRead.txt';
    try {
        const input = createReadStream(filetoRead, 'ascii');
        input.on('readable', () =>{
            let data = input.read();
            if (data){
                process.stdout.write(data);
            } 
        })
    } catch (error) {
        throw error
    }
};

await read();