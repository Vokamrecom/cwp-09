const Promise = require('bluebird');
var fs = Promise.promisifyAll(require("fs"));

const dirs = [
    'dirs/dir-1/dir-1-1',
    'dirs/dir-1/dir-1-2',
    'dirs/dir-1/dir-1-2/dir-1-2-1',
    'dirs/dir-2/dir-2-1/dir-2-1-1',
    'dirs/dir-2/dir-2-2/dir-2-2-1',
    'dirs/dir-2/dir-2-1/dir-2-2-2/dir-2-2-2-1',
    'dirs/dir-3/dir-3-1',
    'dirs/dir-3',
    'dirs/dir-3/dir-3-2/dir-3-2-1',
    'dirs/dir-3/dir-3-3/dir-3-3-1'
];

Promise.mapSeries(dirs, (dirName) =>{
    return dirName.split('/');
})
    .then((response) =>{
        for (let dir of response) {
            let basesPath = './';
            for (let path of dir) {
                basesPath += path + '/';
                fs.mkdirAsync(basesPath)
                    .catch((error) => {
                        console.log(error);
                    });
            }
        }
    })
    .catch((error) => {
        console.log(error)
    });