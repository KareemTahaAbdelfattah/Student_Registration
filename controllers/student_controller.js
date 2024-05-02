const { student } = require('../models/student');

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
        const onestudent = await student.findOne({ _id: req.params.id });
        res.status(200).send(onestudent);
    } catch (error) {
        res.status(400).send(error);
    }
};

const addStudent = async (req, res) => {
    try {
        const onestudent = await student.create(req.body);
        res.status(201).send(onestudent);
    } catch (error) {
        res.status(400).send(error);
    }
};

const editStudent = async (req, res) => {
    const userId = req.params.id;
    try {
        const onestudent = await student.findOne({ _id: userId });
        if (!onestudent) {
            return res.status(404).send("Student not found");
        }

        // Update existing fields
        if (req.body.firstName) {
            onestudent.name = req.body.firstName;
        }
        if (req.body.lastName) {
            onestudent.count = req.body.lastName;
        }
        if (req.body.groupid) {
            onestudent.groupid = req.body.groupid;
        }
        if (req.body.phoneNumber) {
            onestudent.phoneNumber = req.body.phoneNumber;
        }
        if (req.body.birthDate) {
            onestudent.birthDate = req.body.birthDate;
        }
        if (req.body.gender) {
            onestudent.gender = req.body.gender;
        }
        if (req.body.email) {
            onestudent.email = req.body.email;
        }
        if (req.body.password) {
            onestudent.password = req.body.password;
        }
        if (req.body.profilePhoto) {
            onestudent.profilePhoto = req.body.profilePhoto;
        }

        await onestudent.save();
        res.status(200).send(onestudent);
    } catch (error) {
        res.status(400).send(error);
    }
};


const deleteStudent = async (req, res) => {
    try {
        const onestudent = await student.deleteOne({ _id: req.params.id });
        res.status(200).send(onestudent);
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