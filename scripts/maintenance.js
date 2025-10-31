const fs = require("fs");
const path = require("path");

const logDir = path.join(__dirname, "../logs");
if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);

const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
const logFile = path.join(logDir, `maintenance-${timestamp}.log`);

function performMaintenance() {
  const time = new Date().toLocaleString();
  const message = `[${time}] Maintenance task executed successfully.`;
  console.log(message);
  fs.writeFileSync(logFile, message);
}

performMaintenance();