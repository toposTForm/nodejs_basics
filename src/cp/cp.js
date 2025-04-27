import { exec, execFile, fork, spawn } from "child_process";
import { fileURLToPath } from "node:url";
import { cpPath } from "./files/script.js";
import { error } from "console";
import { stderr, stdin, stdout } from "process";
import { argv0 } from "node:process";
const spawnChildProcess = async (args) => {
    // Write your code here
    
    let cp = spawn('node', [cpPath, ...[args]], {
        stdio: ['pipe', 'pipe', 'pipe', 'ipc'], //assign for IPC 
    });
    process.stdin.on('data', data=> {
        console.log(data.toString());//received from console
        cp.stdin.write(data);
    });
    cp.stdout.on('data', data=> {
        console.log(data.toString()); //answer from child process
    });
}

// Put your arguments in function call to test this functionality
let arrgs = ('--node-v --some-arg --other --arg2 --arg3 --arg4')
spawnChildProcess(arrgs);



