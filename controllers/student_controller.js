const { student } = require('../models/student');
const Joi = require('joi');
const { validateCourse } = require('../helper/validation');

const getAllStudents = async (req, res) => {
    try {
        const allstudents = await student.find({});
        res.status(200).send(allstudents);
    } catch (error) {
        res.status(400).send(error);
    }
};

const getStudentById = async (req, res) => {
    try {
        //findById
        const allstudents = await student.findOne({ _id: req.params.id });
        res.status(200).send(allstudents);
    } catch (error) {
        res.status(400).send(error);
    }
};

const addStudent = async (req, res) => {
    try {
        const student = await student.create(req.body);
        res.status(201).send(student);
    } catch (error) {
        res.status(400).send(error);
    }
};

const editStudent = async (req, res) => {
    const userId = req.params.id;
    try {
        const student = await student.findOne({ _id: userId });
        if (!student) {
            return res.status(404).send("Student not found");
        }

        // Update existing fields
        if (req.body.firstName) {
            student.name = req.body.firstName;
        }
        if (req.body.lastName) {
            student.count = req.body.lastName;
        }
        if (req.body.groupid) {
            student.groupid = req.body.groupid;
        }
        if (req.body.phoneNumber) {
            student.numberOfHours = req.body.phoneNumber;
        }
        if (req.body.birthDate) {
            student.term = req.body.birthDate;
        }
        if (req.body.gender) {
            student.term = req.body.gender;
        }
        if (req.body.email) {
            student.term = req.body.email;
        }
        if (req.body.password) {
            student.term = req.body.password;
        }
        if (req.body.profilePhoto) {
            student.term = req.body.profilePhoto;
        }

        await student.save();
        res.status(200).send(student);
    } catch (error) {
        res.status(400).send(error);
    }
};


const deleteStudent = async (req, res) => {
    try {
        const student = await student.deleteOne({ _id: req.params.id });
        res.status(200).send(student);
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    getAllStudents,
    getStudentById,
    addStudent,
    editStudent,
    deleteStudent,
};