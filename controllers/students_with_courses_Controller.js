const { students_with_courses} = require('../models/students_with_courses');
const Joi = require('joi');
const { validateCourse } = require('../helper/validation');

const getAllstudents_with_courses = async (req, res) => {
    try {
        const allstudents_with_courses = await students_with_courses.find({});
        res.status(200).send(allstudents_with_courses);
    } catch (error) {
        res.status(400).send(error);
    }
};

const getstudents_with_courses_ById = async (req, res) => {
    try {
        //findById
        const allstudents_with_courses = await students_with_courses.findOne({ _id: req.params.id });
        res.status(200).send(allstudents_with_courses);
    } catch (error) {
        res.status(400).send(error);
    }
};

const addstudents_with_courses = async (req, res) => {
    try {
        const Students_with_courses = await students_with_courses.create(req.body);
        res.status(201).send(Students_with_courses);
    } catch (error) {
        res.status(400).send(error);
    }
};

const editstudents_with_courses = async (req, res) => {
    const userId = req.params.id;
    try {
        const Students_with_courses = await students_with_courses.findOne({ _id: userId });
        if (!Students_with_courses) {
            return res.status(404).send("Course not found");
        }

        // Update existing fields
        if (req.body.name) {
            Students_with_courses.name = req.body.name;
        }
        if (req.body.count) {
            Students_with_courses.count = req.body.count;
        }
        if (req.body.groupid) {
            Students_with_courses.groupid = req.body.groupid;
        }
        if (req.body.numberOfHours) {
            Students_with_courses.numberOfHours = req.body.numberOfHours;
        }
        if (req.body.term) {
            Students_with_courses.term = req.body.term;
        }

        await Students_with_courses.save();
        res.status(200).send(Students_with_courses);
    } catch (error) {
        res.status(400).send(error);
    }
};


const deletestudents_with_courses = async (req, res) => {
    try {
        const Students_with_courses = await students_with_courses.deleteOne({ _id: req.params.id });
        res.status(200).send(Students_with_courses);
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    getAllstudents_with_courses,
    getstudents_with_courses_ById,
    addstudents_with_courses,
    editstudents_with_courses ,
    deletestudents_with_courses,
};
