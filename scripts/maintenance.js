const fs = require("fs");
const path = require("path");

// Log directory
const logDir = path.join(__dirname, "../logs");
if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);

const logFile = path.join(logDir, `maintenance-${new Date().toISOString()}.log`);

function performMaintenance() {
  const time = new Date().toLocaleString();
  const message = `[${time}] Maintenance task executed successfully.`;
  console.log(message);
  fs.writeFileSync(logFile, message);
}

performMaintenance();
