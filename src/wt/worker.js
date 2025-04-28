
import { fileURLToPath } from "node:url";
import { workerData, parentPort } from "node:worker_threads";


let workerPath = fileURLToPath(import.meta.url);
export  {
    workerPath,
};

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread
    if (workerData){
        // if (workerData == 11) workerData = '11'; //add some Error
        if(typeof workerData === 'number'){
            parentPort.postMessage(nthFibonacci(workerData));
            // throw new Error('Not a number');//add 100% Error
        }else {
            throw new Error('Not a number');
        }
    } 
};
sendResult();