const student = require('../models/students');

exports.submitForm = (req, res, next) => {
  const { name, email, phone, course } = req.body;

  const newForm = new student({ name, email, phone, course });

  newForm
    .save()
    .then((savedStudent) => {
      // ✅ Save student info in session
      req.session.studentId = savedStudent._id;
      req.session.studentName = savedStudent.name;

      res.status(201).json({ message: 'Form submitted and session created' });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    });
};
