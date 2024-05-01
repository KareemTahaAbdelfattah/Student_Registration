const {Router} = require('express');
const studentRouter = Router();

const studentController = require('../controllers/student_controller');

studentRouter.get('/allStudents/', studentController.getAllStudents);
studentRouter.get('/studentByID/:id', studentController.getStudentById);
studentRouter.post('/addStudent/', studentController.addStudent);
studentRouter.put('/editStudent/:id', studentController.editStudent);
studentRouter.delete('/deleteStudent/:id', studentController.deleteStudent);

module.exports = {
    studentRouter,
};