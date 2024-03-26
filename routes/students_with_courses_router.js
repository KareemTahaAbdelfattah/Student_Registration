const { Router } = require('express');
const students_with_courses_Router = Router()

const students_with_courses_Controller = require('../controllers/students_with_courses_Controller');

students_with_courses_Router.get('/', students_with_courses_Controller.getAllstudents_with_courses);
students_with_courses_Router.get('/:id', students_with_courses_Controller.getstudents_with_courses_ById);
students_with_courses_Router.post('/', students_with_courses_Controller.addstudents_with_courses);
students_with_courses_Router.put('/:id', students_with_courses_Controller.editstudents_with_courses);
students_with_courses_Router.delete('/:id', students_with_courses_Controller.deletestudents_with_courses);

module.exports = {
    students_with_courses_Router
};