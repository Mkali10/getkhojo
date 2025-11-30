const router = require("express").Router();

router.use("/auth", require("./authController"));
router.use("/admin", require("./adminController"));
router.use("/subscription", require("./subscriptionController"));
router.use("/ppt", require("./pptGenerator"));
router.use("/excel", require("./excelGenerator"));

module.exports = router;
