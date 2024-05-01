const joi = require('joi');
const { studyGroups } = require('../models/studyGroup');
const { validateStudyGroup } = require('../helpers/validation');

const getAllstudyGroups = async (req,res) => {
    try{
        const allstudyGroups = await studyGroups.find({});
        res.status(200).send(allstudyGroups);
    }catch (error) {
        res.status(400).send(error);
    }
};

const getstudyGroupsByID =  async (req,res) => {
    try{
        const studyGroups = await studyGroups.find({_id: req.params.id});
        res.status(200).send(allstudyGroups);
    }catch (error) {
        res.status(400).send(error);
    }
};

const addstudyGroup = async (req,res) => {

    try {
        const studyGroups = await studyGroups.create(req.body);
        res.status(201).send(course);
    } catch (error) {
        res.status(400).send(error);
    }
};

const editstudyGroupByID = async (req,res) => {
    try{
        const studyGroups = await studyGroups.find({_id: req.params.id});
        if (!studyGroups) {
            return res.status(404).send("studyGroup not found");
        }

        // Update existing fields
        if (req.body.groupid) {
            course.groupid = req.body.groupid;
        }
        if (req.body.name) {
            course.name = req.body.name;
        }
        if (req.body.number) {
            course.number = req.body.number;
        }
        await studyGroups.save();
        res.status(200).send(course);

    }catch (error) {
        res.status(400).send(error);
    }
};

const deletestudyGroupByID = async (req,res) => {
    try {
        const studyGroups = await studyGroups.deleteOne({ _id: req.params.id });
        res.status(200).send(studyGroups);
    } catch (error) {
        res.status(400).send(error);
    }
};


module.exports = {
    getAllstudyGroups,
    getstudyGroupsByID,
    addstudyGroup,
    editstudyGroupByID,
    deletestudyGroupByID,
};const joi = require('joi');
const { studyGroups } = require('../models/studyGroup');
const { validateStudyGroup } = require('../helpers/validation');

const getAllstudyGroups = async (req,res) => {
    try{
        const allstudyGroups = await studyGroups.find({});
        res.status(200).send(allstudyGroups);
    }catch (error) {
        res.status(400).send(error);
    }
};

const getstudyGroupsByID =  async (req,res) => {
    try{
        const studyGroups = await studyGroups.find({_id: req.params.id});
        res.status(200).send(allstudyGroups);
    }catch (error) {
        res.status(400).send(error);
    }
};

const addstudyGroup = async (req,res) => {

    try {
        const studyGroups = await studyGroups.create(req.body);
        res.status(201).send(course);
    } catch (error) {
        res.status(400).send(error);
    }
};

const editstudyGroupByID = async (req,res) => {
    try{
        const studyGroups = await studyGroups.find({_id: req.params.id});
        if (!studyGroups) {
            return res.status(404).send("studyGroup not found");
        }

        // Update existing fields
        if (req.body.groupid) {
            course.groupid = req.body.groupid;
        }
        if (req.body.name) {
            course.name = req.body.name;
        }
        if (req.body.number) {
            course.number = req.body.number;
        }
        await studyGroups.save();
        res.status(200).send(course);

    }catch (error) {
        res.status(400).send(error);
    }
};

const deletestudyGroupByID = async (req,res) => {
    try {
        const studyGroups = await studyGroups.deleteOne({ _id: req.params.id });
        res.status(200).send(studyGroups);
    } catch (error) {
        res.status(400).send(error);
    }
};


module.exports = {
    getAllstudyGroups,
    getstudyGroupsByID,
    addstudyGroup,
    editstudyGroupByID,
    deletestudyGroupByID,
};
