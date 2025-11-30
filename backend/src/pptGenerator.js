const express = require("express");
const PPTX = require("pptxgenjs");
const router = express.Router();

router.get("/download", async (req, res) => {
  let ppt = new PPTX();

  let slide = ppt.addSlide();
  slide.addText("GetKhojo PPT Report", { x: 1, y: 1, fontSize: 32 });

  let fileName = "getkhojo_report.pptx";

  await ppt.writeFile({ fileName });

  res.download(fileName);
});

module.exports = router;

