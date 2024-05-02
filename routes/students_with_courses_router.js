const {Router} = require('express');
const studentWithCoursesRouter = Router();

const studentWithCoursesController = require('../controllers/students_with_courses_controller');

studentWithCoursesRouter.get('/', studentWithCoursesController.getAllstudents_with_courses);
studentWithCoursesRouter.get('/:id', studentWithCoursesController.getstudents_with_courses_ById);
studentWithCoursesRouter.post('/', studentWithCoursesController.addstudents_with_courses);
studentWithCoursesRouter.put('/:id', studentWithCoursesController.editstudents_with_courses);
studentWithCoursesRouter.delete('/:id', studentWithCoursesController.deletestudents_with_courses);

module.exports = {
    studentWithCoursesRouter,
};
