import dayjs from "dayjs";
import "dayjs/locale/th.js";

// const now = dayjs();
// console.log(now.format());

// console.log("วันนี้คือ:", now.format("YYYY-MM-DD HH:mm:ss"));

dayjs.locale("th");
console.log("วันนี้คือ:", dayjs().format("D MMMM YYYY"));

// 8 ตุลาคม 2025
