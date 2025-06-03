const express = require("express")
const path = require("path")
const multer = require ("multer")

const { userRegister, userGet } = require("../Controller/registerController")

const router = express.Router()

const profilePic = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload/profileImg/");
  },

  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: profilePic });


router.post("/signup", upload.single("profilePic"), userRegister);
router.get("/userget", userGet);


module.exports = router