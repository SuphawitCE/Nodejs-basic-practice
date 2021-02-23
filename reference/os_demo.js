const os = require('os');

// Platform
console.log("Platform: " + os.platform());

// CPU Arch
console.log("CPU Arch: " + os.arch());

// CPU Core Info
console.log("CPU CORE: " + os.cpus);

// Free memory
console.log("Free mem: " + os.freemem());

// Total mem
console.log("Total mem: " + os.totalmem());

// Home directory
console.log("Home Dir: " + os.homedir());

// Uptime
console.log("Up time: " + os.uptime() + " sec");
