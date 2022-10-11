import * as fs from 'node:fs'


const test2 = (start= 0, end = 5000)=>{
    console.time('test2')
    let fileContent = fs.readFileSync('./test.txt', "utf8")
    let fileLines = fileContent.replace(/\r\n/g, "\n").split('\n')
    let fileFragment = fileLines.slice(start, end)
    console.timeEnd('test2')
    console.log(`length of array fileFragment: ${fileFragment.length}`)
}

test2(4500,5100)
let _maxMemoryConsumption = 0;

process.nextTick(() => {
    let memUsage = process.memoryUsage();
    if (memUsage.rss > _maxMemoryConsumption) {
        _maxMemoryConsumption = memUsage.rss;
    }
});

process.on('exit', () => {
    console.log(`Max memory consumption: ${_maxMemoryConsumption/Math.pow(2, 20)} Mb `);
});

