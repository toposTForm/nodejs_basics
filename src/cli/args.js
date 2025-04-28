import { argv } from "process";
const parseArgs = () => {
    // Write your code here 
    console.log(argv);
    argv.forEach((val, index, arr) => {
        // console.log(val.split(' '));
        if (val.indexOf('--') == 0){
            let tempstr = val.split('--')[1];
            console.log(`${tempstr} is ${arr[index + 1]}`);
        }
        
        // console.log(`${val.split(' ')[0]} is ${val.split(' ')[1]}`)
      });
};
parseArgs();

