import os from "os";
import dayjs from "dayjs";
import colors from "colors";
import { sayHello } from "./greeting.js";

console.log("ระบบปฏิบัติการ:", os.platform().bold.red);
console.log("เวลาปัจจุบัน:", dayjs().format("YYYY-MM-DD HH:mm:ss").yellow);
console.log(os.userInfo().username.green);
console.log(sayHello("John").random);

// function メッセージを表示(メッセ) {
//   console.log(メッセ);
// }

// メッセージを表示("หวัดดี้");
