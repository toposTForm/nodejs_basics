import { Worker } from "worker_threads";
import  * as os from 'node:os'
import { workerPath } from './worker.js'
const performCalculations = async () => {
    // Write your code here
    let coreNum = os.cpus().length;
    console.log(`CPU num is ${coreNum}`)
    class CpuWorker{
        constructor(cpuNum){
            this.cpuNum = cpuNum;
            this.startNum = CpuWorker.startNum;
            this.workers = CpuWorker.workers;
            for (let index = 0; cpuNum > index; index++) {
                CpuWorker.create(CpuWorker.startNum + index);
            }
        }
        static create (workerNum){
            const newW = new Worker(workerPath, {workerData: workerNum});
            CpuWorker.workers.push(newW);
        }
        static workers = [];
        static startNum = 10;
    };
    const cpuWorker = new CpuWorker(coreNum);
   
   function waitForWorkers(workerNumber) {
        return new Promise((resolve, reject) => {
            let resArr = new Array(coreNum);
            for (let index = 0; index < workerNumber; index++) {
                cpuWorker.workers[index].on('message', msg => {
                    resArr.splice(index, 1, {status: 'resolved', data: msg});//assign result by threadID
                    if (resArr.length == coreNum && !resArr.includes(undefined)){
                        resolve (resArr);
                    }
                });
                cpuWorker.workers[index].on('error', msg => {
                    resArr.splice(index, 1, {status: 'error', data: null});//assign result by threadID
                        console.log(`status: Error. CPU_WORKER number ${cpuWorker.workers[index].threadId}, ${msg.name}`);
                        if (resArr.length == coreNum && !resArr.includes(undefined)){
                            resolve (resArr);
                        }
                });
            }
        })
   }
   waitForWorkers(coreNum).then((res) => {
    console.log(res);
   }
   );


};

await performCalculations();