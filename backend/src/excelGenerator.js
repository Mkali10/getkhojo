const express = require("express");
const ExcelJS = require("exceljs");

const router = express.Router();

router.get("/download", async (req, res) => {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("Report");

  sheet.addRow(["Name", "Email", "Subscription"]);
  sheet.addRow(["Test User", "test@getkhojo.com", "Monthly"]);

  let file = "report.xlsx";
  await workbook.xlsx.writeFile(file);

  res.download(file);
});

module.exports = router;

