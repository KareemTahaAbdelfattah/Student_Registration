const {Router} = require('express');
const studentRouter = Router();

const studentController = require('../controllers/student_controller');

studentRouter.get('/', studentController.getAllStudents);
studentRouter.get('/:id', studentController.getStudentById);
studentRouter.post('/', studentController.addStudent);
studentRouter.put('/:id', studentController.editStudent);
studentRouter.delete('/:id', studentController.deleteStudent);

module.exports = {
    studentRouter,
};