import { EOL } from "node:os";
import { Transform } from "node:stream";
const transform = async () => {
    // Write your code here 
    let reverseTextTrans = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split('').reverse().join('')+EOL);
        },
    })
    process.stdin.pipe(reverseTextTrans).pipe(process.stdout);
 };

await transform();