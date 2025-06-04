const Course = require("../Model/allCourseModel");

exports.addCourse = async (req, res) => {
  try {
    const {
      title,
      shortDescription,
      detailedDescription,
      thumbnailUrl,
      topics,
      level,
      language,
      durationInHours,
      createdBy,
    } = req.body;

    // Auto-generate courseId
    const lastCourse = await Course.findOne().sort({ courseId: -1 });
    const newCourseId = lastCourse ? parseInt(lastCourse.courseId) + 1 : 1001;

    const imagePath = `/upload/thumbnailImg/${req.file.filename}`;

    const newCourse = new Course({
      courseId: newCourseId.toString(),
      title,
      shortDescription,
      detailedDescription,
      thumbnailUrl:imagePath,
      topics,
      level,
      language,
      durationInHours,
      createdBy,
    });

    await newCourse.save();

    res.status(201).json({ msg: "Course created", course: newCourse });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

exports.enrollStudent = async (req, res) => {
  try {
    const { courseId, studentId } = req.body;

    const course = await Course.findOne({ courseId });

    if (!course) {
      return res.status(404).json({ msg: "Course not found" });
    }

    if (course.studentsEnrolled.includes(studentId)) {
      return res.status(400).json({ msg: "Student already enrolled" });
    }

    course.studentsEnrolled.push(studentId);
    await course.save();

    res.status(200).json({ msg: "Student enrolled", course });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};
