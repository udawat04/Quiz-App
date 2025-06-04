const express = require("express")
const path = require("path")
const multer = require ("multer")

const { userRegister, userGet } = require("../Controller/registerController")
const { addCourse, enrollStudent } = require("../Controller/allCourseController")
const { addQuiz, getAllQuizzes } = require("../Controller/quizController")


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

const uploadpic = multer({ storage: profilePic });

const thumbnailImg = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload/thumbnailImg/");
  },

  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const uploadthumb = multer({ storage: thumbnailImg });


router.post("/signup", uploadpic.single("profilePic"), userRegister);
router.get("/userget", userGet);


router.post("/allcourse", uploadthumb.single("thumbnailUrl"), addCourse);

router.post("/enrollstu",enrollStudent)


router.post("/addquiz",addQuiz)
router.get("/getquiz",getAllQuizzes)


module.exports = router