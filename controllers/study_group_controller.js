const { Study_group} = require('../models/study_group');

const getAllstudyGroups = async (req, res) => {
    try {
        const allstudyGroups = await Study_group.find({});
        res.status(200).send(allstudyGroups);
    } catch (error) {
        res.status(400).send(error);
    }
};

const getstudyGroupsById = async (req, res) => {
    try {
        
        const StudyGroup = await Study_group.findOne({ _id: req.params.id });
        res.status(200).send(StudyGroup);
    } catch (error) {
        res.status(400).send(error);
    }
};

const addstudyGroup = async (req, res) => {
    try {
        const StudyGroup = await Study_group.create(req.body);
        res.status(201).send(StudyGroup);
    } catch (error) {
        res.status(400).send(error);
    }
};

const editstudyGroup = async (req, res) => {
    const userId = req.params.id;
    try {
        const StudyGroup = await Study_group.findOne({ _id: userId });
        if (!StudyGroup) {
            return res.status(404).send("Study Group not found");
        }
        if (req.body.cohortname) {
            StudyGroup.cohortname = req.body.cohortname;
        }
        if (req.body.cohortnumber) {
            StudyGroup.cohortnumber = req.body.cohortnumber;
        }
        if (req.body.groupid) {
            StudyGroup.groupid = req.body.groupid;
        }
        await StudyGroup.save();
        res.status(200).send(StudyGroup);
    } catch (error) {
        res.status(400).send(error);
    }
};

const deletestudyGroupbyID = async (req, res) => {
    try {
        const StudyGroup = await Study_group.deleteOne({ _id: req.params.id });
        res.status(200).send(StudyGroup);
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    getAllstudyGroups,
    getstudyGroupsById,
    addstudyGroup,
    editstudyGroup,
    deletestudyGroupbyID,
};
