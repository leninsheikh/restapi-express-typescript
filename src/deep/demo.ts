import path from 'path';

export default {
    appName() {
        console.log(process.env.APP_NAME, 'from', `::${path.basename(path.dirname(process.mainModule!.filename)).toUpperCase()}::`)
    }
}

// var path = require('path');
// console.log(process.env.ENV,  process.cwd(), )