import colors from "colors";
import chalk from "chalk";

console.log("Hello in green!".green);
console.log("Hello in bgRed!".bgRed);
console.log("Error!".red);
console.log("Rainbow".rainbow);
console.log("Bold & Blue".bold.blue);

console.log(chalk.green("ข้อความ"));
console.log(chalk.bgYellow.black("ข้อความไฮไลท์"));
