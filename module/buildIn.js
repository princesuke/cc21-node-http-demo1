// const os = require("os");

// console.log("ระบบปฏิบัติการ:", os.platform());
// console.log("CPU:", os.cpus().length, "คอร์");
// console.log("Memory:", os.totalmem() / (1024 * 1024), "MB");
// console.log("User info:", os.userInfo());

const path = require("path");

// const filePath = "/Users/master/Desktop/hello.js";
// console.log("ชื่อไฟล์:", path.basename(filePath));
// console.log("นามสกุลไฟล์:", path.extname(filePath));
// console.log("dirname:", path.dirname(filePath));

const uploadPath = path.join("uploads", "profile.jpg");
console.log("Full path:", uploadPath);
