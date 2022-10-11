import * as lineReader from 'line-reader'


const test1 = (start = 0, end = 5000)=>{
    console.time('test1')
    let fileFragment = []
    let currentLine = 0;
    lineReader.eachLine('./test.txt', (line)=>{
        currentLine++
        if (currentLine > start && currentLine <= end){
            fileFragment.push(line)
        }
        if (currentLine === end) {
            console.timeEnd('test1')
            console.log(`length of array fileFragment: ${fileFragment.length}`)
            return false
        }
    })

}

test1(4500,5100)
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

