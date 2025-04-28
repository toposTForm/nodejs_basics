const parseEnv = () => {
    // Write your code here 
    const varsenv = process.env;
    for (let key in varsenv) {
        if (key.indexOf('RSS_') == 0) {
            console.log(`${key}=${varsenv[key]}`)
        }
    }
}
parseEnv();