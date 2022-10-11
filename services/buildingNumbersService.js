import  * as fs from "node:fs"
import { fileURLToPath} from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getBuildingNumbersFromTXT = (start = 0, end = Infinity) => {
    const path = join(__dirname, "../buildingNumbers.txt")
    const fileContent = fs.readFileSync(path, "utf8");

    //В деяких ОС переведення строки здійснюється поєднанням символів \r та \n у інших лише символом \n
    //тому перед поділом на строки потрібно привести їх до однакового формату
    const fileLines = fileContent.replace(/\r\n/g, "\n").split("\n");
    const totalLinesCount = fileLines.length;
    return {
        buildingNumbers: fileLines.slice(start, end),
        total: totalLinesCount
    }
}
export default getBuildingNumbersFromTXT