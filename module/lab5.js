const os = require("os");

// console.log(os.uptime());
const uptime = os.uptime();
const seconds = uptime % 60;
const minutes = Math.floor((uptime % 3600) / 60);
const hours = Math.floor(uptime / 3600);

console.log(
  `เครื่องเปิดมาแล้ว ${hours} ชั่วโมง ${minutes} นาที ${seconds} วินาที`
);
